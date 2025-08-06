import { PiDresserLight } from 'react-icons/pi';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import AreaForm from '../components/organisms/AreaForm';
import useRequest from '../hooks/useRequest';
import { useNavigate, useParams } from 'react-router';
import type { Area } from '../config/types';
import { twMerge } from 'tailwind-merge';
import useHousingContext from '../hooks/useHousingContext';
import myRequest from '@/services/myRequest';
import PageLayout from '@/layouts/PageLayout';

interface Props {
    className?: string;
}

export default function AreaPage(props: Props) {
    const { className } = props;
    const navigate = useNavigate();

    const { areaId } = useParams();

    // TODO
    // const { user}

    const { housing } = useHousingContext();

    const { requestData: area } = useRequest<Area>(
        `/housings/${housing?.housing_id}/areas/${areaId}`
    );

    async function onAreaDelete() {
        await myRequest(`/housings/${housing?.housing_id}/areas/${areaId}`, {
            method: 'DELETE', hasToasts: true
        });
        navigate('/my-tasks');
    }

    const classes = twMerge(
        'flex flex-col gap-3 md:w-1/3 ',
        className
    );
    return (
        <PageLayout className='bg-fixed bg-center bg-no-repeat bg-size-[auto_70%] bg-library'>
            <div className={classes}>
                <CreateHeading
                    leftIcon={<PiDresserLight size={24} />}
                    deleteButton={true}
                    onDelete={onAreaDelete}
                >
                    Editar zona
                </CreateHeading>

                {area && <AreaForm areaName={area?.name} />}
            </div>
        </PageLayout>
    );
}
