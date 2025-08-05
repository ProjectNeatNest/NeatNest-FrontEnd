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


    return (
        <section className='flex flex-wrap gap-2 '>
            {housings.map((housing) => (
                <Button
                    key={housing.housing_id}
                    buttonVariant="tertiary"
                    onClick={() => {
                        addHousing(housing);
                        
                    }}
                >
                    {housing.name}
                </Button>
            ))}
        </section>
    );
}
