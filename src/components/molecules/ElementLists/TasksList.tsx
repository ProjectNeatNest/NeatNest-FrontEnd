import { twMerge } from 'tailwind-merge';

import type { Area, Task } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import TaskItem from '../TaskItem';
import BodyText from '@/components/typography/BodyText';
import Spinner from '@/components/Spinner';

interface Props {
    tasks: Task[];
    areas: Area[];
    onTaskDelete: (task: Task) => void;
    onTaskComplete: (task: Task) => void;
    isLoading?: boolean;
    className?: string;
}

export default function TasksList(props: Props) {
    const { tasks, areas, onTaskDelete, onTaskComplete, className, isLoading } =
        props;
    const classes = twMerge('grid grid-cols-1 gap-3', className);

    function getTaskArea(task: Task): Area {
        return areas.find((a) => a.area_id === task.area_id) as Area;
    }

    return (
        <section className="flex flex-col w-full gap-2">
            <SectionHeading buttonLabel="tarea" linkTo="/tasks/new">
                Mis tareas
            </SectionHeading>
            <div className={classes}>
                {isLoading && <Spinner />}
                {!isLoading &&
                    tasks &&
                    tasks.map((task) => {
                        const id = task.task_id;
                        return (
                            <TaskItem
                                key={id}
                                task={task}
                                area={getTaskArea(task)}
                                onDelete={() => {
                                    onTaskDelete(task);
                                }}
                                onComplete={() => {
                                    onTaskComplete(task);
                                }}
                            ></TaskItem>
                        );
                    })}
                {!isLoading && tasks?.length === 0 && (
                    <div className='flex flex-col justify-center'>
                        <BodyText
                            as="span"
                            variant="body-large-regular"
                            className="text-center text-neutral-secondary"
                        >
                            Todavía no tienes tareas.
                        </BodyText>
                        <BodyText
                            as="p"
                            variant="body-medium-regular"
                            className="text-center text-neutral-tertiary"
                        >
                            Para crear una tarea, crea primero una zona.
                        </BodyText>
                        
                    </div>
                )}
            </div>
        </section>
    );
}
