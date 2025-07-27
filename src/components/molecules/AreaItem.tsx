import type { Area } from '../../config/types';
import Title from '../typography/Title';
import NumberOfTasks from './NumberOfTasks';

interface Props {
    area: Area;
    completedTasks: number;
    totalTasks: number;
}

export default function AreaItem(props: Props) {
    const { area, completedTasks, totalTasks } = props;

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-2 bg-neutral-tertiary rounded-xl min-w-[108px] max-w-[130px] aspect-square shadow-mds">
                <Title
                    as="h3"
                    variant="title-xsmall-regular"
                    className="text-neutral-primary"
                >
                    {area.name}
                </Title>
                <div className="flex items-end gap-1 justify-baseline text-neutral-secondary">
                    <NumberOfTasks
                        completed={completedTasks}
                        total={totalTasks}
                    ></NumberOfTasks>
                </div>
            </div>
        </>
    );
}
