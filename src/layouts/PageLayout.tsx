import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children: ReactNode;
}
export default function PageLayout(props: Props) {
    const { children, className } = props;
    const classes = twMerge(
        'grid px-6 md:py-3 lg:px-32 md:justify-items-center items-start',
        className
    );
    return <div className={classes}>{children}</div>;
}
