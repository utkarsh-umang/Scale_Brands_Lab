export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <p className="mb-4">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                <strong>Business Name:</strong> ScaleBrandsLab<br />
                <strong>Proprietor:</strong> UTKARSH KUMAR<br />
                <strong>Address:</strong> 245 Pocket 1 DDA SFS Flat, South West Delhi, Dwarka Sec-6, Sector 5 Dwarka, Dwarka Sec-6, Delhi, India - 110075
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using ScaleBrandsLab's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="mb-4">
                ScaleBrandsLab provides social media marketing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content creation and strategy development</li>
                <li>Social media management and optimization</li>
                <li>Brand visibility and growth consulting</li>
                <li>Digital marketing campaigns</li>
                <li>Analytics and reporting</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Make payments according to agreed terms</li>
                <li>Provide necessary access to social media accounts and platforms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services are billed monthly in advance</li>
                <li>Payment is due within 7 days of invoice date</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                All content created by ScaleBrandsLab remains the property of the client upon full payment. However, ScaleBrandsLab retains the right to use work samples for portfolio and marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="mb-4">
                We respect the confidentiality of our clients' information and will not disclose any proprietary information without written consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                ScaleBrandsLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Guarantees</h2>
              <p className="mb-4">
                While we strive to deliver excellent results, we cannot guarantee specific outcomes such as follower growth, engagement rates, or revenue increases as these depend on various factors beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate this agreement with 30 days written notice. Upon termination, the client will pay for all services rendered up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of Delhi courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                For any questions regarding these terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> growth@ScaleBrandsLab.com</p>
                <p><strong>Address:</strong> 245 Pocket 1 DDA SFS Flat, South West Delhi, Dwarka Sec-6, Sector 5 Dwarka, Dwarka Sec-6, Delhi, India - 110075</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}