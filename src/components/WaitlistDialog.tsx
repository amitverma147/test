import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Sparkles } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(`Welcome to the waitlist, ${formData.name}! 🎉`, {
      description: 'We\'ll notify you as soon as TAPPD launches.',
    });

    // Reset form
    setFormData({ name: '', phone: '', email: '' });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-b from-[#0d0221] to-[#1a0a3e] border border-white/10 text-white max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-2xl opacity-30 rounded-full"></div>
              <Sparkles className="w-16 h-16 text-[#e91e8c] relative" />
            </div>
          </div>
          <DialogTitle className="text-center text-3xl bg-gradient-to-r from-[#e91e8c] to-[#c81e87] bg-clip-text text-transparent">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Be the first to experience the future of phydigital connections
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <p className="text-center text-white/70">
            Get early access when TAPPD launches.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/90">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white/90">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/90">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0 py-6"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
              <Button
                type="button"
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10 py-6"
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}