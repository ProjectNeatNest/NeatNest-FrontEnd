import { useNavigate } from 'react-router';
import type { Housing } from '../../../config/types';
import useHousingContext from '../../../hooks/useHousingContext';
import Button from '../../atoms/Button';

interface Props {
    housings: Housing[];
    className?: string;
}

export default function HousingList(props: Props) {
    const { housings } = props;
    const { addHousing } = useHousingContext();
    const navigate = useNavigate();

    return (
        <section className='flex flex-wrap gap-2 '>
            {housings.map((housing) => (
                <Button
                    buttonVariant="tertiary"
                    onClick={() => {
                        addHousing(housing);
                        navigate('/my-tasks');
                    }}
                >
                    {housing.name}
                </Button>
            ))}
        </section>
    );
}
