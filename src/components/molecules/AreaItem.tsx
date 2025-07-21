import Title from '../typography/Title';
import NumberOfTasks from './NumberOfTasks';

interface Props {
    areaName: string;
    completedTasks: number;
    totalTasks: number;
}

export default function AreaItem(props: Props) {
    const { areaName, completedTasks, totalTasks } = props;

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-2 bg-neutral-tertiary rounded-xl min-w-[108px] max-w-[130px] aspect-square shadow-mds">
                <Title as="h3" variant="title-xsmall-regular">
                    {areaName}
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
