import React, { useState } from "react"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./Mission.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { IoIosArrowDown } from "react-icons/io"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const Mission = () => {
    const [iconClicked, setIconClicked] = useState(null)
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })
    const items = [
        {
            header: "Showcasing Talents and skills",
            content:
                "Empowering individuals to highlight their unique abilities and expertise.Providing a platform where diverse talents can shine and gain recognition.",
        },
        {
            header: "Fostering innovation and Communication.",
            content:
                "Aetheria provide a platform for students to innovate, communicate ideas, and seek advice, fostering a culture of creativity and collaboration.",
        },
        {
            header: "Student-Led Club Activities and Benefits",
            content: "Cultivating a vibrant campus culture through student-initiated and managed organizations.",
        },
        {
            header: "Providing Mentorship Oppurtunities",
            content: "Connecting experienced professionals with aspiring learners for guidance and support.",
        },
        {
            header: "Cultivating Leadership and Management Skills",
            content:
                "To equip individuals with the tools for effective team guidance and strategic decision-making. We focus on nurturing skills that drive successful, visionary leadership.",
        },
    ]

    const accordianVariant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.4, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.4, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }
    const commitmentVariant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }

    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }

    return (
        <div className="mission">
            <SectionTitle text="Mission" />
            <div className="mission-main">
                <motion.div
                    variants={accordianVariant}
                    viewport={{once:true}}
                    whileInView={getVariant()}
                    className="mission-left"
                >
                    <h2 className="section-header">Why we are here?</h2>
                    <Accordion>
                        <AccordionItem
                            onClick={() => setIconClicked("accordian-icon1")}
                            header={
                                <div className="accordion-header">
                                    <IoIosArrowDown
                                        className={`mission-accordian-icon ${
                                            iconClicked === "accordian-icon1" ? "active" : "unactive"
                                        }`}
                                    />
                                    Showcasing Talents and Skills
                                </div>
                            }
                            className="mission-accordian-item"
                        >
                            Empowering individuals to highlight their unique abilities and expertise. Providing a platform
                            where diverse talents can shine and gain recognition.
                        </AccordionItem>

                        <AccordionItem
                            onClick={() => setIconClicked("accordian-icon2")}
                            header={
                                <div className="accordion-header">
                                    <IoIosArrowDown
                                        className={`mission-accordian-icon ${
                                            iconClicked === "accordian-icon2" ? "active" : "unactive"
                                        }`}
                                    />
                                    Fostering Innovation and Communication
                                </div>
                            }
                            className="mission-accordian-item"
                        >
                            Aetheria provides a platform for students to innovate, communicate ideas, and seek advice,
                            fostering a culture of creativity and collaboration.
                        </AccordionItem>

                        <AccordionItem
                            onClick={() => setIconClicked("accordian-icon3")}
                            header={
                                <div className="accordion-header">
                                    <IoIosArrowDown
                                        className={`mission-accordian-icon ${
                                            iconClicked === "accordian-icon3" ? "active" : "unactive"
                                        }`}
                                    />
                                    Student-Led Club Activities and Benefits
                                </div>
                            }
                            className="mission-accordian-item"
                        >
                            Cultivating a vibrant campus culture through student-initiated and managed organizations.
                        </AccordionItem>

                        <AccordionItem
                            onClick={() => setIconClicked("accordian-icon4")}
                            header={
                                <div className="accordion-header">
                                    <IoIosArrowDown
                                        className={`mission-accordian-icon ${
                                            iconClicked === "accordian-icon4" ? "active" : "unactive"
                                        }`}
                                    />
                                    Providing Mentorship Opportunities
                                </div>
                            }
                            className="mission-accordian-item"
                        >
                            Connecting experienced professionals with aspiring learners for guidance and support.
                        </AccordionItem>

                        <AccordionItem
                            onClick={() => setIconClicked("accordian-icon5")}
                            header={
                                <div className="accordion-header">
                                    <IoIosArrowDown
                                        className={`mission-accordian-icon ${
                                            iconClicked === "accordian-icon5" ? "active" : "unactive"
                                        }`}
                                    />
                                    Cultivating Leadership and Management Skills
                                </div>
                            }
                            className="mission-accordian-item"
                        >
                            To equip individuals with the tools for effective team guidance and strategic decision-making.
                            We focus on nurturing skills that drive successful, visionary leadership.
                        </AccordionItem>
                    </Accordion>
                </motion.div>
                <motion.div
                    variants={commitmentVariant}
                    viewport={{once:true}}
                    whileInView={getVariant()}
                    className="mission-right"
                >
                    <h2 className="section-header">Our Commitment</h2>
                    <div className="mission-right-text">
                        <p>
                            We're dedicated to fostering a community where growth, innovation, and collaboration are the
                            pillars. Our mentors and peers are here to support your journey every step of the way. ensuring
                            that you're equipped for the future.
                        </p>
                        <p>
                            We are not just preparing you for the future; we are equipping to shape it. Whether you're
                            seeking to enhance your skills, launch a new project, or simply connect with like-minded
                            individuals, our community is here to support you every step of the way.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Mission
