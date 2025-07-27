import { PiDresserLight } from 'react-icons/pi';

import CreateHeading from '../../components/molecules/headings/CreateHeading';
import AreaForm from '../../components/organisms/AreaForm';

export default function NewAreaPage() {
    return (
        <div className="flex flex-col gap-6 bg-center bg-no-repeat bg-cover md:w-1/3 md:bg-contain bg-library">
            <CreateHeading
                leftIcon={<PiDresserLight size={24} />}
                deleteButton={false}
            >
                Crear zona
            </CreateHeading>

            <AreaForm />
        </div>
    );
}
