import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LINKTREE_URL } from '../utils';

export const RegressionTherapy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4 block">Specialized Modality</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">What is Regression Therapy?</h1>
          <p className="text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto">
            A therapeutic process that uses hypnosis or deep relaxation to recover memories of past events to resolve current emotional challenges.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-24">
          <section>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">How Regression Therapy Works</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-brand-muted leading-relaxed">
                <p>
                  Regression therapy works on the principle that many of our current emotional blocks, fears, and relationship patterns are rooted in past experiences that haven't been fully processed.
                </p>
                <p>
                  By entering a relaxed, meditative state, we bypass the critical conscious mind and access the subconscious storehouse of memories. This allows us to revisit the "originating event" of a particular issue and reframe it with the wisdom of your adult self.
                </p>
              </div>
              <div className="glass p-8 rounded-[32px]">
                <img
                  src="https://picsum.photos/seed/regression/600/400"
                  alt="Regression Therapy Concept"
                  className="rounded-2xl mb-6 w-full object-cover h-48"
                  referrerPolicy="no-referrer"
                />
                <p className="text-sm italic text-brand-muted">"The subconscious mind stores every experience we've ever had, waiting for the right moment to be healed."</p>
              </div>
            </div>
          </section>

          <section className="bg-brand-primary -mx-6 px-6 py-20 rounded-[64px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">What Issues Can It Help With?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Chronic Anxiety & Unexplained Fears",
                  "Deep-seated Emotional Blocks",
                  "Unresolved Childhood Trauma",
                  "Repeating Relationship Patterns",
                  "Self-worth & Confidence Issues",
                  "Phobias with No Known Origin"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 glass rounded-2xl">
                    <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif mb-8">Benefits of Regression Therapy</h2>
                <ul className="space-y-4">
                  {[
                    "Profound emotional release and catharsis",
                    "Clarity on the root cause of current issues",
                    "Integration of fragmented parts of the self",
                    "Greater self-compassion and understanding",
                    "Lasting behavioral and emotional change"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-8">Who Can Benefit?</h2>
                <p className="text-brand-muted leading-relaxed mb-6">
                  Regression therapy is ideal for individuals who feel "stuck" despite traditional therapy, or those who have recurring patterns they can't seem to break through logic alone.
                </p>
                <p className="text-brand-muted leading-relaxed">
                  If you are open to exploring the deeper layers of your psyche and are ready for significant emotional transformation, this modality can be life-changing.
                </p>
              </div>
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
