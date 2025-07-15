import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl">Last updated: January 15, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              These Terms of Service ("Terms") govern your use of Zifty's AI-powered communication platform. By using our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using Zifty's services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zifty provides an AI-powered communication platform that enables businesses to integrate intelligent chat, voice, and messaging capabilities into their applications and systems.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
            <p className="text-gray-600 mb-4">To use our services, you must:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree not to use our services to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Violate any laws or regulations</li>
              <li>Send spam or unsolicited messages</li>
              <li>Transmit harmful code or malware</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Resell our services without authorization</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Service Level Agreement</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain 99.9% uptime for our services. Detailed SLA terms are available for Enterprise customers upon request.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>You are responsible for all applicable taxes</li>
              <li>We may update pricing with 30 days notice</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              Zifty retains all rights to our platform, technology, and brand. You retain ownership of your data and content. You grant us a license to use your content solely to provide our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Data Processing</h2>
            <p className="text-gray-600 mb-6">
              We process data according to your instructions and applicable data protection laws. Our Data Processing Agreement is available for customers who require it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the service relationship.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Warranties and Disclaimers</h2>
            <p className="text-gray-600 mb-6">
              Our services are provided "as is" without warranties of any kind, except as expressly stated in these Terms. We do not guarantee that our services will meet all your requirements or be error-free.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zifty's total liability shall not exceed the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold harmless Zifty from any claims arising from your use of our services, violation of these Terms, or infringement of any rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate these Terms with 30 days written notice. We may suspend or terminate immediately for violations of these Terms. Upon termination, you must cease using our services and pay any outstanding fees.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Modifications</h2>
            <p className="text-gray-600 mb-6">
              We may modify these Terms with 30 days notice. Continued use after modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms are governed by the laws of Delaware, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="font-semibold mb-2">Zifty Legal Team</p>
              <p className="text-gray-600">Email: legal@zifty.ai</p>
              <p className="text-gray-600">
                WhatsApp: <a href="https://wa.me/919220504402?text=Hi%2C%20I%20have%20a%20question%20about%20Zifty%27s%20Terms%20of%20Service." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">+91 9999637444</a>
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

export default Terms;