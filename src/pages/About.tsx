import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Shikha Tripathi</h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Psychologist | Psychotherapist | Clinical Hypnotherapist | Family Constellation Facilitator
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/d/1lz2VvaPxYK0M2GiLDpn9E-LGGOd0RFWm"
                alt="Shikha Tripathi Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-lavender rounded-full -z-10 blur-3xl opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif">My Journey into Healing</h2>
            <p className="text-brand-muted leading-relaxed text-lg">
              My path into therapy wasn't just a professional choice; it was a personal calling. Growing up, I was always fascinated by the human mind and the invisible threads that connect our past to our present.
            </p>
            <p className="text-brand-muted leading-relaxed text-lg">
              After completing my MA in Clinical Psychology, I realized that while traditional talk therapy is powerful, many of our deepest wounds reside in the subconscious and the energetic imprints of our lineage. This led me to specialize in Clinical Hypnotherapy and Family Constellation work.
            </p>
            <p className="text-brand-muted leading-relaxed text-lg">
              Today, my motivation is simple: to help others heal the root causes of their suffering so they can live a life of authenticity, joy, and emotional freedom.
            </p>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-32">
          <h2 className="text-4xl font-serif text-center mb-16">Professional Background</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Psychologist", desc: "MA in Clinical Psychology, providing a strong academic and clinical foundation for mental health support." },
              { title: "Clinical Hypnotherapist", desc: "Certified Integrated Clinical Hypnotherapy from EKAA, Mumbai, focusing on subconscious transformation." },
              { title: "Family Constellation Facilitator", desc: "Certified Family Constellation Facilitator, trained by UNBOUND with RA, resolving systemic patterns." },
              { title: "Psychotherapist", desc: "Expertise in various psychotherapeutic modalities to facilitate deep emotional and behavioral healing." }
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-[32px] hover:bg-brand-accent/5 transition-colors">
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mb-32 bg-brand-primary -mx-6 px-6 py-20 rounded-[64px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12">Credentials & Certifications</h2>
            <div className="space-y-6">
              {[
                { title: "MA in Clinical Psychology", institution: "Academic Foundation" },
                { title: "Certified Integrated Clinical Hypnotherapy", institution: "EKAA, Mumbai" },
                { title: "Certified Family Constellation Facilitator", institution: "Trained by UNBOUND with RA" },
                { title: "Internationally Certified Regression Therapist", institution: "Global Certification" }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-6 glass rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg">{cert.title}</h4>
                      <p className="text-xs text-brand-muted uppercase tracking-widest">{cert.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl font-serif mb-10">My Healing Philosophy</h2>
          <div className="space-y-12">
            <div className="glass p-12 rounded-[48px]">
              <h3 className="text-2xl font-serif mb-6 italic">"Healing is not just about fixing what is broken, but about remembering who you were before the world told you who to be."</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-3 text-brand-accent uppercase tracking-widest text-xs">Subconscious</h4>
                  <p className="text-sm text-brand-muted">We work with the 95% of the mind that drives our behaviors and emotions.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-brand-accent uppercase tracking-widest text-xs">Awareness</h4>
                  <p className="text-sm text-brand-muted">Bringing light to hidden patterns is the first step toward true liberation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-brand-accent uppercase tracking-widest text-xs">Generational</h4>
                  <p className="text-sm text-brand-muted">We heal not just for ourselves, but for those who came before and after us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-brand-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            Connect With Me <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
