import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const CustomerSupportKPIs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <article className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Business</span>
            <span className="text-gray-500 text-sm ml-4">January 30, 2025 • 11 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Support KPIs That Actually Matter in the AI Era
          </h1>
          
          <div className="flex items-center mb-8">
            <img 
              src="/author-avatar.jpg" 
              alt="Robert Chen" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Robert Chen</p>
              <p className="text-gray-500 text-sm">Head of Analytics at Zifty</p>
            </div>
          </div>
          
          <img 
            src="/blog-metrics.jpg" 
            alt="Customer Support KPIs" 
            className="w-full h-auto rounded-xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Traditional support metrics like average handle time and tickets closed tell only part of the story. In the AI era, we need KPIs that measure what truly matters: customer success, business impact, and sustainable growth. Let's explore the metrics that separate great support organizations from the rest—and how AI transforms what's possible to measure and achieve.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Evolution of Support Metrics</h2>
            <p className="text-gray-700 mb-4">
              Support metrics have evolved through three distinct eras, each reflecting changing priorities and capabilities:
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">📞 Era 1: Efficiency Focus (1990s-2000s)</h3>
                  <p className="text-gray-700">Average Handle Time, Call Volume, Cost per Contact</p>
                </div>
                <div>
                  <h3 className="font-semibold">😊 Era 2: Satisfaction Focus (2000s-2010s)</h3>
                  <p className="text-gray-700">CSAT, NPS, First Contact Resolution</p>
                </div>
                <div>
                  <h3 className="font-semibold">🚀 Era 3: Outcome Focus (2020s+)</h3>
                  <p className="text-gray-700">Customer Effort Score, Revenue Impact, Predictive Metrics</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Modern KPI Framework</h2>
            
            <div className="space-y-6 my-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">🎯 Customer Success Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Customer Effort Score (CES)</h4>
                    <p className="text-gray-700">How easy was it to get your issue resolved?</p>
                    <p className="text-sm text-gray-600">Target: &lt; 2.0 (1-5 scale)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Goal Completion Rate</h4>
                    <p className="text-gray-700">Did the customer achieve what they set out to do?</p>
                    <p className="text-sm text-gray-600">Target: &gt; 90%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Time to Value</h4>
                    <p className="text-gray-700">How quickly did we deliver the solution?</p>
                    <p className="text-sm text-gray-600">Target: &lt; 5 minutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">💰 Business Impact Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Revenue per Support Interaction</h4>
                    <p className="text-gray-700">Upsell/cross-sell value generated</p>
                    <p className="text-sm text-gray-600">Target: $15+ per interaction</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Churn Prevention Rate</h4>
                    <p className="text-gray-700">At-risk customers saved through support</p>
                    <p className="text-sm text-gray-600">Target: &gt; 75% save rate</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Support-Driven NPS Impact</h4>
                    <p className="text-gray-700">NPS change after support interaction</p>
                    <p className="text-sm text-gray-600">Target: +20 points</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">🤖 AI Performance Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Automation Rate</h4>
                    <p className="text-gray-700">Percentage resolved without human intervention</p>
                    <p className="text-sm text-gray-600">Target: &gt; 70%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">AI Accuracy Score</h4>
                    <p className="text-gray-700">Correct intent recognition and response</p>
                    <p className="text-sm text-gray-600">Target: &gt; 95%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Escalation Appropriateness</h4>
                    <p className="text-gray-700">Right escalations at the right time</p>
                    <p className="text-sm text-gray-600">Target: &lt; 5% false escalations</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">The KPI Hierarchy That Works</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">North Star Metric</h3>
                  <p className="text-gray-700"><strong>Customer Lifetime Value Impact:</strong> How support interactions affect long-term customer value</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold mb-2">Primary KPIs</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Customer Effort Score</li>
                    <li>• First Contact Resolution</li>
                    <li>• Revenue per Interaction</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold mb-2">Secondary KPIs</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Response Time</li>
                    <li>• CSAT Score</li>
                    <li>• Automation Rate</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold mb-2">Operational Metrics</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Agent Utilization</li>
                    <li>• Cost per Contact</li>
                    <li>• Technical Performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Metrics for AI-Powered Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Predictive Metrics</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Churn Risk Score</li>
                  <li>• Next Best Action Accuracy</li>
                  <li>• Issue Recurrence Probability</li>
                  <li>• Customer Satisfaction Prediction</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Experience Metrics</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Conversation Naturalness Score</li>
                  <li>• Emotional Resolution Rate</li>
                  <li>• Personalization Effectiveness</li>
                  <li>• Channel Preference Match</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Building Your KPI Dashboard</h2>
            
            <div className="bg-gray-100 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-4">Executive Dashboard Example:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded p-4 text-center">
                  <p className="text-sm text-gray-600">CES</p>
                  <p className="text-2xl font-bold text-green-600">1.8</p>
                  <p className="text-xs text-green-600">↓ 0.3</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <p className="text-sm text-gray-600">FCR</p>
                  <p className="text-2xl font-bold text-blue-600">87%</p>
                  <p className="text-xs text-blue-600">↑ 5%</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <p className="text-sm text-gray-600">Revenue/Contact</p>
                  <p className="text-2xl font-bold text-purple-600">$18.50</p>
                  <p className="text-xs text-purple-600">↑ $2.30</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <p className="text-sm text-gray-600">AI Resolution</p>
                  <p className="text-2xl font-bold text-orange-600">72%</p>
                  <p className="text-xs text-orange-600">↑ 8%</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Common KPI Mistakes to Avoid</h2>
            
            <div className="bg-red-50 rounded-lg p-6 my-6">
              <ul className="space-y-3 text-gray-700">
                <li>❌ <strong>Gaming the System:</strong> Optimizing for metrics at the expense of customer experience</li>
                <li>❌ <strong>Too Many Metrics:</strong> Tracking everything means focusing on nothing</li>
                <li>❌ <strong>Ignoring Context:</strong> Not considering industry, season, or customer segments</li>
                <li>❌ <strong>Static Targets:</strong> Not adjusting goals as capabilities improve</li>
                <li>❌ <strong>Siloed Metrics:</strong> Support KPIs disconnected from business objectives</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementing Metric-Driven Improvement</h2>
            
            <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
              <li><strong>Baseline Current Performance:</strong> Know where you stand today</li>
              <li><strong>Set Ambitious but Achievable Targets:</strong> Push boundaries without breaking teams</li>
              <li><strong>Create Visibility:</strong> Real-time dashboards for all stakeholders</li>
              <li><strong>Enable Action:</strong> Connect metrics to specific improvement initiatives</li>
              <li><strong>Celebrate Wins:</strong> Recognize teams achieving KPI improvements</li>
              <li><strong>Iterate Constantly:</strong> Review and refine metrics quarterly</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">The ROI of Getting KPIs Right</h2>
            
            <div className="bg-green-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Case Study: B2B SaaS Company</h3>
              <p className="text-gray-700 mb-3">
                Shifted from traditional to outcome-focused KPIs:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Before</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AHT: 8 minutes</li>
                    <li>• CSAT: 78%</li>
                    <li>• Cost/contact: $12</li>
                    <li>• Churn: 15%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">After</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• CES: 1.6</li>
                    <li>• Revenue/contact: $22</li>
                    <li>• AI resolution: 78%</li>
                    <li>• Churn: 8%</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Result: $4.2M additional annual revenue</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future-Proof Your Metrics</h2>
            <p className="text-gray-700 mb-6">
              As AI capabilities expand and customer expectations evolve, your KPIs must adapt. The winners will be those who measure not just efficiency, but effectiveness—not just satisfaction, but success. Build a metrics framework that drives real business outcomes while delighting customers.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-semibold mb-4">Transform Your Support Metrics Into Business Drivers</h3>
              <p className="text-gray-700 mb-6">
                Implement KPIs that matter with Zifty's advanced analytics and AI-powered insights.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%20read%20your%20article%20on%20customer%20support%20KPIs%20and%20want%20to%20implement%20better%20metrics%20for%20our%20AI-powered%20support." target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Upgrade Your KPI Strategy
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/roi-ai-communication" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-roi.jpg" 
                  alt="ROI of AI Communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded">Business</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Calculating ROI of AI Communication</h3>
                <p className="text-gray-600">Measure the real financial impact.</p>
              </div>
            </Link>

            <Link to="/blog/scaling-support-operations" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-scaling.jpg" 
                  alt="Scaling Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">Business</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Scaling Support Without Scaling Costs</h3>
                <p className="text-gray-600">Grow efficiently with AI.</p>
              </div>
            </Link>

            <Link to="/blog/support-analytics-dashboard" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-analytics.jpg" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Analytics</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Building Real-Time Support Dashboards</h3>
                <p className="text-gray-600">Visualize metrics that matter.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportKPIs;