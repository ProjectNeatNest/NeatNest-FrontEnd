import { twMerge } from 'tailwind-merge';
import { PiEnvelopeLight, PiLockLight, PiUserLight } from 'react-icons/pi';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import InputField from '../atoms/InputField';
import BodyText from '../typography/BodyText';
import Button from '../atoms/Button';
import registerUserRequest from '../../services/registerUserRequest';
import {
    registerSchema,
    type RegisterFormValues,
} from '../../schemas/userSchemas';
import useUserContext from '../../hooks/useUserContext';

interface Props {
    className?: string;
}

export default function RegisterForm(props: Props) {
    const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange',
    });

    const { errors } = formState;

    const navigate = useNavigate();
    const { loginUser } = useUserContext();

    async function onSubmit(data: RegisterFormValues) {
        const response = await registerUserRequest(data);
        if (!response) return;
        navigate('/');
        loginUser(response.user, response.token);
    }

    const { className } = props;

    const classes = twMerge('flex flex-col gap-4', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col w-full gap-2 ">
                <InputField
                    type="text"
                    label="Nombre *"
                    placeholder="Tu nombre"
                    required
                    errorMessage={errors.name?.message}
                    {...register('name')}
                />
                <InputField
                    type="text"
                    label="Primer apellido *"
                    placeholder="Primer apellido"
                    required
                    errorMessage={errors.surname?.message}
                    {...register('surname')}
                />
                <InputField
                    type="text"
                    label="Segundo apellido"
                    placeholder="Segundo apellido"
                    errorMessage={errors.surname_2?.message}
                    {...register('surname_2')}
                />
            </fieldset>
            <fieldset className="flex flex-col w-full gap-2">
                <InputField
                    type="text"
                    leftIcon={<PiUserLight size={24} />}
                    label="Nombre de usuario *"
                    placeholder="P.ej: mi_nombre123"
                    required
                    errorMessage={errors.username?.message}
                    {...register('username')}
                />
                <InputField
                    type="email"
                    leftIcon={<PiEnvelopeLight size={24} />}
                    label="Email *"
                    placeholder="Email"
                    required
                    errorMessage={errors.email?.message}
                    {...register('email')}
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Contraseña *"
                    placeholder="Contraseña"
                    required
                    errorMessage={errors.password?.message}
                    {...register('password')}
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Repetir contraseña *"
                    placeholder="Repetir contraseña"
                    required
                    errorMessage={errors.confirmPassword?.message}
                    {...register('confirmPassword')}
                />
            </fieldset>
            <Button type="submit" buttonVariant="primary">
                Registrarme
            </Button>
            <div>
                <BodyText
                    as="span"
                    variant="body-medium-regular"
                    className="text-neutral-primary"
                >
                    ¿Ya tienes cuenta?{' '}
                </BodyText>
                <BodyText
                    as="a"
                    variant="body-medium-bold"
                    className="underline text-neutral-primary"
                    href="/register"
                >
                    Inicia sesión
                </BodyText>
            </div>
        </form>
    );
}
