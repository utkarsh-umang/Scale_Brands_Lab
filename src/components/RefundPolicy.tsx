import Footer from './Footer';

export default function RefundPolicy() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
            
            <div className="space-y-8 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Refund Policy</h2>
                <p className="mb-4">
                  At ScaleBrandsLab, we are committed to providing high-quality social media marketing services. Due to the nature of our digital services and the immediate access to our strategies and content, we maintain a strict no-refund policy once the onboarding process has begun and services have been initiated.
                </p>
              </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Cancellation</h2>
              <p className="mb-4">
                Once you are onboarded and the process is started, you are not eligible for refunds for the existing month. However, we will pause your subscription when the current month ends until you decide to restart services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Subscription Services</h2>
              <p className="mb-4">
                For monthly subscription services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly payments are processed in advance</li>
                <li>No refunds are provided for partial months</li>
                <li>Services can be cancelled at any time but will continue until the end of the current billing cycle</li>
                <li>No refunds for unused portions of the service period</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Exceptional Circumstances</h2>
              <p className="mb-4">
                Refunds may be considered in exceptional circumstances such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical issues preventing service delivery for extended periods</li>
                <li>Breach of service agreement by ScaleBrandsLab</li>
                <li>Failure to commence services within 7 days of payment</li>
              </ul>
              <p className="mt-4">
                Any refund requests under exceptional circumstances must be submitted within 7 days of the issue occurring and will be reviewed on a case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Process</h2>
              <p className="mb-4">
                If a refund is approved under exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds will be processed within 7-10 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Processing fees may be deducted from the refund amount</li>
                <li>All access to services and materials will be revoked</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Satisfaction</h2>
              <p className="mb-4">
                While we do not offer refunds, we are committed to your satisfaction. If you are not satisfied with our services, please contact us immediately so we can work together to address your concerns and improve our service delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Chargebacks</h2>
              <p className="mb-4">
                Initiating a chargeback without first attempting to resolve the issue with us directly may result in immediate termination of services and potential legal action. We encourage open communication to resolve any concerns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modification of Services</h2>
              <p className="mb-4">
                We reserve the right to modify our services, pricing, and policies at any time. Changes will be communicated to clients with at least 30 days notice, and continued use of services constitutes acceptance of the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes regarding refunds or service issues will be resolved through direct communication first. If resolution cannot be reached, disputes will be subject to the jurisdiction of Delhi courts under Indian law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact for Refund Inquiries</h2>
              <p className="mb-4">
                For any questions regarding refunds or to submit a refund request under exceptional circumstances, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> team@scalebrandslab.com</p>
                <p><strong>Subject Line:</strong> Refund Request - [Your Name]</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                By purchasing our services, you acknowledge that you have read, understood, and agree to this refund policy. This policy is part of our Terms of Service and is legally binding.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}