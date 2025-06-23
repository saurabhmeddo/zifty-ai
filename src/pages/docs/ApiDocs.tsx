import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const ApiDocs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <Link to="/docs" className="text-white/80 hover:text-white">← Back to Documentation</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>
          <p className="text-xl max-w-3xl">
            Complete reference for the Zifty API, including authentication, endpoints, and code examples.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <h3 className="font-semibold mb-4 text-gray-500 uppercase text-sm">Contents</h3>
                <nav className="space-y-2">
                  <a href="#authentication" className="block text-gray-700 hover:text-blue-600 py-1">Authentication</a>
                  <a href="#messages" className="block text-gray-700 hover:text-blue-600 py-1">Messages API</a>
                  <a href="#conversations" className="block text-gray-700 hover:text-blue-600 py-1">Conversations API</a>
                  <a href="#contacts" className="block text-gray-700 hover:text-blue-600 py-1">Contacts API</a>
                  <a href="#webhooks" className="block text-gray-700 hover:text-blue-600 py-1">Webhooks</a>
                  <a href="#errors" className="block text-gray-700 hover:text-blue-600 py-1">Error Handling</a>
                  <a href="#rate-limits" className="block text-gray-700 hover:text-blue-600 py-1">Rate Limits</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Authentication */}
              <div id="authentication" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Authentication</h2>
                <p className="text-gray-600 mb-6">
                  All API requests require authentication using your API key and secret. You can obtain these from your dashboard.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">API Key Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Include your API key in the request headers:
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`Authorization: Bearer YOUR_API_KEY
X-API-Secret: YOUR_SECRET_KEY`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-4">OAuth 2.0</h3>
                <p className="text-gray-600 mb-4">
                  For enhanced security, we also support OAuth 2.0 authentication:
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`POST /oauth/token
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}`}
                  </pre>
                </div>
              </div>

              {/* Messages API */}
              <div id="messages" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Messages API</h2>
                <p className="text-gray-600 mb-6">
                  Send and manage messages across all supported communication channels.
                </p>

                <h3 className="text-xl font-semibold mb-4">Send Message</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono">POST /api/v1/messages</code>
                </div>
                <p className="text-gray-600 mb-4">Send a message to a contact through any supported channel.</p>
                
                <h4 className="font-semibold mb-2">Request Body</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`{
  "channel": "whatsapp", // or "sms", "voice", "web"
  "to": "+1234567890",
  "message": {
    "type": "text",
    "content": "Hello from Zifty!"
  },
  "aiEnabled": true,
  "context": {
    "userId": "user_123",
    "sessionId": "session_456"
  }
}`}
                  </pre>
                </div>

                <h4 className="font-semibold mb-2">Response</h4>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`{
  "messageId": "msg_789",
  "status": "sent",
  "timestamp": "2025-01-15T10:30:00Z",
  "channel": "whatsapp",
  "to": "+1234567890"
}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Get Message Status</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono">GET /api/v1/messages/{`{messageId}`}</code>
                </div>
                <p className="text-gray-600 mb-4">Retrieve the status and details of a sent message.</p>
              </div>

              {/* Conversations API */}
              <div id="conversations" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Conversations API</h2>
                <p className="text-gray-600 mb-6">
                  Manage conversations and message threads with your contacts.
                </p>

                <h3 className="text-xl font-semibold mb-4">List Conversations</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono">GET /api/v1/conversations</code>
                </div>
                <p className="text-gray-600 mb-4">Retrieve a list of all conversations.</p>

                <h4 className="font-semibold mb-2">Query Parameters</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Parameter</th>
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2"><code>limit</code></td>
                        <td className="py-2">integer</td>
                        <td className="py-2">Maximum number of results (default: 20)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>offset</code></td>
                        <td className="py-2">integer</td>
                        <td className="py-2">Pagination offset (default: 0)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>channel</code></td>
                        <td className="py-2">string</td>
                        <td className="py-2">Filter by channel type</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contacts API */}
              <div id="contacts" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Contacts API</h2>
                <p className="text-gray-600 mb-6">
                  Manage your contacts and their communication preferences.
                </p>

                <h3 className="text-xl font-semibold mb-4">Create Contact</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono">POST /api/v1/contacts</code>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`{
  "phone": "+1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "channel": "whatsapp",
    "language": "en"
  }
}`}
                  </pre>
                </div>
              </div>

              {/* Webhooks */}
              <div id="webhooks" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Webhooks</h2>
                <p className="text-gray-600 mb-6">
                  Configure webhooks to receive real-time notifications about events in your Zifty account.
                </p>

                <h3 className="text-xl font-semibold mb-4">Webhook Events</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li><code>message.sent</code> - Message successfully sent</li>
                  <li><code>message.delivered</code> - Message delivered to recipient</li>
                  <li><code>message.read</code> - Message read by recipient</li>
                  <li><code>message.received</code> - Incoming message received</li>
                  <li><code>conversation.started</code> - New conversation initiated</li>
                  <li><code>conversation.ended</code> - Conversation closed</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Webhook Payload</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`{
  "event": "message.sent",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "messageId": "msg_789",
    "conversationId": "conv_123",
    "channel": "whatsapp",
    "to": "+1234567890"
  }
}`}
                  </pre>
                </div>
              </div>

              {/* Error Handling */}
              <div id="errors" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Error Handling</h2>
                <p className="text-gray-600 mb-6">
                  The API uses standard HTTP response codes to indicate success or failure.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Status Code</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2"><code>200 OK</code></td>
                        <td className="py-2">Request successful</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>201 Created</code></td>
                        <td className="py-2">Resource created successfully</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>400 Bad Request</code></td>
                        <td className="py-2">Invalid request parameters</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>401 Unauthorized</code></td>
                        <td className="py-2">Authentication failed</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>429 Too Many Requests</code></td>
                        <td className="py-2">Rate limit exceeded</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>500 Internal Server Error</code></td>
                        <td className="py-2">Server error</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rate Limits */}
              <div id="rate-limits" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Rate Limits</h2>
                <p className="text-gray-600 mb-6">
                  API requests are subject to rate limiting to ensure fair usage and platform stability.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Default Limits</h3>
                  <ul className="space-y-2">
                    <li><strong>Starter Plan:</strong> 1,000 requests per hour</li>
                    <li><strong>Professional Plan:</strong> 10,000 requests per hour</li>
                    <li><strong>Enterprise Plan:</strong> Custom limits</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  Rate limit information is included in response headers:
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                  <pre className="font-mono text-sm">
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642255200`}
                  </pre>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
                <p className="mb-6">Get your API keys and start integrating Zifty today.</p>
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20get%20API%20access%20to%20start%20building%20with%20Zifty." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get API Access
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocs;