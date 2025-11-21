# Admin Editor System

This document describes the admin authentication and content editor system for managing Insights posts.

## Overview

The admin system allows authenticated users to:
- Create and edit Insights blog posts from the web interface
- Upload images directly to the repository
- Save markdown content with frontmatter metadata
- Edit existing posts with one click from any post page

## Security

This system uses **server-side authentication** with Vercel serverless functions:
- Credentials stored server-side only (NOT exposed to browser)
- JWT tokens for session management (8-hour expiration)
- Secure API endpoints handle authentication
- No passwords in client-side JavaScript bundles

## Setup

### 1. Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Admin Login Credentials (Server-side only - SECURE)
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-secure-password
JWT_SECRET=your-very-long-random-secret-key-minimum-32-characters

# GitHub API Configuration (Client-side - needed for editor)
VITE_GITHUB_TOKEN=ghp_your_github_token
VITE_GITHUB_OWNER=your-github-username
VITE_GITHUB_REPO=ontheflyenergy
VITE_GITHUB_BRANCH=main
```

**Important Notes:**
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `JWT_SECRET` do NOT have `VITE_` prefix (server-side only)
- `VITE_GITHUB_*` variables are client-side accessible (needed for GitHub API calls from editor)
- Generate a strong JWT_SECRET: `openssl rand -base64 32`

### 2. GitHub Personal Access Token

To enable saving posts and uploading images, you need a GitHub Personal Access Token with the following permissions:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with these scopes:
   - `repo` (Full control of private repositories)
   - Specifically: `repo:status`, `repo_deployment`, `public_repo`
3. Copy the token and add it to your `.env` file as `VITE_GITHUB_TOKEN`

### 3. Vercel Environment Variables

In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add each variable from your `.env` file (all 6 variables)
3. Make sure they're available for Production, Preview, and Development environments
4. **Critical:** Variables without `VITE_` prefix are server-only (secure)

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Enter your username and password (from environment variables)
3. Click Login to access the editor

### Creating a New Post

1. After logging in, you'll be redirected to `/admin/editor`
2. Fill in the metadata fields (each field has a helpful description):
   - **Title**: Post title (will auto-generate slug)
   - **Slug**: URL-friendly identifier (e.g., `my-post-title`)
   - **Date**: Publication date
   - **Summary**: Brief description for card display
   - **Tags**: Comma-separated tags (e.g., `Grid, AI, Storage`)
   - **Thumbnail**: Image path or upload a new image
   - **Video URL**: Optional YouTube/Vimeo embed URL

3. Write your content in Markdown format in the large text area
4. Click "Save Post" to commit to the repository

### Editing an Existing Post

**Option 1: From the post page**
1. Navigate to any post on `/insights/:slug`
2. If you're logged in, you'll see an "Edit Post" button in the header
3. Click it to load the post in the editor

**Option 2: Direct URL**
1. Go to `/admin/editor?edit=post-slug`
2. The post will load automatically with all content pre-filled
3. Make your changes and click "Save Post"

### Uploading Images

1. In the Thumbnail Image section, click "Upload Image"
2. Select an image file (JPG, PNG, etc.)
3. The image will be uploaded to `/public/images/insights/` in the repo
4. The path will automatically populate in the thumbnail field

### Content Format

Posts are saved as Markdown files with YAML frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-11-21"
summary: "Brief description"
tags: ["Grid", "AI", "Storage"]
thumbnail: "/images/insights/example.jpg"
slug: "your-post-title"
videoUrl: "https://youtube.com/embed/..."
---

## Introduction

Your markdown content goes here...
```

## Architecture

### Components

- **`AuthContext.tsx`**: Authentication state management using sessionStorage
- **`AdminLoginPage.tsx`**: Login form with credential validation
- **`AdminEditorPage.tsx`**: Full-featured post editor interface
- **`githubApi.ts`**: Utilities for GitHub API operations

### Authentication Flow

1. User enters credentials on login page
2. Credentials validated against `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`
3. On success, `isAdminAuthenticated` flag set in sessionStorage
4. Editor page checks authentication status, redirects if not authenticated
5. Logout clears sessionStorage and redirects to login

### GitHub API Integration

The system uses the GitHub Contents API to:
- Create/update files in the repository
- Upload images to `/public/images/insights/`
- Save markdown posts to both `/content/insights/` and `/public/content/insights/`

All operations are committed directly to the specified branch (default: `main`).

## Security Considerations

1. **Environment Variables**: Never commit `.env` file to the repository
2. **GitHub Token**: Use a token with minimal required permissions
3. **Session Storage**: Authentication is session-based (clears on browser close)
4. **HTTPS**: Always use HTTPS in production to protect credentials
5. **Token Rotation**: Regularly rotate your GitHub token

## Troubleshooting

### "Failed to save post"
- Check that `VITE_GITHUB_TOKEN` is valid and has correct permissions
- Verify `VITE_GITHUB_OWNER` and `VITE_GITHUB_REPO` are correct
- Ensure the branch specified in `VITE_GITHUB_BRANCH` exists

### "Invalid credentials"
- Verify `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` in environment variables
- For Vercel, check environment variables are set for the correct deployment environment

### Images not uploading
- Check GitHub token has `repo` scope
- Verify `/public/images/insights/` directory exists in the repository
- Check browser console for specific error messages

## Future Enhancements

Potential improvements:
- Post preview before saving
- Edit existing posts (load from slug)
- Image gallery browser
- Multi-user support with different permission levels
- Markdown editor with live preview
- Auto-save drafts to localStorage
- Post scheduling for future publication
