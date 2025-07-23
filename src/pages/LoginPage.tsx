import LoginForm from '../components/organisms/LoginForm';
import BodyText from '../components/typography/BodyText';
import Title from '../components/typography/Title';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center gap-8 md:w-2/3">
            <div className="flex flex-col items-center justify-center gap-2">
                <Title
                    as="h2"
                    variant="title-medium-light"
                    className="text-neutral-primary"
                >
                    ¡Bienvenido de nuevo a tu organizador del hogar!
                </Title>
                <BodyText
                    as="p"
                    variant="body-large-regular"
                    className="text-neutral-secondary"
                >
                    Inicia sesión para retomar el control de las tareas
                    domésticas junto a las personas con las que compartes tu
                    vivienda.
                </BodyText>
            </div>
            <LoginForm className="items-center justify-center gap-4 lg:w-3/5" />
        </div>
    );
}
