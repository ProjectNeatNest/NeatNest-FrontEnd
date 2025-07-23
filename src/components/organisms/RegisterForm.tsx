import { PiEnvelopeLight, PiLockLight, PiUserLight } from 'react-icons/pi';
import InputField from '../atoms/InputField';
import BodyText from '../typography/BodyText';
import Button from '../atoms/Button';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

export default function RegisterForm(props: Props) {
    const { className } = props;

    const classes = twMerge('flex flex-col', className);

    return (
        <form className={classes}>
            <fieldset className="flex flex-col w-full gap-4 ">
                <InputField
                    type="text"
                    label="Nombre *"
                    placeholder="Tu nombre"
                    required
                />
                <InputField
                    type="text"
                    label="Primer apellido *"
                    placeholder="Primer apellido"
                    required
                />
                <InputField
                    type="text"
                    label="Segundo apellido"
                    placeholder="Segundo apellido"
                />
            </fieldset>
            <fieldset className="flex flex-col w-full gap-2">
                <InputField
                    type="text"
                    leftIcon={<PiUserLight size={24} />}
                    label="Nombre de usuario *"
                    placeholder="P.ej: mi_nombre123"
                    required
                />
                <InputField
                    type="email"
                    leftIcon={<PiEnvelopeLight size={24} />}
                    label="Email *"
                    placeholder="Email"
                    required
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Contraseña *"
                    placeholder="Contraseña"
                />
                <InputField
                    type="password"
                    leftIcon={<PiLockLight size={24} />}
                    label="Repetir contraseña *"
                    placeholder="Repetir contraseña"
                />
            </fieldset>
            <Button buttonVariant="primary">Registrarme</Button>
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
