import React, { useState } from 'react';

import { Hero } from '@/components/UI/atoms/Hero';
import { ItemsShowcase } from '@/components/UI/molecules/ItemsShowcase';
import { TrustBar } from '@/components/UI/molecules/TrustBar';
import { showPanelItems } from '@/config/showPanelItems'
import HeroBg from '@/assets/images/hero_bg.jpg';
import {Button} from "@material-tailwind/react";
import {clsx} from "clsx";

export const TabItems = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className={clsx('flex space-x-4 mb-4 justify-center')}>
                {showPanelItems.map((section, index) => (
                    <Button
                        key={index}
                        className={`px-4 py-2 ${
                            activeTab === index
                                ? 'bg-green-500 text-white'
                                : 'bg-black/50 text-white'
                        } rounded`}
                        onClick={() => setActiveTab(index)}
                    >
                        Tab {index + 1}
                    </Button>
                ))}
            </div>

            <div>
                {showPanelItems[activeTab].components.map((component, componentIndex) => {
                    switch (component.type) {
                        case 'componentHero':
                            return (
                                <Hero
                                    key={`hero-${componentIndex}`}
                                    title="Hero"
                                    image={HeroBg}
                                    {...component.props}
                                />
                            );
                        case 'componentItemsShowcase':
                            return (
                                <ItemsShowcase
                                    key={`items-showcase-${componentIndex}`}
                                    {...component.props}
                                />
                            );
                        case 'componentTrustBar':
                            return (
                                <TrustBar
                                    images={[HeroBg, HeroBg, HeroBg,HeroBg]}
                                    key={`trust-bar-${componentIndex}`}
                                    {...component.props}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};
