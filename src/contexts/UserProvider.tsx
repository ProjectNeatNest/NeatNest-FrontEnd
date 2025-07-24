import { useState, type ReactNode } from 'react';

import { UserContext } from './UserContext';
import type { User } from '../config/types';

interface Props {
    children: ReactNode;
}

export default function UserProvider(props: Props) {
    const { children } = props;

    const [user, setUser] = useState<User | null>(null);

    const loginUser = (user: User, token: string) => {
        setUser(user);
        localStorage.setItem('movie-tracker-user', JSON.stringify(user));
        localStorage.setItem('movie-tracker-token', token);
    };

    const logoutUser = () => {
        setUser(null);
    };

    const context = { user, loginUser, logoutUser };
    return (
        <>
            <UserContext value={context}>{children}</UserContext>
        </>
    );
}
