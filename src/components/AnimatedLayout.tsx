import type {ReactNode} from "react";
import {motion, type Variants} from "framer-motion"

type Props = {
    children: ReactNode;
}

const variants = {
    hidden: { opacity: 0, x: 50, y: 0, transition: {duration: 1, ease: 'backInOut'} },
    enter: { opacity: 1, x: 0, y: 0, transition: {duration: 1, ease: 'backInOut'} },
    exit: { opacity: 0, x: -50, y: 0, transition: {duration: 1, ease: 'backInOut'} },
}

function AnimatedLayout({ children }: Props){
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants as Variants}
            className="relative"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedLayout;