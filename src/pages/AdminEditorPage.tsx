import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Save, Upload, LogOut, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { savePost, uploadImage } from '../utils/githubApi';
import { getPostBySlug } from '../utils/markdownParser';

const AdminEditorPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editSlug = searchParams.get('edit');

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Load existing post if editing
    if (editSlug) {
      setLoading(true);
      getPostBySlug(editSlug).then((post) => {
        if (post) {
          setTitle(post.title);
          setSlug(post.slug);
          setDate(post.date);
          setSummary(post.summary);
          setTags(post.tags.join(', '));
          setThumbnail(post.thumbnail);
          setVideoUrl(post.videoUrl || '');
          setContent(post.content);
        } else {
          setMessage({ type: 'error', text: 'Post not found' });
        }
        setLoading(false);
      });
    }
  }, [editSlug]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!slug) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Content = (reader.result as string).split(',')[1];
        const timestamp = Date.now();
        const fileName = `${timestamp}-${file.name}`;

        const imagePath = await uploadImage({
          fileName,
          base64Content,
          commitMessage: `Add image: ${fileName}`,
        });

        if (imagePath) {
          setThumbnail(imagePath);
          setMessage({ type: 'success', text: 'Image uploaded successfully!' });
        } else {
          setMessage({ type: 'error', text: 'Failed to upload image' });
        }
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage({ type: 'error', text: 'Error uploading image' });
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!title || !slug || !summary || !content) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    setSaving(true);
    setMessage(null);

    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const frontmatter = `---
title: "${title}"
date: "${date}"
summary: "${summary}"
tags: [${tagsArray.map(tag => `"${tag}"`).join(', ')}]
thumbnail: "${thumbnail}"
slug: "${slug}"${videoUrl ? `\nvideoUrl: "${videoUrl}"` : ''}
---

`;

    const fullContent = frontmatter + content;

    const success = await savePost({
      slug,
      content: fullContent,
      commitMessage: `Add/Update post: ${title}`,
    });

    if (success) {
      setMessage({ type: 'success', text: 'Post saved successfully!' });
      setTimeout(() => {
        navigate(`/insights/${slug}`);
      }, 2000);
    } else {
      setMessage({ type: 'error', text: 'Failed to save post. Check your GitHub token and permissions.' });
    }

    setSaving(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight-black flex items-center justify-center">
        <p className="font-open-sans text-xl text-gray-300">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Header */}
      <header className="bg-steel-blue/10 border-b border-energy-green/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/insights')}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-energy-green transition-colors font-montserrat"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Insights
              </button>
              <div className="h-6 w-px bg-energy-green/20"></div>
              <h1 className="font-montserrat font-semibold text-lg text-industrial-white">
                {editSlug ? 'Edit Post' : 'Create New Post'}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 px-6 py-3 bg-energy-green text-midnight-black font-montserrat font-semibold rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-5 w-5" />
                {saving ? 'Saving...' : 'Save Post'}
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors font-montserrat"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            message.type === 'success'
              ? 'bg-energy-green/10 border-energy-green/30 text-energy-green'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}>
            <p className="font-open-sans text-sm">{message.text}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Frontmatter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h2 className="font-montserrat font-bold text-xl text-industrial-white mb-6">
                Post Metadata
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors"
                    placeholder="Post title"
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    The main heading of your post. Auto-generates URL slug.
                  </p>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans font-mono text-sm focus:outline-none focus:border-energy-green transition-colors"
                    placeholder="post-url-slug"
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    URL-friendly identifier. Will appear as /insights/your-slug
                  </p>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors"
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    Publication date displayed on the post.
                  </p>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Summary *
                  </label>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors resize-none"
                    placeholder="Brief summary for card display"
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    Short description shown on the Insights landing page cards.
                  </p>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors"
                    placeholder="Grid, AI, Storage"
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    Separate tags with commas. Used for filtering posts.
                  </p>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Thumbnail Image
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                      className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans text-sm focus:outline-none focus:border-energy-green transition-colors"
                      placeholder="/images/insights/example.jpg"
                    />
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={uploading}
                      />
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-steel-blue/30 text-gray-300 border border-energy-green/20 rounded-lg hover:bg-steel-blue/50 transition-colors cursor-pointer font-montserrat text-sm disabled:opacity-50">
                        <ImageIcon className="h-4 w-4" />
                        {uploading ? 'Uploading...' : 'Upload Image'}
                      </span>
                    </label>
                    <p className="text-xs text-gray-400 font-open-sans">
                      Card header image. Upload file or paste path.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
                    Video URL (optional)
                  </label>
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full px-4 py-2 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans text-sm focus:outline-none focus:border-energy-green transition-colors"
                    placeholder="https://youtube.com/embed/..."
                  />
                  <p className="mt-1 text-xs text-gray-400 font-open-sans">
                    YouTube or Vimeo embed URL. Displays above post content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h2 className="font-montserrat font-bold text-xl text-industrial-white mb-6">
                Post Content (Markdown) *
              </h2>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-[600px] px-4 py-3 bg-midnight-black border border-energy-green/20 rounded-lg text-gray-100 font-roboto-mono text-sm focus:outline-none focus:border-energy-green transition-colors resize-none"
                placeholder="Write your markdown content here...

## Introduction

Your content goes here..."
              />
              <p className="mt-4 text-gray-400 text-sm font-open-sans">
                Supports standard Markdown syntax. Use ## for headings, **bold**, *italic*, lists, code blocks, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditorPage;
