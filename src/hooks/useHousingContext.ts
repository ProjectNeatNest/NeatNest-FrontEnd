import { useContext } from 'react';
import { HousingContext } from '../contexts/HousingContext';

export default function useHousingContext() {
    const context = useContext(HousingContext);
    if (context === null) {
        throw new Error(
            'useHousingContext debe usarse dentro de HousingProvider'
        );
    }
    return context;
}
