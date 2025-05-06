import React, { useEffect, useState } from "react"
import "./Hero.css"
import Button from "../Button/Button"
import Doodle1 from "../../assets/svg/hero-doodle1.svg"
import Doodle2 from "../../assets/svg/hero-doodle2.svg"
import Doodle3 from "../../assets/svg/hero-doodle3.svg"
import Doodle4 from "../../assets/svg/hero-doodle4.svg"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
    const [selectedText, setSelectedText] = useState("Excel")
    const Texts = ["Grow", "Thrive", "Dream", "Excel"]
    let index = 0

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedText(Texts[index])
            index = (index + 1) % Texts.length
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

    const h1Variant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            filter: "blur(5)",
            transition: { delay: 0.4, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            filter: "blur(0)",
            transition: { delay: 0.4, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
    }
    const pVariant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            filter: "blur(5)",
            transition: { delay: 0.6, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            filter: "blur(0)",
            transition: { delay: 0.6, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
    }
    const buttonVariant = {
        small: {
            y: [50, 0],
            opacity: [0, 1],
            filter: "blur(5)",
            transition: { delay: 0.8, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
        large: {
            y: [-50, 0],
            opacity: [0, 1],
            filter: "blur(0)",
            transition: { delay: 0.8, duration: 0.5,type: "spring", stiffness: 30,damping: 10, },
        },
    }

    
    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }

    return (
        <div className="hero">
            <motion.img
                src={Doodle1}
                alt="hero-shapes"
                className="doodle1"
                initial={{ opacity: 0, }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.7,
                        duration: 1,
                    },
                    filter: "blur(0)",
                }}
            />
            <motion.img
                initial={{ opacity: 0, }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.8,
                        duration: 1,
                    },
                    filter: "blur(0)",
                }}
                src={Doodle2}
                alt="hero-shapes"
                className="doodle2"
            />
            <motion.img
                initial={{ opacity: 0, }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.9,
                        duration: 1,
                    },
                    filter: "blur(0)",
                }}
                src={Doodle3}
                alt="hero-shapes"
                className="doodle3"
            />
            <motion.img
                initial={{ opacity: 0, }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 1,
                    },
                    filter: "blur(0)",
                }}
                src={Doodle4}
                alt="hero-shapes"
                className="doodle4"
            />
            <motion.h1
                variants={h1Variant}
                viewport={{ once: true }}
                whileInView={getVariant()}
                
            >
                Innovate, Collaborate,&nbsp;
                <motion.span
                    className="hero-txt-span"
                    key={selectedText} 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, stiffness: 20, type: "spring" }} 
                >
                    {selectedText}
                </motion.span>
                <br />
                Welcome to Aetheria
            </motion.h1>
            <motion.p
                variants={pVariant}
                viewport={{ once: true }}
                whileInView={getVariant()}
            >
                Forge your path in a world of boundless possibilities.
                <br /> Join a vibrant community where ideas flourish and futures take flight.
            </motion.p>
            <motion.div
                variants={buttonVariant}
                viewport={{ once: true }}
                whileInView={getVariant()}
                className="hero-btns"
            >
                <Button text="Join" className="hero-btn join-btn blue-btn" icon="join" />
                <Button text="Donate" className="hero-btn donate-btn pink-btn" icon="donate" />
            </motion.div>
        </div>
    )
}

export default Hero
