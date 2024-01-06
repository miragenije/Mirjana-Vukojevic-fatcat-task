import React from 'react';
import { Image } from '@/components/UI/atoms/Image';

type HeroProps = {
    title: string;
    image: string;
};

export const Hero = ({ title, image }: HeroProps) => {
    return (
        <div className="flex row justify-center items-center h-[calc(100vh-200px)]">
            <Image src={image} width="100%" alt="Hero" loading="eager" className="opacity-75 z-negative absolute inset-0 object-cover h-full"/>
            <div>
                <h1 className="text-6xl font-bold -mt-10 text-gray-700">{title}</h1>
            </div>
        </div>
    );
};
