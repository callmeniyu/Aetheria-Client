import React from "react"
import "./SectionTitle.css"
import { motion } from "framer-motion"
const SectionTitle = (props) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0, filter: "blur(5)" }}
            viewport={{ once: true }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.2,
                    duration: 0.5,
                },
                filter: "blur(0)",
            }}
            className="sectiontitle"
        >
            {props.text}
        </motion.div>
    )
}

export default SectionTitle
