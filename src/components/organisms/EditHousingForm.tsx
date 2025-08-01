import { PiHouseLineLight } from 'react-icons/pi';
import InputField from '../atoms/InputField';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import {
    housingNameSchema,
    type HousingFormValues,
} from '@/schemas/housingSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import useHousingContext from '@/hooks/useHousingContext';
import myRequest from '@/services/myRequest';
import type { Housing } from '@/config/types';
import Button from '../atoms/Button';
import { useEffect, useState } from 'react';

interface Props {
    className?: string;
}

export default function EditHousingForm(props: Props) {
    const { className } = props;

    const { register, handleSubmit, formState } = useForm<HousingFormValues>({
        resolver: zodResolver(housingNameSchema),
        mode: 'onChange',
    });

    const { errors } = formState;
    const [ housingName, setHousingName] = useState<string>();
    const { housing, addHousing } = useHousingContext();

    useEffect(() => {
        setHousingName(housing?.name || '')
    }, [housing])

    const classes = twMerge('flex flex-col gap-3', className);

    async function onSubmit(data: HousingFormValues) {
        interface NewHousingName {
            name: string;
        }

        if (housing) {
            const newHousingName = {
                name: data.name,
            };

            const housingNameChangedBackend = await myRequest<
                Housing,
                NewHousingName
            >(`/housings/${housing.housing_id}`, {
                data: newHousingName,
                method: 'PATCH',
            });
            addHousing(housingNameChangedBackend);
        }
    }

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <InputField
                    type="text"
                    label="Nombre de la vivienda *"
                    leftIcon={<PiHouseLineLight size={24} />}
                    placeholder="El nombre de tu vivienda"
                    defaultValue={housingName}
                    errorMessage={errors.name?.message}
                    {...register('name')}
                    required
                />
            </div>
            <Button type="submit" buttonVariant="primary">
                Guardar
            </Button>
        </form>
    );
}
