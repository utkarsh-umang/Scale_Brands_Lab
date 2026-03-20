import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function QuickOverview() {
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
    <div className="min-h-screen bg-slate-600 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Video Section */}
        <div className="aspect-video w-full max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden relative mb-4">
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
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            >
              <source src={`https://scale-brands.s3.ap-south-1.amazonaws.com/Scale+Brands+Lab.m4v`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Title and Description */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get a comprehensive look at what ScaleBrandsLab can do for your business. 
            Ready to take the next step?
          </p>
          <div className="text-center mt-4">
            <button
              onClick={handleCalendlyClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <p className="text-slate-400 text-sm mt-4">
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