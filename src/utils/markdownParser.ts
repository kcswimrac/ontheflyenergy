import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  videoUrl?: string;
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

// Parse a single markdown file
export async function parseMarkdown(markdownContent: string): Promise<Post> {
  const { data, content } = matter(markdownContent);
  const html = await marked(content);
  const readTime = calculateReadTime(content);

  return {
    ...(data as PostFrontmatter),
    content,
    html: typeof html === 'string' ? html : '',
    readTime,
  };
}

// Get all posts (this will be populated dynamically)
export async function getAllPosts(): Promise<Post[]> {
  // In a real implementation, this would dynamically import all markdown files
  // For now, we'll use a static list that matches our content files
  const slugs = [
    'grid-not-built-for-ai',
    'where-energy-storage-fails-today',
    'why-kinetic-storage-belongs-in-the-stack',
    'five-ai-power-spikes',
    'why-we-are-building-our-own-inverter',
    'where-electrical-phases-come-from',
    'where-line-voltage-comes-from',
  ];

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
