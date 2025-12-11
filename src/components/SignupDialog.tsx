import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Sparkles } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface SignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const INTEREST_OPTIONS = [
  { id: 'tech', label: 'Technology & Innovation' },
  { id: 'business', label: 'Business & Entrepreneurship' },
  { id: 'arts', label: 'Arts & Culture' },
  { id: 'music', label: 'Music & Entertainment' },
  { id: 'sports', label: 'Sports & Fitness' },
  { id: 'food', label: 'Food & Culinary' },
  { id: 'travel', label: 'Travel & Adventure' },
  { id: 'wellness', label: 'Health & Wellness' },
  { id: 'education', label: 'Education & Learning' },
  { id: 'gaming', label: 'Gaming & Esports' },
  { id: 'fashion', label: 'Fashion & Style' },
  { id: 'sustainability', label: 'Sustainability & Environment' },
  { id: 'networking', label: 'Professional Networking' },
  { id: 'social', label: 'Social & Community' },
];

export function SignupDialog({ open, onOpenChange }: SignupDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        return prev.filter((id) => id !== interestId);
      } else if (prev.length < 10) {
        return [...prev, interestId];
      } else {
        setError('Maximum 10 interests allowed');
        setTimeout(() => setError(''), 3000);
        return prev;
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (selectedInterests.length < 3) {
      setError('Please select at least 3 interests');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Supabase backend
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-20327e5b/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interests: selectedInterests,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      console.log('Waitlist signup successful:', data);
      setSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '' });
        setSelectedInterests([]);
        setIsSubmitting(false);
        setSuccess(false);
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      console.error('Error submitting waitlist form:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.email && selectedInterests.length >= 3;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-b from-[#0d0221] to-[#1a0a3e] border border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-2xl opacity-30 rounded-full"></div>
              <Sparkles className="w-16 h-16 text-[#e91e8c] relative" />
            </div>
          </div>
          <DialogTitle className="text-center text-3xl bg-gradient-to-r from-[#e91e8c] to-[#c81e87] bg-clip-text text-transparent">
            Join The Waitlist
          </DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Be the first to experience the future of phydigital connections
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">🎉</div>
            <h3 className="text-2xl text-white mb-2">Welcome to TAPPD, {formData.name}!</h3>
            <p className="text-white/60">We'll notify you as soon as we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center text-red-200">
                {error}
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                />
              </div>
            </div>

            {/* Interests Selection */}
            <div className="space-y-4">
              <div>
                <Label className="text-white">Select Your Interests *</Label>
                <p className="text-sm text-white/60 mt-1">
                  Choose between 3 and 10 interests ({selectedInterests.length} selected)
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[300px] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {INTEREST_OPTIONS.map((interest) => (
                    <div key={interest.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest.id}
                        checked={selectedInterests.includes(interest.id)}
                        onCheckedChange={() => handleInterestToggle(interest.id)}
                        className="border-white/20 data-[state=checked]:bg-[#e91e8c] data-[state=checked]:border-[#e91e8c]"
                      />
                      <Label
                        htmlFor={interest.id}
                        className="text-white/80 cursor-pointer text-sm"
                      >
                        {interest.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
              <Button
                type="button"
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="flex-1 border-white/20 text-black hover:bg-white/10 py-6"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}