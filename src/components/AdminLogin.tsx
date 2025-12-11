import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Loader2, Shield, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-20327e5b/auth/otp`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }

      console.log('OTP sent successfully');
      setOtpSent(true);
    } catch (err) {
      console.error('OTP error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-20327e5b/auth/verify-otp`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email, token: otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid OTP');
      }

      console.log('OTP verified successfully');
      onLoginSuccess(data.access_token);
    } catch (err) {
      console.error('OTP verification error:', err);
      setError(err instanceof Error ? err.message : 'Invalid or expired OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0221] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-white mb-2">Admin Login</h2>
            <p className="text-white/60 text-sm">Secure access to admin dashboard</p>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6"
              >
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-200 mt-0.5 flex-shrink-0" />
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* OTP Request Form */}
          {!otpSent && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <Label htmlFor="otp-email" className="text-white mb-2 block">
                  Admin Email Address
                </Label>
                <Input
                  id="otp-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your admin email"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
                <p className="text-white/40 text-xs mt-2">
                  <Mail className="w-3 h-3 inline mr-1" />
                  An OTP will be sent to your registered email
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0 py-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Send OTP to Email
                  </>
                )}
              </Button>
            </form>
          )}

          {/* OTP Verification Form */}
          {otpSent && (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div>
                <Label htmlFor="otp-code" className="text-white mb-2 block">
                  Enter OTP Code
                </Label>
                <Input
                  id="otp-code"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Enter 6-digit OTP"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 text-center text-2xl tracking-widest"
                  maxLength={6}
                  autoFocus
                />
                <p className="text-white/60 text-xs mt-2 text-center">
                  OTP sent to <span className="text-[#e91e8c]">{email}</span>
                </p>
                <p className="text-white/40 text-xs mt-1 text-center">
                  Check your email inbox and spam folder
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setOtp('');
                    setError('');
                  }}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || otp.length !== 6}
                  className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify & Login'
                  )}
                </Button>
              </div>

              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOtpSent(false);
                  setOtp('');
                  setError('');
                  handleSendOTP(e as any);
                }}
                variant="ghost"
                className="w-full text-white/60 hover:text-white hover:bg-white/5 text-sm"
              >
                Didn't receive OTP? Resend
              </Button>
            </form>
          )}
        </Card>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <p className="text-white/40 text-sm">
            🔒 Secure admin access • Protected by Supabase Auth
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}