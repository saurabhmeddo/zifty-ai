import React from 'react';
import { Button } from '../components/ui/button';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose the plan that's right for your business. Scale your AI communication capabilities as your needs grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Starter</h2>
                <p className="text-gray-600 mb-4">Perfect for small businesses</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Up to 1,000 conversations/month</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">2 communication channels</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Basic API integration</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Standard support</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Basic analytics</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border-2 border-blue-500 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Professional</h2>
                <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">$1,499</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Up to 5,000 conversations/month</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">All communication channels</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced API integration</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Priority support</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced analytics & reporting</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom conversation flows</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
                <p className="text-gray-600 mb-4">For large organizations</p>
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold">Custom Pricing</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited conversations</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">All communication channels</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom API integration</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated support team</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom AI model training</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">On-premise deployment options</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Compare our plans to find the perfect fit for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-600">Features</th>
                  <th className="px-6 py-4 text-center">Starter</th>
                  <th className="px-6 py-4 text-center bg-blue-50">Professional</th>
                  <th className="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Monthly Conversations</td>
                  <td className="px-6 py-4 text-center">1,000</td>
                  <td className="px-6 py-4 text-center bg-blue-50">5,000</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Communication Channels</td>
                  <td className="px-6 py-4 text-center">2</td>
                  <td className="px-6 py-4 text-center bg-blue-50">All</td>
                  <td className="px-6 py-4 text-center">All</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">WhatsApp Integration</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Website Chat</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">In-App Chat</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Voice Communication</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Phone Calls</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">API Integration</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center bg-blue-50">Advanced</td>
                  <td className="px-6 py-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Analytics</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center bg-blue-50">Advanced</td>
                  <td className="px-6 py-4 text-center">Enterprise</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Support</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center bg-blue-50">Priority</td>
                  <td className="px-6 py-4 text-center">Dedicated</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Custom AI Training</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">On-premise Deployment</td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-red-600">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Enhance your plan with these additional features to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Additional Conversations</h3>
              <p className="text-gray-600 mb-4">
                Increase your monthly conversation limit to handle higher volumes of customer interactions.
              </p>
              <div className="text-lg font-semibold mb-4">$199 per 1,000 conversations</div>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Add to Plan
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Reporting</h3>
              <p className="text-gray-600 mb-4">
                Gain deeper insights with custom reports, dashboards, and data export capabilities.
              </p>
              <div className="text-lg font-semibold mb-4">$299 per month</div>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Add to Plan
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Success Manager</h3>
              <p className="text-gray-600 mb-4">
                Get personalized support and strategic guidance from a dedicated customer success manager.
              </p>
              <div className="text-lg font-semibold mb-4">$499 per month</div>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Add to Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How do you count conversations?</h3>
              <p className="text-gray-600">
                A conversation is defined as a complete interaction with a user, which may include multiple messages back and forth. Each new user interaction after a 30-minute period of inactivity is counted as a new conversation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I switch plans at any time?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial of our Professional plan so you can experience the full capabilities of Zifty before making a commitment. No credit card is required to start your trial.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What happens if I exceed my conversation limit?</h3>
              <p className="text-gray-600">
                If you exceed your monthly conversation limit, you'll be charged for additional conversations at the rate specified in the add-ons section. We'll notify you when you reach 80% of your limit so you can plan accordingly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">
                Yes, we offer a 15% discount when you choose annual billing instead of monthly billing. This option is available for all plans.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How does the Enterprise plan pricing work?</h3>
              <p className="text-gray-600">
                Enterprise plan pricing is customized based on your specific needs, including the number of conversations, required features, integration complexity, and support requirements. Contact our sales team for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Communication?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
