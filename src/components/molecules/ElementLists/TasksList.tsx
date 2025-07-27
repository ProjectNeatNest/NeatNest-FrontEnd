import { twMerge } from 'tailwind-merge';

import type { Task } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import TaskItem from '../TaskItem';

interface Props {
    tasks: Task[];
    isLoading?: boolean;
    className?: string;
}

export default function TasksList(props: Props) {
    const { tasks, className } = props;
    const classes = twMerge('grid grid-cols-1 gap-3', className);
    const isLoading = true;

    return (
        <section>
            <SectionHeading buttonLabel="tarea">Mis tareas</SectionHeading>
            <div className={classes}>
                {isLoading && (
                    <img src="/Loading.gif" alt="Loading spinner"></img>
                )}
                {!isLoading &&
                    tasks.map((task) => {
                        const id = task.task_id;
                        return <TaskItem key={id} task={task}></TaskItem>;
                    })}
            </div>
        </section>
    );
}
