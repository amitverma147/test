import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Bot, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface TAPPDYChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TAPPD_KNOWLEDGE = {
  about: "TAPPD is a next-generation phydigital connection platform that blends AI, events, and wearable technology to help people connect in real life. We bridge the digital and physical worlds to create meaningful connections.",
  engage: "With TAPPD Engage, you can connect with people at events through our revolutionary tap-to-connect wearable technology. Simply tap your TAPPD device with someone else's to instantly exchange information and build your network.",
  explore: "TAPPD Explore helps you discover events tailored to your interests using AI-powered recommendations. Browse through thousands of events across 50+ categories, use our interactive Map View to see what's happening around you in real-time, and never miss an experience that matters.",
  host: "TAPPD Host provides comprehensive tools for creating and managing events. From planning to execution, our platform helps you create unforgettable experiences and build communities.",
  reconnect: "TAPPD Reconnect helps you maintain meaningful relationships over time with smart reminders, connection insights, and our unique Crossed Paths feature that lets you connect with people you've encountered in real life.",
  crossedPaths: "Crossed Paths is an innovative feature that detects when TAPPD users are near each other. If you see someone interesting walking down the street but don't have a chance to connect, you can later find them in your Crossed Paths and send a connection request. Perfect for those 'missed connection' moments!",
  mapView: "Our Map View feature lets you visualize events happening around you in real-time on an interactive map. Discover what's nearby, explore new neighborhoods, plan your experiences geographically, and find events in specific areas of your city.",
  wearables: "TAPPD's wearable technology uses NFC tap-to-connect functionality, allowing seamless information exchange with just a tap. No more fumbling with phones or business cards.",
  ai: "Our AI learns your preferences, suggests relevant events, recommends the perfect time to reconnect with contacts, and provides personalized networking insights.",
};

export function TAPPDYChat({ open, onOpenChange }: TAPPDYChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm TAPPDY, your AI guide to TAPPD. 👋\n\nI can help you learn about our phydigital platform, features like Engage, Explore, Host, Reconnect, Crossed Paths, Map View, and more!\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('crossed path')) {
      return `${TAPPD_KNOWLEDGE.crossedPaths}\n\nImagine you see someone interesting walking down the street, but you're both busy. With TAPPD, you can open the app later, check your Crossed Paths, and send them a connection request. It's perfect for those "missed connection" moments!\n\nAnything else you'd like to know about TAPPD? 😊`;
    }
    
    if (lowerMessage.includes('map') || lowerMessage.includes('location')) {
      return `${TAPPD_KNOWLEDGE.mapView}\n\nPerfect for spontaneous plans or exploring new areas in your city!\n\nWhat else would you like to learn about? 🗺️`;
    }

    if (lowerMessage.includes('engage') || lowerMessage.includes('connect') || lowerMessage.includes('tap')) {
      return `${TAPPD_KNOWLEDGE.engage}\n\n${TAPPD_KNOWLEDGE.wearables}\n\nIs there anything else you'd like to know? 🤝`;
    }

    if (lowerMessage.includes('explore') || lowerMessage.includes('event') || lowerMessage.includes('discover')) {
      return `${TAPPD_KNOWLEDGE.explore}\n\n${TAPPD_KNOWLEDGE.mapView}\n\nWhat else can I help you with? 🎉`;
    }

    if (lowerMessage.includes('host') || lowerMessage.includes('create')) {
      return `${TAPPD_KNOWLEDGE.host}\n\nAnything else you'd like to know about TAPPD? 📅`;
    }

    if (lowerMessage.includes('reconnect') || lowerMessage.includes('relationship')) {
      return `${TAPPD_KNOWLEDGE.reconnect}\n\n${TAPPD_KNOWLEDGE.crossedPaths}\n\nIs there anything else I can help you with? 💝`;
    }

    if (lowerMessage.includes('wearable') || lowerMessage.includes('device')) {
      return `${TAPPD_KNOWLEDGE.wearables}\n\nWhat else would you like to learn about TAPPD? ⌚`;
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('intelligent')) {
      return `${TAPPD_KNOWLEDGE.ai}\n\nAnything else you're curious about? 🤖`;
    }

    if (lowerMessage.includes('what is') || lowerMessage.includes('about') || lowerMessage.includes('tappd')) {
      return `${TAPPD_KNOWLEDGE.about}\n\nWe offer four main experiences:\n\n🔥 **Engage** - Connect at events with tap-to-connect technology\n🧭 **Explore** - Discover events with AI and Map View\n📅 **Host** - Create and manage amazing events\n💝 **Reconnect** - Stay in touch with Crossed Paths feature\n\nWhat would you like to know more about?`;
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "TAPPD is launching soon! Our pricing will be announced closer to launch. Join our waitlist to get early access and special launch pricing. 🚀\n\nWhat else can I help you with?";
    }

    if (lowerMessage.includes('when') || lowerMessage.includes('launch') || lowerMessage.includes('available')) {
      return "TAPPD is coming soon! We're putting the finishing touches on our platform. Join the waitlist to be notified the moment we launch and get early access! 🎉\n\nAnything else you'd like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! I'm always here to help you learn more about TAPPD. 😊\n\nIs there anything else you'd like to know?";
    }

    if (lowerMessage.includes('no') || lowerMessage.includes('nope') || lowerMessage.includes('that\'s all')) {
      return "Great! If you have any questions in the future, I'm here to help. Have an amazing day! ✨";
    }

    return `That's a great question! Let me help you with that.\n\nTAPPD is a comprehensive platform with these key features:\n\n• **Engage** - Tap-to-connect networking at events\n• **Explore** - AI-powered event discovery with Map View\n• **Host** - Event creation and management tools\n• **Reconnect** - Relationship management with Crossed Paths\n\nWould you like to know more about any specific feature? 💬`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = generateResponse(input);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-b from-[#0d0221] to-[#1a0a3e] border border-white/10 text-white max-w-2xl h-[600px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] blur-xl opacity-30 rounded-full"></div>
              <Bot className="w-12 h-12 text-[#e91e8c] relative" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl bg-gradient-to-r from-[#e91e8c] to-[#c81e87] bg-clip-text text-transparent">
            TAPPDY
          </DialogTitle>
          <DialogDescription className="text-center text-white/60 text-sm">
            Your AI assistant for all things TAPPD
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4 -mr-4 overflow-y-auto">
          <div ref={scrollContainerRef} className="space-y-4 py-4 min-h-full">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#e91e8c] to-[#c81e87] text-white'
                      : 'bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#e91e8c] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#e91e8c] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#e91e8c] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex-shrink-0 pt-4 border-t border-white/10">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about TAPPD..."
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-gradient-to-r from-[#e91e8c] to-[#c81e87] hover:from-[#c81e87] hover:to-[#a01870] text-white border-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-white/40 text-center mt-2">
            Press Enter to send
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}