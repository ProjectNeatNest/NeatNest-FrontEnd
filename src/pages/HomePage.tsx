import Title from '@/components/typography/Title';
import useUserContext from '../hooks/useUserContext';

import CustomNavLink from '@/components/atoms/CustomNavLink';
import BodyText from '@/components/typography/BodyText';

export default function HomePage() {
    const { user } = useUserContext();

    return (
        <div>
            <section className='flex flex-col w-full gap-4 py-20 bg-center bg-no-repeat bg-cover bg-landing'>
        
                <div className="flex flex-col self-center justify-center gap-2 px-6 py-4 text-center border shadow-lg border-neutral-primary rounded-2xl backdrop-blur-sm lg:px-32">
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

                {!user && <CustomNavLink to={'/register'} className='self-center' appearance='primaryButton' >Empieza gratis</CustomNavLink>}
                {user && <CustomNavLink to={'/my-tasks'} className='self-center' appearance='primaryButton' >Ir a mis tareas</CustomNavLink>}
            </section>


            <section className='flex flex-col w-full gap-4 px-6 py-20 lg:px-32'>
                <div className="flex justify-center gap-12">
                    <div className="flex flex-col items-center">
                        <Title
                            as='h3'
                            variant='title-small-regular'
                            className='text-neutral-primary'
                        >
                            Organización
                        </Title>
                        <BodyText
                            as='p'
                        variant='body-medium-regular'
                            className='max-w-xs mt-2 text-center text-neutral-secondary'
                        >
                            Gestiona cada casa por separado: crea diferentes viviendas, asigna convivientes y mantén todo bien estructurado.
                        </BodyText>
                    </div>

                    <div className="flex flex-col items-center">
                        <Title
                            as='h3'
                            variant='title-small-regular'
                            className='text-neutral-primary'
                        >
                            Personalización
                        </Title>
                        <BodyText
                            as='p'
                            variant='body-medium-regular'
                            className='max-w-xs mt-2 text-center text-neutral-secondary'
                        >
                            Define las zonas importantes de la casa como la cocina, el baño o el salón, y organiza las tareas por espacios concretos.
                        </BodyText>
                    </div>

                    <div className="flex flex-col items-center">
                        <Title
                            as='h3'
                            variant='title-small-regular'
                            className='text-neutral-primary'
                        >
                            Seguimiento
                        </Title>
                        <BodyText
                            as='p'
                            variant='body-medium-regular'
                            className='max-w-xs mt-2 text-center text-neutral-secondary'
                        >
                            Crea tareas, asígnalas a quien corresponda y lleva un seguimiento claro de lo que está hecho y lo que falta.
                        </BodyText>
                    </div>

                    <div className="flex flex-col items-center">
                        <Title
                            as='h3'
                            variant='title-small-regular'
                            className='text-neutral-primary'
                        >
                            Colaboración
                        </Title>
                        <BodyText
                            as='p'
                            variant='body-medium-regular'
                            className='max-w-xs mt-2 text-center text-neutral-secondary'
                        >
                            Invita fácilmente a tus convivientes para que todos participen en el orden del hogar.
                        </BodyText>
                    </div>
                </div>
            </section>


            <section className='flex flex-col w-full gap-8 px-6 py-10 lg:px-32'>
                    <Title
                        as='h2'
                        variant='title-small-regular'
                        className='text-center text-neutral-primary'
                    >
                        ¿Por qué usar NeatNest?
                    </Title>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-neutral-secondary">
                        <div className="flex flex-col items-center gap-2 text-center">
                        <Title 
                            as='h3' 
                            variant='title-xsmall-regular'
                        >
                            Evita malos entendidos
                        </Title>

                        <BodyText 
                            as='p' 
                            variant='body-medium-regular'>
                            Cada tarea tiene su responsable y su fecha. Se acabaron las discusiones por quién tenía que sacar la basura.
                        </BodyText>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-center">
                        <Title 
                            as='h3' 
                            variant='title-xsmall-regular'
                        >
                            Mejora la convivencia
                        </Title>

                        <BodyText 
                            as='p' 
                            variant='body-medium-regular'
                        >
                            Fomenta la colaboración y reparte las responsabilidades de forma equitativa y clara.
                        </BodyText>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-center">
                        <Title 
                            as='h3' 
                            variant='title-xsmall-regular'>
                            Todo bajo control
                        </Title>
                        <BodyText 
                            as='p' 
                            variant='body-medium-regular'>
                            Consulta qué tareas están hechas, cuáles están pendientes y quién se encarga de qué.
                        </BodyText>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-center">
                        <Title 
                            as='h3' 
                            variant='title-xsmall-regular'>
                            Para todo tipo de hogares
                        </Title>
                        <BodyText 
                            as='p' 
                            variant='body-medium-regular'>
                            Perfecto para pisos compartidos, parejas o familias. Se adapta a vuestra forma de convivir.
                        </BodyText>
                        </div>
                </div>
            </section>

        </div>
    );
}
