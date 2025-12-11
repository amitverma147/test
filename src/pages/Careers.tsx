import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Upload, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    portfolio: '',
    coverLetter: '',
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData, resume);
    // Handle form submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and equity packages',
    },
    {
      title: 'Flexible Work',
      description: 'Hybrid work model with flexible hours',
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
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
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-white">
            Join the
            <span className="bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d] bg-clip-text text-transparent">
              {' '}TAPPD Team
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We're building the future of human connection. Join us in creating meaningful experiences that bring people together.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-white text-center mb-8">Why Join TAPPD?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center">
                <h3 className="text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white">Submit Your Application</h2>
                <p className="text-white/60 text-sm">We're excited to learn more about you</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                    placeholder="Your full name"
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
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="position" className="text-white">Position Applied For *</Label>
                  <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white mt-2">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d0221] border-white/20">
                      <SelectItem value="tech-associate">Tech Associate</SelectItem>
                      <SelectItem value="sd1">SD-I</SelectItem>
                      <SelectItem value="sd2">SD-II</SelectItem>
                      <SelectItem value="sd3">SD-III</SelectItem>
                      <SelectItem value="associate-pm">Associate Product Manager</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="marketing-head">Marketing Head</SelectItem>
                      <SelectItem value="social-media">Social Media Content Creator</SelectItem>
                      <SelectItem value="target-marketer">Target Marketer</SelectItem>
                      <SelectItem value="data-analyst">Data Analyst</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="experience" className="text-white">Years of Experience *</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white mt-2">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d0221] border-white/20">
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-7">5-7 years</SelectItem>
                      <SelectItem value="7-9">7-9 years</SelectItem>
                      <SelectItem value="9+">9+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location" className="text-white">Preferred Location *</Label>
                  <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white mt-2">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d0221] border-white/20">
                      <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="portfolio" className="text-white">Portfolio / LinkedIn URL</Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                  placeholder="https://..."
                />
              </div>

              <div>
                <Label htmlFor="resume" className="text-white">Upload Resume *</Label>
                <div className="mt-2">
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-[#e91e8c] transition-colors bg-white/5"
                  >
                    <Upload className="w-6 h-6 text-white/60" />
                    <div className="text-center">
                      <p className="text-white">
                        {resume ? resume.name : 'Click to upload resume'}
                      </p>
                      <p className="text-white/60 text-sm mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="coverLetter" className="text-white">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  required
                  rows={6}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 mt-2"
                  placeholder="Tell us why you'd be a great fit for TAPPD..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0 py-6"
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
