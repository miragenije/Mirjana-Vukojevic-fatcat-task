import React from 'react';
import { type ComponentPropsWithRef, forwardRef } from 'react';

import clsx from 'clsx';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
    onClick: () => void;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, onClick, className }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    'rounded-lg',
                    'px-4',
                    'py-2',
                    'bg-black',
                    'text-white',
                    className
                )}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
