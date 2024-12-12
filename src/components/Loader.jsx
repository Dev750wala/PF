import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-transparent">
            <motion.div
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundColor: '#54D3D4' }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                <svg
                    viewBox="0 0 100 100"
                    width="80"
                    height="80"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.polygon
                        points="50,5 93,25 93,75 50,95 7,75 7,25"
                        fill="transparent"
                        stroke="#54D3D4"
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />

                    <motion.polygon
                        points="50,5 93,25 93,75 50,95 7,75 7,25"
                        fill="#54D3D4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    />

                    <motion.text
                        x="50"
                        y="67"
                        textAnchor="middle"
                        fontSize="45"
                        fill="#0F172A"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3, duration: 0.5 }}
                        // style={}
                    >
                        D
                    </motion.text>
                </svg>
            </motion.div>
        </div>
    );
}

export default Loader;