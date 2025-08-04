import { createContext } from 'react';
import type { Housing } from '../config/types';

export interface HousingContextType {
    housing: Housing | null;
    addHousing: (housing: Housing) => void;
    deleteHousing: () => void;
    changeHousing: (housing: Housing) => void;
    addFirstHousing: () => void;
}

export const HousingContext = createContext<HousingContextType | null>(null);
