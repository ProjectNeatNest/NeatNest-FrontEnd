import { PiPlus } from 'react-icons/pi';
import Button from '../components/atoms/Button';
import BodyText from '../components/typography/BodyText';
import Title from '../components/typography/Title';

export default function MainLayout() {
    return (
        <>
            <Title as="h1" variant="title-xlarge-semibold">
                Proyecto Final
            </Title>
            <BodyText as="p" variant="body-medium-regular">
                Este es un párrafo
            </BodyText>
            <Button
                buttonVariant="primary"
                textVariant="body-large-regular"
                icon={<PiPlus size={24} fontWeight={'light'} />}
            >
                label
            </Button>
        </>
    );
}
