import { createContext } from 'react';
import type { User } from '../config/types';

export interface UserContextType {
    user: User | null;
    loginUser: (user: User, token: string) => void;
    logoutUser: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
