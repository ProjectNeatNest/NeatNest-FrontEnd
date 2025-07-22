import { createContext } from 'react';
import type { User } from '../config/types';

interface userContextType {
    user: User | null;
    loginUser: (user: User) => void;
    logoutUser: () => void;
}

export const UserContext = createContext<userContextType | null>(null);
