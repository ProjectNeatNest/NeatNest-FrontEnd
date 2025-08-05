import { twMerge } from 'tailwind-merge';

import type { Area, Task } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import AreaItem from '../AreaItem';
import Spinner from '../../Spinner';
import { NavLink } from 'react-router';
import BodyText from '@/components/typography/BodyText';

interface Props {
    areas: Area[];
    className?: string;
    allTasks: Task[];
    isLoading?: boolean;
}

export default function AreasList(props: Props) {
    const { className, allTasks, areas, isLoading = false } = props;


    const classes = twMerge('flex justify-start  gap-4 w-full', className);
    return (
        <section className="flex flex-col w-full gap-2">
            <SectionHeading buttonLabel="zona" linkTo="/areas/new">
                Zonas
            </SectionHeading>
            <div className={classes}>
                {isLoading && <Spinner />}
                {!isLoading &&
                    areas &&
                    areas.map((area) => {
                        const id = area.area_id;
                        return (
                            <NavLink key={id} to={`/areas/${area.area_id}`}>
                                <AreaItem
                                    area={area}
                                    areaTasks={allTasks.filter(
                                        (t) => t.area_id == area.area_id
                                    )}
                                ></AreaItem>
                            </NavLink>
                        );
                    })}
                {/* TODO: NO funciona */}
                {!isLoading && areas?.length === 0 && (
                    <BodyText as="span" variant="body-large-regular" className='text-neutral-secondary'>
                        Todavía no tienes zonas. Crea una zona.
                    </BodyText>
                )}
            </div>
        </section>
    );
}
