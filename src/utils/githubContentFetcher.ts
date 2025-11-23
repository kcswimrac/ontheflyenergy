// Utility for fetching content from GitHub at runtime
// This allows posts to be updated without rebuilding the site

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com';

interface GitHubConfig {
  owner: string;
  repo: string;
  branch: string;
  token?: string;
}

function getGitHubConfig(): GitHubConfig {
  return {
    owner: import.meta.env.VITE_GITHUB_OWNER || 'kcswimrac',
    repo: import.meta.env.VITE_GITHUB_REPO || 'ontheflyenergy',
    branch: import.meta.env.VITE_GITHUB_BRANCH || 'main',
    token: import.meta.env.VITE_GITHUB_TOKEN,
  };
}

function getHeaders(config: GitHubConfig): HeadersInit {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  
  if (config.token) {
    headers['Authorization'] = `token ${config.token}`;
  }
  
  return headers;
}

/**
 * Fetch a markdown file from GitHub
 */
export async function fetchMarkdownFromGitHub(slug: string): Promise<string | null> {
  const config = getGitHubConfig();
  const path = `public/content/insights/${slug}.md`;
  
  try {
    // Use raw.githubusercontent.com for direct file access (faster, no rate limits for public repos)
    const url = `${GITHUB_RAW_BASE}/${config.owner}/${config.repo}/${config.branch}/${path}`;
    
    const response = await fetch(url, {
      headers: config.token ? { 'Authorization': `token ${config.token}` } : {},
      // Disable caching to always get fresh content
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${slug} from GitHub: ${response.status}`);
      return null;
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${slug} from GitHub:`, error);
    return null;
  }
}

/**
 * Fetch the posts manifest from GitHub
 */
export async function fetchManifestFromGitHub(): Promise<{ slugs: string[] } | null> {
  const config = getGitHubConfig();
  const path = 'public/content/insights/posts-manifest.json';
  
  try {
    const url = `${GITHUB_RAW_BASE}/${config.owner}/${config.repo}/${config.branch}/${path}`;
    
    const response = await fetch(url, {
      headers: config.token ? { 'Authorization': `token ${config.token}` } : {},
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch manifest from GitHub: ${response.status}`);
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching manifest from GitHub:', error);
    return null;
  }
}

/**
 * List all markdown files in the insights directory
 * Useful for auto-generating manifest
 */
export async function listInsightFiles(): Promise<string[]> {
  const config = getGitHubConfig();
  const path = 'public/content/insights';
  
  try {
    const url = `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`;
    
    const response = await fetch(url, {
      headers: getHeaders(config),
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error(`Failed to list files from GitHub: ${response.status}`);
      return [];
    }
    
    const files = await response.json();
    
    // Filter for .md files and extract slugs
    return files
      .filter((file: any) => file.name.endsWith('.md') && file.name !== 'posts-manifest.json')
      .map((file: any) => file.name.replace('.md', ''));
  } catch (error) {
    console.error('Error listing files from GitHub:', error);
    return [];
  }
}

/**
 * Check if GitHub mode is enabled
 */
export function isGitHubModeEnabled(): boolean {
  const mode = import.meta.env.VITE_CONTENT_MODE;
  return mode === 'github';
}
