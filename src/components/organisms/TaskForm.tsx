import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';

import {
    PiCalendarDotLight,
    PiCheckCircleLight,
    PiTimerLight,
} from 'react-icons/pi';
import Button from '../atoms/Button';
import type { Area } from '../../config/types';
import { useForm, Controller } from 'react-hook-form';
import useHousingContext from '../../hooks/useHousingContext';
import useRequest from '../../hooks/useRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, type TaskFormValues } from '../../schemas/taskSchema';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import BodyText from '../typography/BodyText';
import myRequest from '@/services/myRequest';
import CheckboxRounded from '../atoms/CheckboxRounded';

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

    async function onSubmit(data: TaskFormValues) {
        if (!housing) return;

        const newTask = {
            name: data.name,
            area_id: data.areaId,
            limit_date: data.limitDate,
            duration: data.duration,
        };
        const backendResponse = await myRequest(`/housings/${housing.housing_id}/areas/${data.areaId}/tasks`, { method: 'POST', data: newTask });
        console.log(backendResponse);
        
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
                    errorMessage={errors.name?.message}
                    {...register('name')}
                />

                <CheckboxRounded onChange={(isChecked) => console.log(isChecked)} />

                <Controller
                    control={control}
                    name="areaId"
                    render={({ field }) => (
                        <Select onValueChange={field.onChange}>
                            <SelectTrigger className={`w-full shadow-md ${errors.areaId ? 'border-2 border-error-primary' : ''}`}>
                                <SelectValue placeholder="Selecciona una zona" />
                            </SelectTrigger>
                            <SelectContent>
                                {areas?.map((area) => (
                                    <SelectItem
                                        key={area.area_id}
                                        value={area.area_id.toString()}
                                    >
                                        {area.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.areaId && <BodyText
                                        as="span"
                                        variant="body-xsmall-regular-UpperCase"
                                        className="text-error-primary"
                                    >
                                        {errors.areaId.message}
                                    </BodyText>}

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
