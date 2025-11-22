import type { VercelRequest, VercelResponse } from '@vercel/node';

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;
const GITHUB_OWNER = process.env.VITE_GITHUB_OWNER;
const GITHUB_REPO = process.env.VITE_GITHUB_REPO;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow GET requests only
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Slug parameter required' });
  }

  try {
    // Fetch the markdown file from GitHub
    const fileUrl = `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/content/insights/${slug}.md`;

    const response = await fetch(fileUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: 'Post not found' });
      }
      console.error('Failed to fetch post:', response.status);
      return res.status(500).json({ error: 'Failed to fetch post' });
    }

    const data = await response.json();
    const cleanContent = data.content.replace(/\n/g, '');
    const markdown = Buffer.from(cleanContent, 'base64').toString('utf-8');

    // Cache for 60 seconds
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

    return res.status(200).json({ markdown });
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
