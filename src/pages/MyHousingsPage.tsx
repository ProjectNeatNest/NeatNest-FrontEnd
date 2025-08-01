import { PiHouseLineLight, PiPlusLight } from 'react-icons/pi';

import type { Housing, User } from '../config/types';

import useRequest from '../hooks/useRequest';
import useHousingContext from '../hooks/useHousingContext';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import BodyText from '../components/typography/BodyText';
import HousingList from '../components/molecules/ElementLists/HousingList';
import Spinner from '../components/Spinner';
import CustomNavLink from '../components/atoms/CustomNavLink';
import Title from '../components/typography/Title';
import EditHousingForm from '@/components/organisms/editHousingForm';
import { useEffect, useState } from 'react';
import useUserContext from '@/hooks/useUserContext';
import myRequest from '@/services/myRequest';
import { useNavigate } from 'react-router';

export default function MyHousingsPage() {
    const { housing } = useHousingContext();
    const { user } = useUserContext();
    const navigate = useNavigate();
    const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false)

    console.log(user);

    const { requestData: userHousings, isLoading } =
        useRequest<Housing[]>('/housings');

    const [housingName, setHousingName] = useState<string | null>(
        housing?.name ?? null
    );

    async function handleDeleteButton(housing: Housing) {
        const data = await myRequest<User[]>(
            `/housings/${housing?.housing_id}/users`,
            { method: 'GET' }
        );
        const currentUser = data.find((u) => u.user_id === user?.user_id)
        if(!currentUser) {
            setShowDeleteButton(false)
        } else { setShowDeleteButton(currentUser?.is_admin || false)}
    }

        async function onHousingDelete() {
            await myRequest(
                `/housings/${housing?.housing_id}`,
                { method: 'DELETE' }
            );
            navigate('/my-tasks');
        }
    

    useEffect(() => {
        setHousingName(housing?.name ?? null);
        if (housing) handleDeleteButton(housing)
    }, [housing]);
    

    return (
        <div className="flex flex-col gap-4 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-bedroom">
            <CreateHeading
                leftIcon={<PiHouseLineLight size={24} />}
                deleteButton={showDeleteButton}
                onDelete={onHousingDelete}
            >
                Mis viviendas
            </CreateHeading>
            {housing && (
                <div>
                    <Title
                        as="span"
                        variant="title-small-regular"
                        className="text-neutral-primary"
                    >
                        Ahora estás viviendo en {housingName}
                    </Title>

                    <div className={'flex flex-col gap-1'}>
                        <Title
                            as="h4"
                            variant="title-xsmall-regular"
                            className="text-neutral-secondary"
                        >
                            Editar {housingName}
                        </Title>

                        <EditHousingForm />
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-1">
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
                <BodyText
                    as="p"
                    variant="body-large-regular"
                    className="text-neutral-primary"
                >
                    O crea una nueva vivienda:
                </BodyText>
                <CustomNavLink
                    appearance="secondaryButton"
                    to="/housings/new"
                    leftIcon={<PiPlusLight size={24} />}
                >
                    Crear vivienda
                </CustomNavLink>
            </div>
        </div>
    );
}
