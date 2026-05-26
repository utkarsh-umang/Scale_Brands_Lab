import type { ReactNode } from 'react';

export type DriveSampleAssets = {
  imageId: string;
  videoId: string;
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

export default function DriveSamplePage({ assets }: { assets: DriveSampleAssets }) {
  const { imageId, videoId } = assets;
  const imageSrc = driveImageSrc(imageId);
  const imageFallbackSrc = driveImageFallbackSrc(imageId);
  const videoEmbedSrc = driveVideoEmbedSrc(videoId);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full max-w-3xl">
        <PortraitFrame className="order-2 sm:order-1">
          <img
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
