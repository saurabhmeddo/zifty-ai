import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Interfaces from './pages/Interfaces';
import Integration from './pages/Integration';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Documentation from './pages/docs/Documentation';
import GettingStarted from './pages/docs/GettingStarted';
import ApiDocs from './pages/docs/ApiDocs';
import IntegrationGuide from './pages/docs/IntegrationGuide';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Help from './pages/Help';
import CustomerSupportAI from './pages/blog/CustomerSupportAI';
import IntegratingAILegacySystems from './pages/blog/IntegratingAILegacySystems';
import ROIAICommunication from './pages/blog/ROIAICommunication';
import FutureOfAICommunication from './pages/blog/FutureOfAICommunication';
import AllArticles from './pages/blog/AllArticles';
import WhatsAppBusinessAPI from './pages/blog/WhatsAppBusinessAPI';
import OmnichannelStrategy from './pages/blog/OmnichannelStrategy';
import AIChatbotBestPractices from './pages/blog/AIChatbotBestPractices';
import CustomerDataPrivacy from './pages/blog/CustomerDataPrivacy';
import GlobalBankCorp from './pages/casestudies/GlobalBankCorp';
import HealthFirstClinic from './pages/casestudies/HealthFirstClinic';
import ShopSmart from './pages/casestudies/ShopSmart';
import ReducingCustomerChurn from './pages/blog/ReducingCustomerChurn';
import PsychologyOfAI from './pages/blog/PsychologyOfAI';
import AIFirstResponseTime from './pages/blog/AIFirstResponseTime';
import AI247Availability from './pages/blog/AI247Availability';
import MultilingualSupport from './pages/blog/MultilingualSupport';
import IntegratingWhatsAppCRM from './pages/blog/IntegratingWhatsAppCRM';
import NLPCustomerService from './pages/blog/NLPCustomerService';
import ScalingSupportOperations from './pages/blog/ScalingSupportOperations';
import PersonalizedCustomerJourneys from './pages/blog/PersonalizedCustomerJourneys';
import APIFirstStrategy from './pages/blog/APIFirstStrategy';
import ConversationalAIDesign from './pages/blog/ConversationalAIDesign';
import WebhooksRealTime from './pages/blog/WebhooksRealTime';
import AIEthicsCustomerService from './pages/blog/AIEthicsCustomerService';
import CustomerSupportKPIs from './pages/blog/CustomerSupportKPIs';
import CloudMigrationStrategy from './pages/blog/CloudMigrationStrategy';
import VoiceAIFuture from './pages/blog/VoiceAIFuture';
import './App.css';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">Zifty</Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/product" className="text-gray-700 hover:text-blue-600 transition-colors">Product</Link>
                <Link to="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</Link>
                <Link to="/interfaces" className="text-gray-700 hover:text-blue-600 transition-colors">Interfaces</Link>
                <Link to="/integration" className="text-gray-700 hover:text-blue-600 transition-colors">Integration</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
                <Link to="/docs" className="text-gray-700 hover:text-blue-600 transition-colors">Documentation</Link>
              </nav>
              <div className="hidden md:flex items-center space-x-4">
                <a href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20Zifty%20AI%20Communication%20Platform.%20I%20clicked%20Get%20Started%20from%20the%20website%20header." target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Get Started</a>
              </div>
              <div className="md:hidden">
                <button 
                  className="text-gray-700 hover:text-blue-600 focus:outline-none" 
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden bg-white absolute w-full shadow-md ${mobileMenuOpen ? 'block animate-fade-in' : 'hidden'}`}>
            <div className="px-4 py-4 space-y-3">
              <Link to="/product" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
              <Link to="/solutions" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/interfaces" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Interfaces</Link>
              <Link to="/integration" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Integration</Link>
              <Link to="/pricing" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link to="/docs" className="block text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
              <a href="https://wa.me/919999637444?text=Hi%2C%20I%27m%20interested%20in%20Zifty%20AI%20Communication%20Platform.%20I%20clicked%20Get%20Started%20from%20the%20mobile%20menu." target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center mt-4" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/interfaces" element={<Interfaces />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/docs/getting-started" element={<GettingStarted />} />
            <Route path="/docs/api" element={<ApiDocs />} />
            <Route path="/docs/integration-guide" element={<IntegrationGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/help" element={<Help />} />
            <Route path="/blog/customer-support-ai" element={<CustomerSupportAI />} />
            <Route path="/blog/integrating-ai-legacy-systems" element={<IntegratingAILegacySystems />} />
            <Route path="/blog/roi-ai-communication" element={<ROIAICommunication />} />
            <Route path="/blog/future-of-ai-communication" element={<FutureOfAICommunication />} />
            <Route path="/blog/whatsapp-business-api" element={<WhatsAppBusinessAPI />} />
            <Route path="/blog/omnichannel-strategy" element={<OmnichannelStrategy />} />
            <Route path="/blog/ai-chatbot-best-practices" element={<AIChatbotBestPractices />} />
            <Route path="/blog/customer-data-privacy" element={<CustomerDataPrivacy />} />
            <Route path="/blog/all" element={<AllArticles />} />
            <Route path="/case-studies/global-bank-corp" element={<GlobalBankCorp />} />
            <Route path="/case-studies/healthfirst-clinic" element={<HealthFirstClinic />} />
            <Route path="/case-studies/shopsmart" element={<ShopSmart />} />
            <Route path="/blog/reducing-customer-churn" element={<ReducingCustomerChurn />} />
            <Route path="/blog/psychology-of-ai" element={<PsychologyOfAI />} />
            <Route path="/blog/ai-first-response-time" element={<AIFirstResponseTime />} />
            <Route path="/blog/24-7-availability" element={<AI247Availability />} />
            <Route path="/blog/multilingual-support" element={<MultilingualSupport />} />
            <Route path="/blog/integrating-whatsapp-crm" element={<IntegratingWhatsAppCRM />} />
            <Route path="/blog/nlp-customer-service" element={<NLPCustomerService />} />
            <Route path="/blog/scaling-support-operations" element={<ScalingSupportOperations />} />
            <Route path="/blog/personalized-customer-journeys" element={<PersonalizedCustomerJourneys />} />
            <Route path="/blog/api-first-strategy" element={<APIFirstStrategy />} />
            <Route path="/blog/conversational-ai-design" element={<ConversationalAIDesign />} />
            <Route path="/blog/webhooks-real-time" element={<WebhooksRealTime />} />
            <Route path="/blog/ai-ethics-customer-service" element={<AIEthicsCustomerService />} />
            <Route path="/blog/customer-support-kpis" element={<CustomerSupportKPIs />} />
            <Route path="/blog/cloud-migration-strategy" element={<CloudMigrationStrategy />} />
            <Route path="/blog/voice-ai-future" element={<VoiceAIFuture />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zifty</h3>
                <p className="text-gray-400 mb-4">
                  AI-powered communication for any legacy or SaaS solution.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/product" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link to="/interfaces" className="text-gray-400 hover:text-white transition-colors">Interfaces</Link></li>
                  <li><Link to="/integration" className="text-gray-400 hover:text-white transition-colors">Integration</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20Zifty.%20I%20clicked%20Contact%20from%20the%20footer." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 Zifty. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
