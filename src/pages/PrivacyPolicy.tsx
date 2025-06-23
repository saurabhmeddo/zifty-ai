import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl">Last updated: January 15, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At Zifty, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered communication platform.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect personal information that you provide directly, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Information</h3>
            <p className="text-gray-600 mb-4">We automatically collect certain information when you use our services:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>API usage statistics and logs</li>
              <li>Message metadata (timestamps, channels, status)</li>
              <li>Device and browser information</li>
              <li>IP addresses and location data</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Providing and improving our services</li>
              <li>Processing transactions and billing</li>
              <li>Sending service updates and notifications</li>
              <li>Analyzing usage patterns and optimizing performance</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your information, including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to certain legal requirements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of material changes via email or through our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="font-semibold mb-2">Zifty Privacy Team</p>
              <p className="text-gray-600">Email: privacy@zifty.ai</p>
              <p className="text-gray-600">
                WhatsApp: <a href="https://wa.me/919999637444?text=Hi%2C%20I%20have%20a%20privacy-related%20question%20about%20Zifty." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">+91 9999637444</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link to="/" className="text-blue-600 hover:text-blue-700">← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;