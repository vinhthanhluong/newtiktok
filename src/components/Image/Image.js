import { useState, forwardRef } from 'react';

import images from '~/assets/images/';

function Image({ className, src, alt, errorChange = images.noImg, ...props }, ref) {
    const [errorImg, setErrorImg] = useState('');
    return (
        <img
            ref={ref}
            className={className}
            src={errorImg || src}
            alt={alt}
            onError={() => {
                setErrorImg(errorChange);
            }}
            {...props}
        />
    );
}

export default forwardRef(Image);
