import { useId } from 'react';
import { PiCheckLight } from 'react-icons/pi';

export default function CheckboxRounded() {
    const id = useId();
    return (
        <div className="select-none group">
            <input type="checkbox" id={id} className="hidden" />
            <label
                htmlFor={id}
                className="grid border-2 rounded-full size-8 bg-neutral-primary border-brand-primary place-items-center"
                aria-label="checkbox"
            >
                <PiCheckLight
                    className="transition-opacity opacity-0 text-neutral-primary group-has-checked:opacity-100"
                    size={24}
                />
            </label>
        </div>
    );
}
