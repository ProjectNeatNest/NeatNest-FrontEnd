// import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import { PiUsersLight } from 'react-icons/pi';
import {
    cohabitantSchema,
    type CohabitantsFormValues,
    // type HousingFormValues,
} from '@/schemas/housingSchema';
import Button from '#/atoms/Button';
import InputField from '#/atoms/InputField';
// import myRequest from '@/services/myRequest';

interface Props {
    className?: string;
}

export default function CohabitantsForm(props: Props) {
    const { className } = props;


    const { register,  formState } =
        useForm<CohabitantsFormValues>({
            resolver: zodResolver(cohabitantSchema),
            mode: 'onChange',
        });
    const { errors } = formState;

    

    // async function onSubmit(data: HousingFormValues) {

    //     interface newCohabitant {
    //         cohabitants: string[];
    //     }

    //     const newMembers = {};
    //     await myRequest(
    //         '/housings',
    //         'PATCH',
    //         newMembers
    //     );

    // }

    const classes = twMerge('flex flex-col gap-4', className);

    return (
        <form className={classes} >
            <div className="flex">
                <InputField
                    type="text"
                    label="Añadir conviviente"
                    leftIcon={<PiUsersLight size={24} />}
                    placeholder="Escribe el email del conviviente"
                    errorMessage={errors.cohabitantEmail?.message}
                    {...register('cohabitantEmail')}
                />
            </div>


            <Button>Añadir conviviente</Button>
        </form>
    );
}
