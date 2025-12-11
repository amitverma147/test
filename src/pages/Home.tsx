import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Calendar, Watch, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SignupDialog } from '../components/SignupDialog';

export function Home() {
  const [showSignup, setShowSignup] = useState(false); // Signup form with interests
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intent',
      description: 'Our intelligent engine understands your goals and connects you with the right people.',
    },
    {
      icon: Calendar,
      title: 'Curated Events',
      description: 'Discover events that align with your professional and personal aspirations.',
    },
    {
      icon: Watch,
      title: 'Wearable Integration',
      description: 'Seamlessly connect with TAPPD Band and other wearable devices.',
    },
  ];

  const stories = [
    {
      name: 'Akash',
      title: 'Founder & Entrepreneur',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25mZXJlbmNlJTIwdGVjaHxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Found his co-founder at a tech conference through TAPPD\'s intent matching.',
      journey: 'After attending 50+ networking events with minimal results, Akash discovered TAPPD. Within his first event using the platform, he connected with three potential co-founders who shared his vision for sustainable tech. Today, they\'re building together.',
    },
    {
      name: 'Atif',
      title: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Expanded his creative network and found collaborators for his next project.',
      journey: 'As a creative professional, Atif struggled to find meaningful collaborations in the digital noise. TAPPD helped him identify artists and designers at gallery openings who aligned with his aesthetic vision and work philosophy.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0221]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb25uZWN0aW5nJTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc2MDkzOTAzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="People connecting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0221]/50 via-[#0d0221]/80 to-[#0d0221]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-[#e91e8c]" />
              <span className="text-sm text-white/70">Next-Generation Connection Platform</span>
            </div>
            
            <h1 className="mb-6 text-white">
              Architecting Real-World
              <br />
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Human Connections
              </span>
            </h1>
            
            <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're not another app to scroll through. We're the silent force connecting 
              ambition, purpose, and serendipity in the real world.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 px-8 py-6 rounded-full"
              >
                Join The Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/20 text-[#e91e8c] hover:bg-white/10 px-8 py-6 rounded-full backdrop-blur-sm">
                Explore TAPPD
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-12 text-white">
              The Illusion of Connection
            </h2>
            
            <div className="space-y-8 text-lg text-white/60 leading-relaxed">
              <p>
                We live in the most "connected" era in human history, yet we've never felt more alone. 
                Our screens promise community but deliver isolation. Algorithms show us what we want to 
                see, not who we need to meet.
              </p>
              
              <p>
                The magic of serendipity — that unexpected encounter that changes everything — has been 
                engineered out of modern life. We scroll through profiles but never look up. We collect 
                contacts but never truly connect.
              </p>
              
              <p className="text-white">
                TAPPD was born from a simple truth: the most meaningful connections happen in person, 
                when intention meets opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0d0221] to-[#1a0a3e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-white">
              We're Building a
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                {' '}Phydigital World
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              TAPPD is an intelligent, ambient layer that integrates into your life — 
              engineering serendipity where it's been lost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/10 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mb-4 text-white">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intent Engine Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-white">The Intent Engine</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our AI understands what you're looking for and aligns you with people who share your goals.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Intent */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mb-4">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white">Intent</h3>
                <p className="text-white/60 text-center">Define your goals</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ArrowRight className="w-8 h-8 text-[#e91e8c] hidden md:block" />
                <div className="w-0.5 h-8 bg-[#e91e8c] md:hidden" />
              </motion.div>

              {/* Discovery */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#a91e87] to-[#8a1870] flex items-center justify-center mb-4">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white">Discovery</h3>
                <p className="text-white/60 text-center">AI finds matches</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <ArrowRight className="w-8 h-8 text-[#e91e8c] hidden md:block" />
                <div className="w-0.5 h-8 bg-[#e91e8c] md:hidden" />
              </motion.div>

              {/* Connection */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7a1870] to-[#5a1850] flex items-center justify-center mb-4">
                  <span className="text-5xl">🤝</span>
                </div>
                <h3 className="text-white">Connection</h3>
                <p className="text-white/60 text-center">Meet in real life</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0d0221] to-[#1a0a3e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-white">Real Stories, Real Connections</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how TAPPD is transforming the way people connect in the real world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-2 text-white">{story.name}</h3>
                    <p className="text-sm text-[#e91e8c] mb-4">{story.title}</p>
                    <p className="text-white/60 mb-6">{story.journey}</p>
                    <Button variant="ghost" className="text-[#e91e8c] hover:text-[#ff6b9d] hover:bg-white/5 p-0">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Data Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="mb-6 text-white">Built on Trust</h2>
            
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              We use data with precision and integrity — every connection is intentional, 
              every interaction opt-in. Your privacy isn't a feature, it's our foundation.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <Shield className="w-4 h-4 text-[#e91e8c]" />
              <span className="text-sm text-white/70">End-to-end encrypted connections</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent tracking-wider">
                TAPPD
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Engage</a>
              <a href="#" className="hover:text-white transition-colors">Explore</a>
              <a href="#" className="hover:text-white transition-colors">Host</a>
              <a href="#" className="hover:text-white transition-colors">Reconnect</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-white/30">
            <p>© 2025 TAPPD. Architecting real-world human connections.</p>
          </div>
        </div>
      </footer>

      <SignupDialog open={showSignup} onOpenChange={setShowSignup} />
    </div>
  );
}