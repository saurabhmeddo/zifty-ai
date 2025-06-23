import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const HealthFirstClinicCaseStudy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/case-studies" className="text-white/80 hover:text-white">← Back to Case Studies</Link>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Healthcare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">HealthFirst Clinic Network</h1>
          <p className="text-xl max-w-3xl">
            How a multi-location healthcare provider reduced appointment no-shows by 65% and saved $2.3M annually with Zifty's AI-powered appointment management system.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-green-600 mb-2">65%</h3>
              <p className="text-gray-600">No-Show Reduction</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">$2.3M</h3>
              <p className="text-gray-600">Annual Savings</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">40%</h3>
              <p className="text-gray-600">Higher Satisfaction</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">90%</h3>
              <p className="text-gray-600">Patient Preference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6">
            HealthFirst Clinic Network operates 12 locations across three states, handling thousands of appointments daily. They faced critical challenges that were impacting both revenue and patient care:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li>20% appointment no-show rate costing millions in lost revenue</li>
            <li>Overwhelmed call center staff handling appointment scheduling and reminders</li>
            <li>Patients missing appointments due to forgotten dates or unclear instructions</li>
            <li>Limited ability to fill last-minute cancellations</li>
            <li>No automated way to handle rescheduling requests</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-gray-700 italic">
              "Every no-show meant a lost opportunity to help a patient and lost revenue for our practice. We needed a solution that could dramatically reduce no-shows while improving the patient experience."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Dr. Patricia Williams, Chief Medical Officer</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Solution</h2>
          <p className="text-lg text-gray-700 mb-6">
            HealthFirst implemented Zifty's comprehensive AI-powered appointment management system across all locations:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">1. Intelligent Appointment Reminders</h3>
              <p className="text-gray-700">
                AI-powered system sends personalized reminders via WhatsApp and SMS, adapting timing and frequency based on patient history and preferences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2. Conversational Scheduling</h3>
              <p className="text-gray-700">
                Patients can confirm, reschedule, or cancel appointments through natural conversation in their preferred language, 24/7.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">3. Smart Waitlist Management</h3>
              <p className="text-gray-700">
                Automatically fills cancellations by reaching out to waitlisted patients, maximizing appointment utilization.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">4. Pre-Appointment Preparation</h3>
              <p className="text-gray-700">
                Sends personalized pre-appointment instructions, required documents, and location details to ensure patients arrive prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Implementation Journey</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 1-2</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">System Integration</h3>
                <p className="text-gray-700">Connected Zifty with existing EMR and scheduling systems without disrupting operations.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 3-4</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Pilot Launch</h3>
                <p className="text-gray-700">Started with one location to test workflows and gather patient feedback.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Week 5-8</p>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="font-semibold mb-2">Full Deployment</h3>
                <p className="text-gray-700">Rolled out to all 12 locations with customized workflows for each specialty.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <p className="font-semibold">Ongoing</p>
              </div>
              <div className="flex-grow border-l-2 border-green-500 pl-8">
                <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-700">Regular optimization based on performance data and patient feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Transformative Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Operational Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 65% reduction in no-show rate</li>
                <li>• $2.3M annual revenue recovery</li>
                <li>• 80% reduction in manual reminder calls</li>
                <li>• 3x faster appointment scheduling</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Patient Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 40% improvement in patient satisfaction</li>
                <li>• 90% prefer AI reminders over phone calls</li>
                <li>• 24/7 scheduling availability</li>
                <li>• Support in 8 languages</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold mb-3">Patient Feedback Highlights</h3>
            <div className="space-y-4">
              <p className="text-gray-700 italic">"I love getting WhatsApp reminders. I can confirm my appointment with one tap while I'm on the go."</p>
              <p className="text-gray-700 italic">"Being able to reschedule at midnight when I realized I had a conflict was amazing."</p>
              <p className="text-gray-700 italic">"The pre-appointment checklist ensured I brought all the right documents. So helpful!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Return on Investment</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cost Savings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• $2.3M from reduced no-shows</li>
                  <li>• $450K in staff time savings</li>
                  <li>• $180K reduced overtime costs</li>
                  <li>• $120K from waitlist optimization</li>
                </ul>
                <p className="font-semibold mt-4">Total Annual Savings: $3.05M</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Investment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Platform licensing: $240K/year</li>
                  <li>• Implementation: $60K (one-time)</li>
                  <li>• Training: $20K (one-time)</li>
                  <li>• Ongoing support: Included</li>
                </ul>
                <p className="font-semibold mt-4">ROI: 1,170% Year 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Best Practices & Insights</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Personalize Reminder Timing</h3>
                <p className="text-gray-700">Different patient groups respond better to reminders at different times. Morning reminders work best for seniors, while evening reminders suit working professionals.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Make Rescheduling Easy</h3>
                <p className="text-gray-700">The easier it is to reschedule, the less likely patients are to simply not show up. AI-powered rescheduling reduced friction significantly.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Include Pre-Visit Information</h3>
                <p className="text-gray-700">Providing parking information, required documents, and preparation instructions reduced appointment delays and improved patient satisfaction.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Monitor and Optimize</h3>
                <p className="text-gray-700">Regular analysis of no-show patterns by day, time, and provider helped optimize reminder strategies for maximum effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Reduce Your No-Show Rate Today</h2>
          <p className="text-xl mb-8">
            See how Zifty can help your healthcare organization improve patient attendance and recover lost revenue.
          </p>
          <a href="https://wa.me/919999637444?text=Hi%2C%20I%20read%20the%20HealthFirst%20Clinic%20case%20study%20and%20would%20like%20to%20reduce%20our%20appointment%20no-shows%20with%20Zifty." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Your Free Assessment
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

export default HealthFirstClinicCaseStudy;