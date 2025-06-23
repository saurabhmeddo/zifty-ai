import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Explore the latest trends, best practices, and insights on AI communication, customer experience, and enterprise integration.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Featured Article</h2>
          
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gray-200">
                <img 
                  src="/blog-featured.jpg" 
                  alt="The Future of Customer Communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">Trends</span>
                  <span className="text-gray-500 text-sm ml-4">May 15, 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Future of Customer Communication: AI-Powered Conversations in 2025 and Beyond</h3>
                <p className="text-gray-600 mb-6">
                  Explore how AI is transforming customer communication across industries, enabling more personalized, efficient, and scalable interactions than ever before.
                </p>
                <div className="flex items-center">
                  <img 
                    src="/author-avatar.jpg" 
                    alt="Sarah Johnson" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-gray-500 text-sm">Chief AI Officer</p>
                  </div>
                </div>
                <Link to="/blog/future-of-ai-communication">
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="mt-4 md:mt-0">
              <Link to="/blog/all">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link to="/blog/customer-support-ai" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-1.jpg" 
                  alt="Enhancing Customer Support with AI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Customer Support</span>
                  <span className="text-gray-500 text-sm ml-4">May 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Enhancing Customer Support with AI: 5 Success Stories</h3>
                <p className="text-gray-600 mb-4">
                  Learn how leading companies have transformed their customer support operations with AI-powered communication.
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link to="/blog/integrating-ai-legacy-systems" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-2.jpg" 
                  alt="Integrating AI with Legacy Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">Integration</span>
                  <span className="text-gray-500 text-sm ml-4">May 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrating AI with Legacy Systems: Challenges and Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Discover practical approaches to integrating modern AI communication tools with existing enterprise systems.
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link to="/blog/roi-ai-communication" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-3.jpg" 
                  alt="The ROI of AI Communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">Business</span>
                  <span className="text-gray-500 text-sm ml-4">April 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">The ROI of AI Communication: Measuring Business Impact</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to measure and maximize the return on investment from implementing AI communication solutions.
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-4">7 articles</p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Articles
                </Button>
              </Link>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integration</h3>
              <p className="text-gray-600 mb-4">6 articles</p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  View Articles
                </Button>
              </Link>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Technology</h3>
              <p className="text-gray-600 mb-4">8 articles</p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  View Articles
                </Button>
              </Link>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <p className="text-gray-600 mb-4">4 articles</p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                  View Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Case Studies</h2>
            <div className="mt-4 md:mt-0">
              <Link to="/case-studies">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/case-study-1.jpg" 
                  alt="HealthFirst Clinic Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">Healthcare</span>
                </div>
                <h3 className="text-xl font-bold mb-2">HealthFirst Clinic Reduces No-Shows by 60%</h3>
                <p className="text-gray-600 mb-4">
                  Learn how HealthFirst implemented Zifty's appointment booking and reminder system, resulting in a significant reduction in missed appointments and improved patient satisfaction.
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/case-study-2.jpg" 
                  alt="Global Bank Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Financial Services</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Bank Improves Customer Service Efficiency by 45%</h3>
                <p className="text-gray-600 mb-4">
                  Discover how Global Bank automated routine inquiries and reduced wait times, leading to higher customer satisfaction scores.
                </p>
                <div className="flex items-center text-green-600">
                  <span>Read case study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Whitepapers</h3>
              <p className="text-gray-600 mb-4">
                In-depth research and analysis on AI communication trends, technologies, and best practices.
              </p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Browse Whitepapers
                </Button>
              </Link>
            </div>

            {/* Resource 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Webinars</h3>
              <p className="text-gray-600 mb-4">
                Live and on-demand webinars featuring industry experts discussing AI communication strategies.
              </p>
              <Link to="/blog/all">
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Watch Webinars
                </Button>
              </Link>
            </div>

            {/* Resource 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides and tutorials on implementing and optimizing AI communication solutions.
              </p>
              <Link to="/docs">
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Explore Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI communication and customer experience.
            </p>
            <div className="max-w-lg mx-auto">
              <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20subscribe%20to%20the%20Zifty%20newsletter%20to%20stay%20updated%20with%20AI%20communication%20insights." target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  Subscribe via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
