import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Help: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl max-w-3xl">
            Find answers to your questions and get the support you need to make the most of Zifty.
          </p>
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 rounded-lg text-gray-800 pr-12 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/docs/getting-started" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-600">Quick start guides and tutorials to get you up and running.</p>
            </Link>

            <Link to="/docs/api" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">API Documentation</h3>
              <p className="text-gray-600">Complete API reference with examples and best practices.</p>
            </Link>

            <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20with%20my%20Zifty%20account%20management." target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Account Management</h3>
              <p className="text-gray-600">Manage your account, billing, and team settings.</p>
            </a>

            <Link to="/docs/integration-guide" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h8"></path>
                  <path d="M16 7l4 4-4 4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrations</h3>
              <p className="text-gray-600">Connect Zifty with your existing tools and platforms.</p>
            </Link>

            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20experiencing%20technical%20issues%20with%20Zifty%20and%20need%20help%20troubleshooting." target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-red-100 text-red-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
              <p className="text-gray-600">Solutions to common issues and error messages.</p>
            </a>

            <a href="https://wa.me/919220504402?text=Hi%2C%20I%20have%20questions%20about%20Zifty%27s%20security%20and%20compliance%20features." target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">Learn about our security measures and compliance certifications.</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do I get started with Zifty?</h3>
              <p className="text-gray-600">
                Getting started is easy! Simply create an account, obtain your API keys from the dashboard, and follow our quick start guide to integrate Zifty into your application.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What communication channels does Zifty support?</h3>
              <p className="text-gray-600">
                Zifty supports WhatsApp, SMS, voice calls (inbound and outbound), website chat widgets, and in-app chat integration for mobile and web applications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Can Zifty integrate with my existing CRM?</h3>
              <p className="text-gray-600">
                Yes! Zifty offers pre-built integrations for popular CRMs like Salesforce and HubSpot, and our flexible API allows custom integration with any system.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Is Zifty compliant with data privacy regulations?</h3>
              <p className="text-gray-600">
                Absolutely. Zifty is compliant with GDPR, HIPAA, SOC 2, and other major data privacy regulations. We take security and compliance seriously.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What kind of support is available?</h3>
              <p className="text-gray-600">
                We offer 24/7 support for Enterprise customers, business hours support for Professional plans, and comprehensive documentation for all users. Our support team is always ready to help.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%20couldn%27t%20find%20the%20answer%20to%20my%20question%20in%20the%20help%20center." target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and API references.</p>
              <Link to="/docs" className="text-blue-600 hover:text-blue-700 font-medium">
                View Documentation →
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Blog</h3>
              <p className="text-gray-600 mb-4">Latest insights and best practices.</p>
              <Link to="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                Read Blog →
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600 mb-4">Connect with other Zifty users.</p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20join%20the%20Zifty%20community." target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl mb-8">
            Our support team is here to assist you with any questions or issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <h3 className="font-semibold mb-2">WhatsApp Support</h3>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm opacity-90">support@zifty.ai</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm opacity-90">Enterprise only</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%20need%20help%20with%20Zifty." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Support Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;