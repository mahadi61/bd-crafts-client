
import { motion } from "framer-motion";



const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" ml-4 md:w-4/12 mb-24 mt-8 font-serif">
            <motion.h3
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{
                    duration: "2",
                    delay: "1"
                }}
            >
                <h3 className="text-3xl text-black border-red-400 uppercase border-b-4 py-4">{heading}</h3>
            </motion.h3>
            <p className="text-black  my-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;

