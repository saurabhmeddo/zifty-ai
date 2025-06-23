import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const CaseStudies: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Discover how leading organizations are transforming their customer communication with Zifty's AI-powered platform.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Success Story
                </div>
                <h2 className="text-3xl font-bold mb-4">HealthFirst Clinic Network</h2>
                <p className="text-gray-600 text-lg mb-6">
                  How a healthcare network reduced appointment no-shows by 65% and improved patient satisfaction scores by 40% with AI-powered communication.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">24/7 automated appointment reminders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Multilingual patient support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Integrated with existing EMR systems</span>
                  </div>
                </div>
                <Link to="/case-studies/healthfirst-clinic">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Full Case Study
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Key Results</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-blue-600 mb-1">65%</p>
                    <p className="text-gray-600">Reduction in no-shows</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-purple-600 mb-1">40%</p>
                    <p className="text-gray-600">Improvement in patient satisfaction</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-green-600 mb-1">$2.3M</p>
                    <p className="text-gray-600">Annual cost savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">More Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Financial Services
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Bank Corp</h3>
                <p className="text-gray-600 mb-4">
                  Achieved 85% first-call resolution rate and reduced customer service costs by 40% with AI-powered voice assistants.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">85%</p>
                    <p className="text-sm text-gray-500">First-call resolution</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">40%</p>
                    <p className="text-sm text-gray-500">Cost reduction</p>
                  </div>
                </div>
                <Link to="/case-studies/global-bank-corp" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  E-commerce
                </div>
                <h3 className="text-xl font-semibold mb-3">ShopSmart Online</h3>
                <p className="text-gray-600 mb-4">
                  Increased conversion rates by 35% and customer lifetime value by 50% through personalized AI communication.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">35%</p>
                    <p className="text-sm text-gray-500">Higher conversion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">50%</p>
                    <p className="text-sm text-gray-500">Increased CLV</p>
                  </div>
                </div>
                <Link to="/case-studies/shopsmart" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              <div className="p-6">
                <div className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Education
                </div>
                <h3 className="text-xl font-semibold mb-3">Metro University</h3>
                <p className="text-gray-600 mb-4">
                  Improved student engagement by 60% and reduced administrative workload by 70% with AI assistants.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">60%</p>
                    <p className="text-sm text-gray-500">Better engagement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">70%</p>
                    <p className="text-sm text-gray-500">Less admin work</p>
                  </div>
                </div>
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Metro%20University%20case%20study." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500"></div>
              <div className="p-6">
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Travel & Hospitality
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Hotels Group</h3>
                <p className="text-gray-600 mb-4">
                  Enhanced guest experience with 95% satisfaction rate and increased direct bookings by 45%.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">95%</p>
                    <p className="text-sm text-gray-500">Guest satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">45%</p>
                    <p className="text-sm text-gray-500">More direct bookings</p>
                  </div>
                </div>
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Luxury%20Hotels%20Group%20case%20study." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-blue-600"></div>
              <div className="p-6">
                <div className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Real Estate
                </div>
                <h3 className="text-xl font-semibold mb-3">Property Pro Realty</h3>
                <p className="text-gray-600 mb-4">
                  Automated 80% of inquiries and reduced response time from hours to seconds with AI chat.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">80%</p>
                    <p className="text-sm text-gray-500">Automation rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">10s</p>
                    <p className="text-sm text-gray-500">Avg response time</p>
                  </div>
                </div>
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Property%20Pro%20Realty%20case%20study." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-600"></div>
              <div className="p-6">
                <div className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Insurance
                </div>
                <h3 className="text-xl font-semibold mb-3">SecureLife Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Streamlined claims processing by 75% and improved customer retention by 30% with AI automation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">75%</p>
                    <p className="text-sm text-gray-500">Faster claims</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">30%</p>
                    <p className="text-sm text-gray-500">Better retention</p>
                  </div>
                </div>
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20SecureLife%20Insurance%20case%20study." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">
            Join thousands of businesses transforming their customer communication with Zifty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20discuss%20how%20Zifty%20can%20help%20my%20business." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Start Your Journey
              </Button>
            </a>
            <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20request%20a%20custom%20demo%20for%20my%20industry." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Industry Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;