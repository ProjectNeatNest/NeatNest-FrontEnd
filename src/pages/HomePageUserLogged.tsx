import { useEffect } from 'react';
import AreasList from '../components/molecules/ElementLists/AreasList';
import TasksList from '../components/molecules/ElementLists/TasksList';
import HomePageUserHeading from '../components/molecules/headings/HomePageUserHeading';
import type { Area, Housing, Task } from '../config/types';
import useHousingContext from '../hooks/useHousingContext';
import useRequest from '../hooks/useRequest';
import useUserContext from '../hooks/useUserContext';
import Spinner from '../components/Spinner';

export default function HomePageUserLogged() {
    const { housing, addHousing } = useHousingContext();
    const { user } = useUserContext();

    const { requestData: userHousings, isLoading } =
        useRequest<Housing[]>('/housings');
    
    if(userHousings && !housing) {
        addHousing(userHousings[0])
    }
    // const testHousing: Housing = {
    //     housing_id: 1,
    //     name: 'Mi pisito',
    //     created_at: '27/07',
    // };

    const testAreaListArray: Area[] = [
        {
            area_id: 1,
            name: 'Cocina',
            housing_id: 1,
            created_at: '27/07',
        },
        {
            area_id: 2,
            name: 'Baño',
            housing_id: 1,
            created_at: '27/07',
        },
    ];

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
        <div className="grid grid-cols-1 gap-6 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-rafiki">
            {isLoading && <Spinner />}
            {!isLoading && <>
                <HomePageUserHeading housing={housing} />
                <AreasList areas={testAreaListArray}></AreasList>
                <TasksList tasks={testTaskListArray}></TasksList>
            </>}
        </div>
    );
}
