# Insights Content Platform

A technical content platform for On The Fly Energy, designed to demonstrate deep technical understanding and attract engineers and investors.

## Overview

The Insights platform is a credibility engine built to:

- Demonstrate expertise in grid physics, AI load volatility, and kinetic energy storage
- Attract high-caliber engineers interested in hard-tech problems
- Build investor confidence through technical depth and systems thinking
- Provide educational content on power systems fundamentals

## Architecture

### Routes

- **`/insights`** - Landing page with content grid and tag filtering
- **`/insights/:slug`** - Individual post pages with markdown rendering

### Content System

Content is stored as Markdown files in `/public/content/insights/` with YAML frontmatter:

```markdown
---
title: "Post Title"
date: "2025-11-01"
summary: "Brief description"
tags: ["tag1", "tag2"]
thumbnail: "/images/insights/thumbnail.jpg"
slug: "url-slug"
videoUrl: "https://youtube.com/embed/..." (optional)
---

Post content in markdown...
```

### Key Components

1. **InsightsPage** (`src/pages/InsightsPage.tsx`)
   - Grid layout of post cards
   - Tag-based filtering
   - Responsive design
   - Read time calculation

2. **InsightPostPage** (`src/pages/InsightPostPage.tsx`)
   - Markdown content rendering with syntax highlighting
   - Video embed support
   - Prose styling optimized for technical content
   - CTA footer for recruitment

3. **VoltageConfigDiagram** (`src/components/VoltageConfigDiagram.tsx`)
   - Interactive SVG diagram for electrical configurations
   - Toggle between 6 transformer configurations
   - Click nodes to calculate voltage between points
   - Educational visualization for "Where Line Voltage Comes From" post

4. **Markdown Parser** (`src/utils/markdownParser.ts`)
   - Frontmatter parsing with gray-matter
   - Markdown to HTML with marked.js
   - Read time calculation
   - Post loading and sorting utilities

## Initial Content (7 Posts)

1. **The Grid Is Not Built for AI** - How AI workloads expose grid infrastructure limitations
2. **Where Energy Storage Fails Today** - Physics and economics of lithium batteries under volatility
3. **Why Kinetic Storage Belongs in the Stack** - The 0-5 minute time domain and flywheels
4. **The Five Power Spikes AI Data Centers Create** - Load behavior patterns from AI compute
5. **Why We're Building Our Own Inverter** - Power electronics as the system nervous system
6. **Where Electrical Phases Actually Come From** - Three-phase geometry and phase balance
7. **Where Line Voltage Actually Comes From** - Transformer configurations and voltage calculations (with interactive diagram)

## Adding New Posts

1. Create a markdown file in `/public/content/insights/[slug].md`
2. Add frontmatter with required fields
3. Add the slug to the array in `src/utils/markdownParser.ts` (line 25)
4. Build and deploy

## Styling

The platform uses the existing brand palette:
- Midnight black background (#0D0D0D)
- Energy green accents (#27AE60)
- Steel blue highlights (#2C3E50)
- Industrial white text (#F5F5F5)

Typography follows the site standard:
- Montserrat for headings
- Open Sans for body text
- Prose styling with enhanced contrast for readability

## Features

- **Tag Filtering**: Click tags to filter posts by topic
- **Responsive Design**: Mobile-first approach, works on all devices
- **Read Time**: Automatic calculation based on word count
- **Video Embeds**: YouTube/Vimeo support via videoUrl frontmatter
- **Interactive Diagrams**: Custom SVG components for technical education
- **SEO Ready**: Proper meta tags, semantic HTML, clean URLs

## Dependencies Added

- `gray-matter` (^4.0.3) - YAML frontmatter parsing
- `marked` (^12.0.0) - Markdown to HTML conversion

## Performance

- Lazy loading of markdown content
- Static generation ready (can be pre-rendered)
- Optimized images (with fallback handling)
- Minimal JavaScript bundle impact (~8KB gzipped for Insights features)

## Future Enhancements

Consider adding:
- Search functionality
- Related posts suggestions
- RSS feed generation
- Social sharing meta tags
- Comment system integration
- Dark/light mode toggle (currently dark only)
