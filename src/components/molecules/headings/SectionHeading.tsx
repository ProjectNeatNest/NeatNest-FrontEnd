import { PiPlusLight } from 'react-icons/pi';

import CustomNavLink from '../../atoms/CustomNavLink';
import Title from '../../typography/Title';
import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
    buttonLabel: string;
}

export default function SectionHeading(props: Props) {
    const { className, buttonLabel, children } = props;
    const classes = twMerge('grid grid-cols-[1fr_auto]', className);

    return (
        <header className={classes}>
            <Title
                as="h2"
                variant="title-small-regular"
                className="text-neutral-primary"
            >
                {children}
            </Title>
            <CustomNavLink
                to="/areas/new"
                appearance="primaryButton"
                leftIcon={<PiPlusLight size={24} />}
            >
                {buttonLabel}
            </CustomNavLink>
        </header>
    );
}
