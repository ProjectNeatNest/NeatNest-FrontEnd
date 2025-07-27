import { PiHouseLineLight } from 'react-icons/pi';

import HousingForm from '../../components/organisms/HousingForm';
import CreateHeading from '../../components/molecules/headings/CreateHeading';

export default function NewHousingPage() {
    return (
        <div className="flex flex-col gap-6 bg-center bg-no-repeat bg-cover md:w-1/3 md:bg-contain bg-create-house">
            <CreateHeading
                leftIcon={<PiHouseLineLight size={24} />}
                deleteButton={false}
            >
                Crear vivienda
            </CreateHeading>
            <HousingForm />
        </div>
    );
}
