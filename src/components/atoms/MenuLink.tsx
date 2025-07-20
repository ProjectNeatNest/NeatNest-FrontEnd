import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface Props {
    children: ReactNode;
    to: string;
    leftIcon?: ReactNode;
}

export default function MenuLink(props: Props) {
    const { children, to, leftIcon } = props;

    return (
        <>
            <div className="flex gap-2">
                {leftIcon && (
                    <span className="text-neutral-primary">{leftIcon}</span>
                )}
                <NavLink
                    className="text-neutral-primary title-small-regular hover:underline"
                    to={to}
                >
                    {children}
                </NavLink>
            </div>
        </>
    );
}
