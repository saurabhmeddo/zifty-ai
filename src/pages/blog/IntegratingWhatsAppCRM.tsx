import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const IntegratingWhatsAppCRM: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <article className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full">Integration</span>
            <span className="text-gray-500 text-sm ml-4">March 15, 2025 • 13 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Integrating WhatsApp with Your CRM: A Complete Technical Guide
          </h1>
          
          <div className="flex items-center mb-8">
            <img 
              src="/author-avatar.jpg" 
              alt="Priya Sharma" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Priya Sharma</p>
              <p className="text-gray-500 text-sm">Senior Integration Engineer at Zifty</p>
            </div>
          </div>
          
          <img 
            src="/blog-2.jpg" 
            alt="WhatsApp CRM Integration" 
            className="w-full h-auto rounded-xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              WhatsApp isn't just a messaging app—it's a powerful business communication channel used by over 2 billion people worldwide. But its true potential unlocks when integrated with your CRM. This guide will walk you through everything from basic setup to advanced automation, helping you create a unified communication ecosystem that drives real business results.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why WhatsApp + CRM Integration Matters</h2>
            <p className="text-gray-700 mb-4">
              Before diving into the technical details, let's understand the business impact:
            </p>
            
            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Key Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Unified Customer View:</strong> All WhatsApp conversations linked to customer records</li>
                <li><strong>Automated Workflows:</strong> Trigger messages based on CRM events</li>
                <li><strong>Rich Context:</strong> Access purchase history during conversations</li>
                <li><strong>Team Collaboration:</strong> Multiple agents can handle WhatsApp chats</li>
                <li><strong>Analytics Integration:</strong> Track WhatsApp metrics alongside other channels</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Prerequisites: What You'll Need</h2>
            
            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>WhatsApp Business API Access:</strong> Apply through a Business Solution Provider (BSP)</li>
                <li><strong>Verified Business:</strong> Facebook Business verification completed</li>
                <li><strong>Phone Number:</strong> Dedicated number not used for WhatsApp before</li>
                <li><strong>CRM API Access:</strong> Admin credentials and API documentation</li>
                <li><strong>SSL Certificate:</strong> For webhook endpoints</li>
                <li><strong>Development Environment:</strong> Server for hosting integration</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Setting Up WhatsApp Business API</h2>
            
            <div className="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
              <pre className="text-sm">
<code className="language-bash">{`# 1. Choose your deployment option
# Option A: Cloud API (Recommended)
# - Hosted by Meta
# - Easier setup
# - Pay-per-message pricing

# Option B: On-Premise API
# - Self-hosted
# - More control
# - Higher complexity

# 2. Register with a BSP (e.g., Twilio, MessageBird, or direct with Meta)

# 3. Complete business verification
# - Submit business documents
# - Verify phone number ownership
# - Wait for approval (24-48 hours)`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: CRM Preparation</h2>
            
            <div className="space-y-4 my-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold mb-2">Salesforce</h3>
                <p className="text-gray-700">Enable API access, create custom fields for WhatsApp data, set up Connected App</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">HubSpot</h3>
                <p className="text-gray-700">Generate API key, create custom properties, configure webhooks</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">Pipedrive</h3>
                <p className="text-gray-700">Create API token, set up custom fields, enable activity tracking</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold mb-2">Custom CRM</h3>
                <p className="text-gray-700">Expose REST APIs, implement webhook endpoints, ensure data models support messaging</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Building the Integration</h2>
            
            <div className="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
              <pre className="text-sm">
<code className="language-javascript">{`// Basic integration architecture
const express = require('express');
const axios = require('axios');
const app = express();

// WhatsApp webhook endpoint
app.post('/webhook/whatsapp', async (req, res) => {
  const { messages, contacts } = req.body;
  
  if (messages && messages.length > 0) {
    const message = messages[0];
    const contact = contacts[0];
    
    // Process incoming message
    await processIncomingMessage({
      from: message.from,
      text: message.text?.body,
      timestamp: message.timestamp,
      contact: contact
    });
  }
  
  res.sendStatus(200);
});

// Process and sync to CRM
async function processIncomingMessage(data) {
  // 1. Find or create contact in CRM
  const crmContact = await findOrCreateContact(data.from, data.contact);
  
  // 2. Log message as activity
  await createActivity(crmContact.id, {
    type: 'whatsapp_message',
    content: data.text,
    timestamp: data.timestamp,
    direction: 'inbound'
  });
  
  // 3. Trigger any automation rules
  await triggerAutomation(crmContact.id, data);
}

// Send WhatsApp message from CRM
async function sendWhatsAppMessage(phoneNumber, message, templateName) {
  const endpoint = 'https://graph.facebook.com/v17.0/{phone-number-id}/messages';
  
  const payload = templateName ? {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'template',
    template: {
      name: templateName,
      language: { code: 'en_US' }
    }
  } : {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'text',
    text: { body: message }
  };
  
  const response = await axios.post(endpoint, payload, {
    headers: {
      'Authorization': \`Bearer \${process.env.WHATSAPP_TOKEN}\`,
      'Content-Type': 'application/json'
    }
  });
  
  return response.data;
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Advanced Integration Features</h2>
            
            <div className="space-y-6 my-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">1. Two-Way Sync</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Real-time message synchronization</li>
                  <li>Contact property updates</li>
                  <li>Status sync (read receipts)</li>
                  <li>Media file handling</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">2. Automation Triggers</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Welcome messages for new contacts</li>
                  <li>Order status updates</li>
                  <li>Appointment reminders</li>
                  <li>Follow-up sequences</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">3. Template Management</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Sync approved templates to CRM</li>
                  <li>Dynamic variable replacement</li>
                  <li>Multi-language support</li>
                  <li>A/B testing capabilities</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Security & Compliance</h2>
            
            <div className="bg-red-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Critical Security Measures:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Encryption:</strong> End-to-end encryption for all data in transit</li>
                <li><strong>Authentication:</strong> Implement webhook signature verification</li>
                <li><strong>Data Privacy:</strong> Comply with GDPR, CCPA requirements</li>
                <li><strong>Access Control:</strong> Role-based permissions for WhatsApp access</li>
                <li><strong>Audit Logs:</strong> Track all message access and modifications</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Common Integration Patterns</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Customer Support</h4>
                <p className="text-sm text-gray-700">Route WhatsApp messages to support tickets, auto-assign to agents, track resolution time</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Sales Engagement</h4>
                <p className="text-sm text-gray-700">Lead capture via WhatsApp, qualification workflows, deal tracking</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Marketing Automation</h4>
                <p className="text-sm text-gray-700">Broadcast campaigns, segmented messaging, engagement tracking</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Order Management</h4>
                <p className="text-sm text-gray-700">Order confirmations, shipping updates, delivery notifications</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Troubleshooting Common Issues</h2>
            
            <div className="space-y-4 my-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Message Delivery Failures</h3>
                <p className="text-gray-700">Check template approval status, verify phone number format, ensure 24-hour window for session messages</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-700">Sync Delays</h3>
                <p className="text-gray-700">Implement retry logic, use message queues, monitor webhook performance</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-700">Rate Limiting</h3>
                <p className="text-gray-700">Implement exponential backoff, respect API limits, use bulk endpoints where available</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Measuring Integration Success</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Key Metrics to Track:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Technical Metrics</h4>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• Message delivery rate</li>
                    <li>• API response time</li>
                    <li>• Sync success rate</li>
                    <li>• Error frequency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Business Metrics</h4>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• Response time improvement</li>
                    <li>• Conversation-to-conversion rate</li>
                    <li>• Customer satisfaction scores</li>
                    <li>• Agent productivity gains</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps: Scaling Your Integration</h2>
            
            <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
              <li><strong>Add AI Capabilities:</strong> Implement chatbots for common queries</li>
              <li><strong>Multi-Channel Orchestration:</strong> Integrate other messaging channels</li>
              <li><strong>Advanced Analytics:</strong> Build custom dashboards and reports</li>
              <li><strong>Workflow Automation:</strong> Create complex multi-step automations</li>
              <li><strong>Custom UI:</strong> Build WhatsApp conversation view within CRM</li>
            </ol>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-semibold mb-4">Need Help with Your WhatsApp CRM Integration?</h3>
              <p className="text-gray-700 mb-6">
                Let Zifty's integration experts help you build a seamless WhatsApp-CRM connection that drives real results.
              </p>
              <a href="https://wa.me/919999637444?text=Hi%2C%20I%20read%20your%20guide%20on%20WhatsApp%20CRM%20integration%20and%20need%20help%20implementing%20it%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Integration Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/whatsapp-business-api" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-2.jpg" 
                  alt="WhatsApp Business API" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">Guide</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Complete WhatsApp Business API Guide</h3>
                <p className="text-gray-600">Everything you need to know about WhatsApp API.</p>
              </div>
            </Link>

            <Link to="/blog/integrating-ai-legacy-systems" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-ai-integration.jpg" 
                  alt="AI Legacy Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Integration</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Integrating AI with Legacy Systems</h3>
                <p className="text-gray-600">Modern AI meets traditional infrastructure.</p>
              </div>
            </Link>

            <Link to="/blog/api-best-practices" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-api.jpg" 
                  alt="API Best Practices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">Development</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">API Integration Best Practices</h3>
                <p className="text-gray-600">Build robust and scalable integrations.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegratingWhatsAppCRM;