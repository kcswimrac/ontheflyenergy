import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag as TagIcon, EyeOff, Edit, Settings } from 'lucide-react';
import { getAllPosts, getAllTags, Post } from '../utils/markdownParser';
import { useAuth } from '../contexts/AuthContext';

const InsightsPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const [postsData, tagsData] = await Promise.all([
        getAllPosts(isAuthenticated), // Show unpublished posts if authenticated
        getAllTags(),
      ]);
      setPosts(postsData);
      setAllTags(tagsData);
      setLoading(false);
    };
    loadContent();
  }, [isAuthenticated]);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-industrial-white leading-tight">
                Insights
              </h1>
            </div>
            {isAuthenticated && (
              <div className="flex gap-3">
                <Link
                  to="/admin/editor"
                  className="flex items-center gap-2 bg-energy-green/20 hover:bg-energy-green/30 border border-energy-green text-energy-green font-montserrat font-semibold px-4 py-2 rounded-lg transition-all"
                >
                  <Edit className="h-4 w-4" />
                  Edit Posts
                </Link>
                <Link
                  to="/admin/content"
                  className="flex items-center gap-2 bg-energy-green/20 hover:bg-energy-green/30 border border-energy-green text-energy-green font-montserrat font-semibold px-4 py-2 rounded-lg transition-all"
                >
                  <Settings className="h-4 w-4" />
                  Site Content
                </Link>
              </div>
            )}
          </div>
          <p className="font-open-sans text-xl md:text-2xl text-gray-100 max-w-4xl leading-relaxed">
            Technical deep dives on grid physics, power systems, and the energy storage architecture
            that AI and electrification demand. Written for engineers and investors who want to
            understand the system-level problems we're solving.
          </p>
          <div className="w-24 h-1 bg-energy-green mt-8"></div>
        </div>
      </section>

      {/* Tag Filter */}
      <section className="py-12 bg-midnight-black border-b border-steel-blue/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-3 items-center">
            <TagIcon className="h-5 w-5 text-energy-green" />
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg font-montserrat text-sm transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-energy-green text-midnight-black'
                  : 'bg-steel-blue/20 text-gray-300 hover:bg-steel-blue/30 border border-energy-green/20'
              }`}
            >
              All Posts
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg font-montserrat text-sm transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-energy-green text-midnight-black'
                    : 'bg-steel-blue/20 text-gray-300 hover:bg-steel-blue/30 border border-energy-green/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {loading ? (
            <div className="text-center py-20">
              <p className="font-open-sans text-xl text-gray-400">Loading insights...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-open-sans text-xl text-gray-400">
                No posts found for the selected tag.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link
                  key={post.slug}
                  to={`/insights/${post.slug}`}
                  className="group bg-steel-blue/20 border border-energy-green/20 rounded-lg overflow-hidden hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-steel-blue to-midnight-black overflow-hidden">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 to-transparent"></div>

                    {/* Draft badge - only visible to authenticated users */}
                    {isAuthenticated && post.published === false && (
                      <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-amber-500/90 border border-amber-400 rounded-lg">
                        <EyeOff className="h-4 w-4 text-midnight-black" />
                        <span className="font-montserrat text-xs font-bold text-midnight-black">DRAFT</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3 group-hover:text-energy-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-open-sans text-gray-100 text-sm leading-relaxed mb-4">
                      {post.summary}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                      <span className="font-open-sans">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-energy-green/10 border border-energy-green/30 rounded text-xs text-energy-green font-montserrat"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
