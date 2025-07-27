import TasksList from "../components/molecules/ElementLists/TasksList";
import type { Task } from "../config/types";
import useUserContext from "../hooks/useUserContext";



export default function HomePageUserLogged() {
    
    const { user } = useUserContext()
    
    const testListArray: Task[] = [
        {
            task_id: 1,
            name: 'lavar los platos',
            area: {
                area_id:1,
                name: 'cocina',
                housing_id: 1,
                created_at: '27/07',
            },
            created_at: '27/07',
            duration: '5min',
            user: user,
            limit_date: null,
            is_completed: false,
        }
    ]
    return <>

        <TasksList tasks={testListArray}></TasksList>
    
    </>;
}
