import { twMerge } from 'tailwind-merge';
import {
    PiCalendarDotLight,
    PiCheckCircleLight,
    PiDresserLight,
    PiTimerLight,
    PiUserLight,
} from 'react-icons/pi';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router';

import type { Area, User } from '../../config/types';
import useRequest from '../../hooks/useRequest';
import myRequest from '@/services/myRequest';
import useHousingContext from '../../hooks/useHousingContext';
import { taskSchema, type TaskFormValues } from '../../schemas/taskSchema';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';

interface Props {
    className?: string;
}

export default function TaskForm(props: Props) {
    const { className } = props;

    const navigate = useNavigate();

    const { housing } = useHousingContext();

    const { requestData: areas } = useRequest<Area[]>(
        `/housings/${housing?.housing_id}/areas`
    );

    const { requestData: users } = useRequest<User[]>(
        `/housings/${housing?.housing_id}/users`
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
            user_id: data.userId,
            limit_date: data.limitDate,
            duration: data.duration,
        };
        const backendResponse = await myRequest(
            `/housings/${housing.housing_id}/areas/${data.areaId}/tasks`,
            { method: 'POST', data: newTask }
        );
        console.log(backendResponse);
        navigate('/my-tasks');
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

                {/* <CheckboxRounded onChange={(isChecked) => console.log(isChecked)} /> */}
                <div className="flex flex-col w-full gap-1 rounded-md font-nunito">
                    <div
                        className={`flex w-full gap-2 px-4 py-2 rounded-md shadow-md bg-neutral-primary`}
                    >
                        <BodyText
                            as="span"
                            variant="body-small-regular"
                            className="flex items-center justify-center text-neutral-primary"
                        >
                            {<PiDresserLight size={24} />}
                        </BodyText>
                        <div className="flex flex-col w-full">
                            <BodyText
                                as="span"
                                variant="body-small-regular"
                                className="text-neutral-secondary"
                            >
                                Zona en la que se realizará la tarea
                            </BodyText>

                            <Controller
                                control={control}
                                name="areaId"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange}>
                                        <SelectTrigger
                                            className={`w-full text-neutral-primary ${errors.areaId ? 'border-2 border-error-primary' : ''}`}
                                        >
                                            <SelectValue placeholder="Selecciona una zona" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-neutral-primary ">
                                            {areas?.map((area) => (
                                                <SelectItem
                                                    key={area.area_id}
                                                    value={area.area_id.toString()}
                                                    className="text-neutral-primary cursor-pointer p-2 data-[highlighted]:bg-success-subtle data-[state=checked]:bg-brand-primary"
                                                >
                                                    {area.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.areaId && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular-UpperCase"
                                    className="text-error-primary"
                                >
                                    {errors.areaId.message}
                                </BodyText>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-1 rounded-md font-nunito">
                    <div
                        className={`flex w-full gap-2 px-4 py-2 rounded-md shadow-md bg-neutral-primary`}
                    >
                        <BodyText
                            as="span"
                            variant="body-small-regular"
                            className="flex items-center justify-center text-neutral-primary"
                        >
                            {<PiUserLight size={24} />}
                        </BodyText>
                        <div className="flex flex-col w-full">
                            <BodyText
                                as="span"
                                variant="body-small-regular"
                                className="text-neutral-secondary"
                            >
                                Persona que realizará la tarea
                            </BodyText>

                            <Controller
                                control={control}
                                name="userId"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange}>
                                        <SelectTrigger
                                            className={`w-full text-neutral-primary ${errors.areaId ? 'border-2 border-error-primary' : ''}`}
                                        >
                                            <SelectValue placeholder="Selecciona una persona" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-neutral-primary ">
                                            {users?.map((user) => (
                                                <SelectItem
                                                    key={user.user_id}
                                                    value={user.user_id.toString()}
                                                    className="text-neutral-primary cursor-pointer p-2 data-[highlighted]:bg-success-subtle data-[state=checked]:bg-brand-primary"
                                                >
                                                    {user.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.userId && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular-UpperCase"
                                    className="text-error-primary"
                                >
                                    {errors.userId.message}
                                </BodyText>
                            )}
                        </div>
                    </div>
                </div>

                <InputField
                    type="number"
                    label="Duración de la tarea (min)"
                    leftIcon={<PiTimerLight size={24} />}
                    placeholder="Escribe los minutos en números"
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
