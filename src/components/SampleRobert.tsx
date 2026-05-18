import { useState, type ReactNode } from 'react';

type SampleAssets = {
  imageId: string;
  videoId: string;
};

const SAMPLES: Record<1 | 2, SampleAssets> = {
  1: {
    imageId: '1UhuvlctnTzoOuiisnLY-h4YMbonDatId',
    videoId: '1C21WJKJdoBH-KlapRxO7oI8X4cViQa3A',
  },
  2: {
    imageId: '1vuK7M9voLgBgjdvxpnuQOumCeiykXs82',
    videoId: '1kIPHi1nuCLmAYbK9ex788IaR-7dmii5q',
  },
};

function driveImageSrc(imageId: string) {
  return `https://lh3.googleusercontent.com/d/${imageId}`;
}

function driveImageFallbackSrc(imageId: string) {
  return `https://drive.google.com/thumbnail?id=${imageId}&sz=w2000`;
}

function driveVideoEmbedSrc(videoId: string) {
  return `https://drive.google.com/file/d/${videoId}/preview`;
}

function PortraitFrame({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[min(100%,320px)] ${className}`.trim()}>
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-white/10">
        {children}
      </div>
    </div>
  );
}

export default function SampleRobert() {
  const [activeSample, setActiveSample] = useState<1 | 2>(1);
  const { imageId, videoId } = SAMPLES[activeSample];
  const imageSrc = driveImageSrc(imageId);
  const imageFallbackSrc = driveImageFallbackSrc(imageId);
  const videoEmbedSrc = driveVideoEmbedSrc(videoId);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center px-4 py-8 sm:py-10">
      <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 w-full max-w-3xl justify-center">
        {([1, 2] as const).map((sample) => {
          const isActive = activeSample === sample;
          return (
            <button
              key={sample}
              type="button"
              onClick={() => setActiveSample(sample)}
              className={`min-w-[7.5rem] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-white text-neutral-950'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Sample {sample}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full max-w-3xl flex-1">
        <PortraitFrame className="order-2 sm:order-1">
          <img
            key={imageId}
            src={imageSrc}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-contain"
            loading="eager"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== imageFallbackSrc) img.src = imageFallbackSrc;
            }}
          />
        </PortraitFrame>

        <PortraitFrame className="order-1 sm:order-2">
          <iframe
            key={videoId}
            src={videoEmbedSrc}
            title=""
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </PortraitFrame>
      </div>
    </div>
  );
}
