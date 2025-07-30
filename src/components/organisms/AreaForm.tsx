import { PiDresserLight } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { areaSchema } from '../../schemas/areaSchema';
import myRequest from '../../services/myRequest';
import type { Area } from '../../config/types';
import { useForm } from 'react-hook-form';
import useHousingContext from '../../hooks/useHousingContext';

interface Props {
    className?: string;
}

interface AreaFormValues {
    name: string;
}

export default function AreaForm(props: Props) {
    const { housing } = useHousingContext();
    const navigate = useNavigate();

    const { register, handleSubmit, formState } =
        useForm<AreaFormValues>({
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
            housing_id: housing?.housing_id
        };

        await myRequest<Area, NewArea>(`/housings/${housing.housing_id}/areas`, 'POST', newArea);
        navigate('/');
    }

    const { className } = props;
    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la zona"
                    leftIcon={<PiDresserLight size={24} />}
                    placeholder="El nombre de la zona"
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
