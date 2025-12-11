import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Filter, TrendingUp, Heart, Sparkles, Search, Users, Star, Map } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';
import { ComingSoonDialog } from '../components/ComingSoonDialog';

export function Explore() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Discovery',
      description: 'Our intelligent algorithm learns your preferences and suggests events you\'ll love.',
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Find exactly what you\'re looking for with 10+ genres, 50+ categories, and customizable filters.',
    },
    {
      icon: TrendingUp,
      title: 'Trending Events',
      description: 'Stay ahead of the curve with real-time trending events in your area.',
    },
    {
      icon: Map,
      title: 'Map View',
      description: 'Visualize events happening around you in real-time. Discover what\'s nearby and explore new neighborhoods.',
    },
    {
      icon: Calendar,
      title: 'Calendar Integration',
      description: 'Sync events directly to your calendar and never miss what matters to you.',
    },
    {
      icon: Heart,
      title: 'Wishlist & Bookmarks',
      description: 'Save your favorite events and get notified when similar ones are happening.',
    },
  ];

  const eventCategories = [
    {
      title: 'Music & Concerts',
      image: 'https://images.unsplash.com/photo-1708743536025-ecfe7ffb75b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY29uY2VydCUyMGxpdmUlMjBtdXNpY3xlbnwxfHx8fDE3NjA4ODgwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '1,234 events',
    },
    {
      title: 'Tech & Business',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25mZXJlbmNlJTIwdGVjaHxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '892 events',
    },
    {
      title: 'Art & Creative',
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjA5MzkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '567 events',
    },
    {
      title: 'Social & Networking',
      image: 'https://images.unsplash.com/photo-1758272134331-c953bea718a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjBuaWdodCUyMGNpdHl8ZW58MXx8fHwxNzYwOTM5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '1,845 events',
    },
  ];

  const filterOptions = [
    { label: 'Music', count: '1.2k' },
    { label: 'Technology', count: '892' },
    { label: 'Art & Design', count: '567' },
    { label: 'Food & Drink', count: '1.1k' },
    { label: 'Sports', count: '432' },
    { label: 'Business', count: '789' },
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
          <h1 className="mb-6 text-white">
            Discover Events
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              {' '}That Matter
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            Find and attend events tailored to your interests. From music festivals to tech conferences, 
            TAPPD helps you discover experiences that align with your passions and goals.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                placeholder="Search for events, venues, or hosts..."
                className="pl-12 pr-4 h-14 bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-full"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 rounded-full">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filterOptions.map((option) => (
              <Button
                key={option.label}
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-full"
              >
                {option.label}
                <Badge className="ml-2 bg-[#e91e8c]/20 text-[#e91e8c] border-0">
                  {option.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Event Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Explore by{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Category
              </span>
            </h2>
            <p className="text-white/60">Browse thousands of events across various interests and genres</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#0d0221]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white mb-1">{category.title}</h3>
                      <p className="text-white/60 text-sm">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map View Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-32"
        >
          <Card className="bg-gradient-to-br from-[#e91e8c]/10 to-[#c81e87]/10 border-[#e91e8c]/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mb-6">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white mb-4">
                  Explore with{' '}
                  <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                    Map View
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-6">
                  See events happening around you in an interactive map interface. Discover experiences in your neighborhood or explore new areas of your city.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Real-time event locations</span> - See exactly where events are happening
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Search className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Location-based discovery</span> - Find events near you or in specific areas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e91e8c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-[#e91e8c]" />
                    </div>
                    <p className="text-white/60">
                      <span className="text-white">Explore neighborhoods</span> - Discover new parts of your city through events
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-3xl opacity-20 rounded-full"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBhcHAlMjBwaG9uZXxlbnwxfHx8fDE3MzM5Mzk0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Map View"
                    className="relative rounded-3xl shadow-2xl"
                  />
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
              Powerful Discovery{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Our advanced platform makes finding the perfect event effortless
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
              Find Your Next{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Discover',
                description: 'Browse through thousands of curated events or let our AI suggest perfect matches based on your interests.',
              },
              {
                icon: Heart,
                title: 'Save & Plan',
                description: 'Add events to your wishlist, sync with your calendar, and get reminders so you never miss out.',
              },
              {
                icon: Users,
                title: 'Attend & Connect',
                description: 'Show up and make meaningful connections with like-minded people through our smart networking features.',
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center h-full hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </Card>
                </motion.div>
              );
            })}
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
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10K+', label: 'Active Events' },
                { value: '50+', label: 'Categories' },
                { value: '100K+', label: 'Users' },
                { value: '4.9★', label: 'Average Rating' },
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
              Ready to{' '}
              <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
                Explore?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join TAPPD today and discover events that match your interests, location, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowComingSoon(true)}
                className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 px-8 py-6"
              >
                Start Exploring
              </Button>
              <Button 
                onClick={() => window.open('https://tappdapp.figma.site', '_blank')}
                className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 backdrop-blur-sm border border-white/30"
              >
                View Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  );
}