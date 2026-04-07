import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
  const instagramUrl = "https://www.instagram.com/shiksenergy/";

  useEffect(() => {
    const fetchPosts = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        // Get top 5 posts
        setPosts(data.data.slice(0, 5));
      } catch (err) {
        console.error('Instagram Feed Error:', err);
        setError('Could not load Instagram feed');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [accessToken]);

  if (!accessToken && !loading) {
    return (
      <section className="py-24 px-6 bg-brand-off-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6">
            <Instagram size={32} />
          </div>
          <h2 className="text-4xl font-serif mb-6">Follow My Journey</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-10">
            Stay connected and find daily inspiration, healing insights, and updates on my latest workshops and sessions.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
          >
            @shiksenergy <ExternalLink size={18} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-brand-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-brand-accent mb-4">
              <Instagram size={20} />
              <span className="text-xs font-semibold uppercase tracking-widest">Instagram Feed</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif">Latest from @shiksenergy</h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent font-medium hover:underline flex items-center gap-2"
          >
            View Profile <ExternalLink size={16} />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-square bg-brand-beige/20 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 glass rounded-3xl">
            <p className="text-brand-muted mb-4">{error}</p>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-medium">
              Visit Instagram directly
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || 'Instagram post'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
