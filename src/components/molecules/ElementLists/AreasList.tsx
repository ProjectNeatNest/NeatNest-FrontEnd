import { twMerge } from 'tailwind-merge';
import type { Area } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import AreaItem from '../AreaItem';

interface Props {
    areas: Area[];
    isLoading?: boolean;
    className?: string;
}

export default function AreasList(props: Props) {
    const { areas, isLoading, className } = props;
    const classes = twMerge('flex justify-start  gap-4 w-full', className);

    return (
        <section className="flex flex-col gap-4 w-full">
            <SectionHeading buttonLabel="zona" linkTo="/areas/new">
                Zonas
            </SectionHeading>
            <div className={classes}>
                {isLoading && (
                    <img src="/Loading.gif" alt="Loading spinner"></img>
                )}
                {!isLoading &&
                    areas.map((area) => {
                        const id = area.area_id;
                        return (
                            <AreaItem
                                key={id}
                                area={area}
                                completedTasks={2}
                                totalTasks={7}
                            ></AreaItem>
                        );
                    })}
            </div>
        </section>
    );
}
