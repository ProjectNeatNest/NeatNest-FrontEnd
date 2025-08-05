import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children: ReactNode;
}
export default function PageLayout(props: Props) {
    const { children, className } = props;
    const classes = twMerge(
        'grid p-6 lg:px-32 justify-items-center',
        className
    );
    return <div className={classes}>{children}</div>;
}
