const SimplePaymentPage = () => {
  const payuUrl = 'https://u.payu.in/yIXlQTcvMxAu';

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-5 font-sans">
      <div className="max-w-lg w-full bg-white p-10 rounded-lg shadow-lg text-center">
        
        {/* Header */}
        <h1 className="text-3xl text-gray-800 mb-2 font-normal">
          Payment
        </h1>
        
        <p className="text-gray-600 text-base mb-10">
          Complete your payment securely with PayU
        </p>

        {/* PayU Button */}
        <div className="mb-8">
          <a 
            href={payuUrl}
            style={{
              width: '200px',
              backgroundColor: '#1065B7',
              textAlign: 'center',
              fontWeight: '800',
              padding: '11px 0px',
              color: 'white',
              fontSize: '12px',
              display: 'inline-block',
              textDecoration: 'none',
              borderRadius: '3.229px'
            }}
          >
            Pay Now
          </a>
        </div>

        {/* Simple info */}
        <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
          <p className="mb-2">
            Accepts: Credit Cards, Debit Cards, Net Banking, UPI, Wallets
          </p>
          <p className="text-xs text-gray-500">
            Powered by PayU - Secure and trusted
          </p>
        </div>

      </div>
    </div>
  );
};

export default SimplePaymentPage;