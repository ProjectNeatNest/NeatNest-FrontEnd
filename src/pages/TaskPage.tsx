import CreateHeading from '@/components/molecules/headings/CreateHeading';
import TaskForm from '@/components/organisms/TaskForm';
import type { Task } from '@/config/types';
import useHousingContext from '@/hooks/useHousingContext';
import useRequest from '@/hooks/useRequest';
import myRequest from '@/services/myRequest';
import { PiCheckCircleLight } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

export default function TaskPage(props: Props) {
    const { className } = props;
    const { housing } = useHousingContext();
    const { areaId, taskId } = useParams();
    const navigate = useNavigate()
    const url = `/housings/${housing?.housing_id}/areas/${areaId}/tasks/${taskId}`

    const { requestData: task } = useRequest<Task>(url);

    async function onTaskDelete() {
        await myRequest(url, {method: 'DELETE'});
        navigate('/my-tasks')
    }

    const classes = twMerge(
        'flex flex-col gap-3 bg-center bg-no-repeat bg-cover md:w-1/3 md:bg-contain bg-library',
        className
    );
    return (
        <div className={classes}>
            <CreateHeading
                leftIcon={<PiCheckCircleLight size={24} />}
                deleteButton={true}
                onDelete={onTaskDelete}
            >
                Editar tarea
            </CreateHeading>

            <TaskForm buttonLabel="Guardar" task={task} />
        </div>
    );
}
