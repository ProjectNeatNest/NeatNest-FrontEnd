import Title from '@/components/typography/Title';
// import useUserContext from '../hooks/useUserContext';

// import CustomNavLink from '@/components/atoms/CustomNavLink';

export default function HomePage() {
    // const { user } = useUserContext();

    return (
        <div>
            <section className='flex flex-col w-full gap-4 py-20 bg-center bg-no-repeat bg-cover bg-landing'>
        
                <div className="flex flex-col justify-center gap-2 px-6 text-center lg:px-32">
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

                {/* {!user && <CustomNavLink to={'/register'} className='self-center' appearance='primaryButton' >Empieza gratis</CustomNavLink>}
                {user && <CustomNavLink to={'/my-tasks'} className='self-center' appearance='primaryButton' >Ir a mis tareas</CustomNavLink>} */}
            </section>
        </div>
    );
}
