import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, TrendingUp, Sparkles, BarChart3, Zap, DollarSign, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SalesDialog } from '../components/SalesDialog';
import { ComingSoonDialog } from '../components/ComingSoonDialog';

export function Host() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);

  const hostingFeatures = [
    {
      icon: Calendar,
      title: 'Easy Event Creation',
      description: 'Create and manage events in minutes with our intuitive interface. From small gatherings to large conferences.',
    },
    {
      icon: Users,
      title: 'Smart Attendee Matching',
      description: 'Our AI helps attendees find and connect with the right people, increasing engagement and satisfaction.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track attendance, engagement, and connections in real-time. Make data-driven decisions for better events.',
    },
    {
      icon: Zap,
      title: 'Instant Check-In',
      description: 'Seamless check-in with QR codes, NFC, or TAPPD Bands. No more long lines or paper lists.',
    },
    {
      icon: DollarSign,
      title: 'Monetization Tools',
      description: 'Sell tickets, manage payments, and track revenue all in one place. Flexible pricing options included.',
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Foster lasting connections among attendees. Keep your community engaged before, during, and after events.',
    },
  ];

  const benefits = [
    {
      title: 'Grow Your Reach',
      description: 'Tap into TAPPD\'s network of engaged users actively seeking events like yours.',
      stat: '10x',
      label: 'More Visibility',
    },
    {
      title: 'Increase Engagement',
      description: 'AI-powered matching ensures attendees connect with the right people at your event.',
      stat: '87%',
      label: 'Connection Rate',
    },
    {
      title: 'Save Time',
      description: 'Automate check-ins, networking, and follow-ups. Focus on creating amazing experiences.',
      stat: '5hrs',
      label: 'Saved Per Event',
    },
    {
      title: 'Boost Revenue',
      description: 'Integrated payment processing and upsell opportunities increase your bottom line.',
      stat: '+40%',
      label: 'Revenue Increase',
    },
  ];

  const eventTypes = [
    {
      title: 'Professional Conferences',
      description: 'Tech summits, industry conferences, and business networking events',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25mZXJlbmNlJTIwdGVjaHxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Social Gatherings',
      description: 'Parties, mixers, and community events',
      image: 'https://images.unsplash.com/photo-1758272134331-c953bea718a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjBuaWdodCUyMGNpdHl8ZW58MXx8fHwxNzYwOTM5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Workshops & Classes',
      description: 'Educational sessions, training, and skill-building events',
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
            For Event Hosts
          </Badge>
          <h1 className="mb-6 text-white">
            Create Events That
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              {' '}Matter
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            TAPPD empowers event hosts with cutting-edge tools to create unforgettable experiences. 
            From AI-powered networking to seamless check-ins, we handle the details so you can focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 px-8 py-6">
              Start Hosting
            </Button>
            <Button 
              onClick={() => window.open('https://tappdapp.figma.site', '_blank')}
              className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 backdrop-blur-sm border border-white/30"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>

        {/* Why Host on TAPPD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Why Host on{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                TAPPD?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Join thousands of successful hosts who trust TAPPD to deliver exceptional event experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:bg-white/10 transition-all">
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#c81e87] mb-3">
                      <span className="text-white">{benefit.stat}</span>
                    </div>
                    <p className="text-xs text-[#e91e8c]">{benefit.label}</p>
                  </div>
                  <h3 className="text-white mb-2 text-center">{benefit.title}</h3>
                  <p className="text-white/60 text-sm text-center">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Every Host
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostingFeatures.map((feature, index) => {
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

        {/* Event Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Perfect for{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Any Event
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Whether you're hosting a small workshop or a large conference, TAPPD scales with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group h-full">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white mb-2">{type.title}</h3>
                    <p className="text-white/60 text-sm">{type.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Getting Started is{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Simple
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Event',
                description: 'Set up your event in minutes with our easy-to-use interface. Add details, photos, and customize your event page.',
              },
              {
                step: '02',
                title: 'Invite Attendees',
                description: 'Share your event with our engaged community or invite your own audience. We handle registrations and payments.',
              },
              {
                step: '03',
                title: 'Host & Connect',
                description: 'Watch as attendees connect, network, and engage. Our AI does the heavy lifting while you focus on hosting.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card className="bg-gradient-to-br from-[#e91e8c] to-[#c81e87] border-0 p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-white mb-4">Ready to Host Your First Event?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join the future of event hosting. Create meaningful connections, grow your community, 
                and build unforgettable experiences with TAPPD.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowComingSoon(true)}
                  className="bg-white text-[#e91e8c] hover:bg-white/90 px-8 py-6"
                >
                  Get Started Free
                </Button>
                <Button 
                  onClick={() => setSalesOpen(true)}
                  className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 backdrop-blur-sm border border-white/30"
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <SalesDialog open={salesOpen} onOpenChange={setSalesOpen} />
      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  );
}
