import { twMerge } from 'tailwind-merge';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import { PiHouseLineLight } from 'react-icons/pi';
import useHousingContext from '../hooks/useHousingContext';
import HousingForm from '../components/organisms/HousingForm';

interface Props {
    className?: string;
}

export default function HousingPage(props: Props) {
    const { className } = props;

    const { housing } = useHousingContext();

    const classes = twMerge('', className);
    return (
        <div className={classes}>
            <CreateHeading
                leftIcon={<PiHouseLineLight size={24} />}
                deleteButton={true}
            >
                Editar housing
            </CreateHeading>

            {housing && <HousingForm showCohabitantsInput={false} />}

            {/* {area && <AreaForm areaName={area?.name} />} */}
        </div>
    );
}
