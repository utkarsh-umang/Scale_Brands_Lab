import React from 'react';

export default function Clips() {
  const videos = [
    { id: 1, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4' },
    { id: 2, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4' },
    { id: 3, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4' },
    { id: 4, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4' },
    { id: 5, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4' },
    { id: 6, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4' },
    { id: 7, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/7.mp4' },
    { id: 8, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/8.mp4' },
    { id: 9, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/9.mp4' },
    { id: 10, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/10.mp4' },
    { id: 11, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/11.mp4' },
    { id: 12, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/12.mp4' },
    { id: 13, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/13.mp4' },
    { id: 14, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/14.mp4' },
    { id: 15, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/15.mp4' },
    { id: 16, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/16.mp4' },
    { id: 17, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/17.mp4' },
    { id: 18, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/18.mp4' },
    { id: 19, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/19.mp4' },
    { id: 20, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/20.mp4' },
    { id: 21, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/21.mp4' },
    { id: 22, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/22.mp4' },
    { id: 23, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/23.mp4' },
    { id: 24, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/24.mp4' },
  ];

  // Ensure body and html background is set when component mounts
  // Using blue-600 (rgb(37, 99, 235)) from the Contact button
  React.useEffect(() => {
    const originalBodyBg = document.body.style.backgroundColor;
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    
    // blue-600: rgb(37, 99, 235), using darker blue-700 for base
    document.body.style.backgroundColor = 'rgb(29, 78, 216)';
    document.documentElement.style.backgroundColor = 'rgb(29, 78, 216)';
    
    return () => {
      document.body.style.backgroundColor = originalBodyBg;
      document.documentElement.style.backgroundColor = originalHtmlBg;
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pt-16" style={{ backgroundColor: 'rgb(29, 78, 216)' }}>
      {/* Animated gradient overlay */}
      <div 
        className="fixed inset-0 z-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Main background gradient using blue-600 (rgb(37, 99, 235)) from Contact button */}
      <div 
        className="fixed inset-0 z-[-1]"
        style={{
          background: 'linear-gradient(to bottom, rgb(37, 99, 235), rgb(29, 78, 216))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Best Work ⚡
            </h1>
            <p className="text-white/80 text-lg">
              Client's Work by Scale Brands Lab
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-5xl mx-auto">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm mx-auto"
                style={{ maxWidth: '400px' }}
              >
                <div className="w-full" style={{ aspectRatio: '9/16' }}>
                  <video
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-white/60 text-sm mt-16">
            © Scale Brands Lab {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
