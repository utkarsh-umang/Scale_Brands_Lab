import { creators, type Creator } from './creators';

export type Testimonial = {
    creator: Creator;
    quote: string;
    videoUrl: string;
    duration: string;
    platforms: string;
};

const byId = (id: string) => {
    const creator = creators.find((c) => c.id === id);
    if (!creator) throw new Error(`Unknown creator: ${id}`);
    return creator;
};

// TODO: replace placeholder quotes with the creators' real words before launch
export const featuredTestimonial = {
    creator: byId('katie-melissa'),
    title: 'How Katie Melissa Turned Her Expertise Into 15M+ Views',
    subtitle: 'Hook-first short-form strategy',
    videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4',
    quote:
        "Before ScaleBrandsLab, I spent hours every week editing and reformatting clips. Now I just record, and their team handles the entire distribution pipeline. It feels like having an elite editing team on call 24/7.",
    chapters: [
        { title: 'Raw long-form footage to high-retention hooks', time: '00:45' },
        { title: 'Turning reach into course sales', time: '01:30' },
    ],
};

export const testimonials: Testimonial[] = [
    {
        creator: byId('mind-hustler'),
        quote: 'Cinematic storytelling took our daily clips from stagnant to 3x average views per reel.',
        videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4',
        duration: '01:14',
        platforms: 'Reels & Shorts',
    },
    {
        creator: byId('nutty-productions'),
        quote: 'They became our dedicated viral engine for repurposing long-form into short-form.',
        videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4',
        duration: '01:58',
        platforms: 'YouTube Shorts',
    },
    {
        creator: byId('katie-melissa'),
        quote: 'Hook-first edits drove a massive spike in organic reach and course conversions.',
        videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4',
        duration: '02:10',
        platforms: 'Reels & TikTok',
    },
    {
        creator: byId('mind-hustler'),
        quote: 'Multiple sponsorship deals came in once the content started performing consistently.',
        videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4',
        duration: '01:42',
        platforms: 'Reels & Shorts',
    },
    {
        creator: byId('nutty-productions'),
        quote: 'High-volume short-form distribution without adding a single person to our team.',
        videoUrl: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4',
        duration: '01:26',
        platforms: 'YouTube Shorts',
    },
];
