import { useEffect, useState } from 'react';

interface Props {
    className?: string;
    initialCount?: number;
    onEnd: () => void;
}

export default function CountDown(props: Props) {
    const { className, initialCount = 5, onEnd } = props;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        const timeout = setTimeout(() => onEnd(), 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onEnd]);

    return <div className={className}>{count}</div>;
}
