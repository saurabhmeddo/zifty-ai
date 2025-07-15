import React from 'react';
import { Button } from '../components/ui/button';

const Careers: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Zifty</h1>
          <p className="text-xl max-w-3xl">
            Join our mission to revolutionize business communication with AI. Build the future of customer engagement with a team of passionate innovators.
          </p>
        </div>
      </section>

      {/* Why Zifty Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work at Zifty?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Work on products that transform how millions of businesses communicate with their customers worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Tech</h3>
              <p className="text-gray-600">
                Work with the latest AI technologies and contribute to breakthrough innovations in communication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Amazing Team</h3>
              <p className="text-gray-600">
                Collaborate with talented individuals from diverse backgrounds who share your passion for innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Accelerate your career with mentorship, learning resources, and opportunities to lead innovative projects.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 text-red-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible work arrangements, unlimited PTO, and a culture that values your well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
              <p className="text-gray-600">
                Competitive compensation, equity, comprehensive health coverage, and perks that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">No Open Positions at This Time</h3>
              <p className="text-gray-600 mb-8">
                We don't currently have any open positions, but we're always interested in connecting with talented individuals who are passionate about AI and communication technology.
              </p>
              <p className="text-gray-600 mb-8">
                Join our talent network to be the first to know when new opportunities become available.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20join%20Zifty%27s%20talent%20network%20for%20future%20opportunities." target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Join Our Talent Network
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Life at Zifty</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Team collaboration workspace</p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Innovation lab</p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Team building events</p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Learning & development sessions</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Values in Action</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe in creating an inclusive environment where everyone can do their best work. Our culture is built on trust, transparency, and a shared commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8">
            Follow us to learn more about life at Zifty and be the first to know about new opportunities.
          </p>
          <a href="https://wa.me/919220504402?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20careers%20at%20Zifty." target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;