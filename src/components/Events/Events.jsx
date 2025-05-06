import React from "react"
import "./Events.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { events } from "../../utils/data"
import { MdDateRange } from "react-icons/md"
import { MdPlace } from "react-icons/md"
import { MdAccessTimeFilled } from "react-icons/md"
import { motion } from "framer-motion"

const Events = () => {
    return (
        <div className="events">
            <SectionTitle text="Events" />
            <h2 className="section-header">
                What's on Your Mind <br /> Dive in at Our Next Event!
            </h2>
            <div className="events-main">
                {events.map((event, i) => (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        viewport={{once:true}}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 0.5,
                                type: "spring",
                                damping: 20,
                            },
                        }}
                        className="event-container"
                        key={i}
                    >
                        <div className="event-container-left">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <div className="event-details">
                                <div className="event-date">
                                    <MdDateRange className="event-details-icon" />
                                    {event.date}
                                </div>
                                <div className="event-venue">
                                    <MdPlace className="event-details-icon" />
                                    {event.venue}
                                </div>
                                <div className="event-time">
                                    <MdAccessTimeFilled className="event-details-icon" />
                                    {event.time}
                                </div>
                            </div>
                            <div className="event-btn">Book Your Slot</div>
                        </div>
                        <div className="event-container-right">
                            <img src={event.img} alt="" className="event-img" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Events
