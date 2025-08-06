import { PiHouseLineLight, PiPlusLight } from 'react-icons/pi';

import type { Housing, User } from '../config/types';

import useHousingContext from '../hooks/useHousingContext';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import BodyText from '../components/typography/BodyText';
import HousingList from '../components/molecules/ElementLists/HousingList';
import CustomNavLink from '../components/atoms/CustomNavLink';
import Title from '../components/typography/Title';
import { useEffect, useState } from 'react';
import useUserContext from '@/hooks/useUserContext';
import myRequest from '@/services/myRequest';
import { useNavigate } from 'react-router';
import PageLayout from '@/layouts/PageLayout';
import EditHousingForm from '@/components/organisms/EditHousingForm';

export default function MyHousingsPage() {
    const { housing, addHousing } = useHousingContext();
    const { user } = useUserContext();
    const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
    const navigate = useNavigate();

    // const { requestData: userHousings, isLoading } =
    //     useRequest<Housing[]>('/housings');

    const [userHousings, setUserHousings] = useState<Housing[]>([]);
    const [housingName, setHousingName] = useState<string | null>(
        housing?.name ?? null
    );

    async function getHousings() {
        const housings = await myRequest<Housing[]>('/housings', {
            method: 'GET',
        });
        setUserHousings(housings);
    }

    async function handleDeleteButton(housing: Housing) {
        const data = await myRequest<User[]>(
            `/housings/${housing?.housing_id}/users`,
            { method: 'GET' }
        );
        const currentUser = data.find((u) => u.user_id === user?.user_id);
        if (!currentUser) {
            setShowDeleteButton(false);
        } else {
            setShowDeleteButton(currentUser?.is_admin || false);
        }
    }

    async function onHousingDelete() {
        await myRequest(`/housings/${housing?.housing_id}`, {
            method: 'DELETE', hasToasts: true
        });
        setUserHousings(
            userHousings.filter((h) => h.housing_id !== housing?.housing_id)
        );
        addHousing(userHousings[0]);
        navigate('/my-housings');
    }

    useEffect(() => {
        getHousings();
    }, []);

    useEffect(() => {
        setHousingName(housing?.name ?? null);
        if (housing) handleDeleteButton(housing);
    }, [housing]);

    return (
        <PageLayout className='bg-fixed bg-center bg-no-repeat bg-size-[auto_70%] bg-bedroom'>
            <div className="flex flex-col gap-4 md:w-2/3">
                <CreateHeading
                    leftIcon={<PiHouseLineLight size={24} />}
                    deleteButton={showDeleteButton}
                    onDelete={onHousingDelete}
                >
                    Mis viviendas
                </CreateHeading>
                <BodyText as='p' variant='body-large-regular' className='text-neutral-secondary'>Hola{user ? `, ${user.username}`: ''}</BodyText>
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
                            <BodyText
                                as="span"
                                variant="body-large-regular"
                                className="text-neutral-secondary"
                            >
                                Editar {housingName}
                            </BodyText>

                            <EditHousingForm />
                        </div>
                    </div>
                )}
                <div className="flex flex-col gap-1">
                    {userHousings.length > 0 && (
                        <BodyText
                            as="p"
                            variant="body-large-regular"
                            className="text-neutral-primary"
                        >
                            Selecciona el hogar en el que estás viviendo:
                        </BodyText>
                    )}
                    {userHousings && (
                        <HousingList housings={userHousings}></HousingList>
                    )}
                    <BodyText
                        as="p"
                        variant="body-large-regular"
                        className="text-neutral-primary"
                    >
                        Crea una nueva vivienda:
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
        </PageLayout>
    );
}
