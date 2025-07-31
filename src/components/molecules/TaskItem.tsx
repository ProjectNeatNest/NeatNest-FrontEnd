import { PiXLight } from 'react-icons/pi';
import type { Task } from '../../config/types';
import CheckboxRounded from '../atoms/CheckboxRounded';
import BodyText from '../typography/BodyText';
import { Link } from 'react-router';

interface Props {
    task: Task;
    onDelete: () => void;    
}

export default function TaskItem(props: Props) {
    const { task, onDelete } = props;

    return (
        <>
            <div className="bg-neutral-secondary px-3 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 shadow-md group transform transition-transform duration-300 ease-in-out hover:scale-102 rounded-xl">
                <CheckboxRounded />
                <Link to={`/tasks/${task.task_id}`}>
                    <div className="flex flex-col gap-1 transition-opacity opacity-100 group-has-checked:opacity-50">
                        <BodyText
                            as="p"
                            variant="body-large-bold"
                            className="text-neutral-primary group-has-checked:line-through"
                        >
                            {task.name}
                        </BodyText>
                        <div className="flex justify-between text-neutral-secondary">
                            {task.user && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    {task.user.name}
                                </BodyText>
                            )}
                            {task.area && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    {task.area.name}
                                </BodyText>
                            )}
                            {task.duration && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Duración: {task.duration}
                                </BodyText>
                            )}
                            {task.limit_date && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Antes de: {task.limit_date}
                                </BodyText>
                            )}
                            {task.created_at && (
                                <BodyText
                                    as="span"
                                    variant="body-xsmall-regular"
                                >
                                    Creado: {task.created_at}
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
