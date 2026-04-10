import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const SubconsciousPatternHealing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4 block">Subconscious Transformation</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Subconscious Pattern Healing</h1>
          <p className="text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto">
            Uncover and transform the hidden blueprints that shape your life. Move beyond recurring obstacles and align with your true potential.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-24">
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">What are Subconscious Patterns?</h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                Our subconscious mind stores every experience, belief, and emotional response we've ever had. These form "patterns" or "blueprints" that dictate 95% of our daily thoughts, behaviors, and life choices.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Often, these patterns were created in the past as survival mechanisms. While they once protected us, they may now manifest as recurring relationship issues, self-sabotage, or persistent emotional blocks.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://foreverconscious.com/wp-content/uploads/2014/09/breaking-the-negative-patterns-of-your-subconscious-mind-660x420.png"
                  alt="Breaking negative subconscious patterns"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl">
                <Brain className="text-brand-accent" size={32} />
              </div>
            </div>
          </section>

          <section className="bg-brand-secondary/10 -mx-6 px-6 py-20 rounded-[64px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">The Transformation Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <ShieldCheck size={24} />, title: "Awareness", desc: "Identifying the hidden beliefs and emotional triggers that drive your current challenges." },
                  { icon: <Zap size={24} />, title: "Reprogramming", desc: "Using specialized therapeutic techniques to update old narratives and emotional imprints." },
                  { icon: <Sparkles size={24} />, title: "Alignment", desc: "Integrating new, empowering patterns that support your growth and authentic self." }
                ].map((step, i) => (
                  <div key={i} className="text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto text-brand-accent">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-serif">{step.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-12 text-center">Signs of Limiting Subconscious Patterns</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Repeating the same relationship mistakes",
                "Feeling 'stuck' despite conscious effort",
                "Unexplained fears or phobias",
                "Self-sabotaging success or happiness",
                "Chronic stress or emotional overwhelm",
                "Difficulty making decisions",
                "Persistent feelings of unworthiness",
                "Physical symptoms with no clear medical cause"
              ].map((sign, i) => (
                <div key={i} className="flex items-center gap-4 p-5 glass rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-brand-text font-medium">{sign}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-8">Why Heal Your Subconscious?</h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              When you change your subconscious patterns, you change your life. By addressing the root cause rather than just the symptoms, you create lasting transformation that radiates through every area of your existence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Lasting Change', 'Emotional Freedom', 'Clarity', 'Inner Peace'].map((tag, i) => (
                <span key={i} className="px-6 py-2 rounded-full bg-brand-accent/5 text-brand-accent text-sm font-medium border border-brand-accent/10">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-12">
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-brand-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Book a Session <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
