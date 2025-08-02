import Title from '@/components/typography/Title';
import useUserContext from '../hooks/useUserContext';

export default function HomePage() {
    const { user } = useUserContext();

    return (
        <div>
            <section className='"bg-[#EDFFF6] py-20"'>
                      <div className="container grid items-center grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2"> </div>
            <Title as='h1' variant='title-large-light' className='text-neutral-primary'>Organiza tu hogar de forma sencilla y sin estrés</Title>
            <Title as='h2' variant='title-small-regular' className='text-neutral-secondary'>Planifica, asigna y realiza tareas domésticas en equipo. Tu casa, tus reglas.</Title>

            </section>

        </div>
    );
}
