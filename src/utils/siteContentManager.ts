// Utility for managing editable site content
// Allows dynamic loading and saving of website content from JSON files

export interface SiteContentSection {
  id: string;
  label: string;
  file: string;
  description: string;
}

export const SITE_CONTENT_SECTIONS: SiteContentSection[] = [
  {
    id: 'home',
    label: 'Home Page',
    file: '/content/site/home.json',
    description: 'Hero section, vision, and statistics on the home page'
  },
  {
    id: 'about',
    label: 'About Page',
    file: '/content/site/about.json',
    description: 'Mission, values, founder bio, and American manufacturing section'
  }
];

/**
 * Load content for a specific section
 */
export async function loadSiteContent(sectionId: string): Promise<any> {
  const section = SITE_CONTENT_SECTIONS.find(s => s.id === sectionId);
  if (!section) {
    throw new Error(`Section ${sectionId} not found`);
  }

  try {
    const response = await fetch(section.file);
    if (!response.ok) {
      throw new Error(`Failed to load ${sectionId}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading site content for ${sectionId}:`, error);
    throw error;
  }
}

/**
 * Save content for a specific section
 * Note: This requires a backend endpoint to actually save files
 * For now, this prepares the data for download
 */
export function prepareSiteContentForSave(sectionId: string, content: any): { filename: string; content: string } {
  const section = SITE_CONTENT_SECTIONS.find(s => s.id === sectionId);
  if (!section) {
    throw new Error(`Section ${sectionId} not found`);
  }

  return {
    filename: section.file.split('/').pop() || `${sectionId}.json`,
    content: JSON.stringify(content, null, 2)
  };
}
