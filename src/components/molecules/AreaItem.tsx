import useHousingContext from '@/hooks/useHousingContext';
import { type Task, type Area } from '../../config/types';
import Title from '../typography/Title';
import NumberOfTasks from './NumberOfTasks';
import { useEffect, useState } from 'react';
import myRequest from '@/services/myRequest';

interface Props {
    area: Area;
    areaTasks: Task[];
}

export default function AreaItem(props: Props) {
    const { area, areaTasks} = props;

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-2 bg-neutral-tertiary rounded-xl min-w-[108px] max-w-[130px] aspect-square shadow-md hover:scale-102">
                <Title
                    as="h3"
                    variant="title-xsmall-regular"
                    className="text-neutral-primary"
                >
                    {area.name}
                </Title>
                <div className="flex items-end gap-1 justify-baseline text-neutral-secondary">
                    <NumberOfTasks
                        completed={areaTasks.filter(task => task.is_completed).length}
                        total={areaTasks.length}
                    ></NumberOfTasks>
                </div>
            </div>
        </>
    );
}
