import { PiEnvelopeLight, PiLockLight } from 'react-icons/pi';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';

export default function LoginForm() {
    return (
        <form className="flex flex-col items-center justify-center w-full gap-4">
            <div className="flex flex-col gap-2">
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
