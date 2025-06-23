import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const ShopSmartCaseStudy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/case-studies" className="text-white/80 hover:text-white">← Back to Case Studies</Link>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            E-commerce
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ShopSmart Online</h1>
          <p className="text-xl max-w-3xl">
            How a rapidly growing e-commerce platform increased conversion rates by 35% and customer lifetime value by 50% through AI-powered personalized communication.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">35%</h3>
              <p className="text-gray-600">Conversion Increase</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-pink-600 mb-2">50%</h3>
              <p className="text-gray-600">Higher CLV</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">78%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-green-600 mb-2">3x</h3>
              <p className="text-gray-600">Repeat Purchases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6">
            ShopSmart, a fast-growing online marketplace with over 50,000 products, was struggling to provide personalized support at scale:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li>High cart abandonment rate of 72%</li>
            <li>Customer support team overwhelmed with repetitive queries</li>
            <li>Unable to provide 24/7 support for global customers</li>
            <li>Lack of personalized product recommendations</li>
            <li>Limited ability to recover abandoned carts</li>
            <li>Generic communication that didn't resonate with diverse customer base</li>
          </ul>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
            <p className="text-gray-700 italic">
              "We were losing customers at every step of the journey. We knew personalization was key, but our small team couldn't possibly provide individualized attention to thousands of daily visitors."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Jennifer Martinez, CEO & Founder</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Solution</h2>
          <p className="text-lg text-gray-700 mb-6">
            ShopSmart implemented Zifty's AI-powered communication platform to create hyper-personalized customer experiences:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">1. Intelligent Shopping Assistant</h3>
              <p className="text-gray-700">
                AI-powered chat on website and WhatsApp that understands customer preferences, recommends products, and answers questions about sizing, availability, and shipping.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2. Abandoned Cart Recovery</h3>
              <p className="text-gray-700">
                Proactive outreach via WhatsApp and SMS with personalized messages, addressing specific concerns and offering assistance to complete purchases.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">3. Post-Purchase Engagement</h3>
              <p className="text-gray-700">
                Automated order updates, shipping notifications, and personalized product care tips to enhance customer experience and encourage repeat purchases.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">4. Smart Recommendations</h3>
              <p className="text-gray-700">
                AI analyzes browsing history, purchase patterns, and customer interactions to provide highly relevant product suggestions across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Rapid Implementation</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 1</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Platform Integration</h3>
                <p className="text-gray-700">Seamlessly integrated with Shopify, inventory management, and CRM systems.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 2-3</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">AI Training</h3>
                <p className="text-gray-700">Trained AI on product catalog, FAQs, and brand voice to ensure accurate responses.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 4</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Soft Launch</h3>
                <p className="text-gray-700">Launched with 20% of traffic to test and optimize conversation flows.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 5+</p>
              </div>
              <div className="flex-grow border-l-2 border-purple-500 pl-8">
                <h3 className="font-semibold mb-2">Full Scale & Optimize</h3>
                <p className="text-gray-700">Expanded to all customers with continuous learning and improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Outstanding Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Sales Performance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 35% increase in conversion rate</li>
                <li>• 22% higher average order value</li>
                <li>• 28% reduction in cart abandonment</li>
                <li>• 3x increase in repeat purchase rate</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 78% customer satisfaction score</li>
                <li>• 24/7 instant support availability</li>
                <li>• 50% increase in customer lifetime value</li>
                <li>• 90% query resolution without human help</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold mb-3">Customer Success Stories</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 italic">"The AI assistant helped me find the perfect gift for my wife. It asked about her style preferences and suggested items I never would have found on my own!"</p>
                <p className="text-sm text-gray-600 mt-1">- Mark T., Customer</p>
              </div>
              <div>
                <p className="text-gray-700 italic">"I love that I can message them on WhatsApp at 2 AM and get instant help with sizing. It's like having a personal shopper!"</p>
                <p className="text-sm text-gray-600 mt-1">- Sarah L., Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Spotlight Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Game-Changing Features</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visual Search Integration</h3>
                <p className="text-gray-700">Customers can send product images via WhatsApp, and the AI finds similar items in the catalog, making shopping intuitive and fun.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Timing</h3>
                <p className="text-gray-700">AI learns optimal times to reach out to each customer, increasing engagement rates by sending messages when they're most likely to respond.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
                <p className="text-gray-700">Automatically detects and responds in the customer's preferred language, supporting 15 languages to serve a global customer base.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Emotional Intelligence</h3>
                <p className="text-gray-700">Recognizes customer sentiment and adapts responses accordingly, offering empathy when dealing with complaints or excitement for positive interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Breakdown Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">ROI Breakdown</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Revenue Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• $3.2M additional revenue from conversions</li>
                  <li>• $1.8M from increased order values</li>
                  <li>• $2.1M from repeat purchases</li>
                  <li>• $850K from cart recovery</li>
                </ul>
                <p className="font-semibold mt-4">Total Revenue Gain: $7.95M/year</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Cost Savings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• $480K reduced support staff costs</li>
                  <li>• $120K saved on third-party tools</li>
                  <li>• $90K reduced marketing spend</li>
                  <li>• Platform cost: $360K/year</li>
                </ul>
                <p className="font-semibold mt-4">Net Savings: $330K/year</p>
              </div>
            </div>
            <div className="text-center pt-6 border-t">
              <p className="text-2xl font-bold text-purple-600">Total ROI: 2,300% in Year One</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Looking Ahead</h2>
          <p className="text-lg text-gray-700 mb-6">
            ShopSmart's success with Zifty has opened new possibilities for growth:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Voice Commerce</h3>
              <p className="text-gray-700">Planning to launch voice-based shopping through phone calls and smart speakers.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">AR Try-On</h3>
              <p className="text-gray-700">Integrating AR features for virtual product trials through the chat interface.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Predictive Inventory</h3>
              <p className="text-gray-700">Using AI insights to optimize inventory based on predicted demand.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Social Commerce</h3>
              <p className="text-gray-700">Expanding AI assistance to social media platforms for seamless shopping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your E-commerce Experience</h2>
          <p className="text-xl mb-8">
            Join the AI revolution and give your customers the personalized shopping experience they deserve.
          </p>
          <a href="https://wa.me/919999637444?text=Hi%2C%20I%20read%20the%20ShopSmart%20case%20study%20and%20want%20to%20increase%20our%20e-commerce%20conversions%20with%20Zifty." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Success Story
            </Button>
          </a>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/case-studies/global-bank-corp" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Financial Services
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Bank Corp</h3>
                <p className="text-gray-600">85% first-call resolution rate</p>
              </div>
            </Link>

            <Link to="/case-studies/healthfirst-clinic" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Healthcare
                </div>
                <h3 className="text-xl font-semibold mb-2">HealthFirst Clinic</h3>
                <p className="text-gray-600">65% reduction in no-shows</p>
              </div>
            </Link>

            <Link to="/case-studies" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">View All Case Studies</h3>
                <p className="text-gray-600">Explore more success stories</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopSmartCaseStudy;