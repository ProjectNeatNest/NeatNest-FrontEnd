import { PiCheckCircleLight } from 'react-icons/pi';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import TaskForm from '../components/organisms/TaskForm';

export default function NewTaskPage() {
    return (
        <div className="flex flex-col gap-6">
            <CreateHeading leftIcon={<PiCheckCircleLight size={24} />}>
                Crear tarea
            </CreateHeading>
            <TaskForm />
        </div>
    );
}
