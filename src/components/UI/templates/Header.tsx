import React, {useEffect} from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Logo from '@/assets/images/logo.png';
import {Image} from '@/components/UI/atoms/Image';

interface HeaderProps {
    actions?: React.ReactNode;
    icon: IconProp;
}

export const Header = ({ actions }: HeaderProps) => {
    return (
        <header className="fixed inset-x-0 bg-black/70 z-50 top-0 backdrop-blur-sm py-4 flex text-white px-2 md:px-5 justify-between items-center">
            <Image src={Logo} alt="Logo" width={40}/>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex justify-end space-x-2 md:space-x-4 sm:auto-cols-max text-sm md:text-xl">
                    {actions}
                </div>
            </div>
        </header>
    );
};
