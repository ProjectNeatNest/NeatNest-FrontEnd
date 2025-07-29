import { useState, type ReactNode } from 'react';
import type { Housing } from '../config/types';
import { HousingContext } from './HousingContext';

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

    const context = { housing, addHousing };
    return (
        <>
            <HousingContext value={context}>{children}</HousingContext>
        </>
    );
}
