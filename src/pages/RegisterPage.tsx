import BodyText from '../components/typography/BodyText';
import Title from '../components/typography/Title';
import RegisterForm from '../components/organisms/RegisterForm';
import PageLayout from '@/layouts/PageLayout';

export default function RegisterPage() {
    return (
        <PageLayout>
            <div className="flex flex-col items-center gap-8 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-house2">
                <div className="flex flex-col justify-center gap-2">
                    <Title
                        as="h2"
                        variant="title-medium-light"
                        className="text-neutral-primary"
                    >
                        Crea tu cuenta y empieza a organizar tu hogar
                    </Title>
                    <BodyText
                        as="p"
                        variant="body-large-regular"
                        className="text-neutral-primary"
                    >
                        Únete a nuestra plataforma para gestionar fácilmente las
                        tareas del día a día en casa. Comparte
                        responsabilidades, mantén el orden en las zonas comunes
                        ¡y ahorra posibles discusiones!
                    </BodyText>
                </div>
                <RegisterForm className="items-center justify-center gap-4 lg:w-3/5" />
            </div>
        </PageLayout>
    );
}
