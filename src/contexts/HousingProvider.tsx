import { useEffect, useState, type ReactNode } from 'react';
import type { Housing } from '../config/types';
import { HousingContext } from './HousingContext';
import myRequest from '@/services/myRequest';

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

    const addFirstHousing = async () => {
        const userHousings = await myRequest<Housing[]>('/housings')
        if (!housing && userHousings.length > 0 ) {
            addHousing(userHousings[0]);
        }
    }
    useEffect(() => {

        const activeUser = JSON.parse(localStorage.getItem('neat-nest-user')!);

        if (!activeUser) return;

        addFirstHousing();
        

    }, []);



    const context = { housing, addHousing, deleteHousing, changeHousing, addFirstHousing };
    return (
        <>
            <HousingContext value={context}>{children}</HousingContext>
        </>
    );
}
