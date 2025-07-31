import { PiUsersLight } from 'react-icons/pi';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import useHousingContext from '../hooks/useHousingContext';
import BodyText from '../components/typography/BodyText';

import type { User } from '../config/types';
import useUserContext from '../hooks/useUserContext';
import RemovableItem from '../components/molecules/RemovableItem';
import myRequest from '../services/myRequest';
import { useEffect, useState } from 'react';

export default function CohabitantsPage() {
    const { housing } = useHousingContext();
    const { user: currentUser } = useUserContext();
    const [housingUsers, setHousingUsers] = useState<User[]>([]);

    async function getHousingUsersData() {
        if(!housing) return;
        const data = await myRequest<User[]>(
            `/housings/${housing?.housing_id}/users`,
            'GET'
        );
        setHousingUsers(data);
    }

    async function deleteCohabitant(user_id: number) {
        await myRequest(
            `/housings/${housing?.housing_id}/users/${user_id}`,
            'DELETE'
        );
        setHousingUsers(housingUsers.filter((user) => user.user_id != user_id));
    }

    useEffect(() => {
        getHousingUsersData();
    }, []);

    return (
        <div className="flex flex-col gap-4 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-bedroom">
            <CreateHeading
                leftIcon={<PiUsersLight size={24} />}
                deleteButton={false}
            >
                Habitantes
            </CreateHeading>

            {housing && (
                <div>
                    <BodyText
                        as="p"
                        variant="body-large-regular"
                        className="text-neutral-primary"
                    >
                        {housingUsers.length > 1 ?'Estos son los habitantes que forman parte de ': 'Solo vives tú en '}{' '}
                        {housing.name}
                    </BodyText>
                    <ul>
                        {housingUsers
                            ?.filter(
                                (user) => user.user_id != currentUser?.user_id
                            )
                            .map((user) => {
                                return (
                                    <li key={user.user_id}>
                                        <RemovableItem
                                            onDelete={() => {
                                                deleteCohabitant(user.user_id);
                                            }}
                                        >
                                            {user.name}
                                        </RemovableItem>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}

            {/* <CohabitantsForm /> */}
        </div>
    );
}
