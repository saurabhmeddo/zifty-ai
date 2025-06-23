import React from 'react';
import { Button } from '../components/ui/button';

const Interfaces: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Multiple Communication Interfaces
              </h1>
              <p className="text-xl mb-8">
                Zifty provides versatile communication channels to meet your customers wherever they are, ensuring seamless interactions across all touchpoints.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <img 
                  src="/interfaces-illustration.jpg" 
                  alt="Zifty Communication Interfaces" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Integration Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                <img 
                  src="/whatsapp-interface.jpg" 
                  alt="WhatsApp Integration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">WhatsApp Integration</h2>
              <p className="text-gray-600 text-lg mb-6">
                Connect with customers on their preferred messaging platform. Zifty's WhatsApp integration enables businesses to engage customers through the world's most popular messaging app.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Text Messaging</h3>
                    <p className="text-gray-600">Support for text messages with rich media capabilities including images, documents, and location sharing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Voice Messaging</h3>
                    <p className="text-gray-600">Enable voice message exchanges with AI-powered transcription and response capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Interactive Buttons</h3>
                    <p className="text-gray-600">Create structured conversations with quick reply buttons and list messages for easier navigation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Profile</h3>
                    <p className="text-gray-600">Maintain a professional business profile with key information and catalog integration.</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20WhatsApp%20Integration%20for%20my%20business.%20Can%20you%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About WhatsApp Integration
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* In-App Chat Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
                <img 
                  src="/in-app-chat.jpg" 
                  alt="In-App Chat Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">In-App Chat</h2>
              <p className="text-gray-600 text-lg mb-6">
                Embed AI-powered chat functionality directly within your mobile or web applications for seamless user experiences that drive engagement and satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Customizable UI</h3>
                    <p className="text-gray-600">Fully customizable chat interface that seamlessly integrates with your application's design and branding.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Native Integration</h3>
                    <p className="text-gray-600">Deep integration with app functionality, allowing the AI to perform actions within your application.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cross-Platform Support</h3>
                    <p className="text-gray-600">Support for iOS, Android, and web applications with consistent experiences across all platforms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Rich Media Support</h3>
                    <p className="text-gray-600">Support for images, documents, videos, and interactive elements within the chat interface.</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20In-App%20Chat%20functionality.%20Can%20you%20provide%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Learn More About In-App Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Website Chat Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-green-50 rounded-xl p-6 shadow-sm">
                <img 
                  src="/website-chat.jpg" 
                  alt="Website Chat Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Website Chat</h2>
              <p className="text-gray-600 text-lg mb-6">
                Engage website visitors with intelligent chat widgets that can answer questions, guide users, and convert visitors into customers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Easy Installation</h3>
                    <p className="text-gray-600">Simple JavaScript snippet installation that works with any website platform or CMS.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Proactive Engagement</h3>
                    <p className="text-gray-600">Intelligent triggers that initiate conversations based on user behavior, time on page, or exit intent.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Customizable Appearance</h3>
                    <p className="text-gray-600">Fully customizable chat widget that matches your website's design and branding.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Lead Capture</h3>
                    <p className="text-gray-600">Integrated lead capture forms that seamlessly collect visitor information during conversations.</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Website%20Chat%20widget.%20Can%20you%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700">
                  Learn More About Website Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Communication Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-yellow-50 rounded-xl p-6 shadow-sm">
                <img 
                  src="/voice-communication.jpg" 
                  alt="Voice Communication Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Voice Communication</h2>
              <p className="text-gray-600 text-lg mb-6">
                Enable natural voice interactions within your applications for hands-free experiences that feel human and intuitive.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Natural Language Processing</h3>
                    <p className="text-gray-600">Advanced voice recognition that understands natural speech patterns and conversational context.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Human-like Text-to-Speech</h3>
                    <p className="text-gray-600">Natural-sounding voice responses that create engaging and realistic conversations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Voice Biometrics</h3>
                    <p className="text-gray-600">Optional voice authentication for secure and frictionless user verification.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Multi-platform Support</h3>
                    <p className="text-gray-600">Voice capabilities that work across web, mobile, and smart speaker platforms.</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Voice%20Communication%20features.%20Can%20you%20provide%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  Learn More About Voice Communication
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Calls Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Phone Call Integration</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Handle both inbound and outbound calls with AI-powered conversations that sound natural and deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Inbound Calls */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="bg-red-100 text-red-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Inbound Calls</h3>
              <p className="text-gray-600 mb-6">
                Handle customer service calls with AI that can understand requests and provide solutions, available 24/7 without wait times.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Virtual phone numbers for local and toll-free access</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Intelligent call routing based on customer intent</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Seamless handoff to human agents when needed</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Call transcription and sentiment analysis</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Inbound%20Call%20handling%20capabilities.%20Can%20you%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-red-600 hover:bg-red-700">
                  Learn More About Inbound Calls
                </Button>
              </a>
            </div>

            {/* Outbound Calls */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Outbound Calls</h3>
              <p className="text-gray-600 mb-6">
                Proactively reach customers for appointment reminders, follow-ups, or sales opportunities with natural-sounding AI voice technology.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Scheduled call campaigns with customizable parameters</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Natural-sounding AI voice technology with multiple voice options</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Customizable call scripts and dynamic conversation flows</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Real-time analytics and campaign performance tracking</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Outbound%20Call%20solutions.%20Can%20you%20provide%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Learn More About Outbound Calls
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Experience Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Omnichannel Experience</h2>
              <p className="text-gray-600 text-lg mb-6">
                Zifty provides a unified communication platform that ensures consistent customer experiences across all channels, with centralized conversation management and context preservation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Unified Conversation History</h3>
                    <p className="text-gray-600">Maintain conversation context across channels, allowing customers to switch between interfaces seamlessly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Consistent Brand Voice</h3>
                    <p className="text-gray-600">Maintain a consistent tone and personality across all communication channels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Channel Optimization</h3>
                    <p className="text-gray-600">Intelligently adapt content and responses to best suit each communication channel.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Centralized Analytics</h3>
                    <p className="text-gray-600">Comprehensive reporting across all channels for holistic performance insights.</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Zifty%27s%20Omnichannel%20Capabilities.%20Can%20you%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Omnichannel Capabilities
                </Button>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <img 
                  src="/omnichannel-diagram.jpg" 
                  alt="Omnichannel Experience Diagram" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Getting started with Zifty's communication interfaces is straightforward and designed for quick deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We work with you to understand your business needs and recommend the optimal communication interfaces.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuration</h3>
              <p className="text-gray-600">
                Our team configures the selected interfaces to match your brand and business requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integration</h3>
              <p className="text-gray-600">
                We integrate the interfaces with your enterprise systems to enable data-driven conversations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch & Optimize</h3>
              <p className="text-gray-600">
                We deploy your interfaces and continuously optimize performance based on real-world data.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule a Consultation
            </Button>
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
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Request Demo
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

export default Interfaces;
