import { useState } from 'react';
import AreasList from '../components/molecules/ElementLists/AreasList';
import TasksList from '../components/molecules/ElementLists/TasksList';
import HomePageUserHeading from '../components/molecules/headings/HomePageUserHeading';
import type { Area, Task } from '../config/types';
import useHousingContext from '../hooks/useHousingContext';
import useRequest from '../hooks/useRequest';
import useUserContext from '../hooks/useUserContext';
import myRequest from '@/services/myRequest';

export default function MyTasksPage() {
    const { housing } = useHousingContext();
    const { user } = useUserContext();


    // const [tasks, setTasks] =useState<Task[]>()

    const { requestData: areas, isLoading: areAreasLoading } = useRequest<
        Area[]
    >(`/housings/${housing?.housing_id}/areas`);

    
    // async function getTasks() {
    //     for (const area of areas) {
    //         const tasksListBackend = await myRequest('/')
            
    //     }
    // }

    const testTaskListArray: Task[] = [
        {
            task_id: 1,
            name: 'Lavar los platos',
            area: {
                area_id: 1,
                name: 'Cocina',
                housing_id: 1,
                created_at: '27/07',
            },
            created_at: '27/07',
            duration: '5min',
            user: user,
            limit_date: null,
            is_completed: false,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-rafiki">
            {housing && areas && (
                <>
                    <HomePageUserHeading housing={housing} />
                    <AreasList areas={areas} isLoading= {areAreasLoading}></AreasList>
                    <TasksList tasks={testTaskListArray}></TasksList>
                </>
            )}
        </div>
    );
}
