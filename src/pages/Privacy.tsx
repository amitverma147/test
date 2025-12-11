import { motion } from 'motion/react';
import { Shield, FileText, Lock, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#0d0221] pt-24 pb-32 md:pb-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-white">
            Privacy & Compliance
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Your trust is our priority. We are committed to protecting your data and maintaining the highest standards of compliance.
          </p>
        </motion.div>

        {/* Policy Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 mb-8 w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger 
                value="privacy" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#e91e8c] data-[state=active]:to-[#c81e87] data-[state=active]:text-white text-white/60"
              >
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger 
                value="terms" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#e91e8c] data-[state=active]:to-[#c81e87] data-[state=active]:text-white text-white/60"
              >
                Terms of Service
              </TabsTrigger>
              <TabsTrigger 
                value="refund" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#e91e8c] data-[state=active]:to-[#c81e87] data-[state=active]:text-white text-white/60"
              >
                Refund Policy
              </TabsTrigger>
              <TabsTrigger 
                value="kyc" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#e91e8c] data-[state=active]:to-[#c81e87] data-[state=active]:text-white text-white/60"
              >
                KYC & Compliance
              </TabsTrigger>
            </TabsList>

            {/* Privacy Policy */}
            <TabsContent value="privacy">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-white mb-4">Privacy Policy</h2>
                <p className="text-white/60 mb-6">
                  This policy explains how TAPPD Private Limited collects, uses, and protects personal and financial data.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white mb-3">Our Commitment</h3>
                    <p className="text-white/60 mb-2">We follow:</p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                        IT Act 2000 (India)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                        GDPR
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                        Global data protection laws
                      </li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Data We Collect</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Personal info (name, DOB, email, phone)</li>
                      <li>• Payment details (bank info, UPI, PAN, GSTIN)</li>
                      <li>• Device & app data</li>
                      <li>• Location data at events</li>
                      <li>• User interaction & connection data</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">How We Use Data</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Identity verification</li>
                      <li>• Compliance with RBI/NPCI norms</li>
                      <li>• Fraud detection</li>
                      <li>• Personalization & service improvement</li>
                      <li>• Event bookings & connections</li>
                      <li>• Important notifications</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Data Sharing</h3>
                    <p className="text-white/60 mb-2">We do not sell data. Shared only with:</p>
                    <ul className="space-y-2 text-white/60">
                      <li>• RBI-regulated partners</li>
                      <li>• Payment gateways & banks</li>
                      <li>• Government when required</li>
                      <li>• Third-party providers under confidentiality</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Data Security</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• AES-256 encryption</li>
                      <li>• PCI DSS compliance</li>
                      <li>• Regular audits</li>
                      <li>• Secure data centers</li>
                      <li>• Multi-factor authentication</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Your Rights</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Access, modify, delete data</li>
                      <li>• Withdraw consent</li>
                      <li>• Data portability</li>
                      <li>• Opt-out of marketing</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Data Retention</h3>
                    <p className="text-white/60">Kept only as long as required</p>
                    <p className="text-white/60">KYC & transaction data retained 5 years (RBI)</p>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div>
                      <span className="text-[#e91e8c]">Contact:</span> privacy@tappd.co.in
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Effective:</span> Jan 1, 2025
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Updated:</span> Oct 19, 2025
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Terms of Service */}
            <TabsContent value="terms">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-white mb-4">Terms of Service</h2>
                <p className="text-white/60 mb-6">
                  Welcome to TAPPD Private Limited. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white mb-3">1. Use of Platform</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• You agree to use TAPPD only for lawful purposes and in accordance with applicable regulations</li>
                      <li>• You must be at least 18 years of age to use the platform</li>
                      <li>• You will not use the platform for any illegal, fraudulent, or unauthorized purpose</li>
                      <li>• You will not attempt to interfere with, disrupt, or hack the platform</li>
                      <li>• You will respect other users and maintain appropriate conduct</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">2. Account Responsibility</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                      <li>• You must provide accurate, current, and complete information during registration</li>
                      <li>• You are responsible for all activities that occur under your account</li>
                      <li>• You must notify us immediately of any unauthorized access or security breach</li>
                      <li>• TAPPD reserves the right to suspend or terminate accounts that violate these terms</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">3. Payments & Fees</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• All payments processed through TAPPD are governed by RBI and NPCI guidelines</li>
                      <li>• TAPPD charges a 20% service fee on ticket sales and event transactions</li>
                      <li>• All prices and fees are displayed in INR unless otherwise stated</li>
                      <li>• You agree to pay all applicable fees and charges</li>
                      <li>• Payment terms are subject to our Refund & Cancellation Policy</li>
                      <li>• TAPPD is not responsible for bank charges, currency conversion fees, or payment gateway charges</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">4. Content & Intellectual Property</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• All platform content, branding, logos, and trademarks are property of TAPPD Private Limited</li>
                      <li>• Unauthorized use, reproduction, or distribution is prohibited</li>
                      <li>• You retain ownership of content you upload but grant TAPPD a license to use it</li>
                      <li>• You must not upload content violating others' IP rights</li>
                      <li>• TAPPD may remove any content that violates these terms</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">5. Liability & Disclaimers</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• TAPPD is not liable for damages from third-party payment failures or service interruptions</li>
                      <li>• We do not guarantee uninterrupted or error-free service</li>
                      <li>• TAPPD is not responsible for event cancellations or organizer changes</li>
                      <li>• We are not liable for data loss, connectivity issues, or device problems</li>
                      <li>• Liability is limited to the amount paid by you for the specific service</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">6. User Conduct & Prohibited Activities</h3>
                    <p className="text-white/60 mb-2">You must not:</p>
                    <ul className="space-y-2 text-white/60">
                      <li>• Harass, abuse, or harm users</li>
                      <li>• Post offensive or discriminatory content</li>
                      <li>• Impersonate others</li>
                      <li>• Engage in spam, phishing, or fraud</li>
                      <li>• Use automated bots or scrapers</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">7. Changes to Terms</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• We reserve the right to update these Terms periodically</li>
                      <li>• Material changes will be notified</li>
                      <li>• Continued use means acceptance</li>
                      <li>• You must review the Terms regularly</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">8. Termination</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• You may delete your account anytime</li>
                      <li>• TAPPD may terminate accounts violating terms</li>
                      <li>• Access to paid services ends upon termination</li>
                      <li>• Some provisions survive termination</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">9. Governing Law</h3>
                    <p className="text-white/60">These Terms are governed by Indian law, with exclusive jurisdiction in New Delhi, India.</p>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div>
                      <span className="text-[#e91e8c]">Contact:</span> support@tappd.co.in
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Effective:</span> Jan 1, 2025
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Updated:</span> Oct 19, 2025
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Refund Policy */}
            <TabsContent value="refund">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-white mb-4">Refund & Cancellation Policy</h2>
                <p className="text-white/60 mb-6">
                  At TAPPD, we strive for transparent transactions. This policy covers refunds for both B2C and B2B.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white mb-3">FOR USERS (B2C)</h3>
                    
                    <h4 className="text-white/90 mb-2">Event Ticket Refunds</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• Refundable only if the event is canceled by the organizer</li>
                      <li>• If user cannot attend, the organizer's policy applies</li>
                      <li>• Refund requests must be made within 7 days of event date</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Processing Timeline</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• Approved refunds processed in 5–7 business days</li>
                      <li>• Bank processing may take an additional 3–5 days</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Non-Refundable Items</h4>
                    <ul className="space-y-2 text-white/60">
                      <li>• TAPPD Band one-time registration</li>
                      <li>• Service & convenience fees</li>
                      <li>• Premium subscription fees after activation</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">FOR BUSINESSES (B2B)</h3>
                    
                    <h4 className="text-white/90 mb-2">Service Payments</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• Subscriptions & service payments are non-refundable once activated</li>
                      <li>• Setup & onboarding fees are non-refundable</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Duplicate Payments</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• Refund after verification within 10 business days</li>
                      <li>• Documentation required</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Cancellation Terms</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• Request cancellation at least 30 days before renewal</li>
                      <li>• No refunds for partial month/year</li>
                      <li>• Services continue until end of paid period</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Payment Failures</h4>
                    <ul className="space-y-2 text-white/60">
                      <li>• Auto-reversed in 5–7 business days</li>
                      <li>• Delays depend on banks</li>
                      <li>• TAPPD not liable for external delays</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">How to Request a Refund</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Email refunds@tappd.co.in</li>
                      <li>• Provide transaction ID, order number, reason</li>
                      <li>• Attach proof</li>
                      <li>• Team responds in 3–5 business days</li>
                      <li>• Approved refunds processed accordingly</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Regulatory Compliance</h3>
                    <p className="text-white/60">Refunds follow RBI, Consumer Protection Act 2019, and digital payment regulations.</p>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div>
                      <span className="text-[#e91e8c]">Contact:</span> refunds@tappd.co.in
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Effective:</span> Jan 1, 2025
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Updated:</span> Oct 19, 2025
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* KYC & Compliance */}
            <TabsContent value="kyc">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-white mb-4">KYC & Compliance Policy</h2>
                <p className="text-white/60 mb-6">
                  TAPPD complies with all KYC and AML regulations by RBI and NPCI.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white mb-3">Purpose of KYC</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Secure identity verification</li>
                      <li>• Prevent fraud and financial crime</li>
                      <li>• Regulatory compliance</li>
                      <li>• Secure transactions</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">KYC Documents Accepted</h3>
                    
                    <h4 className="text-white/90 mb-2">Individuals</h4>
                    <ul className="space-y-2 text-white/60 mb-4">
                      <li>• PAN Card (Mandatory)</li>
                      <li>• Aadhaar</li>
                      <li>• Bank proof</li>
                      <li>• Address proof</li>
                    </ul>

                    <h4 className="text-white/90 mb-2">Businesses</h4>
                    <ul className="space-y-2 text-white/60">
                      <li>• Business PAN / Proprietor PAN</li>
                      <li>• GSTIN</li>
                      <li>• Certificate of Incorporation</li>
                      <li>• Business address proof</li>
                      <li>• Bank proof</li>
                      <li>• Authorized signatory documents</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Verification Process</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Submit documents</li>
                      <li>• Automated verification via NSDL/UIDAI/GST</li>
                      <li>• Manual review if needed</li>
                      <li>• "KYC Verified" badge granted</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Verification Timeline</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Instant: PAN & Aadhaar</li>
                      <li>• 24–48 hrs: Bank account</li>
                      <li>• 2–5 days: Business verification</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Data Retention</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Stored with AES-256 encryption</li>
                      <li>• Retained min 5 years as per RBI</li>
                      <li>• Shared only under legal orders</li>
                      <li>• Access limited to compliance team</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">Compliance Framework</h3>
                    <p className="text-white/60 mb-2">Includes:</p>
                    <ul className="space-y-2 text-white/60">
                      <li>• RBI Master Direction on KYC</li>
                      <li>• PMLA 2002</li>
                      <li>• IT Act 2000</li>
                      <li>• NPCI guidelines</li>
                      <li>• GDPR</li>
                      <li>• ISO 27001</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <h3 className="text-white mb-3">User Responsibilities</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Provide accurate documents</li>
                      <li>• Update KYC if details change</li>
                      <li>• Non-completion may restrict payments</li>
                      <li>• False documents are a criminal offense</li>
                    </ul>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div>
                      <span className="text-[#e91e8c]">Contact:</span> compliance@tappd.co.in
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Effective:</span> Jan 1, 2025
                    </div>
                    <div>
                      <span className="text-[#e91e8c]">Updated:</span> Oct 19, 2025
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
