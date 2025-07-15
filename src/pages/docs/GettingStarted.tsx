import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const GettingStarted: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <Link to="/docs" className="text-white/80 hover:text-white">← Back to Documentation</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Getting Started with Zifty</h1>
          <p className="text-xl max-w-3xl">
            Follow this guide to integrate Zifty's AI-powered communication platform into your application in just a few steps.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* Step 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">1</span>
              Create Your Account
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Start by creating a Zifty account. You'll get access to your API keys and dashboard immediately.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="font-mono text-sm">
                1. Visit our registration page<br/>
                2. Enter your business details<br/>
                3. Verify your email address<br/>
                4. Access your dashboard
              </p>
            </div>
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20create%20a%20Zifty%20account%20to%20get%20started." target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Account
              </Button>
            </a>
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">2</span>
              Get Your API Keys
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Navigate to your dashboard and generate your API keys. Keep your secret key secure.
            </p>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm">
{`// Your API credentials
const ZIFTY_API_KEY = 'your_api_key_here';
const ZIFTY_SECRET = 'your_secret_key_here';`}
              </pre>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Security Note:</strong> Never expose your secret key in client-side code or public repositories.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">3</span>
              Install the SDK
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Choose your preferred programming language and install the Zifty SDK.
            </p>
            
            {/* JavaScript/Node.js */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">JavaScript/Node.js</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm">npm install @zifty/sdk</pre>
              </div>
            </div>

            {/* Python */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Python</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm">pip install zifty-sdk</pre>
              </div>
            </div>

            {/* Java */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Java</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm">
{`<dependency>
  <groupId>com.zifty</groupId>
  <artifactId>zifty-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">4</span>
              Initialize the Client
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Initialize the Zifty client with your API credentials.
            </p>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm">
{`// JavaScript Example
import { ZiftyClient } from '@zifty/sdk';

const client = new ZiftyClient({
  apiKey: ZIFTY_API_KEY,
  secretKey: ZIFTY_SECRET,
  environment: 'production' // or 'sandbox' for testing
});`}
              </pre>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">5</span>
              Send Your First Message
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Start sending AI-powered messages through any supported channel.
            </p>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="font-mono text-sm">
{`// Send a WhatsApp message
const response = await client.messages.send({
  channel: 'whatsapp',
  to: '+1234567890',
  message: {
    type: 'text',
    content: 'Hello from Zifty!'
  },
  aiEnabled: true // Enable AI responses
});

console.log('Message sent:', response.messageId);`}
              </pre>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Explore API Reference</h3>
                <p className="text-gray-600 mb-3">Deep dive into all available endpoints and features.</p>
                <Link to="/docs/api" className="text-blue-600 hover:text-blue-700">View API Docs →</Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Integration Guides</h3>
                <p className="text-gray-600 mb-3">Learn how to integrate with specific platforms.</p>
                <Link to="/docs/integration-guide" className="text-blue-600 hover:text-blue-700">View Guides →</Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Configure Webhooks</h3>
                <p className="text-gray-600 mb-3">Set up webhooks to receive real-time events.</p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20configuring%20webhooks%20for%20my%20Zifty%20integration." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Learn More →
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Join Developer Community</h3>
                <p className="text-gray-600 mb-3">Connect with other developers using Zifty.</p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20join%20the%20Zifty%20developer%20community." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  Join Now →
                </a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is available to help you with any questions or issues.
            </p>
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20with%20getting%20started%20with%20Zifty." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;