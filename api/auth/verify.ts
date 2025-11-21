import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token required' });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      console.error('Missing JWT_SECRET environment variable');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Verify JWT token
    try {
      const decoded = jwt.verify(token, jwtSecret);
      return res.status(200).json({
        valid: true,
        user: decoded,
      });
    } catch (err) {
      return res.status(401).json({ valid: false, error: 'Invalid or expired token' });
    }
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
