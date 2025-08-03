import { useEffect, useState } from 'react';
import AreasList from '../components/molecules/ElementLists/AreasList';
import TasksList from '../components/molecules/ElementLists/TasksList';
import HomePageUserHeading from '../components/molecules/headings/HomePageUserHeading';
import type { Area, Task } from '../config/types';
import useHousingContext from '../hooks/useHousingContext';
import useRequest from '../hooks/useRequest';
import useUserContext from '../hooks/useUserContext';
import myRequest from '@/services/myRequest';
import PageLayout from '@/layouts/PageLayout';

export default function MyTasksPage() {
    const { housing } = useHousingContext();
    const { user } = useUserContext();
    const [userTasks, setUserTasks] = useState<Task[]>([]);

    const { requestData: areas, isLoading: areAreasLoading } = useRequest<
        Area[]
    >(`/housings/${housing?.housing_id}/areas`);

    async function loadUserTasks() {
        const userTasks = await myRequest<Task[]>(
            `/housings/${housing?.housing_id}/users/${user?.user_id}/tasks`,
            { method: 'GET' }
        );
        setUserTasks(userTasks);
    }

    async function handleOnDelete(task: Task) {
        await myRequest<Task[]>(
            `/housings/${housing?.housing_id}/areas/${task.area_id}/tasks/${task.task_id}/`,
            { method: 'DELETE' }
        );
        setUserTasks(userTasks.filter((t) => t.task_id != task.task_id));
    }

    async function handleOnComplete(task: Task) {
        task.is_completed = !task.is_completed;
        const data = {
            name: task.name,
            area_id: task.area_id,
            limit_date: task.limit_date,
            duration: task.duration,
            is_completed: task.is_completed,
        };
        await myRequest<Task[]>(
            `/housings/${housing?.housing_id}/areas/${task.area_id}/tasks/${task.task_id}/`,
            { method: 'PATCH', data: data }
        );
        const updatedTaskIdx = userTasks.findIndex(
            (t) => t.task_id == task.task_id
        );
        if (!updatedTaskIdx) return;
        //TODO check (el array de areas debe actualizarse a la vez que se completan las tareas)
        const newUserTasks = [...userTasks];
        newUserTasks[updatedTaskIdx] = task;
        setUserTasks(newUserTasks);
    }

    useEffect(() => {
        loadUserTasks();
    }, []);

    // const testTaskListArray: Task[] = [
    //     {
    //         task_id: 1,
    //         name: 'Lavar los platos',
    //         area: {
    //             area_id: 1,
    //             name: 'Cocina',
    //             housing_id: 1,
    //             created_at: '27/07',
    //         },
    //         created_at: '27/07',
    //         duration: '5min',
    //         user: user,
    //         limit_date: null,
    //         is_completed: false,
    //     },
    // ];

    return (
        <PageLayout>
            <div className="grid grid-cols-1 gap-3 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-rafiki">
                {housing && areas && (
                    <>
                        <HomePageUserHeading housing={housing} />
                        <AreasList
                            areas={areas}
                            isLoading={areAreasLoading}
                            allTasks={userTasks}
                        ></AreasList>
                        <TasksList
                            tasks={userTasks}
                            areas={areas}
                            onTaskDelete={handleOnDelete}
                            onTaskComplete={handleOnComplete}
                        ></TasksList>
                    </>
                )}
            </div>
        </PageLayout>
    );
}
