import { PiXLight } from 'react-icons/pi';
import CheckboxRounded from '../atoms/CheckboxRounded';
import BodyText from '../typography/BodyText';

interface Props {
    taskName: string;
    createdDate?: string;
    area?: string;
    duration?: string;
    userName?: string;
    limitDate?: string;
}

export default function TaskItem(props: Props) {
    const { taskName, createdDate, area, duration, limitDate, userName } =
        props;

    return (
        <>
            <div className="bg-neutral-secondary px-3 py-1.5 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 shadow-md group transform transition-transform duration-300 ease-in-out hover:scale-102 rounded-xl">
                <CheckboxRounded />
                <div className="flex flex-col gap-1 transition-opacity opacity-100 group-has-checked:opacity-50">
                    <BodyText
                        as="h3"
                        variant="body-large-bold"
                        className="text-neutral-primary group-has-checked:line-through"
                    >
                        {taskName}
                    </BodyText>
                    <div className="flex justify-between text-neutral-secondary">
                        {userName && (
                            <BodyText as="span" variant="body-xsmall-regular">
                                {userName}
                            </BodyText>
                        )}
                        {area && (
                            <BodyText as="span" variant="body-xsmall-regular">
                                {area}
                            </BodyText>
                        )}
                        {duration && (
                            <BodyText as="span" variant="body-xsmall-regular">
                                Duración: {duration}
                            </BodyText>
                        )}
                        {limitDate && (
                            <BodyText as="span" variant="body-xsmall-regular">
                                Antes de: {limitDate}
                            </BodyText>
                        )}
                        {createdDate && (
                            <BodyText as="span" variant="body-xsmall-regular">
                                Creado: {createdDate}
                            </BodyText>
                        )}
                    </div>
                </div>
                <button type="button" aria-label="Delete task">
                    <PiXLight size={32} />
                </button>
            </div>
        </>
    );
}
