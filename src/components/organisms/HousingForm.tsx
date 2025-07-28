import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';
import { PiHouseLineLight, PiPlusLight, PiUsersLight } from 'react-icons/pi';

import type { DefaultArea } from '../../config/types';

import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';
import CheckboxListItem from '../molecules/CheckboxListItem';
import myRequest from '../../services/myRequest';
import { housingSchema } from '../../schemas/housingSchema';

import InputField from '../atoms/InputField';
import EmailItem from '../molecules/emailItem';
interface Props {
    className?: string;
}

interface HousingFormValues {
    name: string;
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

    const [cohabitants, setCohabitants] = useState<string[]>([]);
    //? ******** Añadir un handle para el botón añadir
    //Nuevo estado para el input de conviviente.
    const [cohabitantInput, setCohabitantInput] = useState('');
    //Handler para el input controlado
    function handleCohabitantChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCohabitantInput(e.target.value);
    }
    //Handler para añadir el conviviente
    function handleAddCohabitant() {
        //Solo añade si no hay error y el campo no está vacío.
        if (!errors.cohabitantEmail && cohabitantInput.trim() !== '' && !cohabitants.includes(cohabitantInput)) {
            setCohabitants([...cohabitants, cohabitantInput.trim()]);
        }
    }

    const { errors } = formState;

    async function onSubmit(data: HousingFormValues) {
        await myRequest('/housings', 'POST', data);

        navigate('/');
    }

    useEffect(() => {
        myRequest<DefaultArea[]>('/defaultAreas', 'GET')
            .then((areas) => {
                console.log(areas);
                setDefaultAreas(areas);
            })
            .catch((error) => console.log('❌', error));
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
                    onChangeCapture={handleCohabitantChange}
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
