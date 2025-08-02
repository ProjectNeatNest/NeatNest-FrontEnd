import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import BodyText from '../typography/BodyText';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'input'> {
    type: 'text' | 'email' | 'password' | 'date' | 'number';
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
        `custom-date appearance-none w-full text-neutral-primary placeholder:text-neutral-tertiary body-large-regular focus:border focus:border-brand-primary focus:rounded-md focus-visible:border-1 focus-visible:border-brand-primary focus-visible:rounded-md focus:outline-none ${errorMessage ? 'focus:border-error-primary focus-visible:border-error-primary' : ''} px-1`,
        className
    );

    return (
        <>
            <div className="flex flex-col w-full gap-1 rounded-md font-nunito">
                <div
                    className={`flex w-full gap-2 px-4 py-2 rounded-md shadow-md bg-neutral-primary border border-neutral-100 ${errorMessage ? 'border-2 border-error-primary' : ''}`}
                >
                    {leftIcon && (
                        <BodyText
                            as="span"
                            variant="body-small-regular"
                            className="flex items-center justify-center text-neutral-primary"
                        >
                            {leftIcon}
                        </BodyText>
                    )}

                    <div className="flex flex-col w-full">
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
