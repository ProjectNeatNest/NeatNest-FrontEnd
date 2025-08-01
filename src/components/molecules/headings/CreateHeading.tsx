import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import Title from '../../typography/Title';
import Button from '../../atoms/Button';
import { PiTrashLight } from 'react-icons/pi';

interface Props {
    leftIcon?: ReactNode;
    className?: string;
    children: ReactNode;
    deleteButton?: boolean;
    onDelete?: () => void
}

export default function CreateHeading(props: Props) {
    const { leftIcon, className, deleteButton = true, onDelete, children } = props;
    const classes = twMerge(
        'text-neutral-primary grid grid-cols-[auto_1fr_auto] items-center gap-2',
        className
    );

    return (
        <>
            <header className={classes}>
                {leftIcon && (
                    <span className="text-neutral-primary">{leftIcon}</span>
                )}
                <Title as="h2" variant="title-medium-light">
                    {children}
                </Title>
                {deleteButton && (
                    <Button
                        buttonVariant="secondary"
                        className="p-2 rounded-full"
                        onClick={onDelete}
                    >
                        <PiTrashLight size={24} />
                    </Button>
                )}
            </header>
        </>
    );
}
