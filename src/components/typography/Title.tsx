import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'li';

type Props<T extends HTMLTag = 'span'> = {
    children: ReactNode;
    className?: string;
    as?: T;
    variant:
        | 'title-xsmall-regular'
        | 'title-xsmall-semibold'
        | 'title-small-regular'
        | 'title-small-semibold'
        | 'title-medium-regular'
        | 'title-medium-light'
        | 'title-medium-semibold'
        | 'title-large-light'
        | 'title-large-semibold'
        | 'title-xlarge-light'
        | 'title-xlarge-semibold'
        | 'title-2xlarge-light'
        | 'title-2xlarge-semibold';
} & ComponentPropsWithoutRef<T>;

export default function Title<T extends HTMLTag = 'span'>(props: Props<T>) {
    const { children, className, variant, as, ...rest } = props;

    const Tag = as || 'span';

    const titleStyles = {
        'title-xsmall-regular': 'text-[1.25rem] font-normal font-nunito',
        'title-xsmall-semibold': 'text-[1.25rem] font-semibold font-nunito',
        'title-small-regular': 'text-[1.5rem] font-normal',
        'title-small-semibold': 'text-[1.5rem] font-semibold',
        'title-medium-regular': 'text-[2rem] font-normal',
        'title-medium-light': 'text-[2rem] font-light',
        'title-medium-semibold': 'text-[2rem] font-semibold',
        'title-large-light': 'text-[2.5rem] font-light',
        'title-large-semibold': 'text-[2.5rem] font-semibold',
        'title-xlarge-light': 'text-[3rem] font-light',
        'title-xlarge-semibold': 'text-[3rem] font-semibold',
        'title-2xlarge-light': 'text-[4rem] font-light',
        'title-2xlarge-semibold': 'text-[4rem] font-semibold',
    };
    const sharedClasses = 'font-arima leading-[120%]';

    const classes = twMerge(sharedClasses, titleStyles[variant], className);
    return (
        <>
            {/* eslint-disable-next-line */}
            <Tag className={classes} {...(rest as any)}>
                {children}
            </Tag>
        </>
    );
}
