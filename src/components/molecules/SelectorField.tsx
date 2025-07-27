import Select from 'react-select';
import type {
    StylesConfig,
    ControlProps,
    OptionProps,
    GroupBase,
} from 'react-select';

import type { Area } from '../../config/types';
import type { ReactNode } from 'react';
import BodyText from '../typography/BodyText';
import CustomDropdownIndicator from '../atoms/CustomDropdownIndicator';

interface Props {
    areasDB: Area[];
    leftIcon?: ReactNode;
    labelText?: string;
}

type OptionType = {
    value: string;
    label: string;
};

const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
    control: (base, props: ControlProps<OptionType, false>) => ({
        ...base,
        backgroundColor: props.isFocused ? '#c1ffe1' : '#fdfffe',
        borderColor: props.isFocused ? '#2ad482' : '#d6ebe1',
        boxShadow: props.isFocused ? '0 0 0 1px #2ad482' : 'none', // <-- AÑADIDO
        fontFamily: "'Nunito Variable', sans-serif'",
        transition: 'all 0.2s ease',
        '&:hover': {
            borderColor: '#2ad482',
        },
    }),
    option: (base, props: OptionProps<OptionType, false>) => ({
        ...base,
        backgroundColor: props.isSelected
            ? '#3ff69e'
            : props.isFocused
              ? '#ecfff6'
              : undefined,
        color: props.isSelected ? '#3c4d45' : '#3c4d45',
        fontFamily: "'Nunito Variable', sans-serif'",
    }),
    placeholder: (base) => ({
        ...base,
        color: '#90a79c', // tu color personalizado aquí
        fontFamily: "'Nunito Variable', sans-serif",
    }),
};

export default function SelectorField(props: Props) {
    const { areasDB, leftIcon, labelText } = props;

    // const handleSelectChange = (
    //     option: { labelText: string } | null
    // ) => {
    //     console.log(option);
    // };
    return (
        <div className="flex flex-col w-full gap-1 rounded-md font-nunito">
            <div
                className={`flex w-full gap-2 px-4 py-2 rounded-md shadow-md bg-neutral-primary`}
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
                    {labelText && (
                        <BodyText
                            as="span"
                            variant="body-small-regular"
                            className="text-neutral-secondary"
                        >
                            {labelText}
                        </BodyText>
                    )}
                    <Select
                        placeholder="Seleccionar zona"
                        styles={customStyles}
                        options={areasDB.map((area) => ({
                            label: area.name,
                            value: area.name,
                        }))}
                        components={{
                            DropdownIndicator: CustomDropdownIndicator,
                        }}
                        // onChange={handleSelectChange}
                    />
                </div>
            </div>
        </div>
    );
}
