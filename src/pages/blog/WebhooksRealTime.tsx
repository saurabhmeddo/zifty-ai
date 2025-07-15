import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const WebhooksRealTime: React.FC = () => {
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
            <span className="text-gray-500 text-sm ml-4">February 10, 2025 • 9 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Webhooks and Real-Time Events: Building Responsive Communication Systems
          </h1>
          
          <div className="flex items-center mb-8">
            <img 
              src="/author-avatar.jpg" 
              alt="Kevin Patel" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Kevin Patel</p>
              <p className="text-gray-500 text-sm">Backend Architecture Lead at Zifty</p>
            </div>
          </div>
          
          <img 
            src="/blog-webhooks.jpg" 
            alt="Webhooks and Real-Time Events" 
            className="w-full h-auto rounded-xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              In the world of instant communication, "real-time" isn't just a feature—it's an expectation. When a customer sends a message, your systems need to know immediately. When an order status changes, notifications should fire instantly. Webhooks are the nervous system of modern communication platforms, and mastering them is key to building responsive, event-driven architectures.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Webhooks: Push vs. Pull</h2>
            <p className="text-gray-700 mb-4">
              Traditional APIs require constant polling—checking repeatedly for new data. Webhooks flip this model: instead of asking "anything new?", systems tell you "something happened!"
            </p>
            
            <div className="bg-orange-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">The Power of Push:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">❌ Polling (Inefficient)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Check every 30 seconds</li>
                    <li>• 99% of requests return nothing</li>
                    <li>• Wastes resources</li>
                    <li>• Up to 30-second delay</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">✅ Webhooks (Efficient)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Instant notification</li>
                    <li>• Only sends when needed</li>
                    <li>• Minimal resource usage</li>
                    <li>• Real-time updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Webhook Architecture Fundamentals</h2>
            
            <div className="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
              <pre className="text-sm">
<code className="language-javascript">{`// Basic webhook receiver implementation
const express = require('express');
const crypto = require('crypto');
const app = express();

// Webhook endpoint
app.post('/webhooks/messages', express.raw({type: 'application/json'}), (req, res) => {
  // 1. Verify webhook signature
  const signature = req.headers['x-webhook-signature'];
  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(req.body)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }
  
  // 2. Parse event data
  const event = JSON.parse(req.body);
  
  // 3. Acknowledge receipt immediately
  res.status(200).send('OK');
  
  // 4. Process event asynchronously
  processWebhookEvent(event).catch(console.error);
});

// Async event processing
async function processWebhookEvent(event) {
  switch(event.type) {
    case 'message.received':
      await handleIncomingMessage(event.data);
      break;
    case 'message.delivered':
      await updateMessageStatus(event.data);
      break;
    case 'conversation.started':
      await initializeConversation(event.data);
      break;
    default:
      console.log('Unknown event type:', event.type);
  }
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Essential Webhook Security</h2>
            
            <div className="bg-red-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Security Best Practices:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Signature Verification:</strong> Always validate webhook authenticity using HMAC</li>
                <li><strong>HTTPS Only:</strong> Never accept webhooks over unencrypted connections</li>
                <li><strong>IP Whitelisting:</strong> Restrict webhook sources when possible</li>
                <li><strong>Timestamp Validation:</strong> Reject old events to prevent replay attacks</li>
                <li><strong>Rate Limiting:</strong> Protect against webhook flooding</li>
                <li><strong>Secret Rotation:</strong> Regularly update webhook secrets</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Common Webhook Patterns</h2>
            
            <div className="space-y-6 my-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">1. Fire and Forget</h3>
                <p className="text-gray-700 mb-2">Simple notification without expecting response:</p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  Event → Webhook → 200 OK → Process async
                </div>
                <p className="text-sm text-gray-600 mt-2">Use for: Status updates, notifications, logging</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">2. Request-Response</h3>
                <p className="text-gray-700 mb-2">Webhook expects data in response:</p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  Event → Webhook → Process → Return data
                </div>
                <p className="text-sm text-gray-600 mt-2">Use for: Validation, enrichment, routing decisions</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">3. Chain Reaction</h3>
                <p className="text-gray-700 mb-2">One webhook triggers multiple actions:</p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  Event → Webhook → Action 1 + Action 2 + Action 3
                </div>
                <p className="text-sm text-gray-600 mt-2">Use for: Complex workflows, multi-system updates</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Handling Webhook Failures</h2>
            
            <div className="bg-yellow-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Robust Retry Strategy:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-3">1.</span>
                  <div>
                    <strong>Exponential Backoff:</strong> 1s → 2s → 4s → 8s → 16s
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-3">2.</span>
                  <div>
                    <strong>Maximum Attempts:</strong> Typically 3-5 retries
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-3">3.</span>
                  <div>
                    <strong>Dead Letter Queue:</strong> Store failed webhooks for manual review
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-3">4.</span>
                  <div>
                    <strong>Circuit Breaker:</strong> Temporarily disable failing endpoints
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Real-Time Event Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Message Events</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• message.sent</li>
                  <li>• message.delivered</li>
                  <li>• message.read</li>
                  <li>• message.failed</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Conversation Events</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• conversation.started</li>
                  <li>• conversation.assigned</li>
                  <li>• conversation.resolved</li>
                  <li>• conversation.reopened</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">User Events</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• user.created</li>
                  <li>• user.updated</li>
                  <li>• user.blocked</li>
                  <li>• user.unsubscribed</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">System Events</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• agent.available</li>
                  <li>• queue.threshold</li>
                  <li>• system.alert</li>
                  <li>• integration.error</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Webhook Testing Strategies</h2>
            
            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Development Best Practices:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Local Testing:</strong> Use ngrok or similar tools for local webhook development</li>
                <li><strong>Mock Events:</strong> Create test fixtures for all event types</li>
                <li><strong>Failure Simulation:</strong> Test timeout, error, and retry scenarios</li>
                <li><strong>Load Testing:</strong> Ensure webhook endpoint can handle burst traffic</li>
                <li><strong>Monitoring:</strong> Set up alerts for webhook failures and latency</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Scaling Webhook Infrastructure</h2>
            
            <div className="space-y-4 my-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Queue Everything</h3>
                  <p className="text-gray-700">Use message queues (RabbitMQ, SQS) to decouple receipt from processing</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Horizontal Scaling</h3>
                  <p className="text-gray-700">Deploy multiple webhook receivers behind a load balancer</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Idempotency</h3>
                  <p className="text-gray-700">Ensure webhook processing is idempotent for safe retries</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Event Sourcing</h3>
                  <p className="text-gray-700">Store all events for replay, debugging, and audit trails</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Real-World Implementation</h2>
            
            <div className="bg-purple-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">E-commerce Platform Case Study:</h3>
              <p className="text-gray-700 mb-3">
                Implemented webhook-driven order notifications:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>10M+ webhooks processed daily</li>
                <li>99.99% delivery success rate</li>
                <li>&lt;100ms average processing time</li>
                <li>Real-time updates across 15 systems</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                "Webhooks transformed our architecture from batch processing to real-time responsiveness." - Lead Architect
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Webhook Best Practices Checklist</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Implement signature verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Respond quickly (&lt; 5 seconds)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Process asynchronously</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Handle duplicates gracefully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Implement proper retry logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Monitor webhook health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Document all event types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Version your webhook APIs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-semibold mb-4">Build Real-Time, Event-Driven Communication</h3>
              <p className="text-gray-700 mb-6">
                Implement robust webhook infrastructure with Zifty's battle-tested real-time event system.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%20read%20your%20article%20on%20webhooks%20and%20real-time%20events%20and%20want%20to%20implement%20event-driven%20communication%20for%20our%20platform." target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Get Started with Webhooks
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
            <Link to="/blog/api-first-strategy" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-api.jpg" 
                  alt="API-First Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">Integration</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">API-First Strategy</h3>
                <p className="text-gray-600">Building future-proof infrastructure.</p>
              </div>
            </Link>

            <Link to="/blog/integrating-whatsapp-crm" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-2.jpg" 
                  alt="WhatsApp CRM Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">Integration</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">WhatsApp CRM Integration</h3>
                <p className="text-gray-600">Complete technical guide.</p>
              </div>
            </Link>

            <Link to="/blog/real-time-analytics" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-analytics.jpg" 
                  alt="Real-Time Analytics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Analytics</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Real-Time Analytics Dashboard</h3>
                <p className="text-gray-600">Monitor communication metrics live.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebhooksRealTime;