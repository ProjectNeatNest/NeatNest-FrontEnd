import { createContext } from 'react';
import type { User } from '../config/types';

interface UserContextType {
    user: User | null;
    loginUser: (user: User, token: string) => void;
    logoutUser: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
