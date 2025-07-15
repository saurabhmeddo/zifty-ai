import React from 'react';
import { Button } from '../components/ui/button';

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Solutions for Every Business Need
              </h1>
              <p className="text-xl mb-8">
                Discover how Zifty's AI communication platform can be tailored to solve specific challenges across various industries and use cases.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <img 
                  src="/solutions-illustration.jpg" 
                  alt="Zifty Solutions" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Zifty adapts to the unique requirements of different industries, providing tailored AI communication solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Streamline patient communication, appointment scheduling, and follow-up care with HIPAA-compliant AI interactions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Appointment scheduling and reminders</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Medication adherence support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Patient intake and triage</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Healthcare%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Financial Services */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Enhance customer service and financial guidance while maintaining security and compliance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Account inquiries and balance checks</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Fraud alerts and verification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Financial product recommendations</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Financial%20Services%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Retail & E-commerce */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Elevate the shopping experience with personalized recommendations and efficient customer service.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Product recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Order status updates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Return and exchange processing</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Retail%20%26%20E-commerce%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Travel & Hospitality */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22h20"></path>
                  <path d="M6 18V2"></path>
                  <path d="M18 18V2"></path>
                  <path d="M6 10h12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel & Hospitality</h3>
              <p className="text-gray-600 mb-4">
                Deliver exceptional guest experiences with automated booking, concierge services, and support.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Reservation management</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Travel itinerary assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Local recommendations and concierge</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Travel%20%26%20Hospitality%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-600 hover:text-yellow-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Real Estate */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 text-red-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Streamline property inquiries, viewings, and client communication throughout the buying process.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Property matching and recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Viewing scheduling and follow-ups</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Document collection and processing</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Real%20Estate%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Education */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600 mb-4">
                Enhance student engagement and administrative efficiency with AI-powered communication.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Enrollment and admissions support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Course registration assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Student services and information</span>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20Education%20solutions" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Categories Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Use Case Categories</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore how Zifty can be applied to various business functions across your organization.
            </p>
          </div>

          <div className="space-y-12">
            {/* Customer Support */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Customer Support</h3>
                  <p className="text-gray-600">
                    Transform your customer service with AI-powered support that's available 24/7 and can handle multiple inquiries simultaneously.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Ticket Resolution</h4>
                      <p className="text-gray-600 text-sm">
                        Automatically resolve common customer issues without human intervention, reducing wait times and improving satisfaction.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Knowledge Base Integration</h4>
                      <p className="text-gray-600 text-sm">
                        Connect Zifty to your knowledge base to provide accurate answers based on your documentation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Multilingual Support</h4>
                      <p className="text-gray-600 text-sm">
                        Provide support in multiple languages to serve a global customer base without additional staffing.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Escalation Management</h4>
                      <p className="text-gray-600 text-sm">
                        Intelligently escalate complex issues to human agents with full context of the conversation.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Customer%20Support%20Solutions" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Explore Customer Support Solutions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Automation */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Sales Automation</h3>
                  <p className="text-gray-600">
                    Accelerate your sales process with AI-powered conversations that qualify leads, answer product questions, and guide prospects through the sales funnel.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Lead Qualification</h4>
                      <p className="text-gray-600 text-sm">
                        Automatically qualify leads through natural conversation, ensuring sales teams focus on high-potential prospects.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Product Recommendations</h4>
                      <p className="text-gray-600 text-sm">
                        Suggest relevant products based on customer needs and preferences identified through conversation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Outbound Sales Calls</h4>
                      <p className="text-gray-600 text-sm">
                        Conduct initial outreach calls to warm leads, qualifying them before human follow-up.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Deal Progression</h4>
                      <p className="text-gray-600 text-sm">
                        Guide prospects through the sales process with timely follow-ups and relevant information.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Sales%20Automation%20Solutions" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Explore Sales Automation Solutions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Booking */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Appointment Booking</h3>
                  <p className="text-gray-600">
                    Streamline scheduling by allowing customers to book, reschedule, or cancel appointments through natural conversations.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Calendar Integration</h4>
                      <p className="text-gray-600 text-sm">
                        Connect with your existing calendar systems to manage availability in real-time.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Automated Reminders</h4>
                      <p className="text-gray-600 text-sm">
                        Send timely reminders to reduce no-shows and improve appointment attendance.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Rescheduling Management</h4>
                      <p className="text-gray-600 text-sm">
                        Handle changes and cancellations smoothly, automatically offering alternative times.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pre-appointment Information</h4>
                      <p className="text-gray-600 text-sm">
                        Collect necessary information before appointments to maximize efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Appointment%20Booking%20Solutions" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Explore Appointment Booking Solutions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Qualification */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Lead Qualification</h3>
                  <p className="text-gray-600">
                    Engage with potential customers, gather relevant information, and qualify leads before routing to sales teams.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">BANT Assessment</h4>
                      <p className="text-gray-600 text-sm">
                        Evaluate Budget, Authority, Need, and Timeline through natural conversation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Scoring & Prioritization</h4>
                      <p className="text-gray-600 text-sm">
                        Automatically score and prioritize leads based on qualification criteria.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">CRM Integration</h4>
                      <p className="text-gray-600 text-sm">
                        Update your CRM with lead information and qualification status in real-time.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Intelligent Routing</h4>
                      <p className="text-gray-600 text-sm">
                        Route qualified leads to the appropriate sales representatives based on expertise and territory.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Lead%20Qualification%20Solutions" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-yellow-600 hover:bg-yellow-700">
                        Explore Lead Qualification Solutions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See how organizations across industries have transformed their customer communication with Zifty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/healthcare-case-study.jpg" 
                  alt="HealthFirst Clinic Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">Healthcare</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">HealthFirst Clinic Reduces No-Shows by 60%</h3>
                <p className="text-gray-600 mb-4">
                  HealthFirst implemented Zifty's appointment booking and reminder system, resulting in a significant reduction in missed appointments and improved patient satisfaction.
                </p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20read%20the%20HealthFirst%20Clinic%20case%20study" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/finance-case-study.jpg" 
                  alt="Global Bank Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Financial Services</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Bank Improves Customer Service Efficiency by 45%</h3>
                <p className="text-gray-600 mb-4">
                  By implementing Zifty's AI communication platform, Global Bank automated routine inquiries and reduced wait times, leading to higher customer satisfaction scores.
                </p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20read%20the%20Global%20Bank%20case%20study" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-700">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/retail-case-study.jpg" 
                  alt="ShopSmart Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">Retail</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ShopSmart Increases Conversion Rates by 35%</h3>
                <p className="text-gray-600 mb-4">
                  ShopSmart implemented Zifty's sales automation solution to engage website visitors, resulting in higher conversion rates and increased average order value.
                </p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20read%20the%20ShopSmart%20case%20study" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-700">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/education-case-study.jpg" 
                  alt="Metro University Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">Education</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metro University Streamlines Admissions Process</h3>
                <p className="text-gray-600 mb-4">
                  Metro University deployed Zifty to handle admissions inquiries and application support, resulting in a 50% reduction in processing time and improved applicant experience.
                </p>
                <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20read%20the%20Metro%20University%20case%20study" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-700">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Zifty%27s%20case%20studies%20and%20success%20stories" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Case Studies
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Custom Enterprise Solutions Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Enterprise Solutions</h2>
              <p className="text-gray-600 text-lg mb-6">
                Every business has unique challenges and requirements. Our team works closely with you to develop tailored AI communication solutions that address your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Needs Assessment</h4>
                    <p className="text-gray-600">We analyze your current processes and identify opportunities for AI-powered communication.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Custom Development</h4>
                    <p className="text-gray-600">Our team develops tailored solutions that integrate seamlessly with your existing systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Implementation & Training</h4>
                    <p className="text-gray-600">We ensure smooth deployment and provide comprehensive training for your team.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ongoing Support</h4>
                    <p className="text-gray-600">Our team provides continuous support and optimization to ensure long-term success.</p>
                  </div>
                </li>
              </ul>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20custom%20enterprise%20solution%20for%20my%20business" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Custom Solution
                </Button>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <img 
                  src="/custom-solution-diagram.jpg" 
                  alt="Custom Enterprise Solution Process" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Communication?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the businesses that are using Zifty to provide exceptional customer experiences through AI-powered communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20request%20a%20demo%20of%20Zifty%27s%20AI%20communication%20platform" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Request Demo
              </Button>
            </a>
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20Zifty%27s%20solutions" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
