import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (popupCount === 0) {
        setIsOpen(true);
        setPopupCount(1);
      }
    }, 10000); // 10 seconds delay as requested

    return () => clearTimeout(timer1);
  }, [popupCount]);

  useEffect(() => {
    if (popupCount === 1 && !isOpen) {
      const timer2 = setTimeout(() => {
        setIsOpen(true);
        setPopupCount(2);
      }, 30000); // Another 30 seconds
      return () => clearTimeout(timer2);
    }
  }, [isOpen, popupCount]);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass p-8 rounded-3xl shadow-2xl text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={20} className="text-brand-muted" />
            </button>
            <h3 className="text-2xl font-serif mb-4">A Moment to Pause</h3>
            <p className="text-brand-muted mb-4 leading-relaxed">
              If you’re ready to explore the deeper emotional patterns shaping your life, this space offers a structured and supportive process for meaningful inner work.
            </p>
            <p className="text-brand-muted mb-8 leading-relaxed">
              Through therapy and reflective guidance, we work together to understand the roots of recurring experiences and begin creating lasting change.
            </p>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-4 px-8 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20 mb-4"
            >
              Explore Working Together
            </a>
            <button 
              onClick={handleClose}
              className="text-xs text-brand-muted uppercase tracking-widest hover:text-brand-accent transition-colors"
            >
              Not ready yet? Continue exploring
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
