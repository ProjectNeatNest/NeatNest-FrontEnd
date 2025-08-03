import Title from '@/components/typography/Title';
import useUserContext from '../hooks/useUserContext';
import Button from '@/components/atoms/Button';

export default function HomePage() {
    const { user } = useUserContext();

    return (
        <div>
            <section className='flex flex-col w-full gap-4 py-20 bg-center bg-no-repeat bg-cover bg-landing'>
        
                <div className="flex flex-col gap-2">
                    <Title
                        as="h1"
                        variant="title-large-light"
                        className="text-neutral-primary"
                    >
                        Organiza tu hogar de forma sencilla y sin estrés
                    </Title>
                    <Title
                        as="h2"
                        variant="title-small-regular"
                        className="text-neutral-secondary"
                    >
                        Planifica, asigna y realiza tareas domésticas en equipo. Tu
                        casa, tus reglas.
                    </Title>
                </div>

                <Button className='self-start'>Empieza gratis</Button>
            </section>
        </div>
    );
}
