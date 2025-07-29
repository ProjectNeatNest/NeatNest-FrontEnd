import { PiHouseLineLight, PiSignOutLight } from 'react-icons/pi';

import Button from '../components/atoms/Button';
import useUserContext from '../hooks/useUserContext';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import useHousingContext from '../hooks/useHousingContext';
import BodyText from '../components/typography/BodyText';
import useRequest from '../hooks/useRequest';
import HousingList from '../components/molecules/ElementLists/HousingList';
import type { Housing } from '../config/types';
import Spinner from '../components/Spinner';

export default function MyProfilePage() {
    const { logoutUser } = useUserContext();

    const { housing, addHousing } = useHousingContext();
    const { requestData: userHousings, isLoading } =
        useRequest<Housing[]>('/housings');

    return (
        <div className="flex flex-col bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-bedroom">
            <CreateHeading
                leftIcon={<PiHouseLineLight size={24} />}
                deleteButton={false}
            >
                Mis viviendas
            </CreateHeading>
            <BodyText
                as="p"
                variant="body-large-regular"
                className="text-neutral-primary"
            >
                Selecciona el hogar en el que estás viviendo:
            </BodyText>
            {userHousings && (
                <HousingList housings={userHousings}></HousingList>
            )}
            {isLoading && <Spinner />}

            <Button
                buttonVariant="secondary"
                icon={<PiSignOutLight size={24} />}
                onClick={logoutUser}
            >
                Cerrar sesión
            </Button>
        </div>
    );
}
