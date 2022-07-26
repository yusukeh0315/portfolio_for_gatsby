import React from "react"

import { motion } from "framer-motion"

const BackDrop = ({ children, onClick }) => {

    return (
        <div>

            <motion.div
                className="c-modal__backdrop"
                onClick={onClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}

            </motion.div>

        </div>

)}

export default BackDrop
