import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export const FloatingCTA: React.FC = () => {
  return (
    <motion.a
      href={LINKTREE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/40 hover:bg-brand-accent/90 transition-colors"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};
