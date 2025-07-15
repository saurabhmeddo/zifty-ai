import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl">Last updated: January 15, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              This Cookie Policy explains how Zifty uses cookies and similar technologies to recognize you when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small data files placed on your device when you visit a website. They help websites remember information about your visit, making your next visit easier and the site more useful to you.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">These cookies are necessary for the website to function properly:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Authentication and security</li>
              <li>Maintaining your session</li>
              <li>Storing your preferences</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">These cookies help us understand how visitors interact with our website:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Page views and navigation paths</li>
              <li>Time spent on pages</li>
              <li>Technical errors encountered</li>
              <li>Performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Functional Cookies</h3>
            <p className="text-gray-600 mb-4">These cookies enable enhanced functionality:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Language preferences</li>
              <li>Region settings</li>
              <li>Customized content</li>
              <li>User interface preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
            <p className="text-gray-600 mb-4">With your consent, we may use marketing cookies to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Show relevant advertisements</li>
              <li>Measure ad campaign effectiveness</li>
              <li>Limit ad frequency</li>
              <li>Remember your marketing preferences</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border px-4 py-2 text-left">Cookie Name</th>
                    <th className="border px-4 py-2 text-left">Purpose</th>
                    <th className="border px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">_zifty_session</td>
                    <td className="border px-4 py-2">Maintains user session</td>
                    <td className="border px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">_zifty_auth</td>
                    <td className="border px-4 py-2">Authentication token</td>
                    <td className="border px-4 py-2">7 days</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">_zifty_analytics</td>
                    <td className="border px-4 py-2">Analytics tracking</td>
                    <td className="border px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">_zifty_preferences</td>
                    <td className="border px-4 py-2">User preferences</td>
                    <td className="border px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">We may use services from third parties that set their own cookies:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Google Analytics - Website analytics</li>
              <li>Intercom - Customer support chat</li>
              <li>Stripe - Payment processing</li>
              <li>CloudFlare - Security and performance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>View what cookies are stored</li>
              <li>Delete some or all cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all third-party cookies</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> Blocking essential cookies may impact the functionality of our website and services.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookie Settings</h2>
            <p className="text-gray-600 mb-6">
              You can update your cookie preferences at any time. When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Do Not Track</h2>
            <p className="text-gray-600 mb-6">
              Some browsers offer a "Do Not Track" feature. We currently do not respond to Do Not Track signals, but we respect your cookie preferences as configured through our cookie consent tool.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="font-semibold mb-2">Zifty Privacy Team</p>
              <p className="text-gray-600">Email: privacy@zifty.ai</p>
              <p className="text-gray-600">
                WhatsApp: <a href="https://wa.me/919220504402?text=Hi%2C%20I%20have%20a%20question%20about%20Zifty%27s%20Cookie%20Policy." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">+91 9999637444</a>
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

export default CookiePolicy;