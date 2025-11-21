// GitHub API utilities for saving posts and images

interface GitHubFileResponse {
  content: {
    sha: string;
  };
}

export interface SavePostParams {
  slug: string;
  content: string;
  commitMessage: string;
}

export interface UploadImageParams {
  fileName: string;
  base64Content: string;
  commitMessage: string;
}

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_OWNER = import.meta.env.VITE_GITHUB_OWNER;
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO;
const GITHUB_BRANCH = import.meta.env.VITE_GITHUB_BRANCH || 'main';

async function githubRequest(
  method: string,
  path: string,
  body?: any
): Promise<Response> {
  const url = `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;

  const headers: HeadersInit = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options);
}

async function getFileSha(path: string): Promise<string | null> {
  try {
    const response = await githubRequest('GET', path);
    if (response.ok) {
      const data = await response.json();
      return data.sha;
    }
    return null;
  } catch (error) {
    console.error('Error getting file SHA:', error);
    return null;
  }
}

export async function savePost({ slug, content, commitMessage }: SavePostParams): Promise<boolean> {
  try {
    const filePath = `public/content/insights/${slug}.md`;
    const sha = await getFileSha(filePath);

    const body = {
      message: commitMessage,
      content: btoa(unescape(encodeURIComponent(content))), // Base64 encode with UTF-8 support
      branch: GITHUB_BRANCH,
      ...(sha && { sha }), // Include SHA if updating existing file
    };

    const response = await githubRequest('PUT', filePath, body);

    if (response.ok) {
      // Also save to /content/insights/ directory
      const contentPath = `content/insights/${slug}.md`;
      const contentSha = await getFileSha(contentPath);

      const contentBody = {
        message: commitMessage,
        content: btoa(unescape(encodeURIComponent(content))),
        branch: GITHUB_BRANCH,
        ...(contentSha && { sha: contentSha }),
      };

      await githubRequest('PUT', contentPath, contentBody);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error saving post:', error);
    return false;
  }
}

export async function uploadImage({ fileName, base64Content, commitMessage }: UploadImageParams): Promise<string | null> {
  try {
    const filePath = `public/images/insights/${fileName}`;
    const sha = await getFileSha(filePath);

    const body = {
      message: commitMessage,
      content: base64Content,
      branch: GITHUB_BRANCH,
      ...(sha && { sha }),
    };

    const response = await githubRequest('PUT', filePath, body);

    if (response.ok) {
      return `/images/insights/${fileName}`;
    }

    return null;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}
