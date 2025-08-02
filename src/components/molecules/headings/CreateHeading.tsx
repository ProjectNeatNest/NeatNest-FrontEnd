import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import Title from '../../typography/Title';
import Button from '../../atoms/Button';
import { PiTrashLight } from 'react-icons/pi';
import Modal from '@/components/organisms/Modal';
import BodyText from '@/components/typography/BodyText';

interface Props {
    leftIcon?: ReactNode;
    className?: string;
    children: ReactNode;
    deleteButton?: boolean;
    onDelete?: () => void;
}

export default function CreateHeading(props: Props) {
    const {
        leftIcon,
        className,
        deleteButton = true,
        onDelete,
        children,
    } = props;

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleConfirmDelete = () => {
        setShowModal(false);
        if (onDelete) onDelete();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                        onClick={() => setShowModal(true)}
                    >
                        <PiTrashLight size={24} />
                    </Button>
                )}
            </header>
            <Modal
                isShown={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
            >
                <Title
                    as="span"
                    variant="title-small-regular"
                    className="text-neutral-primary"
                >
                    ¿Realmente quieres eliminar?
                </Title>
                <BodyText
                    as="p"
                    variant="body-medium-regular"
                    className="text-neutral-secondary"
                >
                    Esta acción no se puede deshacer.
                </BodyText>
            </Modal>
        </>
    );
}
