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

  try {
    // Fetch the manifest from GitHub
    const manifestUrl = `${GITHUB_API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/content/insights/posts-manifest.json`;

    const response = await fetch(manifestUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch manifest:', response.status);
      return res.status(500).json({ error: 'Failed to fetch manifest' });
    }

    const data = await response.json();
    const cleanContent = data.content.replace(/\n/g, '');
    const decoded = Buffer.from(cleanContent, 'base64').toString('utf-8');
    const manifest = JSON.parse(decoded);

    // Cache for 30 seconds to avoid rate limiting
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

    return res.status(200).json(manifest);
  } catch (error) {
    console.error('Error fetching manifest:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
