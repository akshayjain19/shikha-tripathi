import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/shiksenergy/";

  return (
    <footer className="bg-brand-dark py-20 px-6 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tight text-white mb-6 block">
            Shikha Tripathi
          </Link>
          <p className="text-white/70 max-w-sm leading-relaxed mb-8">
            Guiding you through the depths of your subconscious to find healing, clarity, and your true self. Based in Pune, India.
          </p>
          <div className="flex gap-4">
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Me</Link></li>
            <li><Link to="/subconscious-pattern-healing" className="hover:text-brand-accent transition-colors">Subconscious Pattern Healing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>T: +91 9098269807</li>
            <li>E: shiksenergy@gmail.com</li>
            <li className="pt-4">
              <p className="font-semibold text-white mb-1 uppercase tracking-widest text-[10px]">Timing for online consult</p>
              <p>Mon-Sat : 11 am to 9 pm</p>
              <p>Sunday : For emergencies only</p>
            </li>
            <li className="pt-4"><a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-medium">Book a Session</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Shikha Tripathi. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
