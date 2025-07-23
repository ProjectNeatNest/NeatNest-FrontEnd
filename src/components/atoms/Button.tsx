import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import BodyText from '../typography/BodyText';

interface Props extends ComponentPropsWithoutRef<'button'> {
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    children?: ReactNode;
    buttonVariant?: 'primary' | 'secondary' | 'tertiary';
    textVariant?: 'body-medium-regular' | 'body-medium-bold';
    icon?: ReactNode;
}

const buttonVariants = {
    primary: `
    inline-flex justify-center items-center gap-[0.5rem]
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

    secondary: `
    inline-flex justify-center items-center gap-[0.5rem]
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

    tertiary: `
    inline-flex justify-center items-center gap-[0.5rem]
    px-2 py-2
    rounded-xl
    shadow-sm
    bg-neutral-primary
    hover:bg-neutral-secondary hover:shadow-sm
    border border-transparent
    focus:bg-neutral-tertiary focus:border-2 focus:border-brand-primary
    focus-visible:border-2 focus-visible:border-brand-primary
    select-none
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
        primary: 'body-medium-bold',
        secondary: 'body-medium-regular',
        tertiary: 'body-medium-regular',
    } as const;

    const finalTextVariant = textVariant || variantDefault[buttonVariant];
    const classes = twMerge(buttonVariants[buttonVariant], className);

    return (
        <button type={type} className={classes} {...rest}>
            {icon && <span className="text-neutral-primary">{icon}</span>}
            <BodyText
                as="span"
                variant={finalTextVariant}
                className="text-neutral-primary"
            >
                {children}
            </BodyText>
        </button>
    );
}
