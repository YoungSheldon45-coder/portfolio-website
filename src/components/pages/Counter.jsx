import React, { useState, useEffect } from 'react'
import { project } from '../data/dummydata'
import CountUp from 'react-countup'

const Counter = () => {
    // Track which counters have been animated
    const [hasAnimated, setHasAnimated] = useState(project.map(() => false))

    useEffect(() => {
        // Reset the animated state when the component mounts
        setHasAnimated(project.map(() => false))
    }, [])

    return (
        <>
            <div className="container grid3 grid4 counter-div">
                {project.map((item, i) => (
                    <div key={i} className="box" data-aos="zoom-in" data-aos-easing="linear">
                        <i className='counter-icons'>{item.icon}</i>
                        <h1 className='heading counter-h1'>
                            <CountUp
                                start={hasAnimated[i] ? item.num : 0}  // Start from 0 only if not animated
                                end={item.num}
                                duration={2}
                                onEnd={() => {
                                    // Mark this counter as animated after it finishes
                                    setHasAnimated((prev) => {
                                        const updated = [...prev]
                                        updated[i] = true
                                        return updated
                                    })
                                }}
                            />
                        </h1>
                        <h3 className='counter-h3'>{item.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Counter
