import { PiDresserLight } from 'react-icons/pi';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import AreaForm from '../components/organisms/AreaForm';
import useRequest from '../hooks/useRequest';
import { useParams } from 'react-router';
import type { Area } from '../config/types';
import { twMerge } from 'tailwind-merge';
import useHousingContext from '../hooks/useHousingContext';

interface Props {
    className?: string;
}

export default function AreaPage(props: Props) {
    const { className } = props;

    const { areaId } = useParams();

    const { housing } = useHousingContext();
    console.log(housing);

    const { requestData: area} = useRequest<Area, Area>(
        `/housings/${housing?.housing_id}/areas/${areaId}`
    );

    console.log(area);


    const classes = twMerge(
        'flex flex-col gap-3 bg-center bg-no-repeat bg-cover md:w-1/3 md:bg-contain bg-library',
        className
    );
    return (
        <div className={classes}>
            <CreateHeading
                leftIcon={<PiDresserLight size={24} />}
                deleteButton={true}
            >
                Editar zona
            </CreateHeading>

            {area && <AreaForm areaName={area?.name} />}
        </div>
    );
}
