"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LoadAnimation: React.FC = () => {
    const [isMounted, setMounted] = useState(false);

    const pathname = usePathname();
    useEffect(() => {
        setMounted(false);

        return () => {
            // Re-enable scrolling when the component is unmounted
            document.body.style.overflow = 'auto';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }, [pathname]);

    const onAnimationComplete = () => {
        setMounted(true);
        document.body.style.overflow = 'auto';
    };

    // Disable scrolling when the component is not mounted
    useEffect(() => {
        if (!isMounted) {
            document.body.style.overflow = 'hidden';
        }
    }, [isMounted]);

    return (
        <AnimatePresence>
            {!isMounted && (
                <motion.div
                    layout
                    initial={{ opacity: 1, zIndex: 5000 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    onAnimationComplete={onAnimationComplete}
                    className='bg-white fixed top-0 left-0 min-w-full min-h-[100%] flex justify-center items-center'
                >
                    <div
                        className="text-dblue inline-block h-10 w-10 animate-spin rounded-full border-[5px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default LoadAnimation;