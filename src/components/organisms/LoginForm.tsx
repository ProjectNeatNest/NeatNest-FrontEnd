import { PiEnvelopeLight, PiLockLight } from 'react-icons/pi';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';
import useUserContext from '../../hooks/useUserContext';
import { logInUserRequest } from '../../services/logInUserRequest';
import { loginSchema } from '../../schemas/userSchemas';

interface Props {
    className?: string;
}

interface loginFormValues {
    email: string;
    password: string;
}

export default function LoginForm(props: Props) {
    //TODO Conectarlo al backend para que haga la petición
    const { register, handleSubmit, formState } = useForm<loginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });
    const { errors } = formState;

    const navigate = useNavigate();
    const { loginUser } = useUserContext();

    async function onSubmit(data: loginFormValues) {
        const response = await logInUserRequest(data.email, data.password);

        if (!response) return;
        navigate('/');
        loginUser(response.user, response.token);
    }

    const { className } = props;

    const classes = twMerge('flex flex-col', className);

    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full gap-2">
                <InputField
                    type="email"
                    leftIcon={<PiEnvelopeLight size={24} />}
                    label="Email"
                    placeholder="Tu email"
                    errorMessage={errors.email?.message}
                    {...register('email')}
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Contraseña"
                    placeholder="Tu contraseña"
                    errorMessage={errors.password?.message}
                    {...register('password')}
                />
            </div>
            <Button buttonVariant="primary">Iniciar sesión</Button>
            <div>
                <BodyText
                    as="span"
                    variant="body-medium-regular"
                    className="text-neutral-primary"
                >
                    ¿No tienes cuenta?{' '}
                </BodyText>
                <BodyText
                    as="a"
                    variant="body-medium-bold"
                    className="underline text-neutral-primary"
                    href="/register"
                >
                    Regístrate
                </BodyText>
            </div>
        </form>
    );
}
