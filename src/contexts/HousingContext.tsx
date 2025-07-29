import { createContext } from 'react';
import type { Housing } from '../config/types';

interface HousingContextType {
    housing: Housing | null;
    addHousing: (housing: Housing) => void;
}

export const HousingContext = createContext<HousingContextType | null>(null);
