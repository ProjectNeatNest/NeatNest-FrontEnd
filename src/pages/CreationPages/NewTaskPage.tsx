import { PiCheckCircleLight } from 'react-icons/pi';
import CreateHeading from '../../components/molecules/headings/CreateHeading';
import TaskForm from '../../components/organisms/TaskForm';

export default function NewTaskPage() {
    return (
        <div className="flex flex-col gap-6 bg-center bg-no-repeat bg-cover md:w-1/3 md:bg-contain bg-todo">
            <CreateHeading
                leftIcon={<PiCheckCircleLight size={24} />}
                deleteButton={false}
            >
                Crear tarea
            </CreateHeading>
            <TaskForm />
        </div>
    );
}
