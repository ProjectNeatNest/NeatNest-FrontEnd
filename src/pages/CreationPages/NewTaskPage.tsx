import { PiCheckCircleLight } from 'react-icons/pi';
import CreateHeading from '../../components/molecules/headings/CreateHeading';
import TaskForm from '../../components/organisms/TaskForm';
import PageLayout from '@/layouts/PageLayout';

export default function NewTaskPage() {
    return (
        <PageLayout className='bg-fixed bg-center bg-no-repeat bg-size-[auto_70%] bg-todo'>
            <div className="flex justify-center w-full">
                <div className="flex flex-col w-2/3 gap-6">
                    <CreateHeading
                        leftIcon={<PiCheckCircleLight size={24} />}
                        deleteButton={false}
                    >
                        Crear tarea
                    </CreateHeading>
                    <TaskForm />
                </div>
            </div>
        </PageLayout>
    );
}
