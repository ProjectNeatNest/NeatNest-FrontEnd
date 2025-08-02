import { twMerge } from 'tailwind-merge';

import type { Area } from '../../../config/types';
import SectionHeading from '../headings/SectionHeading';
import AreaItem from '../AreaItem';
import Spinner from '../../Spinner';
import { NavLink } from 'react-router';
import useRequest from '@/hooks/useRequest';
import useHousingContext from '@/hooks/useHousingContext';

interface Props {
    areas: Area[];
    className?: string;
}

export default function AreasList(props: Props) {
    const { className } = props;
    const { housing } = useHousingContext();
    const { requestData: areas, isLoading } = useRequest<Area[]>(
        `/housings/${housing?.housing_id}/areas`
    );

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
                                <AreaItem area={area}></AreaItem>
                            </NavLink>
                        );
                    })}
            </div>
        </section>
    );
}
