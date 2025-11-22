import { marked } from 'marked';

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  videoUrl?: string;
  showInteractiveDiagram?: boolean;
}

export interface Post extends PostFrontmatter {
  content: string;
  html: string;
  readTime: number;
}

// Calculate read time (assuming 200 words per minute)
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Simple frontmatter parser (browser-compatible)
function parseFrontmatter(markdown: string): { data: PostFrontmatter; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid frontmatter format');
  }

  const [, frontmatterText, content] = match;
  const data: any = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterText.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse arrays (tags)
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''));
    } else if (value === 'true' || value === 'false') {
      // Parse booleans
      data[key] = value === 'true';
    } else {
      data[key] = value;
    }
  }

  return { data: data as PostFrontmatter, content };
}

// Parse a single markdown file
export async function parseMarkdown(markdownContent: string): Promise<Post> {
  const { data, content } = parseFrontmatter(markdownContent);
  const html = await marked(content);
  const readTime = calculateReadTime(content);

  return {
    ...data,
    content,
    html: typeof html === 'string' ? html : '',
    readTime,
  };
}

// Get all posts (dynamically from manifest)
export async function getAllPosts(): Promise<Post[]> {
  try {
    // Fetch the manifest file that lists all available posts
    const manifestResponse = await fetch('/content/insights/posts-manifest.json');

    let slugs: string[];

    if (manifestResponse.ok) {
      const manifest = await manifestResponse.json();
      slugs = manifest.slugs || [];
    } else {
      // Fallback to original hardcoded list if manifest doesn't exist yet
      slugs = [
        'grid-not-built-for-ai',
        'where-energy-storage-fails-today',
        'why-kinetic-storage-belongs-in-the-stack',
        'five-ai-power-spikes',
        'why-we-are-building-our-own-inverter',
        'where-electrical-phases-come-from',
        'where-line-voltage-comes-from',
      ];
    }

    const posts: Post[] = [];

    for (const slug of slugs) {
      try {
        const response = await fetch(`/content/insights/${slug}.md`);
      if (!response.ok) {
        console.error(`Failed to fetch ${slug}: ${response.status} ${response.statusText}`);
        continue;
      }
      const markdown = await response.text();
      const post = await parseMarkdown(markdown);
      posts.push(post);
    } catch (error) {
      console.error(`Error loading post ${slug}:`, error);
    }
  }

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading posts manifest:', error);
    // Return empty array if manifest loading fails completely
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`/content/insights/${slug}.md`);
    if (!response.ok) {
      console.error(`Failed to fetch ${slug}: ${response.status} ${response.statusText}`);
      return null;
    }
    const markdown = await response.text();
    return await parseMarkdown(markdown);
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Get all unique tags from all posts
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
