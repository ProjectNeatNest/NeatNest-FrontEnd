import { PiHouseLineLight, PiPlusLight, PiUsersLight } from 'react-icons/pi';
import InputField from '../atoms/InputField';
import { twMerge } from 'tailwind-merge';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';
import CheckboxListItem from '../molecules/CheckboxListItem';
import myRequest from '../../services/myRequest';
import type { DefaultArea } from '../../config/types';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { housingSchema } from '../../schemas/housingSchema';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

interface Props {
    className?: string;
}

interface HousingFormValues {
    housingName: string;
    cohabitantEmail?: string;
}

export default function HousingForm(props: Props) {
    const { className } = props;

    const [defaultAreas, setDefaultAreas] = useState<DefaultArea[]>([]);
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<HousingFormValues>({
        resolver: zodResolver(housingSchema),
        mode: 'onChange',
    });

    const { errors } = formState;

    async function onSubmit(data: HousingFormValues) {
        const backendData = await myRequest('/housings', 'POST', data);
       

        navigate('/');
    }

    useEffect(() => {
        myRequest<DefaultArea[]>('/defaultAreas', 'GET')
            .then((areas) => {
                setDefaultAreas(areas);
            })
            .catch((algo) => console.log('❌', algo));
    }, []);

    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la vivienda *"
                    leftIcon={<PiHouseLineLight size={24} />}
                    placeholder="El nombre de tu vivienda"
                    errorMessage={errors.housingName?.message}
                    {...register('housingName')}
                    required
                />
                <div className="flex">
                    <InputField
                        type="text"
                        label="Añadir conviviente (opcional)"
                        leftIcon={<PiUsersLight size={24} />}
                        placeholder="Escribe el email del conviviente"
                        errorMessage={errors.cohabitantEmail?.message}
                        {...register('cohabitantEmail')}
                    />
                    <Button
                        buttonVariant="secondary"
                        icon={<PiPlusLight size={24} />}
                    >
                        Añadir
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <BodyText
                    as="p"
                    variant="body-large-regular"
                    className="text-neutral-primary"
                >
                    Puedes seleccionar las zonas que dispongas en tu vivienda:
                </BodyText>

                <ul className="grid grid-cols-3 gap-2">
                    {defaultAreas.map((area, i) => (
                        <li key={i}>
                            <CheckboxListItem>{area.name}</CheckboxListItem>
                        </li>
                    ))}

                    {/* Si no hay default areas, poner un mensaje */}
                </ul>
            </div>
            <Button buttonVariant="primary" type="submit">
                Guardar y continuar
            </Button>
        </form>
    );
}
