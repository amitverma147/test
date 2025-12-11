import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Mail, RefreshCw, Download, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { projectId } from '../utils/supabase/info';
import { AdminLogin } from '../components/AdminLogin';

interface WaitlistSignup {
  id: string;
  name: string;
  phone: string;
  email: string;
  interests: string[];
  timestamp: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [waitlistSignups, setWaitlistSignups] = useState<WaitlistSignup[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLoginSuccess = (token: string) => {
    setAccessToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('admin_token', token);
  };

  const handleLogout = () => {
    setAccessToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('admin_token');
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');

    try {
      // Fetch waitlist signups
      const waitlistResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-20327e5b/waitlist/all`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (!waitlistResponse.ok) {
        if (waitlistResponse.status === 401) {
          handleLogout();
          throw new Error('Session expired. Please login again.');
        }
        throw new Error('Failed to fetch waitlist signups');
      }

      const waitlistData = await waitlistResponse.json();
      setWaitlistSignups(waitlistData.signups || []);

      // Fetch contact submissions
      const contactResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-20327e5b/contact/all`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (!contactResponse.ok) {
        if (contactResponse.status === 401) {
          handleLogout();
          throw new Error('Session expired. Please login again.');
        }
        throw new Error('Failed to fetch contact submissions');
      }

      const contactData = await contactResponse.json();
      setContactSubmissions(contactData.contacts || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) {
      alert('No data to export');
      return;
    }

    // Get headers from the first object
    const headers = Object.keys(data[0]).filter(key => key !== 'id');
    
    // Convert data to CSV format
    const csvContent = [
      headers.join(','), // Header row
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          // Handle arrays (like interests)
          if (Array.isArray(value)) {
            return `"${value.join('; ')}"`;
          }
          // Handle strings with commas
          if (typeof value === 'string' && value.includes(',')) {
            return `"${value}"`;
          }
          return value;
        }).join(',')
      )
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = (data: any[], filename: string) => {
    if (data.length === 0) {
      alert('No data to export');
      return;
    }

    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Check if user has a saved token
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setAccessToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      fetchData();
    }
  }, [isAuthenticated, accessToken]);

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#0d0221] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-white/60">View and export all form submissions</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={fetchData}
              disabled={loading}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              variant="outline"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-200 border-red-500/30"
              variant="outline"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-8">
            <p className="text-red-200">{error}</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Waitlist Signups</p>
                <p className="text-3xl text-white">{waitlistSignups.length}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a91e87] to-[#8a1870] flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Contact Messages</p>
                <p className="text-3xl text-white">{contactSubmissions.length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Waitlist Signups */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white">Waitlist Signups</h2>
            <div className="flex gap-2">
              <Button
                onClick={() => exportToCSV(waitlistSignups, 'waitlist_signups')}
                disabled={waitlistSignups.length === 0}
                className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button
                onClick={() => exportToJSON(waitlistSignups, 'waitlist_signups')}
                disabled={waitlistSignups.length === 0}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {waitlistSignups.length === 0 ? (
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
                <p className="text-white/60">No waitlist signups yet</p>
              </Card>
            ) : (
              waitlistSignups.map((signup) => (
                <motion.div
                  key={signup.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/60 text-sm mb-1">Name</p>
                        <p className="text-white">{signup.name}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">Email</p>
                        <p className="text-white">{signup.email}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">Phone</p>
                        <p className="text-white">{signup.phone}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">Date</p>
                        <p className="text-white">
                          {new Date(signup.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-white/60 text-sm mb-2">Interests</p>
                        <div className="flex flex-wrap gap-2">
                          {signup.interests.map((interest) => (
                            <span
                              key={interest}
                              className="bg-[#e91e8c]/20 border border-[#e91e8c]/30 text-[#e91e8c] px-3 py-1 rounded-full text-sm"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Contact Submissions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white">Contact Messages</h2>
            <div className="flex gap-2">
              <Button
                onClick={() => exportToCSV(contactSubmissions, 'contact_messages')}
                disabled={contactSubmissions.length === 0}
                className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button
                onClick={() => exportToJSON(contactSubmissions, 'contact_messages')}
                disabled={contactSubmissions.length === 0}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {contactSubmissions.length === 0 ? (
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
                <p className="text-white/60">No contact messages yet</p>
              </Card>
            ) : (
              contactSubmissions.map((contact) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-white/60 text-sm mb-1">Name</p>
                        <p className="text-white">{contact.name}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">Email</p>
                        <p className="text-white">{contact.email}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-white/60 text-sm mb-1">Date</p>
                        <p className="text-white">
                          {new Date(contact.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-2">Message</p>
                      <p className="text-white/80 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
