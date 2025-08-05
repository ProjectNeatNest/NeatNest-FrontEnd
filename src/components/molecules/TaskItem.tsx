import { PiXLight } from 'react-icons/pi';
import type { Area, Task } from '../../config/types';
import CheckboxRounded from '../atoms/CheckboxRounded';
import BodyText from '../typography/BodyText';
import { Link } from 'react-router';

interface Props {
    task: Task;
    area: Area;
    onDelete: () => void;
    onComplete: () => void;
}

export default function TaskItem(props: Props) {
    const { task, area, onDelete, onComplete } = props;

    function prettyDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleString().split(',')[0];
    }

    return (
        <>
            <div className="bg-neutral-secondary px-3 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 shadow-md group transform transition-transform duration-300 ease-in-out hover:scale-102 rounded-xl">
                <CheckboxRounded isInitiallyChecked={task.is_completed} onChange={onComplete}/>
                <Link to={`/areas/${task.area_id}/tasks/${task.task_id}`}>
                    <div className="flex flex-col gap-1 transition-opacity opacity-100 group-has-checked:opacity-50">
                        <BodyText
                            as="p"
                            variant="body-large-bold"
                            className="text-neutral-primary group-has-checked:line-through"
                        >
                            {task.name}
                        </BodyText>
                        <div className="flex justify-between gap-2 text-neutral-secondary">
                            {area && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    {area.name}
                                </BodyText>
                            )}
                            {task.duration && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Duración: {task.duration} min
                                </BodyText>
                            )}
                            {task.limit_date && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Antes de: {prettyDate(task.limit_date)}
                                </BodyText>
                            )}
                            {task.created_at && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Creado: {prettyDate(task.created_at)}
                                </BodyText>
                            )}
                        </div>
                    </div>
                </Link>
                <button
                    type="button"
                    aria-label="Delete task"
                    className="text-neutral-secondary"
                    onClick={onDelete}
                >
                    <PiXLight size={32} />
                </button>
            </div>
        </>
    );
}
