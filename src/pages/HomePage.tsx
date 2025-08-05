import Title from '@/components/typography/Title';
import useUserContext from '../hooks/useUserContext';

import CustomNavLink from '@/components/atoms/CustomNavLink';
import BulletHome from '@/components/molecules/BulletHome';

import { PiFootprintsThin, PiHandshakeThin, PiListNumbersThin, PiPaintBrushThin } from 'react-icons/pi';

export default function HomePage() {
    const { user } = useUserContext();

    return (
        <div>
            <section className='flex flex-col w-full gap-4 py-20 bg-center bg-no-repeat bg-cover bg-landing'>
        
                <div className="flex flex-col self-center justify-center gap-2 px-6 py-4 text-center border shadow-lg border-neutral-primary rounded-2xl backdrop-blur-sm lg:px-12">
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
                <div className="flex flex-col justify-center gap-12 lg:flex-row">
                    <BulletHome 
                        title="Organización" 
                        icon={<PiListNumbersThin 
                        size={30} 
                        className='text-neutral-primary'/>}>
                            Gestiona cada casa por separado: crea diferentes viviendas, asigna convivientes y mantén todo bien estructurado.
                    </BulletHome>

                    <BulletHome
                        title='Personalización'
                        icon={<PiPaintBrushThin 
                        size={30} 
                        className='text-neutral-primary'/>}>
                            Define las zonas importantes de la casa como la cocina, el baño o el salón, y organiza las tareas por espacios concretos.
                    </BulletHome>

                    <BulletHome
                        title='Seguimiento'
                        icon={<PiFootprintsThin 
                        size={30} 
                        className='text-neutral-primary'/>}>
                            Crea tareas, asígnalas a quien corresponda y lleva un seguimiento claro de lo que está hecho y lo que falta.
                    </BulletHome>

                    <BulletHome
                        title='Colaboración'
                        icon={<PiHandshakeThin 
                        size={30} 
                        className='text-neutral-primary'/>}>
                            Invita fácilmente a tus convivientes para que todos participen en el orden del hogar.
                    </BulletHome>
                </div>
            </section>


            <section className='flex flex-col w-full gap-8 px-6 py-10 bg-center bg-no-repeat bg-cover lg:px-32 bg-rafiki'>
                <Title
                    as='h2'
                    variant='title-medium-regular'
                    className='text-center text-neutral-primary'
                >
                    ¿Por qué usar NiuNet?
                </Title>


                <div className="grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-2 md:w-2/3 md:bg-contain text-neutral-secondary max-w-[1000px] mx-auto">
                    <BulletHome
                        title='Evita malos entendidos'>
                            Cada tarea tiene su responsable asignado. Se acabaron las discusiones por quién tenía que sacar la basura.
                    </BulletHome>

                    <BulletHome
                        title='Mejora la convivencia'>
                            Fomenta la colaboración y reparte las responsabilidades de forma equitativa y clara.
                    </BulletHome>

                    <BulletHome
                        title='Todo bajo control'>
                            Consulta qué tareas están hechas, cuáles están pendientes y quién se encarga de qué.
                    </BulletHome>

                    <BulletHome
                        title='Para todo tipo de hogares'>
                            Perfecto para pisos compartidos, parejas o familias. Se adapta a vuestra forma de convivir.
                    </BulletHome>
                </div>
            </section>

        </div>
    );
}
