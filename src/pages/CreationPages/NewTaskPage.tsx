import { PiCheckCircleLight } from 'react-icons/pi';
import CreateHeading from '../../components/molecules/headings/CreateHeading';
import TaskForm from '../../components/organisms/TaskForm';

export default function NewTaskPage() {
    return (
        <div className="flex justify-center w-full bg-no-repeat bg-size-[auto_100%] bg-center md:bg-position-[120%] bg-todo">
            <div className='flex flex-col w-2/3 gap-6'>
            <CreateHeading
                leftIcon={<PiCheckCircleLight size={24} />}
                deleteButton={false}
            >
                Crear tarea
            </CreateHeading>
            <TaskForm />
        </div>
            </div>
    );
}
