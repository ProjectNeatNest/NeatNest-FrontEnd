import { PiHouseLineLight } from 'react-icons/pi';
import type { Housing } from '../../../config/types';
import Title from '../../typography/Title';

interface Props {
    housing: Housing;
}

export default function HomePageUserHeading(props: Props) {
    const { housing } = props;

    return (
        <header className="grid grid-cols-[auto_1fr] items-center gap-2 w-full text-neutral-primary">
            <PiHouseLineLight size={24} />
            <Title as="h1" variant="title-medium-light">
                {housing.name}
            </Title>
        </header>
    );
}
