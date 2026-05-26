import DriveSamplePage, { type DriveSampleAssets } from './DriveSamplePage';

const SAMPLES: Record<1 | 2, DriveSampleAssets> = {
  1: {
    imageId: '1MbZ7gTODYtZlyowBL5ykWv5BrN8XudTt',
    videoId: '1CpsuuXcrTKEOOkA7xPhmWhFP8h1N9mAh',
  },
  2: {
    imageId: '10FnhnGJPPJTtV5dRiluJkYNAPTXDsnY-',
    videoId: '1Fb3noQVFphGWtmD3rSTkOcIpb1TCs10j',
  },
};

export default function SchoolForStartups({ sample }: { sample: 1 | 2 }) {
  return <DriveSamplePage assets={SAMPLES[sample]} />;
}
