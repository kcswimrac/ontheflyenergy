import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getPostBySlug, Post } from '../utils/markdownParser';
import VoltageConfigDiagram from '../components/VoltageConfigDiagram';

const InsightPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      setLoading(true);
      const postData = await getPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight-black flex items-center justify-center">
        <p className="font-open-sans text-xl text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-midnight-black flex items-center justify-center">
        <div className="text-center">
          <p className="font-open-sans text-xl text-gray-400 mb-6">Post not found</p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-energy-green hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Back Button */}
      <div className="bg-steel-blue/10 border-b border-steel-blue/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-energy-green transition-colors font-montserrat"
          >
            <ArrowLeft className="h-5 w-5" />
            All Insights
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-steel-blue/20 to-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-industrial-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-energy-green" />
              <span className="font-open-sans">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-energy-green" />
              <span className="font-open-sans">{post.readTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-energy-green/10 border border-energy-green/30 rounded-lg text-sm text-energy-green font-montserrat"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Embed (if present) */}
      {post.videoUrl && (
        <section className="py-12 bg-midnight-black">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative aspect-video bg-steel-blue/20 rounded-lg overflow-hidden">
              <iframe
                src={post.videoUrl}
                title={post.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Post Content */}
      <article className="py-12 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-industrial-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-energy-green
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:font-open-sans prose-p:text-gray-100 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:font-open-sans prose-ul:text-gray-100 prose-ul:my-6
              prose-li:my-2 prose-li:leading-relaxed prose-li:text-gray-100
              prose-strong:text-industrial-white prose-strong:font-semibold
              prose-code:text-energy-green prose-code:bg-steel-blue/30 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-steel-blue/30 prose-pre:border prose-pre:border-energy-green/20
              prose-a:text-energy-green prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-energy-green prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      {/* Interactive Voltage Diagram (only for the voltage post) */}
      {post.slug === 'where-line-voltage-comes-from' && (
        <section className="py-16 bg-steel-blue/10">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-8 text-center">
              Interactive Configuration Explorer
            </h2>
            <VoltageConfigDiagram />
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-t from-steel-blue/20 to-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-energy-green/10 border border-energy-green/30 rounded-lg p-8">
            <p className="font-open-sans text-lg text-gray-300 mb-6">
              Interested in working on these problems? We're building a team that cares about
              technical depth, systems thinking, and solving hard infrastructure challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="px-6 py-3 bg-energy-green text-midnight-black font-montserrat font-semibold rounded-lg hover:bg-green-500 transition-colors"
              >
                Join the Team
              </Link>
              <Link
                to="/investors"
                className="px-6 py-3 border-2 border-industrial-white text-industrial-white font-montserrat font-semibold rounded-lg hover:bg-industrial-white hover:text-midnight-black transition-colors"
              >
                For Investors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightPostPage;
