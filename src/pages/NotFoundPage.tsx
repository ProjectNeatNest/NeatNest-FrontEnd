import { Link, useNavigate } from 'react-router';

import Title from '../components/typography/Title';
import BodyText from '../components/typography/BodyText';
import CountDown from '../components/molecules/CountDown';

export default function NotFoundPage() {
    const navigate = useNavigate();

    function returnToHome() {
        navigate('/');
    }

    return (
        <div className="text-neutral-primary flex flex-col gap-6 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-rafiki">
            <Title as="h1" variant="title-large-light">
                ¡Perdón!🙏
            </Title>
            <BodyText as="p" variant="body-large-regular">
                La página que estás buscando no existe o ha sido borrada 😥
            </BodyText>
                <BodyText as="p" variant="body-large-regular">
                Puedes <Link to='/' className='underline text-info-primary'>volver a tus tareas haciendo clic aquí</Link> o la página te redirigirá en...
            </BodyText>
            <CountDown onEnd={returnToHome} className='font-arima text-info-primary text-2xl text-center bg-center'></CountDown>
        </div>
    );
}
