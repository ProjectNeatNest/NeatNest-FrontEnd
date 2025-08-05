import { PiDresserLight } from 'react-icons/pi';

import CreateHeading from '../../components/molecules/headings/CreateHeading';
import AreaForm from '../../components/organisms/AreaForm';
import PageLayout from '@/layouts/PageLayout';

export default function NewAreaPage() {
    return (
        <PageLayout className='bg-fixed bg-center bg-no-repeat bg-size-[auto_70%] bg-library'>
            <div className="flex flex-col gap-6 md:w-1/3">
                <CreateHeading
                    leftIcon={<PiDresserLight size={24} />}
                    deleteButton={false}
                >
                    Crear zona
                </CreateHeading>

                <AreaForm />
            </div>
        </PageLayout>
    );
}
