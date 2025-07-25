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
        backgroundColor: props.isFocused ? '#eef' : '#fff',
        fontFamily: "'Nunito Variable', sans-serif'",
    }),
    option: (base, props: OptionProps<OptionType, false>) => ({
        ...base,
        backgroundColor: props.isSelected
            ? '#2684FF'
            : props.isFocused
              ? '#e6f0ff'
              : undefined,
        color: props.isSelected ? 'white' : 'black',
        fontFamily: "'Nunito Variable', sans-serif'",
    }),
    // puedes añadir más componentes tipados como placeholder, singleValue, etc.
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
                        styles={customStyles}
                        options={areasDB.map((area) => ({
                            label: area.name,
                            value: area.name,
                        }))}
                        // onChange={handleSelectChange}
                    />
                </div>
            </div>
        </div>
    );
}
