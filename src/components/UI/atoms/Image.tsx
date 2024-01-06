import React, {ImgHTMLAttributes, useMemo, useRef} from 'react';

import imageNotFound from '@/assets/images/image_not_found.png';

export const Image = ({ alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
    const imgRef = useRef<HTMLImageElement>(null);
    let notFoundRetry = useMemo<number>(() => 0, []);

    function onImageNotFound(): void {
        if (notFoundRetry === 0) {
            imgRef.current!.src = imageNotFound;
        }
        notFoundRetry++;
    }

    return (
        <img
            ref={imgRef}
            alt={alt}
            onError={() => onImageNotFound()}
            {...props}
        />
    );
};
