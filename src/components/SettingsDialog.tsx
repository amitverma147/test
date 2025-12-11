import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Cookie, Shield, Bell, Eye } from 'lucide-react';

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const [cookiePrefs, setCookiePrefs] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  const [privacyPrefs, setPrivacyPrefs] = useState({
    shareProfile: true,
    showLocation: false,
    emailNotifications: true,
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0d0221] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Settings</DialogTitle>
          <DialogDescription className="text-white/60">
            Manage your preferences and privacy settings
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Cookie Preferences */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white">Cookie Preferences</h3>
            </div>

            <div className="space-y-4 bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="necessary" className="text-white">Necessary Cookies</Label>
                  <p className="text-sm text-white/60 mt-1">Required for the website to function properly</p>
                </div>
                <Switch
                  id="necessary"
                  checked={cookiePrefs.necessary}
                  disabled
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>

              <Separator className="bg-white/10" />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="text-white">Analytics Cookies</Label>
                  <p className="text-sm text-white/60 mt-1">Help us understand how you use our website</p>
                </div>
                <Switch
                  id="analytics"
                  checked={cookiePrefs.analytics}
                  onCheckedChange={(checked) =>
                    setCookiePrefs({ ...cookiePrefs, analytics: checked })
                  }
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>

              <Separator className="bg-white/10" />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="text-white">Marketing Cookies</Label>
                  <p className="text-sm text-white/60 mt-1">Used to show you relevant advertisements</p>
                </div>
                <Switch
                  id="marketing"
                  checked={cookiePrefs.marketing}
                  onCheckedChange={(checked) =>
                    setCookiePrefs({ ...cookiePrefs, marketing: checked })
                  }
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white">Privacy Settings</h3>
            </div>

            <div className="space-y-4 bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="shareProfile" className="text-white">Share Profile with Matches</Label>
                  <p className="text-sm text-white/60 mt-1">Allow AI to share your profile with potential matches</p>
                </div>
                <Switch
                  id="shareProfile"
                  checked={privacyPrefs.shareProfile}
                  onCheckedChange={(checked) =>
                    setPrivacyPrefs({ ...privacyPrefs, shareProfile: checked })
                  }
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>

              <Separator className="bg-white/10" />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="showLocation" className="text-white">Show Location</Label>
                  <p className="text-sm text-white/60 mt-1">Display your approximate location to nearby users</p>
                </div>
                <Switch
                  id="showLocation"
                  checked={privacyPrefs.showLocation}
                  onCheckedChange={(checked) =>
                    setPrivacyPrefs({ ...privacyPrefs, showLocation: checked })
                  }
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>

              <Separator className="bg-white/10" />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="emailNotifications" className="text-white">Email Notifications</Label>
                  <p className="text-sm text-white/60 mt-1">Receive updates about events and connections</p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={privacyPrefs.emailNotifications}
                  onCheckedChange={(checked) =>
                    setPrivacyPrefs({ ...privacyPrefs, emailNotifications: checked })
                  }
                  className="data-[state=checked]:bg-[#e91e8c]"
                />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#c81e87] flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white">Display</h3>
            </div>

            <div className="space-y-3 bg-white/5 rounded-xl p-4">
              <p className="text-sm text-white/60">Theme: Dark (Default)</p>
              <p className="text-sm text-white/60">Language: English</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={() => onOpenChange(false)}
              className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-[#0d0221] border-0"
            >
              Save Changes
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}