import { useState, type ReactNode } from 'react';

import { UserContext } from './UserContext';
import type { User } from '../config/types';

interface Props {
    children: ReactNode;
}

export default function UserProvider(props: Props) {
    const { children } = props;

    const [user, setUser] = useState<User | null>(() => {
        const userLS = localStorage.getItem('neat-nest-user');
        if (!userLS) return null;
        return JSON.parse(userLS);
    });

    const loginUser = (user: User, token: string) => {
        setUser(user);
        localStorage.setItem('neat-nest-user', JSON.stringify(user));
        localStorage.setItem('neat-nest-token', token);
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('neat-nest-user');
    };

    const context = { user, loginUser, logoutUser };
    return (
        <>
            <UserContext value={context}>{children}</UserContext>
        </>
    );
}
