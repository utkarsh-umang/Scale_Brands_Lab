import type { ReactNode } from 'react';

const DRIVE_IMAGE_ID = '1UhuvlctnTzoOuiisnLY-h4YMbonDatId';
const DRIVE_VIDEO_ID = '1C21WJKJdoBH-KlapRxO7oI8X4cViQa3A';

const imageSrc = `https://drive.google.com/uc?export=view&id=${DRIVE_IMAGE_ID}`;
const videoEmbedSrc = `https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`;

function PortraitFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[min(100%,320px)]">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-white/10">
        {children}
      </div>
    </div>
  );
}

export default function SampleRobert() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full max-w-3xl">
        <PortraitFrame>
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
            loading="eager"
          />
        </PortraitFrame>

        <PortraitFrame>
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
