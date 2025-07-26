import { PiCaretDownLight } from 'react-icons/pi';
import type { DropdownIndicatorProps, GroupBase } from 'react-select';
import { components } from 'react-select';

type OptionType = {
    value: string;
    label: string;
};

export default function CustomDropdownIndicator(
    props: DropdownIndicatorProps<OptionType, false, GroupBase<OptionType>>
) {
    return (
        <components.DropdownIndicator {...props}>
            <PiCaretDownLight className="text-neutral-primary" size={24} />
        </components.DropdownIndicator>
    );
}
