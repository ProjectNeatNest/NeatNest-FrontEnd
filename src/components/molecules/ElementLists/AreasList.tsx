import { twMerge } from 'tailwind-merge';
import type { Area } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import AreaItem from '../AreaItem';
import useRequest from '../../../hooks/useRequest';
import useHousingContext from '../../../hooks/useHousingContext';

interface Props {
    areas: Area[];
    className?: string;
}

export default function AreasList(props: Props) {
    const { areas, className } = props;
    const classes = twMerge('flex justify-start  gap-4 w-full', className);

    const { housing } = useHousingContext;
    const { requestData, isLoading } = useRequest('/areas/');
    console.log(requestData);

    return (
        <section className="flex flex-col w-full gap-4">
            <SectionHeading buttonLabel="zona" linkTo="/areas/new">
                Zonas
            </SectionHeading>
            <div className={classes}>
                {isLoading && <img src="/Loading.gif" alt="Loading "></img>}
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
