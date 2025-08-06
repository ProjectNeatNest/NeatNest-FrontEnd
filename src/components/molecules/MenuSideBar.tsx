import Menu from './Menu';
import { motion } from 'framer-motion'; // Usa **framer-motion**, no 'motion/react'

interface Props {
    toggleSidebar: () => void;
}

export default function MenuSidebar({ toggleSidebar }: Props) {
    return (
        <motion.div
            style={{transformOrigin: 'top right'}}
            initial={{ x: '100%', opacity: 0, scale: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                },
            }}
            exit={{
                x: '100%',
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.2, ease: 'easeIn' },
            }}
            className="fixed right-0 px-8 py-12 origin-top-right shadow-lg bg-gray-light/30 top-26 rounded-xl z-1 outline outline-white md:hidden backdrop-blur-2xl"
        >
            <Menu direction="vertical" toggleSidebar={toggleSidebar} />
        </motion.div>
    );
}
