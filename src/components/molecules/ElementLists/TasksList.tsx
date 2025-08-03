import { twMerge } from 'tailwind-merge';

import type { Area, Task } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import TaskItem from '../TaskItem';

interface Props {
    tasks: Task[];
    areas: Area[];
    onTaskDelete: (task: Task) => void;
    onTaskComplete: (task: Task) => void;
    isLoading?: boolean;
    className?: string;
}

export default function TasksList(props: Props) {
    const { tasks, areas, onTaskDelete, onTaskComplete, className, isLoading } = props;
    const classes = twMerge('grid grid-cols-1 gap-3', className);

    function getTaskArea(task: Task) {
        return areas.find((a) => a.area_id === task.area_id)
    }

    return (
        <section className="flex flex-col w-full gap-2">
            <SectionHeading buttonLabel="tarea" linkTo="/tasks/new">
                Mis tareas
            </SectionHeading>
            <div className={classes}>
                {isLoading && (
                    <img src="/Loading.gif" alt="Loading spinner"></img>
                )}
                {!isLoading &&
                    tasks.map((task) => {
                        const id = task.task_id;
                        return <TaskItem 
                                    key={id} 
                                    task={task} 
                                    area={getTaskArea(task)}
                                    onDelete={() => {onTaskDelete(task)}}
                                    onComplete={() => {onTaskComplete(task)}}
                                ></TaskItem>;
                    })}
            </div>
        </section>
    );
}
