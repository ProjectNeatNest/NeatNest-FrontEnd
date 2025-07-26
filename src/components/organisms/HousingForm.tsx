import { PiHouseLineLight, PiUsersLight } from 'react-icons/pi';
import InputField from '../atoms/InputField';
import { twMerge } from 'tailwind-merge';
import Button from '../atoms/Button';
import BodyText from '../typography/BodyText';
import CheckboxListItem from '../molecules/CheckboxListItem';

interface Props {
    className?: string;
}

export default function HousingForm(props: Props) {
    const { className } = props;

    const classes = twMerge('flex flex-col gap-6', className);
    return (
        <form className={classes}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la vivienda"
                    leftIcon={<PiHouseLineLight size={24} />}
                    placeholder="El nombre de tu vivienda"
                    required
                />

                <InputField
                    type="text"
                    label="Añadir convivientes"
                    leftIcon={<PiUsersLight size={24} />}
                    placeholder="Escribe el email de los convivientes"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <BodyText
                    as="p"
                    variant="body-large-regular"
                    className="text-neutral-primary"
                >
                    Puedes seleccionar las zonas que dispongas en tu vivienda:
                </BodyText>

                <div className="grid grid-cols-3 gap-2">
                    <CheckboxListItem>Comedor</CheckboxListItem>
                    <CheckboxListItem>Cocina</CheckboxListItem>
                    <CheckboxListItem>Salón</CheckboxListItem>
                    <CheckboxListItem>Baño</CheckboxListItem>
                    <CheckboxListItem>Aseo</CheckboxListItem>
                    <CheckboxListItem>Terraza</CheckboxListItem>
                    <CheckboxListItem>Balcón</CheckboxListItem>
                    <CheckboxListItem>Jardín</CheckboxListItem>
                    <CheckboxListItem>Piscina</CheckboxListItem>
                </div>
            </div>
            <Button buttonVariant="primary" type="submit">
                Guardar y continuar
            </Button>
        </form>
    );
}
