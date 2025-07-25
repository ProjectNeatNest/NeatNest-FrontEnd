import useUserContext from '../hooks/useUserContext';
import HomePageGuest from './HomePageGuest';
import HomePageUserLogged from './HomePageUserLogged';

export default function HomePage() {
    const { user } = useUserContext();

    return (
        <>
            {user && <HomePageUserLogged />}
            {!user && <HomePageGuest />}
        </>
    );
}
