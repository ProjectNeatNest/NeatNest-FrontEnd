import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import BodyText from '../typography/BodyText';

interface Props {
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    children?: ReactNode;
    buttonVariant?: 'primary' | 'secondary';
    textVariant?: 'body-large-regular' | 'body-large-bold';
    icon?: ReactNode;
}

const buttonVariants = {
    primary: `
    inline-flex justify-center items-center gap-[0.5rem]
    px-4 py-2
    rounded-xl
    shadow-xs
    bg-brand-primary
    hover:bg-brand-secondary hover:shadow-sm
    focus:bg-brand-secondary focus:shadow-none
    focus:outline-2 focus:outline-brand-primary
    focus-visible:outline-2 focus-visible:outline-brand-primary
  `,
    secondary: `
    inline-flex justify-center items-center gap-[0.5rem]
    px-4 py-2
    rounded-xl
    shadow-xs
    bg-neutral-secondary
    outline-2 outline-brand-primary
    hover:bg-neutral-tertiary hover:shadow-sm
    focus:bg-neutral-tertiary focus:outline-3
    focus-visible:outline-3
  `,
};

export default function Button(props: Props) {
    const {
        className,
        type = 'button',
        buttonVariant = 'primary',
        icon,
        textVariant,
        children,
        ...rest
    } = props;

    const variantDefault = {
        primary: 'body-large-bold',
        secondary: 'body-large-regular',
    } as const;

    const finalTextVariant = textVariant || variantDefault[buttonVariant];
    const classes = twMerge(buttonVariants[buttonVariant], className);

    return (
        <button type={type} className={classes} {...rest}>
            {icon && <span>{icon}</span>}
            <BodyText as="span" variant={finalTextVariant}>
                {children}
            </BodyText>
        </button>
    );
}
