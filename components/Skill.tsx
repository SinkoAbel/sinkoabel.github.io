import React from 'react';
import {motion} from "framer-motion";


type Props = {
    image: string;
    progress: number;
    directionLeft?: boolean;
}

function Skill({image, progress, directionLeft}: Props) {
    return (
        <div className="group relative flex justify-center cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                src={image}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28
                filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200
                }}
                whileInView={{x: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
            h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{progress}%</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Skill;