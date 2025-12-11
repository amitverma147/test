import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Admin email (only this email can access admin)
const ADMIN_EMAIL = "hr@tappd.co.in";

// Simple function to generate session tokens
function generateSessionToken() {
  return `admin_token_${Date.now()}_${Math.random().toString(36).substr(2, 16)}`;
}

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-20327e5b/health", (c) => {
  return c.json({ status: "ok" });
});

// Send OTP to admin email
app.post("/make-server-20327e5b/auth/otp", async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email) {
      return c.json({ error: "Email is required" }, 400);
    }

    // Check if the email is the admin email
    if (email !== ADMIN_EMAIL) {
      return c.json({ error: "Unauthorized email address" }, 401);
    }

    // Send OTP using Supabase Auth
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: false, // Don't create new users
      }
    });

    if (error) {
      console.error("Error sending OTP:", error);
      return c.json({ error: `Failed to send OTP: ${error.message}` }, 500);
    }

    console.log(`OTP sent to: ${email}`);

    return c.json({ 
      success: true, 
      message: "OTP sent to your email. Please check your inbox.",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return c.json({ error: "Failed to send OTP" }, 500);
  }
});

// Verify OTP and create admin session
app.post("/make-server-20327e5b/auth/verify-otp", async (c) => {
  try {
    const body = await c.req.json();
    const { email, token } = body;

    if (!email || !token) {
      return c.json({ error: "Email and OTP are required" }, 400);
    }

    // Check if the email is the admin email
    if (email !== ADMIN_EMAIL) {
      return c.json({ error: "Unauthorized email address" }, 401);
    }

    // Verify OTP using Supabase Auth
    const { data, error } = await supabase.auth.verifyOtp({
      email: email,
      token: token,
      type: 'email'
    });

    if (error) {
      console.error("Error verifying OTP:", error);
      return c.json({ error: `Invalid or expired OTP: ${error.message}` }, 401);
    }

    if (!data.user) {
      return c.json({ error: "Invalid OTP" }, 401);
    }

    // Generate session token
    const sessionToken = generateSessionToken();
    
    // Store session in KV store with session_ prefix
    const sessionData = {
      email: email,
      userId: data.user.id,
      createdAt: Date.now()
    };
    await kv.set(`session_${sessionToken}`, sessionData);

    console.log(`Admin logged in via OTP: ${email}`);

    return c.json({ 
      success: true, 
      message: "Login successful",
      access_token: sessionToken,
      user: { email: email } 
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return c.json({ error: "Failed to verify OTP" }, 500);
  }
});

// Middleware to check authentication
async function requireAuth(c: any, next: any) {
  const authHeader = c.req.header('Authorization');
  
  if (!authHeader) {
    return c.json({ error: "Unauthorized - No token provided" }, 401);
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
  
  // Check if session exists in KV store
  const sessionKey = `session_${token}`;
  const session = await kv.get(sessionKey);
  
  if (!session) {
    return c.json({ error: "Unauthorized - Invalid or expired token" }, 401);
  }

  // Check if session is older than 24 hours
  const sessionAge = Date.now() - session.createdAt;
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours
  
  if (sessionAge > maxAge) {
    await kv.del(sessionKey);
    return c.json({ error: "Unauthorized - Session expired" }, 401);
  }

  c.set('user', session);
  await next();
}

// Waitlist signup endpoint
app.post("/make-server-20327e5b/waitlist", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, email, interests } = body;

    // Validate required fields
    if (!name || !phone || !email || !interests || !Array.isArray(interests)) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    if (interests.length < 3 || interests.length > 10) {
      return c.json({ error: "Please select between 3 and 10 interests" }, 400);
    }

    // Generate unique ID for the signup
    const signupId = `waitlist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store in KV store
    const signupData = {
      id: signupId,
      name,
      phone,
      email,
      interests,
      timestamp: new Date().toISOString(),
    };

    await kv.set(signupId, signupData);

    console.log(`Waitlist signup stored: ${signupId}`);

    return c.json({ 
      success: true, 
      message: "Successfully joined the waitlist!",
      id: signupId 
    });
  } catch (error) {
    console.error("Error storing waitlist signup:", error);
    return c.json({ error: "Failed to process signup" }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-20327e5b/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Generate unique ID for the contact submission
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store in KV store
    const contactData = {
      id: contactId,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    await kv.set(contactId, contactData);

    console.log(`Contact form submission stored: ${contactId}`);

    return c.json({ 
      success: true, 
      message: "Message sent successfully!",
      id: contactId 
    });
  } catch (error) {
    console.error("Error storing contact form:", error);
    return c.json({ error: "Failed to send message" }, 500);
  }
});

// Get all waitlist signups (for admin purposes)
app.get("/make-server-20327e5b/waitlist/all", requireAuth, async (c) => {
  try {
    const signups = await kv.getByPrefix("waitlist_");
    return c.json({ 
      success: true, 
      count: signups.length,
      signups 
    });
  } catch (error) {
    console.error("Error fetching waitlist signups:", error);
    return c.json({ error: "Failed to fetch signups" }, 500);
  }
});

// Get all contact submissions (for admin purposes)
app.get("/make-server-20327e5b/contact/all", requireAuth, async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    return c.json({ 
      success: true, 
      count: contacts.length,
      contacts 
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json({ error: "Failed to fetch contacts" }, 500);
  }
});

Deno.serve(app.fetch);