import React from "react";

export default function Watch() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showSpeedNotification, setShowSpeedNotification] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
      setShowSpeedNotification(true);
      setTimeout(() => setShowSpeedNotification(false), 2000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="aspect-video w-full max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden relative">
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
              <source src={`https://scale-brands.s3.ap-south-1.amazonaws.com/videoplayback.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">Real Estate Lead Engine System</h1>
        </div>
      </div>
    </div>
  );
}