import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import BodyText from '../typography/BodyText';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'input'> {
    type: 'text' | 'email' | 'password';
    className?: string;
    label?: ReactNode;
    errorMessage?: string;
    leftIcon?: ReactNode;
    placeholder?: string;
}

export default function InputField(props: Props) {
    const {
        type,
        className,
        label,
        errorMessage,
        leftIcon,
        placeholder,
        ...rest
    } = props;

    const id = useId();

    const classes = twMerge(
        'text-neutral-primary focus:text-neutral-primary focus:bg-transparent body-large-regular focus:border-1 focus:border-brand-primary focus-visible:border-brand-primary placeholder:text-neutral-tertiary',
        className
    );

    return (
        <>
            <div className="flex flex-col gap-1 font-nunito">
                <div className="flex gap-2 px-4 py-2 shadow-md bg-neutral-primary w-fit">
                    {leftIcon && (
                        <BodyText
                            as="span"
                            variant="body-small-regular"
                            className="flex items-center justify-center text-neutral-primary"
                        >
                            {leftIcon}
                        </BodyText>
                    )}

                    <div className="flex flex-col">
                        {label && (
                            <label htmlFor={id}>
                                <BodyText
                                    as="span"
                                    variant="body-small-regular"
                                    className="text-neutral-secondary"
                                >
                                    {label}
                                </BodyText>
                            </label>
                        )}
                        <input
                            type={type}
                            className={classes}
                            id={id}
                            {...rest}
                            placeholder={placeholder}
                        ></input>
                    </div>
                </div>
                {errorMessage && (
                    <BodyText
                        as="span"
                        variant="body-xsmall-regular-UpperCase"
                        className="text-error-primary"
                    >
                        {errorMessage}
                    </BodyText>
                )}
            </div>
        </>
    );
}
