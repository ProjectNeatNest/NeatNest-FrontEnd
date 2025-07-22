import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

export default function useUserContext() {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error('useUserContext debe usarse dentro de UserProvider');
    }
    return context;
}
