import { PiHouseLineLight, PiPlusLight } from 'react-icons/pi';

import type { Housing } from '../config/types';

import useRequest from '../hooks/useRequest';
import useHousingContext from '../hooks/useHousingContext';
import CreateHeading from '../components/molecules/headings/CreateHeading';
import BodyText from '../components/typography/BodyText';
import HousingList from '../components/molecules/ElementLists/HousingList';
import Spinner from '../components/Spinner';
import CustomNavLink from '../components/atoms/CustomNavLink';
import Title from '../components/typography/Title';
import HousingForm from '@/components/organisms/HousingForm';

export default function MyHousingsPage() {
    const { housing } = useHousingContext();

    const { requestData: userHousings, isLoading } =
        useRequest<Housing[]>('/housings');

    return (
        <div className="flex flex-col gap-4 bg-center bg-no-repeat bg-cover md:w-2/3 md:bg-contain bg-bedroom">
            <CreateHeading
                leftIcon={<PiHouseLineLight size={24} />}
                deleteButton={false}
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
                        Ahora estás viviendo en {housing.name}

                    </Title>

                    <div className={'flex flex-col gap-1'}>
                        <Title
                            as="h4"
                            variant="title-xsmall-regular"
                            className="text-neutral-secondary"
                        >
                            Editar {housing.name}
                        </Title>

                        <HousingForm
                            showCohabitantsInput={false}
                            className=""
                            buttonLabel='Guardar'
                        />

                        {/* {area && <AreaForm areaName={area?.name} />} */}
                    </div>
                </div>
            )}
            <div className='flex flex-col gap-1'>
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
