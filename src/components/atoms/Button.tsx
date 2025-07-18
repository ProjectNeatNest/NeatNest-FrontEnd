import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import BodyText from '../typography/BodyText';

interface Props {
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    children?: ReactNode;
    buttonVariant?: 'primary' | 'secondary';
    textVariant: 'body-large-regular' | 'body-large-bold';
    icon?: ReactNode;
}

const buttonVariants = {
    primary:
        'inline-flex px-4 py-2 justify-center items-center gap-[0.5rem] rounded-xl border border-white/20 bg-gradient-to-b from-[#3FF69E] to-[#97FFCC] shadow-[0px_2px_4px_rgba(62,52,69,0.16)]',

    secondary:
        '"inline-flex px-4 py-2 justify-center items-center gap-[0.5rem] rounded-xl border-2 border-[#2AD482] bg-white bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_7.29%,rgba(255,255,255,0)_65.62%),#ffffff]"',
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
    const classes = twMerge(buttonVariants[buttonVariant], className);

    return (
        <>
            <button type={type || 'button'} className={classes} {...rest}>
                {icon && <span>{icon}</span>}
                <BodyText as="span" variant={textVariant}>
                    {children}
                </BodyText>
            </button>
        </>
    );
}
