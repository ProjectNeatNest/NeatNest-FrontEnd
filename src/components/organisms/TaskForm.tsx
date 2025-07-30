import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';
import Select, { type ControlProps, type GroupBase, type OptionProps, type StylesConfig } from 'react-select';

import {
    PiCalendarDotLight,
    PiCheckCircleLight,
    PiDresserLight,
    PiTimerLight,
} from 'react-icons/pi';
import Button from '../atoms/Button';
import SelectorField from '../molecules/SelectorField';
import type { Area } from '../../config/types';
import { useForm, Controller } from 'react-hook-form';
import useHousingContext from '../../hooks/useHousingContext';
import useRequest from '../../hooks/useRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, type TaskFormValues } from '../../schemas/taskSchema';
import CustomDropdownIndicator from '../atoms/CustomDropdownIndicator';

// const DBareas: Area[] = [
//     {
//         area_id: 1,
//         name: 'Cocina',
//         housing_id: 1,
//         created_at: '25/07/2025',
//     },
//     {
//         area_id: 2,
//         name: 'Baño',
//         housing_id: 1,
//         created_at: '25/07/2025',
//     },
// ];

interface Props {
    className?: string;
}

export default function TaskForm(props: Props) {
    const { className } = props;

    const { housing } = useHousingContext();

    const { requestData: areas } = useRequest<Area[]>(
        `/housings/${housing?.housing_id}/areas`
    );

    const { formState, register, handleSubmit, control } =
        useForm<TaskFormValues>({
            resolver: zodResolver(taskSchema),
            mode: 'onChange',
        });
    const { errors } = formState;

    type OptionType = {
        value: string;
        label: string;
    };

    const customStyles: StylesConfig<
        OptionType,
        false,
        GroupBase<OptionType>
    > = {
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

    async function onSubmit(data: TaskFormValues) {
        return console.log(data);
        if (!housing) return;

        const newTask = {
            name: data.name,
            area_id: data.areaId,
            limit_date: data.limitDate,
            duration: data.duration,
        };
    }

    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la tarea"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                    {...register('name')}
                />
                <Controller
                    control={control}
                    name="areaId"
                    render={({ field }) => (
                        <Select
                            placeholder="Seleccionar zona"
                            styles={customStyles}
                            options={areas?.map((area) => ({
                                label: area.name,
                                value: area.area_id.toString(),
                            }))}
                            components={{
                                DropdownIndicator: CustomDropdownIndicator,
                            }}
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
                {/* <SelectorField
                        options={areas || []}
                        leftIcon={<PiDresserLight size={24} />}
                        labelText="Zona de trabajo"
                        {...register('areaId')}
                    /> */}

                <InputField
                    type="number"
                    label="Duración de la tarea (min)"
                    leftIcon={<PiTimerLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                    {...register('duration')}
                />
                <InputField
                    type="date"
                    label="Fecha límite"
                    leftIcon={<PiCalendarDotLight size={24} />}
                    placeholder="Fecha límite de realización"
                    required
                    {...register('limitDate')}
                />
            </div>
            <Button type="submit" buttonVariant="primary">
                Guardar y continuar
            </Button>
        </form>
    );
}
