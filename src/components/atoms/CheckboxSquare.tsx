import { useId } from 'react';
import { PiCheckLight } from 'react-icons/pi';

export default function CheckboxSquare() {
    const id = useId();
    return (
        <div className="select-none group">
            <input type="checkbox" id={id} className="hidden" />
            <label
                htmlFor={id}
                className="flex items-center justify-center border-2 shadow-xs rounded-xs size-6 bg-neutral-tertiary border-brand-primary"
                aria-label="checkbox"
            >
                <PiCheckLight
                    className="transition-opacity opacity-0 text-neutral-primary group-has-checked:opacity-100"
                    size={32}
                />
            </label>
        </div>
    );
}
