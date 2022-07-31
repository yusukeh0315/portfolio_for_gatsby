
import React from 'react'

import { motion, AnimatePresence } from "framer-motion"
import Backdrop from "./backdrop"

const Modal = ({ modalIsOpen, onClose, children }) => {

    const dropIn = {
        hidden: {
            y: "100vh",
            width: "100%",
            opacity: 0,
        },
        visible: {
            y: 0,
            width: "100%",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y: "100vh",
            width: "100%",
            opacity: 0,
        }
    }

    return(
        <AnimatePresence>
            {modalIsOpen && (
                <Backdrop onClick={onClose}>
                    <motion.div
                        key="modal"
                        onClick={(e) => e.stopPropagation()}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="c-modal__content" id="modal">
                            {children}
                            <a className="c-modal__close" href onClick={onClose}><span>×</span></a>
                            <div className="c-modal__close--sp">
                                <button className="c-modal-close-button" href onClick={onClose}> Close </button>
                            </div>
                        </div>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

export default Modal
