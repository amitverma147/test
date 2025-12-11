import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Sparkles, Heart, Users, Zap } from 'lucide-react';

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ComingSoonDialog({ open, onOpenChange }: ComingSoonDialogProps) {
  const handleViewDemo = () => {
    window.open('https://tappdapp.figma.site', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-b from-[#0d0221] to-[#1a0a3e] border border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-2xl opacity-30 rounded-full"></div>
              <Sparkles className="w-16 h-16 text-[#e91e8c] relative" />
            </div>
          </div>
          <DialogTitle className="text-center text-3xl bg-gradient-to-r from-[#e91e8c] to-[#c81e87] bg-clip-text text-transparent">
            Something Beautiful Is Coming
          </DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Get ready to experience the next generation of real-life connections
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* About TAPPD */}
          <div className="text-center space-y-4">
            <p className="text-xl text-white/90">
              TAPPD is more than technology—it's where <span className="text-[#e91e8c]">human connection</span> meets innovation.
            </p>
            <p className="text-white/70 leading-relaxed">
              We're building a phydigital platform that bridges the digital and physical worlds, 
              helping people discover meaningful connections through AI-powered events and wearable technology.
            </p>
          </div>

          {/* Real Experiences */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e91e8c]/20 to-[#c81e87]/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#e91e8c]" />
              </div>
              <h4 className="text-white">Genuine Connections</h4>
              <p className="text-sm text-white/60">
                "I found my co-founder at a TAPPD event. One tap changed my life."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e91e8c]/20 to-[#c81e87]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#e91e8c]" />
              </div>
              <h4 className="text-white">Community Building</h4>
              <p className="text-sm text-white/60">
                "From strangers to a community of 500+ creators, all through TAPPD."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-3 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e91e8c]/20 to-[#c81e87]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#e91e8c]" />
              </div>
              <h4 className="text-white">Effortless Networking</h4>
              <p className="text-sm text-white/60">
                "No more awkward exchanges. Just tap, connect, and build relationships."
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[#e91e8c]/10 to-[#c81e87]/10 border border-[#e91e8c]/20 rounded-xl p-6 space-y-3">
            <p className="text-white/90 text-center italic">
              "We believe the future of networking isn't about collecting contacts—
              it's about creating <span className="text-[#e91e8c]">authentic experiences</span> that matter. 
              TAPPD makes every interaction intentional, every event memorable, 
              and every connection meaningful."
            </p>
          </div>

          {/* App Coming Soon Message */}
          <div className="text-center space-y-4">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <p className="text-sm text-white/80">
                🚀 Our mobile app is launching soon
              </p>
            </div>
            <p className="text-white/60 text-sm">
              Get ready to experience the next generation of real-life connections
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleViewDemo}
              className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0 py-6"
            >
              View Demo
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10 py-6"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}