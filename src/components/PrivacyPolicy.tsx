import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out contact forms or inquiry forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Use our services</li>
                  <li>Make payments for our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Information</h2>
                <p className="mb-4">
                  The information we collect may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Business information and social media profiles</li>
                  <li>Payment information (processed securely through payment processors)</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Process payments and manage billing</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who help us deliver our services</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
              <p className="mb-4 font-semibold text-gray-900">
                No mobile information (including your phone number) will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. SMS / Text Messaging</h2>
              <p className="mb-4">
                If you opt in to receive text messages (SMS) from ScaleBrandsLab, we collect your mobile phone number and your consent record for the purpose of sending you the messages you signed up for (such as account notifications, updates, and — where you have agreed — promotional offers).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Message frequency varies depending on your interactions with us.</li>
                <li>Message and data rates may apply.</li>
                <li>You can opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance.</li>
                <li>Your consent to receive text messages is not a condition of any purchase.</li>
                <li>We do not sell or share your mobile number or SMS consent with third parties for their own marketing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> team@scalebrandslab.com</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}