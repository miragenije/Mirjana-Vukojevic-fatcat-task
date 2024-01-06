import React from 'react';
import Marquee from 'react-fast-marquee';

import { Image } from '@/components/UI/atoms/Image';

interface TrustBarProps {
    images: string[];
}

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <div className="mb-8">
        <Marquee>
            {images.map((image) => (
                <Image width={300} key={image} src={image} className="mx-10 rounded-xl object-cover" />
            ))}
        </Marquee>
        </div>
    );
};
