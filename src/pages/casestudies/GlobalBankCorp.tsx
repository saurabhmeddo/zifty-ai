import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const GlobalBankCorpCaseStudy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/case-studies" className="text-white/80 hover:text-white">← Back to Case Studies</Link>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Financial Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Bank Corp</h1>
          <p className="text-xl max-w-3xl">
            How a leading financial institution achieved 85% first-call resolution and reduced customer service costs by 40% with Zifty's AI communication platform.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">85%</h3>
              <p className="text-gray-600">First-Call Resolution</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-green-600 mb-2">40%</h3>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">&lt;30s</h3>
              <p className="text-gray-600">Average Wait Time</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">24/7</h3>
              <p className="text-gray-600">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6">
            Global Bank Corp, one of the world's largest financial institutions, was facing significant challenges with their customer service operations:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li>Average wait times exceeding 15 minutes during peak hours</li>
            <li>High operational costs with over 5,000 customer service agents</li>
            <li>Inconsistent service quality across different channels</li>
            <li>Limited availability outside business hours</li>
            <li>Increasing customer frustration and churn</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-700 italic">
              "We knew we needed to transform our customer service, but we couldn't compromise on quality or security. Finding a solution that could integrate with our legacy systems while meeting banking regulations was our biggest challenge."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Sarah Mitchell, Head of Digital Transformation</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Solution</h2>
          <p className="text-lg text-gray-700 mb-6">
            Global Bank Corp partnered with Zifty to implement a comprehensive AI communication solution that transformed their customer service:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">1. Intelligent Voice AI</h3>
              <p className="text-gray-700">
                Deployed advanced voice AI assistants capable of handling complex banking queries, from balance inquiries to transaction disputes, with natural conversation flow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2. Omnichannel Integration</h3>
              <p className="text-gray-700">
                Unified customer interactions across phone, chat, WhatsApp, and SMS, ensuring consistent service regardless of the channel chosen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">3. Secure Legacy Integration</h3>
              <p className="text-gray-700">
                Seamlessly connected with the bank's core banking system without compromising security or requiring system overhauls.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">4. Intelligent Routing</h3>
              <p className="text-gray-700">
                AI analyzes queries in real-time, handling routine matters automatically while routing complex issues to specialized human agents with full context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Implementation Timeline</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Month 1-2</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-gray-700">Analyzed existing processes, identified key use cases, and designed integration architecture.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Month 3-4</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Pilot Program</h3>
                <p className="text-gray-700">Launched pilot with 10% of customer interactions to test and refine the system.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Month 5-6</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Full Rollout</h3>
                <p className="text-gray-700">Expanded to all customer service channels with continuous monitoring and optimization.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Month 7+</p>
              </div>
              <div className="flex-grow border-l-2 border-blue-500 pl-8">
                <h3 className="font-semibold mb-2">Optimization & Expansion</h3>
                <p className="text-gray-700">Continuous improvement based on data insights and expansion to new use cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 85% first-call resolution rate</li>
                <li>• 40% reduction in operational costs</li>
                <li>• 70% of queries handled without human intervention</li>
                <li>• Average handling time reduced by 60%</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wait times reduced to under 30 seconds</li>
                <li>• 24/7 availability across all channels</li>
                <li>• 92% customer satisfaction score</li>
                <li>• 35% reduction in customer churn</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-gray-700 italic">
              "The transformation has been remarkable. Not only have we dramatically reduced costs, but our customers are happier than ever. The AI handles routine queries perfectly, allowing our human agents to focus on complex, high-value interactions."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Michael Chen, VP of Customer Experience</p>
          </div>
        </div>
      </section>

      {/* Lessons Learned Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Key Lessons Learned</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">1</div>
              <div>
                <h3 className="font-semibold mb-2">Start with High-Impact Use Cases</h3>
                <p className="text-gray-700">Focusing on balance inquiries and transaction history first delivered immediate value and built confidence.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">2</div>
              <div>
                <h3 className="font-semibold mb-2">Prioritize Security from Day One</h3>
                <p className="text-gray-700">Building security into every aspect of the implementation ensured regulatory compliance and customer trust.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">3</div>
              <div>
                <h3 className="font-semibold mb-2">Invest in Change Management</h3>
                <p className="text-gray-700">Training agents to work alongside AI and managing organizational change was crucial for success.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">4</div>
              <div>
                <h3 className="font-semibold mb-2">Continuous Optimization is Key</h3>
                <p className="text-gray-700">Regular analysis and refinement based on real-world data improved performance month over month.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl mb-8">
            See how Zifty can help you achieve similar results for your business.
          </p>
          <a href="https://wa.me/919999637444?text=Hi%2C%20I%20read%20the%20Global%20Bank%20Corp%20case%20study%20and%20would%20like%20to%20discuss%20how%20Zifty%20can%20help%20transform%20our%20customer%20service." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/case-studies/healthfirst-clinic" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Healthcare
                </div>
                <h3 className="text-xl font-semibold mb-2">HealthFirst Clinic</h3>
                <p className="text-gray-600">65% reduction in appointment no-shows</p>
              </div>
            </Link>

            <Link to="/case-studies/shopsmart" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  E-commerce
                </div>
                <h3 className="text-xl font-semibold mb-2">ShopSmart Online</h3>
                <p className="text-gray-600">35% increase in conversion rates</p>
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

export default GlobalBankCorpCaseStudy;