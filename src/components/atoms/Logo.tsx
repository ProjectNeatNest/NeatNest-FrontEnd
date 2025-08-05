import { PiBirdLight } from 'react-icons/pi';
import Title from '../typography/Title';

interface Props {
    className?: string;
    size?: 'large' | '2xlarge';
}

export default function Logo(props: Props) {
    const { size = 'large', className = 'select-none text-neutral-primary' } =
        props;
    const variant =
        size === '2xlarge' ? 'title-2xlarge-light' : 'title-large-light';

    return (
        <div className='flex items-center gap-2 text-neutral-primary'>
            <PiBirdLight size={32}/>
            <Title as="h1" variant={variant} className={className}>
                NiuNet
            </Title>
        </div>
    );
}
