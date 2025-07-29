import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';
import { PiHouseLineLight, PiPlusLight, PiUsersLight } from 'react-icons/pi';

import type { Housing } from '../../config/types';

import Button from '../atoms/Button';
// import BodyText from '../typography/BodyText';
// import CheckboxListItem from '../molecules/CheckboxListItem';
// import useRequest from '../../hooks/useRequest';
import { housingSchema } from '../../schemas/housingSchema';

import InputField from '../atoms/InputField';
import EmailItem from '../molecules/EmailItem';
// import Spinner from '../Spinner';
import myRequest from '../../services/myRequest';
import useHousingContext from '../../hooks/useHousingContext';
interface Props {
    className?: string;
}

interface HousingFormValues {
    name: string;
    cohabitantEmail?: string;
}

export default function HousingForm(props: Props) {
    const { className } = props;

    // const { requestData: defaultAreas, isLoading: areAreasLoading } =
    //     useRequest<DefaultArea[]>('/defaultAreas', 'GET');
    const navigate = useNavigate();

    const { register, handleSubmit, formState, watch, resetField } =
        useForm<HousingFormValues>({
            resolver: zodResolver(housingSchema),
            mode: 'onChange',
        });
    const { errors } = formState;

    const [cohabitants, setCohabitants] = useState<string[]>([]);

    const { addHousing } = useHousingContext();

    const cohabitantInputValue = watch('cohabitantEmail') || '';

    //Handler para añadir el conviviente
    async function handleAddCohabitant() {
        //Solo añade si no hay error y el campo no está vacío.
        if (
            !errors.cohabitantEmail &&
            cohabitantInputValue.trim() !== '' &&
            !cohabitants.includes(cohabitantInputValue)
        ) {
            setCohabitants([...cohabitants, cohabitantInputValue.trim()]);
            resetField('cohabitantEmail');
        }
    }

    async function onSubmit(data: HousingFormValues) {
        interface NewHousing {
            name: string;
            cohabitants: string[];
        }

        const newHousing = {
            name: data.name,
            cohabitants: cohabitants,
            // defaultAreas: {},
        };
        const newHousingBackend = await myRequest<Housing, NewHousing>(
            '/housings',
            'POST',
            newHousing
        );

        addHousing(newHousingBackend);
        navigate('/');
    }

    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la vivienda *"
                    leftIcon={<PiHouseLineLight size={24} />}
                    placeholder="El nombre de tu vivienda"
                    errorMessage={errors.name?.message}
                    {...register('name')}
                    required
                />
            </div>
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
                    className="h-[68px]"
                    onClick={handleAddCohabitant}
                >
                    Añadir
                </Button>
            </div>
            {cohabitants.length > 0 && (
                <div className="flex gap-1 wrap">
                    {cohabitants.map((hab, i) => (
                        <EmailItem
                            key={i}
                            onDelete={() => {
                                setCohabitants(
                                    cohabitants.filter((_, idx) => idx !== i)
                                );
                            }}
                        >
                            {hab}
                        </EmailItem>
                    ))}
                </div>
            )}

            {/* <div className="flex flex-col gap-2">
                <BodyText
                    as="p"
                    variant="body-large-regular"
                    className="text-neutral-primary"
                >
                    Puedes seleccionar las zonas que dispongas en tu vivienda:
                </BodyText>

                <ul className="grid grid-cols-3 gap-2">
                    {areAreasLoading && <Spinner />}
                    {defaultAreas &&
                        defaultAreas.map((area, i) => (
                            <li key={i}>
                                <CheckboxListItem>{area.name}</CheckboxListItem>
                            </li>
                        ))}

                </ul>
            </div> */}

            <Button buttonVariant="primary" type="submit">
                Guardar y continuar
            </Button>
        </form>
    );
}
