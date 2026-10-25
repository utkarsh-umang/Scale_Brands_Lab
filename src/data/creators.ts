import { Play, Download, TrendingUp, Users, type LucideIcon } from 'lucide-react';

export type CreatorStat = { label: string; value: string; icon: LucideIcon };

export type Creator = {
    id: string;
    name: string;
    handle: string;
    followers: string;
    niche: string;
    category: string;
    image: string;
    stats: CreatorStat[];
    videoResults: { id: number; url: string; title: string }[];
    description: string;
    // Numeric values used only for sorting on the showcase grid
    sortViews: number;
    sortAudience: number;
};

export const creators: Creator[] = [
    {
        id: 'katie-melissa',
        name: 'Katie Melissa',
        handle: '@katiemelissa',
        followers: '240k+ Followers',
        niche: 'E-Commerce & Business Educator',
        category: 'Business & Education',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/katie_melissa.jpg',
        stats: [
            { label: 'Total Views', value: '15M+', icon: Play },
            { label: 'Follower Growth', value: '85k+', icon: Users },
            { label: 'Engagement Rate', value: '12.4%', icon: TrendingUp },
            { label: 'Course Sales', value: '$45k+', icon: Download },
        ],
        videoResults: [
            { id: 1, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4', title: 'Viral Strategy #1' },
            { id: 2, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4', title: 'Viral Strategy #2' },
        ],
        description: "Katie Melissa needed a way to transform her expertise into high-retention short-form content. We implemented a hook-first strategy that lead to a massive spike in her organic reach and course conversions.",
        sortViews: 15,
        sortAudience: 240,
    },
    {
        id: 'mind-hustler',
        name: 'Mind Hustler',
        handle: '@mindhustler',
        followers: '350k+ Followers',
        niche: 'Mindset & Entrepreneurship',
        category: 'Mindset & Motivation',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/mind_hustler.jpg',
        stats: [
            { label: 'Total Views', value: '28M+', icon: Play },
            { label: 'Follower Growth', value: '120k+', icon: Users },
            { label: 'Engagement Rate', value: '15.2%', icon: TrendingUp },
            { label: 'Sponsorships', value: '12+', icon: Download },
        ],
        videoResults: [
            { id: 3, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4', title: 'Mindset Hook #1' },
            { id: 4, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4', title: 'Growth Series' },
        ],
        description: "Mind Hustler's brand was stagnant until we introduced cinematic storytelling to their daily motivation clips. The transformation resulted in multiple sponsorship deals and a 3x increase in average views per reel.",
        sortViews: 28,
        sortAudience: 350,
    },
    {
        id: 'nutty-productions',
        name: 'Nutty Productions',
        handle: '@nuttyproductions',
        followers: '600k+ Subs',
        niche: '3D Animation Studio',
        category: 'Animation & Entertainment',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/nutty_productions.jpg',
        stats: [
            { label: 'Total Views', value: '50M+', icon: Play },
            { label: 'Sub Growth', value: '200k+', icon: Users },
            { label: 'Engagement Rate', value: '18.9%', icon: TrendingUp },
            { label: 'Ad Revenue', value: '5x Increase', icon: Download },
        ],
        videoResults: [
            { id: 5, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4', title: 'Cinematic Edit #1' },
            { id: 6, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4', title: 'Cinematic Edit #2' },
        ],
        description: "Nutty Productions handles large-scale video assets, but they lacked the capacity for high-volume short-form distribution. We became their dedicated 'viral engine', repurposing long-form content into gold-standard reels.",
        sortViews: 50,
        sortAudience: 600,
    },
];

export const getCreator = (id: string | undefined) => creators.find((c) => c.id === id);
