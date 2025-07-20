import Title from '../typography/Title';

interface Props {
    className?: string;
    size?: 'large' | '2xlarge';
}

export default function Logo(props: Props) {
    const { size = 'large', className = 'text-neutral-primary' } = props;
    const variant =
        size === '2xlarge' ? 'title-2xlarge-light' : 'title-large-light';

    return (
        <>
            <Title as="h1" variant={variant} className={className}>
                NeatNest
            </Title>
        </>
    );
}
