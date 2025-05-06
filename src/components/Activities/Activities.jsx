import React from "react"
import "./Activities.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import Code_img from "../../assets/images/activities_code.jpg"
import Debate_img from "../../assets/images/activities_debate.jpg"
import Women_img from "../../assets/images/activities_women_img.jpg"
import Bootcamp_img from "../../assets/images/activities_bootcamp_img.jpg"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const Activities = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })
    const type1Variant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 30, damping: 10 },
        },
    }
    const type2Variant = {
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
        <div className="activities">
            <SectionTitle text="Activities" />
            <h2 className="section-header">Recap of Our Actions</h2>
            <div className="activities-main">
                <motion.div
                    variants={type1Variant}
                    viewport={{ once: true }}
                    whileInView={getVariant()}
                    className="activities-winter-code activities-activity"
                >
                    <img src={Code_img} alt="winter-code-img" className="activities-winter-code-img" />
                    <div className="activities-winter-details">
                        <h3>Winter Code Fest</h3>
                        <p>
                            Participants were actively engaged in a series of coding challenges and hackathons that spanned
                            the duration of the event. They took on various programming tasks, each designed to test and
                            expand their knowledge across a wide array of topics and technologies. From algorithmic
                            problem-solving to building full-fledged applications, participants collaborated, competed, and
                            learned from one another.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={type2Variant}
                    viewport={{ once: true }}
                    whileInView={getVariant()} className="activities-debate activities-activity"
                >
                    <img src={Debate_img} alt="winter-debate-img" className="activities-debate-img" />
                    <div className="activities-debate-details">
                        <h3>Tech Debate Competition</h3>
                        <p>
                            Participants engaged in lively and thought-provoking debates on a diverse range of
                            technology-related topics, where they had the opportunity to showcase their analytical thinking
                            and rhetorical prowess. The event featured multiple rounds of debates, each judged by seasoned
                            experts in the field, ensuring a high standard of discourse. Through these, participants gained
                            insights into emerging tech trends and ethical considerations.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={type1Variant}
                    viewport={{ once: true }}
                    whileInView={getVariant()}
                    className="activities-women-symposium activities-activity"
                >
                    <img src={Women_img} alt="winter-women-img" className="activities-women-symposium-img" />
                    <div className="activities-women-symposium-details">
                        <h3>Women in Tech Symposium</h3>
                        <p>
                            he event featured a series of inspiring talks delivered by prominent industry leaders, each
                            sharing their insights and experiences to empower women in technology. In addition to these
                            motivational sessions, attendees participated in hands-on workshops that provided practical
                            skills and knowledge essential for career growth. Allowing women to connect, and build
                            relationships within the tech community.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={type2Variant}
                    viewport={{ once: true }}
                    whileInView={getVariant()}
                    className="activities-bootcamp activities-activity"
                >
                    <img src={Bootcamp_img} alt="winter-bootcamp-img" className="activities-bootcamp-img" />
                    <div className="activities-bootcamp-details">
                        <h3>Full Stack Development Bootcamp</h3>
                        <p>
                            The event brought together students and tech enthusiasts for an in-depth exploration of web
                            development, offering a comprehensive learning experience that catered to all levels of
                            expertise. Participants engaged in hands-on sessions that delved into both front-end and
                            back-end technologies, gaining practical skills in HTML, CSS, and JavaScript for crafting
                            dynamic user interfaces. On the back-end, they explored server-side development with Node.js
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Activities
