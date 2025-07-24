import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';
import { PiCheckCircleLight } from 'react-icons/pi';
import Button from '../atoms/Button';

interface Props {
    className?: string;
}

export default function TaskForm(props: Props) {
    const { className } = props;

    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la tarea"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                />
                <InputField
                    type="text"
                    label="Zona de trabajo"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe el nombre de la zona"
                    required
                />
                <InputField
                    type="text"
                    label="Duración de la tarea"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                />
                <InputField
                    type="text"
                    label="Fecha límite"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Fecha límite de realización"
                    required
                />
                <InputField
                    type="text"
                    label="Periodicidad"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="¿Cada cuántos días?"
                    required
                />
            </div>
            <Button buttonVariant="primary">Guardar</Button>
        </form>
    );
}
