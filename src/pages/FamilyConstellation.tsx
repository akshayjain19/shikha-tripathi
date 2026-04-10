import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, TreePine, ShieldCheck } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const FamilyConstellation: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4 block">Systemic Healing</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Family Constellation Therapy</h1>
          <p className="text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto">
            A powerful therapeutic method that uncovers hidden dynamics in a family system to resolve generational trauma and restore the flow of love.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-24">
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Understanding Generational Patterns</h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                We are all part of a larger family system. Sometimes, we unconsciously carry the burdens, traumas, or unresolved emotions of our ancestors. This is known as "systemic entanglement."
              </p>
              <p className="text-brand-muted leading-relaxed">
                Family Constellation therapy helps us identify these invisible loyalties and release them, allowing us to live our own lives rather than repeating the fates of those who came before us.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/family/800/800"
                  alt="Family System Concept"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 glass p-6 rounded-2xl shadow-xl">
                <TreePine className="text-brand-accent" size={32} />
              </div>
            </div>
          </section>

          <section className="bg-brand-secondary/10 -mx-6 px-6 py-20 rounded-[64px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <Users size={24} />, title: "The System", desc: "We look at the family as a whole system, not just the individual." },
                  { icon: <ShieldCheck size={24} />, title: "The Orders", desc: "We restore the 'Orders of Love'—the natural hierarchy and balance in a system." },
                  { icon: <ArrowRight size={24} />, title: "The Resolution", desc: "Through ritual and healing sentences, we find a new, healthy image for the system." }
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
            <h2 className="text-3xl font-serif mb-12 text-center">What Issues It Can Help With</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass p-10 rounded-[32px]">
                <h3 className="text-xl font-serif mb-6 text-brand-accent">Relational & Family</h3>
                <ul className="space-y-4 text-brand-muted">
                  <li>• Persistent family conflicts</li>
                  <li>• Difficulty in romantic relationships</li>
                  <li>• Parenting challenges and child behavior</li>
                  <li>• Divorce and blended family issues</li>
                </ul>
              </div>
              <div className="glass p-10 rounded-[32px]">
                <h3 className="text-xl font-serif mb-6 text-brand-accent">Personal & Emotional</h3>
                <ul className="space-y-4 text-brand-muted">
                  <li>• Repeating emotional patterns (e.g., sadness, anger)</li>
                  <li>• Unexplained physical symptoms or illness</li>
                  <li>• Feeling 'stuck' or unable to succeed</li>
                  <li>• Unresolved ancestral trauma</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-8">The Benefits</h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              The primary benefit of Family Constellation work is a profound sense of relief and "rightness." When we find our proper place in our family system, the energy that was tied up in entanglements is freed for our own life and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Restored Harmony', 'Emotional Freedom', 'Clarity', 'Systemic Peace'].map((tag, i) => (
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
              Connect With Me <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
