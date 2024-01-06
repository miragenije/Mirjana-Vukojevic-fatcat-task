import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface LinkItemProps {
    icon: IconProp;
    text: string;
    href: string;
    iconColor?: string;
    size?: 'lg' | 'sm' | 'xs';
    targetBlank?: boolean;
    className?: string;
}

export const LinkItem = ({
    icon,
    text,
    href,
}: LinkItemProps) => {
    return (
        <Link to={href}>
            <FontAwesomeIcon icon={icon} /> {text}
        </Link>
    );
};
