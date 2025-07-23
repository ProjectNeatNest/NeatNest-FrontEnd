import { PiEnvelopeLight, PiLockLight } from 'react-icons/pi';

import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';
import useUserContext from '../../hooks/useUserContext';
import { useNavigate } from 'react-router';

interface Props {
    className?: string;
}

interface loginFormValues {
    email: string;
    password: string;
}

export default function LoginForm(props: Props) {
    //TODO hacer la lógica de validación del loginForm y conectarlo al backend para que haga la petición
    // const { register, handleSubmit, formState } = useForm<loginFormValues>({
    //     mode: 'onChange'
    // });
    // const { errors } = formState;

    // const {loginUser} = useUserContext();
    // const navigate = useNavigate();

    // function onSubmit(data:loginFormValues) {
    //     const
    // }

    const { className } = props;

    const classes = twMerge('flex flex-col', className);
    return (
        <form className={classes}>
            <div className="flex flex-col w-full gap-2">
                <InputField
                    type="email"
                    leftIcon={<PiEnvelopeLight size={24} />}
                    label="Email"
                    placeholder="Tu email"
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Contraseña"
                    placeholder="Tu contraseña"
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
