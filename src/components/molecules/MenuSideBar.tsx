import Menu from './Menu';
import { motion } from 'motion/react';

export default function MenuSidebar() {
    return (
        <>
            <motion.div
                initial={{ x: '100%', opacity: 0, scale: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {},
                    transformOrigin: 'top right',
                }}
                className="fixed right-0 px-8 py-12 shadow-lg bg-gray-light/30 top-26 rounded-xl z-1 outline outline-white md:hidden backdrop-blur-2xl"
            >
                <Menu direction="vertical" />
            </motion.div>
        </>
    );
}
