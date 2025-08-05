import { PiHouseLineLight } from 'react-icons/pi';

import HousingForm from '../../components/organisms/HousingForm';
import CreateHeading from '../../components/molecules/headings/CreateHeading';
import PageLayout from '@/layouts/PageLayout';

export default function NewHousingPage() {
    return (
        <PageLayout className='bg-fixed bg-center bg-no-repeat bg-size-[auto_70%] bg-create-house'>
            <div className="flex flex-col gap-6">
                <CreateHeading
                    leftIcon={<PiHouseLineLight size={24} />}
                    deleteButton={false}
                >
                    Crear vivienda
                </CreateHeading>
                <HousingForm showCohabitantsInput={true} />
            </div>
        </PageLayout>
    );
}
