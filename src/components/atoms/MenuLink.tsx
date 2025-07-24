import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: ReactNode;
    to: string;
    leftIcon?: ReactNode;
    appearance?: 'primaryButton' | 'secondaryButton' | 'navLink';
    className?: string;
}

export default function MenuLink(props: Props) {
    const appearanceClasses = {
        primaryButton: `
    inline-flex justify-center items-center gap-2
    text-[1rem] font-bold font-nunito
    px-4 py-2
    rounded-xl
    shadow-sm
    bg-brand-primary
    hover:bg-brand-secondary hover:shadow-sm
    border border-transparent
    focus:bg-brand-secondary focus:border-2 focus:border-brand-primary
    focus-visible:border-2 focus-visible:border-brand-primary
    select-none
  `,

        secondaryButton: `
    inline-flex justify-center items-center gap-2
    text-[1rem] font-normal font-nunito
    px-4 py-2
    rounded-xl
    shadow-sm
    bg-neutral-secondary
    hover:bg-neutral-tertiary hover:shadow-sm
    border border-2 border-brand-primary
    focus:bg-neutral-tertiary focus:border-2 focus:border-brand-primary
    focus-visible:border-2 focus-visible:border-brand-primary
    select-none
  `,

        navLink: `
        text-neutral-primary text-[1rem] font-normal font-arima hover:underline flex gap-1 items-center
    `,
    };

    const { children, to, leftIcon, className, appearance = 'navLink' } = props;

    const classes = twMerge(appearanceClasses[appearance], className);

    return (
        <>
            <div className={classes}>
                {leftIcon && (
                    <span className="text-neutral-primary">{leftIcon}</span>
                )}
                <NavLink className="" to={to}>
                    {children}
                </NavLink>
            </div>
        </>
    );
}
