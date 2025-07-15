import React from 'react';
import { Button } from '../components/ui/button';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zifty</h1>
          <p className="text-xl max-w-3xl">
            Empowering businesses to communicate intelligently with AI-powered solutions that bridge the gap between legacy systems and modern customer expectations.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At Zifty, we believe that every business, regardless of their technical infrastructure, deserves access to cutting-edge AI communication capabilities. Our mission is to democratize AI-powered customer engagement by making it accessible, affordable, and easy to implement.
              </p>
              <p className="text-gray-600 text-lg">
                We're building the bridge between traditional business systems and the future of customer communication, enabling companies to deliver exceptional experiences without overhauling their existing infrastructure.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-5xl font-bold text-blue-600 mb-2">50M+</h3>
                  <p className="text-gray-600">Messages Processed Monthly</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-purple-600 mb-2">10K+</h3>
                  <p className="text-gray-600">Active Business Customers</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-green-600 mb-2">99.9%</h3>
                  <p className="text-gray-600">Platform Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with AI communication, always seeking better ways to serve our customers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Centric</h3>
              <p className="text-gray-600">
                Every decision we make is guided by how it will improve the experience for our customers and their end users.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                We maintain the highest standards of data security and privacy, ensuring our platform is trusted by enterprises worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Revolutionizing Business Communication</h2>
          <p className="text-xl mb-8">
            Whether you're a customer, partner, or looking to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20partnering%20with%20Zifty." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Become a Partner
              </Button>
            </a>
            <a href="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Careers
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;