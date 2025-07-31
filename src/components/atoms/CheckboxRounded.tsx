import { useId, useState } from 'react';
import { PiCheckLight } from 'react-icons/pi';

interface Props {
    onChange?: (isChecked: boolean) => void;
    isInitiallyChecked?: boolean;
}

export default function CheckboxRounded(props: Props) {
    const { onChange, isInitiallyChecked = false } = props;

    const [isChecked, setIsChecked] = useState(isInitiallyChecked);

    function handleCheckboxChange () {        
        if (onChange) onChange(!isChecked)
        setIsChecked((oldChecked) =>  !oldChecked);
    }
    const id = useId();
    return (
        <div className="select-none group">
            <input type="checkbox" id={id} className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
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
