import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import style from './Images.module.scss';

const cx = classNames.bind(style);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErr = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErr}
        />
    );
});

export default Image;
