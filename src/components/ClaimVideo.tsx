import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function ClaimVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showSpeedNotification, setShowSpeedNotification] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
      setShowSpeedNotification(true);
      setTimeout(() => setShowSpeedNotification(false), 2000);
    }
  }, []);

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/scale-brands-lab/30min', '_blank');
  };

  return (
    <div className="h-screen bg-slate-600 pt-16 overflow-hidden flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center">
        {/* Video Section */}
        <div className="w-full max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden relative mb-3 flex-shrink-0" style={{ height: 'calc(70vh - 4rem)' }}>
          <div className="relative w-full h-full">
            {showSpeedNotification && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out backdrop-blur-sm">
                  Playing at 1.25x speed
                </div>
              </div>
            )}
            <video 
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            >
              <source src="https://scale-brands.s3.ap-south-1.amazonaws.com/claimvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Title and Description */}
        <div className="max-w-5xl mx-auto text-center flex-shrink-0">
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-3">
            Get a comprehensive look at what ScaleBrandsLab can do for your business. 
            Ready to take the next step?
          </p>
          <div className="text-center">
            <button
              onClick={handleCalendlyClick}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
                Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <p className="text-slate-400 text-xs mt-2">
              Choose a time that works for you - we'll handle the rest
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: scale(0.9); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

