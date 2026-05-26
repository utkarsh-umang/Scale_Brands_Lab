import DriveSamplePage, { type DriveSampleAssets } from './DriveSamplePage';

const SAMPLES: Record<1 | 2, DriveSampleAssets> = {
  1: {
    imageId: '1UhuvlctnTzoOuiisnLY-h4YMbonDatId',
    videoId: '1C21WJKJdoBH-KlapRxO7oI8X4cViQa3A',
  },
  2: {
    imageId: '1vuK7M9voLgBgjdvxpnuQOumCeiykXs82',
    videoId: '1kIPHi1nuCLmAYbK9ex788IaR-7dmii5q',
  },
};

export default function SampleRobert({ sample }: { sample: 1 | 2 }) {
  return <DriveSamplePage assets={SAMPLES[sample]} />;
}
