import { PiXLight } from 'react-icons/pi';
import BodyText from '../typography/BodyText';

interface Props {
    children: string;
    onDelete: () => void;
}

export default function EmailItem(props: Props) {
    const { children, onDelete } = props;

    return (
        <div className="flex items-center pl-2 gap-1.5 bg-neutral-tertiary w-fit rounded-lg">
            <BodyText
                as="span"
                variant="body-small-regular"
                className="text-neutral-primary"
            >
                {children}
            </BodyText>
            <button type="button" aria-label="delete button" className='text-neutral-primary p-1.5' onClick={onDelete}>
                <PiXLight />
            </button>
        </div>
    );
}
