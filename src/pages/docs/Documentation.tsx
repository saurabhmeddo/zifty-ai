import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const Documentation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl max-w-3xl">
            Everything you need to integrate and use Zifty's AI-powered communication platform.
          </p>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Getting Started */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Getting Started</h2>
              <p className="text-gray-600 mb-4">
                Quick start guides and tutorials to get you up and running with Zifty in minutes.
              </p>
              <Link to="/docs/getting-started" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Start Here
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* API Reference */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">API Reference</h2>
              <p className="text-gray-600 mb-4">
                Complete API documentation with endpoints, parameters, and code examples.
              </p>
              <Link to="/docs/api" className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                View API Docs
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Integration Guides */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h8"></path>
                  <path d="M16 7l4 4-4 4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Integration Guides</h2>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for integrating Zifty with popular platforms and systems.
              </p>
              <Link to="/docs/integration-guide" className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Explore Integrations
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* SDKs & Libraries */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="9"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">SDKs & Libraries</h2>
              <p className="text-gray-600 mb-4">
                Official SDKs for Python, JavaScript, Java, and more to accelerate development.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%20SDKs%20and%20libraries%20for%20my%20development%20project." target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
                Download SDKs
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Webhooks */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 text-red-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Webhooks</h2>
              <p className="text-gray-600 mb-4">
                Configure webhooks to receive real-time updates about events in your Zifty account.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20setting%20up%20webhooks%20for%20my%20Zifty%20integration." target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                Setup Webhooks
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Best Practices */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11H3"></path>
                  <path d="M21 11h-6"></path>
                  <path d="M12 11v8"></path>
                  <path d="M12 11l4-8"></path>
                  <path d="M12 11l-4-8"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Best Practices</h2>
              <p className="text-gray-600 mb-4">
                Learn best practices for implementing AI communication to maximize effectiveness.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20best%20practices%20for%20implementing%20Zifty%20AI%20communication." target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Quick Start Guide</h3>
              <p className="text-gray-600 mb-4">Get up and running with Zifty in under 10 minutes.</p>
              <Link to="/docs/getting-started" className="text-blue-600 hover:text-blue-700">Read Guide →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">API Authentication</h3>
              <p className="text-gray-600 mb-4">Learn how to authenticate your API requests.</p>
              <Link to="/docs/api#authentication" className="text-blue-600 hover:text-blue-700">View Docs →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">WhatsApp Integration</h3>
              <p className="text-gray-600 mb-4">Step-by-step guide to integrate WhatsApp messaging.</p>
              <Link to="/docs/integration-guide#whatsapp" className="text-blue-600 hover:text-blue-700">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Error Handling</h3>
              <p className="text-gray-600 mb-4">Best practices for handling errors and exceptions.</p>
              <Link to="/docs/api#errors" className="text-blue-600 hover:text-blue-700">View Guide →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8">
            Our technical support team is here to help you with any questions or issues.
          </p>
          <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20technical%20support%20with%20Zifty%20documentation%20and%20implementation." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Support
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Documentation;