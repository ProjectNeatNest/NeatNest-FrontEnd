import { useState, type ReactNode } from 'react';
import type { Housing } from '../config/types';
import { HousingContext } from './HousingContext';
import useRequest from '../hooks/useRequest';

interface Props {
    children: ReactNode;
}

export default function HousingProvider(props: Props) {
    const { children } = props;

    const [housing, setHousing] = useState<Housing | null>(() => {
        const housingLS = localStorage.getItem('neat-nest-housing');
        if (!housingLS) return null;
        return JSON.parse(housingLS);
    });

    const addHousing = (housing: Housing) => {
        setHousing(housing);
        localStorage.setItem('neat-nest-housing', JSON.stringify(housing));
    };

    const deleteHousing = () => {
        setHousing(null);
        localStorage.removeItem('neat-nest-housing');
    }

    const changeHousing = (housing: Housing) => {
        setHousing(housing);
        localStorage.setItem('neat-nest-housing', JSON.stringify(housing));
    }

    const { requestData: userHousings } =
        useRequest<Housing[]>('/housings');

    if (userHousings && !housing) {
        addHousing(userHousings[0]);
    }

    const context = { housing, addHousing, deleteHousing, changeHousing };
    return (
        <>
            <HousingContext value={context}>{children}</HousingContext>
        </>
    );
}
