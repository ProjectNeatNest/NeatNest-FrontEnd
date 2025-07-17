import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'li';

interface Props {
    children: ReactNode;
    className?: string;
    as: HTMLTag;
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
}

export default function BodyText(props: Props) {
    const { children, className, variant, as: Tag, ...rest } = props;

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
            <Tag className={classes} {...rest}>
                {children}{' '}
            </Tag>
        </>
    );
}
