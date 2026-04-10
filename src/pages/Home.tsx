import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Wind, User, ShieldAlert, Baby, Users, Instagram } from 'lucide-react';
import { InstagramFeed } from '../components/InstagramFeed';
import { LINKTREE_URL } from '../utils';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Family Constellations",
    description: "Family Constellations is a therapeutic method that helps bring awareness to the hidden dynamics within families and relationships. Often, emotional patterns, conflicts, or recurring challenges are connected to unresolved experiences within the wider family system. In a constellation process, participants may represent members of the client’s family, allowing underlying relational patterns to become visible. This experiential approach can offer powerful insights and help restore balance, understanding, and healing within family relationships.",
    icon: <Users className="text-brand-accent" size={24} />
  },
  {
    title: "Accident / Surgical Trauma Release",
    description: "After accidents or surgical procedures, the body may physically recover while subtle effects of the experience remain within the nervous system. People sometimes notice lingering symptoms such as unexplained body tension, headaches, muscle pain, or a sense of emotional shock. Accident and Surgical Trauma Release focuses on gently processing these stored stress responses so the body and mind can move toward a deeper sense of relaxation, safety, and recovery.",
    icon: <ShieldAlert className="text-brand-accent" size={24} />
  },
  {
    title: "Inner Child Work",
    description: "Inner Child Work focuses on healing the emotional wounds and unmet needs carried from earlier stages of life. Many of our adult behaviors, emotional reactions, and relationship patterns are shaped by childhood experiences. Through this process, individuals reconnect with the younger parts of themselves, allowing old experiences to be acknowledged and understood. By developing self-compassion and learning to meet these earlier needs in healthier ways, greater emotional freedom and self-trust can emerge.",
    icon: <Baby className="text-brand-accent" size={24} />
  },
  {
    title: "Regression Therapy",
    description: "Regression Therapy is a therapeutic approach that helps individuals explore earlier experiences stored within the subconscious mind. These experiences may include childhood events, significant life moments, or emotional memories that continue to influence present-day patterns. Through guided exploration in a safe and supportive environment, individuals can process these experiences, release unresolved emotions, and integrate parts of themselves that may have been disconnected over time.",
    icon: <Wind className="text-brand-accent" size={24} />
  },
  {
    title: "Psychological Counseling",
    description: "Counseling offers a supportive space to reflect on life experiences, emotional challenges, and personal growth. People seek counseling for many reasons — navigating life transitions, improving relationships, breaking recurring patterns, managing stress or anxiety, or simply gaining a deeper understanding of themselves. It is also a powerful tool for personal development, helping individuals build healthier habits, create meaningful change, and move toward a more balanced and fulfilling life.",
    icon: <User className="text-brand-accent" size={24} />
  },
  {
    title: "Trauma Counselling",
    description: "Trauma Counselling offers a supportive space to process overwhelming or distressing experiences that may continue to influence emotional well-being and daily life. Through trauma-informed therapeutic support, individuals can safely explore these experiences, understand their emotional impact, and gradually develop healthier ways of responding and coping. This process supports emotional healing, greater resilience, and a deeper sense of safety and balance.",
    icon: <ShieldAlert className="text-brand-accent" size={24} />
  },
  {
    title: "Metaphysical Diseases",
    description: "Certain physical conditions can sometimes be connected to deeper emotional or psychological patterns. Metaphysical exploration looks at the possible mind–body relationship behind physical symptoms and how unresolved experiences may influence overall well-being. These patterns may originate from present life experiences, family history, early childhood influences, or deeply held emotional responses. Understanding these connections can support a more holistic approach to healing.",
    icon: <Sparkles className="text-brand-accent" size={24} />
  },
  {
    title: "Ancestral Healing",
    description: "Emotional patterns and unresolved experiences can sometimes be carried across generations within families. These inherited influences may quietly shape beliefs, fears, or relational patterns without our conscious awareness. Ancestral healing focuses on recognizing and releasing these inherited burdens, allowing individuals to move forward with greater clarity, freedom, and connection to their own life path.",
    icon: <Users className="text-brand-accent" size={24} />
  },
  {
    title: "Birth & Prenatal Trauma",
    description: "Experiences during pregnancy and birth can leave subtle yet meaningful imprints on our emotional and psychological development. Even before birth, the environment within the womb and the circumstances surrounding birth may influence how we experience safety, belonging, and connection. Exploring these early layers of experience can bring awareness to deeply rooted emotional patterns and help restore a stronger sense of grounding and inner security.",
    icon: <Heart className="text-brand-accent" size={24} />
  }
];

const testimonials = [
  {
    name: "Ananya S.",
    text: "Shikha's regression therapy sessions helped me release a deep-seated anxiety I've carried for years. Her presence is incredibly calming and professional.",
    role: "Client"
  },
  {
    name: "Rahul M.",
    text: "The family constellation work was eye-opening. I finally understood the patterns in my relationships that weren't even mine to carry.",
    role: "Client"
  },
  {
    name: "Priya K.",
    text: "A truly holistic approach. Shikha combines psychological expertise with a spiritual depth that is rare to find. Highly recommended.",
    role: "Client"
  }
];

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-lavender/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-beige/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Mental Health services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-brand-text">
              True Alignment
            </h1>
            <div className="mb-10">
              <p className="text-xl md:text-2xl text-brand-text font-serif italic mb-4 leading-relaxed">
                “Within each of us lies our true free self with a deeper potential waiting to be understood, allowing us to move beyond old patterns and live with greater peace and authenticity.”
              </p>
              <p className="text-brand-muted font-medium">— Shikha Tripathi</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent/90 transition-all shadow-xl shadow-brand-accent/20 text-center"
              >
                Book Session
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img
                src="https://lh3.googleusercontent.com/d/1y9e6y17kHFh5v4ZwV9cEtwgFlOmIEV7U"
                alt="Shikha Tripathi - Therapist"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Focus - Understanding Your Patterns */}
      <section className="py-24 px-6 bg-brand-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/patterns/1000/1000"
                  alt="Understanding Your Patterns"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4 block">Specialized Focus</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Understanding Your Patterns</h2>
              <div className="text-brand-muted mb-8 space-y-4 leading-relaxed text-lg">
                <p>
                  Many of the struggles we experience in adulthood — anxiety, recurring relationship dynamics, self-doubt, or emotional overwhelm — often arise from emotional patterns formed earlier in life.
                </p>
                <p>
                  These patterns once served as ways of coping, protecting, or making sense of difficult experiences. Over time, however, they can quietly shape how we relate to ourselves, others, and the world around us.
                </p>
                <p>
                  Therapeutic work offers a space to gently bring these patterns into awareness so they can be understood, processed, and gradually transformed.
                </p>
              </div>
              <div className="space-y-6 mb-10">
                {[
                  { title: '1. Recognize the Roots', desc: 'Explore how early life experiences shaped the emotional responses and relational dynamics you carry today. Through deeper reflection, these connections become clearer and more compassionate.' },
                  { title: '2. Shift Limiting Narratives', desc: 'Identify the beliefs, expectations, and emotional responses that developed over time and begin creating healthier ways of relating to yourself and others.' },
                  { title: '3. Reconnect With Your Authentic Self', desc: 'As old patterns gradually loosen their hold, space opens for greater clarity, emotional freedom, and a more grounded way of living. This process allows you to reconnect with a more authentic and integrated sense of self.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/subconscious-pattern-healing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20"
              >
                Learn More About Pattern Healing <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Shikha Tripathi */}
      <section className="py-24 px-6 bg-brand-accent/10">
        <div className="max-w-7xl mx-auto glass rounded-[48px] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-4xl font-serif mb-2">Shikha Tripathi</h2>
              <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-8">Therapist and Mental health care provider</p>
              <div className="mb-10">
                <p className="text-xl text-brand-text font-serif italic mb-6 leading-relaxed">
                  “My work focuses on helping individuals understand and transform the deeper emotional patterns shaping their lives and relationships.”
                </p>
                <div className="mt-8">
                  <p className="font-serif text-2xl text-brand-text">Shikha Tripathi</p>
                  <p className="text-xs text-brand-muted uppercase tracking-widest mt-1">Signature</p>
                </div>
              </div>
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-text text-white rounded-full font-medium hover:bg-brand-text/90 transition-all w-fit"
              >
                Book a session <ArrowRight size={20} />
              </a>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0">
              <img
                src="https://lh3.googleusercontent.com/d/1WbdqeDiVqtBSmc3hmHxy1UgX8l6Pm2Ok"
                alt="Shikha Tripathi"
                className="lg:absolute lg:inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Certifications - Visual Breathing Space */}
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-serif text-brand-muted uppercase tracking-[0.2em] mb-12">My Certifications</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://www.ekaa.co.in/wp-content/uploads/2021/02/ekaa-logo-new.png" 
                alt="EKAA Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://www.tassointernational.com/wp-content/uploads/2023/02/Tasso-international-white-02-e1611132874704-512-166.png" 
                alt="Tasso International Logo" 
                className="h-12 w-auto object-contain brightness-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Therapies - Pathways Toward Deeper Healing */}
      <section className="py-24 px-6 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Your Pathways Toward Deeper Healing</h2>
            <p className="text-white/80 max-w-2xl mx-auto">A comprehensive range of therapeutic modalities designed to address the roots of your challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-6 text-white">{service.icon}</div>
                <h3 className="text-xl font-serif mb-4 text-white">{service.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Therapy Works */}
      <section className="py-24 px-6 bg-brand-off-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">How Therapy Works</h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              Therapy is a collaborative and reflective process designed to help you understand the deeper patterns shaping your emotional experiences, relationships, and life choices. Each person’s journey is unique, but the process generally unfolds through the following stages.
            </p>
          </div>
          
          <div className="space-y-12 mb-16">
            {[
              {
                title: "1. Understanding Your Present Experience",
                desc: "We begin by exploring the concerns or patterns that are currently affecting your life. This may include emotional triggers, recurring relationship dynamics, anxiety, self-doubt, or life transitions. The goal is to create a safe and supportive space where you can openly share your experiences and begin gaining clarity about what you are going through."
              },
              {
                title: "2. Identifying Deeper Patterns",
                desc: "Many present-day challenges are connected to deeper emotional patterns shaped by earlier life experiences, family dynamics, or unresolved memories. Through therapeutic dialogue and appropriate modalities, we gradually identify these patterns and begin understanding how they developed and continue to influence your responses today."
              },
              {
                title: "3. Processing and Releasing Emotional Imprints",
                desc: "Once these patterns become clearer, therapy focuses on gently processing the emotional memories and experiences connected to them. This may involve approaches such as inner child work, regression therapy, trauma processing, or family constellation work, depending on what is most supportive for your situation."
              },
              {
                title: "4. Integration and Personal Transformation",
                desc: "As deeper patterns are understood and emotional experiences are processed, individuals often begin to relate to themselves and others in new ways. This stage supports the integration of insights, helping you develop healthier responses, stronger self-awareness, and a more grounded sense of direction in life."
              }
            ].map((stage, i) => (
              <div key={i} className="glass p-8 rounded-3xl">
                <h3 className="text-2xl font-serif mb-4">{stage.title}</h3>
                <p className="text-brand-muted leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-serif italic text-brand-text mb-10">
              Therapy is not simply about solving problems — it is a process of understanding yourself more deeply and creating space for meaningful and lasting change towards a happier and better life.
            </p>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20"
            >
              Book Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - From my client */}
      <section className="py-24 px-6 bg-brand-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">From my client</h2>
            <div className="text-brand-accent flex justify-center gap-1 text-2xl">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-brand-off-white shadow-sm border border-brand-beige relative"
              >
                <p className="text-brand-text italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-serif text-lg">{t.name}</p>
                  <p className="text-xs text-brand-muted uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Client Reviews */}
      <section className="py-24 px-6 bg-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Offline Client Reviews</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto">Shared with permission from my offline consultations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "1mmHXDKZUMpOaxQwnD1vaxWF457bAsfJh",
              "1cXA8-MTXVOdv1fA400AfkyiMD_TkStBY",
              "15a4Il4XhhUQzvj0_Hv_Ma2DG-R5jXvsd",
              "1p-Ja55sXt-IWwtmDVwB3AHVw9ApE0qcT"
            ].map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${id}`}
                  alt={`Offline Review ${i + 1}`}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Closing Section - Your Journey Can Begin Here */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-brand-dark rounded-[64px] p-16 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 text-white">Your Journey Can Begin Here</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">When you feel ready to step toward a new way of living with greater clarity and emotional balance, new possibilities begin to unfold.</p>
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-brand-dark rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl relative z-10"
          >
            Book Session
          </a>
        </div>
      </section>
    </div>
  );
};
