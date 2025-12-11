import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Users, TrendingUp, Sparkles, Clock, Calendar, Shuffle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ComingSoonDialog } from '../components/ComingSoonDialog';

export function Reconnect() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const features = [
    {
      icon: Shuffle,
      title: 'Crossed Paths',
      description: 'Connect with people you\'ve encountered in real life. See who crossed your path and send connection requests later.',
    },
    {
      icon: MessageCircle,
      title: 'Smart Follow-Ups',
      description: 'Get AI-powered reminders to stay in touch with your connections and nurture relationships that matter.',
    },
    {
      icon: Heart,
      title: 'Connection Quality',
      description: 'Track interaction history and connection strength. See who you\'re closest with and who needs attention.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Insights',
      description: 'Visualize your network growth over time and discover patterns in your connection-building.',
    },
    {
      icon: Clock,
      title: 'Activity Timeline',
      description: 'View your complete history of connections, interactions, and shared experiences across all events.',
    },
    {
      icon: Sparkles,
      title: 'Reconnection Suggestions',
      description: 'AI suggests the perfect time to reconnect based on mutual interests and upcoming events.',
    },
  ];

  const benefits = [
    {
      title: 'Never Lose Touch',
      description: 'Automatic reminders help you maintain relationships that matter most.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYzMTM1ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Build Meaningful Networks',
      description: 'Quality over quantity. Focus on connections that truly align with your goals.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NjMwODg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Track Your Growth',
      description: 'See how your network evolves and celebrate milestones in your journey.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZW5qb3lpbmclMjBldmVudHxlbnwxfHx8fDE3NjMxMzU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0221] pt-24 pb-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="bg-[#e91e8c]/20 text-[#e91e8c] border-0 mb-6">
            Connection Management
          </Badge>
          <h1 className="mb-6 text-white">
            Stay Connected with
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              {' '}People Who Matter
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            TAPPD helps you nurture and maintain meaningful relationships over time. 
            Our intelligent system ensures you never lose touch with important connections.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Build Relationships That{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Last
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group h-full">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Crossed Paths Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-32"
        >
          <Card className="bg-gradient-to-br from-[#e91e8c]/10 to-[#c81e87]/10 border-[#e91e8c]/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex items-center justify-center order-2 md:order-1">
                <div className="relative w-full aspect-square max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-3xl opacity-20 rounded-full"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjcm93ZCUyMHN0cmVldHxlbnwxfHx8fDE3MzM5Mzk0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Crossed Paths"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mb-6">
                  <Shuffle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white mb-4">
                  Never Miss a{' '}
                  <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                    Connection
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-6">
                  Crossed Paths lets you connect with people you've encountered in real life. See someone interesting on the street but too busy to stop? TAPPD has you covered.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Automatic Detection</span> - See when other TAPPD users cross your path
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageCircle className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Send Connection Requests</span> - Reach out to people you've crossed paths with
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Perfect for Missed Moments</span> - Connect with people even when you're both busy
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white/70 text-sm italic">
                    "Saw someone interesting walking down the street but couldn't stop? Just open TAPPD later, check your Crossed Paths, and send them a connection request. It's that simple."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Powerful Tools for{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Connection Management
              </span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Everything you need to build and maintain a thriving network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              How TAPPD Helps You{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Reconnect
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Automatic Organization',
                description: 'Every connection is automatically organized by event, date, and interaction history. No manual work required.',
              },
              {
                step: '02',
                title: 'Smart Reminders',
                description: 'AI analyzes your relationships and suggests the perfect time to reach out and reconnect.',
              },
              {
                step: '03',
                title: 'Meaningful Engagement',
                description: 'Get conversation starters and context about shared experiences to make every interaction count.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-6xl bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent mb-4 opacity-20">
                    {item.step}
                  </div>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 -mt-8">
                    <h3 className="text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-32"
        >
          <Card className="bg-gradient-to-br from-[#e91e8c] to-[#c81e87] border-0 p-12">
            <div className="text-center mb-8">
              <h2 className="text-white mb-4">The Power of Staying Connected</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our users report stronger relationships and better networking outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: '87%', label: 'Stay in touch longer' },
                { value: '3x', label: 'More meaningful interactions' },
                { value: '65%', label: 'Network growth rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-center">
            <h2 className="text-white mb-6">
              Start Building Better{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Relationships
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join TAPPD and experience the power of intelligent connection management. 
              Never lose touch with people who matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowComingSoon(true)}
                className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 px-8 py-6"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => window.open('https://tappdapp.figma.site', '_blank')}
                className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 backdrop-blur-sm border border-white/30"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  );
}