import { PiDresserLight } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import { useNavigate, useParams } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { areaSchema } from '../../schemas/areaSchema';
import myRequest from '../../services/myRequest';
import type { Area } from '../../config/types';
import { useForm } from 'react-hook-form';
import useHousingContext from '../../hooks/useHousingContext';

interface Props {
    className?: string;
    areaName?: string;
}

interface AreaFormValues {
    name: string;
}

export default function AreaForm(props: Props) {
    const { housing } = useHousingContext();
    const {areaId} = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<AreaFormValues>({
        resolver: zodResolver(areaSchema),
        mode: 'onChange',
    });

    const { errors } = formState;

    async function onSubmit(data: AreaFormValues) {
        interface NewArea {
            name: string;
        }
        if (!housing) return;

        const newArea = {
            name: data.name,
            housing_id: housing?.housing_id,
        };
        let url = `/housings/${housing.housing_id}/areas`
        if (areaId) url += `/${areaId}`

        await myRequest<Area, NewArea>(
            url,
            {
                method: areaId? 'PATCH': 'POST',
                data: newArea,
                hasToasts: true,
            }
        );
        navigate('/my-tasks');
    }

    const { className, areaName } = props;
    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la zona"
                    leftIcon={<PiDresserLight size={24} />}
                    placeholder="Escribe el nombre de la zona"
                    defaultValue={
                        areaName || ''
                    }
                    errorMessage={errors.name?.message}
                    {...register('name')}
                    required
                />

                <Button buttonVariant="primary" type="submit">
                    Guardar y continuar
                </Button>
            </div>
        </form>
    );
}
