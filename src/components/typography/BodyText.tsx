import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HTMLTag = 'span' | 'p' | 'li' | 'strong' | 'em' | 'a';

type Props<T extends HTMLTag = 'span'> = {
    children: ReactNode;
    className?: string;
    as?: T;
    variant:
        | 'body-xsmall-regular'
        | 'body-xsmall-regular-UpperCase'
        | 'body-xsmall-semibold'
        | 'body-small-regular'
        | 'body-small-semibold'
        | 'body-medium-regular'
        | 'body-medium-semibold'
        | 'body-medium-bold'
        | 'body-italic-regular'
        | 'body-large-regular'
        | 'body-large-bold'
        | 'body-large-italic';
} & ComponentPropsWithoutRef<T>;

export default function BodyText<T extends HTMLTag = 'span'>(props: Props<T>) {
    const { children, className, variant, as, ...rest } = props;

    const Tag = as || 'span';

    const TextBodyStyles = {
        'body-xsmall-regular': 'text-[0.75rem] font-normal',
        'body-xsmall-regular-UpperCase':
            'text-[0.75rem] font-normal tracking-[0.04em] uppercase',
        'body-xsmall-semibold': 'text-[0.75rem] font-semibold',
        'body-small-regular': 'text-[0.875rem] font-normal',
        'body-small-semibold': 'text-[0.875rem] font-semibold',
        'body-medium-regular': 'text-[1rem] font-normal',
        'body-medium-semibold': 'text-[1rem] font-semibold',
        'body-medium-bold': 'text-[1rem] font-bold',
        'body-italic-regular': 'text-[1rem] font-normal italic',
        'body-large-regular': 'text-[1.125rem] font-normal',
        'body-large-bold': 'text-[1.125rem] font-bold',
        'body-large-italic': 'text-[1.125rem] font-normal italic',
    };
    const sharedClasses = 'font-nunito leading-[140%]';
    const classes = twMerge(sharedClasses, TextBodyStyles[variant], className);

    return (
        <>
            {/* eslint-disable-next-line */}
            <Tag className={classes} {...(rest as any)}>
                {' '}
                {children}
            </Tag>
        </>
    );
}
