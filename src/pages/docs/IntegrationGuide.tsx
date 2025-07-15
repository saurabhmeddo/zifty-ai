import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const IntegrationGuide: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <Link to="/docs" className="text-white/80 hover:text-white">← Back to Documentation</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integration Guides</h1>
          <p className="text-xl max-w-3xl">
            Step-by-step guides for integrating Zifty with popular platforms and communication channels.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* WhatsApp Integration */}
          <div id="whatsapp" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">WhatsApp Business API Integration</h2>
            <p className="text-gray-600 text-lg mb-8">
              Connect your WhatsApp Business account to enable AI-powered messaging on the world's most popular messaging platform.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Verified WhatsApp Business Account</li>
                  <li>Facebook Business Manager access</li>
                  <li>Zifty API credentials</li>
                  <li>SSL-enabled webhook endpoint (we provide this)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 1: Configure WhatsApp Business</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Log in to your Facebook Business Manager</li>
                    <li>Navigate to WhatsApp Business Settings</li>
                    <li>Generate your WhatsApp API token</li>
                    <li>Copy your Phone Number ID</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 2: Connect to Zifty</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-4 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`// Configure WhatsApp channel
const whatsappConfig = {
  channel: 'whatsapp',
  credentials: {
    phoneNumberId: 'YOUR_PHONE_NUMBER_ID',
    accessToken: 'YOUR_WHATSAPP_TOKEN',
    businessId: 'YOUR_BUSINESS_ID'
  }
};

await client.channels.configure(whatsappConfig);`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 3: Test Your Integration</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-4 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`// Send a test message
const testMessage = await client.messages.send({
  channel: 'whatsapp',
  to: '+1234567890',
  message: {
    type: 'text',
    content: 'Hello! This is a test message from Zifty.'
  }
});

console.log('Test message sent:', testMessage.messageId);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Website Chat Integration */}
          <div id="website-chat" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Website Chat Widget Integration</h2>
            <p className="text-gray-600 text-lg mb-8">
              Add an AI-powered chat widget to your website in minutes.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Quick Installation</h3>
                <p className="text-gray-600 mb-4">Add this code snippet before the closing </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-4 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`<!-- Zifty Chat Widget -->
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://cdn.zifty.ai/widget.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','ziftyChat','YOUR_WIDGET_ID');
</script>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Customization Options</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-4 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`// Customize the chat widget
window.ziftyChat.config({
  position: 'bottom-right',
  primaryColor: '#2563eb',
  greeting: 'Hi! How can I help you today?',
  avatar: 'https://your-domain.com/avatar.png',
  language: 'en',
  aiPersonality: 'professional' // or 'friendly', 'casual'
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* In-App Chat Integration */}
          <div id="in-app-chat" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">In-App Chat SDK Integration</h2>
            <p className="text-gray-600 text-lg mb-8">
              Embed Zifty's AI chat capabilities directly into your mobile or web application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">React Native</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`npm install @zifty/react-native-sdk

import { ZiftyChat } from '@zifty/react-native-sdk';

<ZiftyChat
  apiKey="YOUR_API_KEY"
  userId="user_123"
  theme={{
    primaryColor: '#2563eb',
    fontFamily: 'System'
  }}
/>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">iOS (Swift)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`// Install via CocoaPods
pod 'ZiftySDK'

// Initialize
import ZiftySDK

ZiftyChat.initialize(
  apiKey: "YOUR_API_KEY",
  userId: "user_123"
)

// Present chat
ZiftyChat.present(from: self)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* CRM Integration */}
          <div id="crm" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">CRM Integration</h2>
            <p className="text-gray-600 text-lg mb-8">
              Connect Zifty with your CRM to sync conversations and customer data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Salesforce</h3>
                <p className="text-gray-600 mb-4">Native integration with Salesforce CRM</p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20integrating%20Zifty%20with%20Salesforce." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Setup Guide →
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">HubSpot</h3>
                <p className="text-gray-600 mb-4">Sync contacts and conversations with HubSpot</p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20integrating%20Zifty%20with%20HubSpot." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Setup Guide →
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Custom CRM</h3>
                <p className="text-gray-600 mb-4">Use our API to integrate with any CRM</p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20integrating%20Zifty%20with%20our%20custom%20CRM." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Contact Support →
                </a>
              </div>
            </div>
          </div>

          {/* Voice Integration */}
          <div id="voice" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Voice & Call Integration</h2>
            <p className="text-gray-600 text-lg mb-8">
              Enable AI-powered voice interactions for inbound and outbound calls.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Supported Providers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-semibold">Twilio</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-semibold">Vonage</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-semibold">Amazon Connect</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-semibold">Custom SIP</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Voice Configuration</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`// Configure voice channel
const voiceConfig = {
  channel: 'voice',
  provider: 'twilio',
  credentials: {
    accountSid: 'YOUR_ACCOUNT_SID',
    authToken: 'YOUR_AUTH_TOKEN',
    phoneNumber: '+1234567890'
  },
  aiSettings: {
    voice: 'neural-english-female',
    personality: 'professional',
    interruptionHandling: true
  }
};

await client.channels.configure(voiceConfig);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Integration?</h2>
            <p className="text-gray-600 mb-6">
              Our integration experts are here to help you get set up quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20with%20Zifty%20integration." target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Integration Support
                </Button>
              </a>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20schedule%20an%20integration%20consultation%20for%20Zifty." target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationGuide;