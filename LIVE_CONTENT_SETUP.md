# Live Content Updates (No Rebuild Required)

This guide explains how to enable live content updates for blog posts without requiring a Vercel rebuild.

## How It Works

The site can fetch blog posts directly from GitHub at runtime instead of from the static build. This means:

- ✅ Edit posts in the admin panel
- ✅ Changes save to GitHub
- ✅ Changes appear immediately on the site (no rebuild needed)
- ✅ No Vercel deploy required
- ✅ Works with draft/published toggle

## Setup Instructions

### 1. Configure Environment Variables in Vercel

Go to your Vercel project → Settings → Environment Variables and add:

```
VITE_CONTENT_MODE=github
VITE_GITHUB_OWNER=kcswimrac
VITE_GITHUB_REPO=ontheflyenergy
VITE_GITHUB_BRANCH=main
```

Optional (for private repos or higher rate limits):
```
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

### 2. Create GitHub Personal Access Token (Optional but Recommended)

For higher rate limits and private repo access:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token and add it to Vercel as `VITE_GITHUB_TOKEN`

> **Note**: Without a token, you're limited to 60 requests/hour per IP. With a token, you get 5,000 requests/hour.

### 3. Deploy to Vercel

After setting environment variables:

```bash
git add .
git commit -m "Enable live content updates"
git push
```

Vercel will automatically redeploy with the new configuration.

### 4. Verify It's Working

1. Log in to the admin panel
2. Edit a blog post
3. Save the changes (this pushes to GitHub)
4. Refresh the public site
5. Your changes should appear immediately!

## Development Mode

For local development, you might want to use static mode for faster builds:

Create a `.env.local` file:
```
VITE_CONTENT_MODE=static
```

This tells the site to use the local `/public/content/` files instead of fetching from GitHub.

## How Content is Fetched

### GitHub Mode (`VITE_CONTENT_MODE=github`)
- Fetches markdown files from `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/public/content/insights/{slug}.md`
- Fetches manifest from `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/public/content/insights/posts-manifest.json`
- Uses `cache: 'no-store'` to always get fresh content
- No build required for content updates

### Static Mode (`VITE_CONTENT_MODE=static` or not set)
- Fetches from `/content/insights/{slug}.md` (bundled with build)
- Faster initial load
- Requires rebuild for content changes
- Good for development

## Caching Behavior

GitHub mode disables caching (`cache: 'no-store'`) to ensure fresh content. This means:

- Every page load fetches the latest content
- Content changes are reflected immediately
- Slightly slower initial page load (negligible)
- No need to clear Vercel cache

## Rate Limits

### Without Token (Public Repos)
- 60 requests per hour per IP address
- Fine for most sites with moderate traffic

### With Token
- 5,000 requests per hour
- Recommended for production sites

## Troubleshooting

### Posts not updating?

1. Check environment variables are set in Vercel
2. Verify `VITE_CONTENT_MODE=github`
3. Check browser console for error messages
4. Ensure the post was saved to GitHub (check the repository)

### Getting rate limited?

1. Add a GitHub Personal Access Token (`VITE_GITHUB_TOKEN`)
2. This increases limit from 60/hour to 5,000/hour

### Content not loading at all?

1. Check if branch name is correct (`main` vs `master`)
2. Verify repository owner and name are correct
3. For private repos, ensure GitHub token has `repo` scope

## Benefits

- ✅ **Instant Updates**: Changes appear immediately without rebuilds
- ✅ **Faster Iteration**: Edit, save, refresh - no waiting for deploys
- ✅ **Cost Effective**: Fewer Vercel build minutes used
- ✅ **Better Workflow**: Content team can update posts without deploying
- ✅ **Draft Mode**: Still works with published/draft toggle

## Trade-offs

- ⚠️ **Network Dependency**: Relies on GitHub being available
- ⚠️ **Slightly Slower**: Fetching from GitHub adds ~100-200ms vs static files
- ⚠️ **Rate Limits**: Without token, limited to 60 requests/hour

For most use cases, the benefits far outweigh the trade-offs!
