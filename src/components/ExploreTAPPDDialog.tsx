import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Zap, Compass, CalendarDays, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ExploreTAPPDDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExploreTAPPDDialog({ open, onOpenChange }: ExploreTAPPDDialogProps) {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Zap,
      title: 'Engage',
      description: 'Connect with people at events through AI-powered matching and smart networking',
      path: '/engage',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Compass,
      title: 'Explore',
      description: 'Discover events tailored to your interests with our intelligent discovery platform',
      path: '/explore',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CalendarDays,
      title: 'Host',
      description: 'Create and manage unforgettable events with our comprehensive hosting tools',
      path: '/host',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Reconnect',
      description: 'Stay connected with meaningful relationships through smart reminders and insights',
      path: '/reconnect',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-b from-[#0d0221] to-[#1a0a3e] border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl bg-gradient-to-r from-[#e91e8c] to-[#c81e87] bg-clip-text text-transparent mb-2">
            Explore TAPPD
          </DialogTitle>
          <DialogDescription className="text-center text-white/60">
            Discover what TAPPD can do for you
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 py-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.path}
                onClick={() => handleNavigate(section.path)}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-all hover:border-white/20 hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-xl mb-2">{section.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {section.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}