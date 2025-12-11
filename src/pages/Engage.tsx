import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Users, Zap, Sparkles, Smartphone, QrCode, Watch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SalesDialog } from '../components/SalesDialog';
import { ComingSoonDialog } from '../components/ComingSoonDialog';

export function Engage() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const engagementFeatures = [
    {
      icon: MessageCircle,
      title: 'Real-Time Conversations',
      description: 'Connect instantly with people who share your interests. Our AI-powered matching ensures every conversation is meaningful.',
    },
    {
      icon: Users,
      title: 'Smart Matching',
      description: 'Find your perfect match at every event. Our algorithm analyzes interests, goals, and preferences to connect you with the right people.',
    },
    {
      icon: Sparkles,
      title: 'Event Social Feed',
      description: 'Share your experiences, discover what\'s happening, and engage with your community through our interactive social feed.',
    },
    {
      icon: Zap,
      title: 'Instant Connections',
      description: 'No more awkward introductions. Connect seamlessly through our tap-to-connect technology and start meaningful conversations.',
    },
  ];

  const connectMethods = [
    {
      icon: Smartphone,
      title: 'Phone to Phone',
      description: 'Simply tap your phones together using NFC technology for an instant connection',
      image: 'https://images.unsplash.com/photo-1734907607812-9f80d93cc51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHRhcCUyMG5mY3xlbnwxfHx8fDE3NjMxMzU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Watch,
      title: 'Phone to Band',
      description: 'Tap your phone to a TAPPD Band to instantly exchange contact information',
      image: 'https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzYzMDU0ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: QrCode,
      title: 'QR Code Scanning',
      description: 'Scan QR codes to connect quickly and securely with anyone at the event',
      image: 'https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FubmluZ3xlbnwxfHx8fDE3NjMxMzU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0221] pt-24 pb-32 md:pb-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="mb-6 text-white">
            Connect Beyond
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              {' '}The Surface
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            TAPPD transforms how people connect at events. Our phygital platform combines AI-powered matching, 
            wearable technology, and seamless connectivity to create meaningful relationships in the real world.
          </p>
        </motion.div>

        {/* How People Connect - Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-white text-center mb-12">
            Real Connections,{' '}
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              Real Experiences
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYzMTM1ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="People networking at event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2">Network Naturally</h3>
                <p className="text-white/60">
                  Meet like-minded individuals who share your passions and professional goals. Our AI analyzes your interests 
                  to suggest the most relevant connections at every event.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZW5qb3lpbmclMjBldmVudHxlbnwxfHx8fDE3NjMxMzU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Friends enjoying event together"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2">Share Experiences</h3>
                <p className="text-white/60">
                  Capture and share memorable moments with your connections. Our social feed keeps you engaged 
                  before, during, and after events, building lasting relationships.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NjMwODg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Conference networking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2">Build Your Network</h3>
                <p className="text-white/60">
                  Grow your professional and social circle effortlessly. Every connection is an opportunity 
                  to collaborate, learn, and create something amazing together.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-[#e91e8c] to-[#c81e87] group">
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white mb-3">AI-Powered Matching</h3>
                  <p className="text-white/90">
                    Our intelligent algorithm learns your preferences and suggests connections that matter. 
                    The more you use TAPPD, the better your matches become.
                  </p>
                </div>
                <Button className="bg-white text-[#e91e8c] hover:bg-white/90 self-start">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Tap to Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Tap to{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Connect instantly with anyone, anywhere. No apps to open, no usernames to exchange—just tap and you're connected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {connectMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm h-full group">
                    <div className="aspect-[4/3] overflow-hidden relative bg-gradient-to-br from-[#1a0b2e] to-[#0d0221] flex items-center justify-center">
                      {/* Animated Background */}
                      <div className="absolute inset-0">
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          animate={{
                            background: [
                              'radial-gradient(circle at 20% 50%, #e91e8c 0%, transparent 50%)',
                              'radial-gradient(circle at 80% 50%, #e91e8c 0%, transparent 50%)',
                              'radial-gradient(circle at 50% 80%, #e91e8c 0%, transparent 50%)',
                              'radial-gradient(circle at 50% 20%, #e91e8c 0%, transparent 50%)',
                              'radial-gradient(circle at 20% 50%, #e91e8c 0%, transparent 50%)',
                            ],
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>
                      
                      {/* Animated Icon */}
                      <motion.div
                        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: index === 0 ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>

                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute w-32 h-32 rounded-full border-2 border-[#e91e8c]"
                        animate={{
                          scale: [1, 2, 2],
                          opacity: [0.5, 0, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-white mb-2">{method.title}</h3>
                      <p className="text-white/60 text-sm">{method.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Engagement Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-32"
        >
          <Card className="bg-gradient-to-br from-[#e91e8c] to-[#c81e87] border-0 p-12 text-center">
            <h2 className="text-white mb-4">Ready to Start Connecting?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of people who are building meaningful connections through TAPPD. 
              Download the app and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowComingSoon(true)}
                className="bg-white text-[#e91e8c] hover:bg-white/90 px-8 py-6"
              >
                Download App
              </Button>
              <Button 
                onClick={() => window.open('https://tappdapp.figma.site', '_blank')}
                className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 backdrop-blur-sm border border-white/30"
              >
                View Demo
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
      
      <SalesDialog open={salesOpen} onOpenChange={setSalesOpen} />
      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  );
}
