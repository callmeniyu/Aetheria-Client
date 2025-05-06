import React from "react"
import "./About.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import KnowMore from "../KnowMore/KnowMore"
import about_img from "../../assets/images/about.png"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const About = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

    const h2Variant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            x: [10, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }

    const pVariant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 1, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            x: [10, 0],
            opacity: [0, 1],
            transition: { delay: 1, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }

    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }

    return (
        <div className="about">
            <SectionTitle text="About" />
            <h2 className="section-header">Who we are?</h2>
            <div className="about-container">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <motion.h2 variants={h2Variant} whileInView={getVariant()} viewport={{ once: true }}>
                        We're a community of change-makers, Innovative minds, leaders and students.
                    </motion.h2>
                    <motion.p variants={pVariant} whileInView={getVariant()} viewport={{ once: true }}>
                        Together, we're mapping the landscape of innovation and technology. From coding marathons to design
                        sprints, we offer diverse platforms for learning. In aetheria you'll find the resources and support
                        to turn your ideas into reality. Step into a world where your ideas can thrive and make a
                        difference.
                    </motion.p>
                    <KnowMore text="Know more" />
                </div>
            </div>
        </div>
    )
}

export default About
