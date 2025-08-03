import { PiHouseLineLight } from 'react-icons/pi';

import HousingForm from '../../components/organisms/HousingForm';
import CreateHeading from '../../components/molecules/headings/CreateHeading';
import PageLayout from '@/layouts/PageLayout';

export default function NewHousingPage() {
    return (
        <PageLayout>
            <div className="flex flex-col gap-6 bg-center bg-no-repeat bg-cover md:bg-contain bg-create-house">
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
