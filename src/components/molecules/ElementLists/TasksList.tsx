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
    const { tasks, className, isLoading } = props;
    const classes = twMerge('grid grid-cols-1 gap-3', className);

    return (
        <section className="flex flex-col gap-4 w-full">
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
                        return <TaskItem key={id} task={task}></TaskItem>;
                    })}
            </div>
        </section>
    );
}
