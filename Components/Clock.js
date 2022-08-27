import React, { useState } from "react";

export default function Clock() {

    const [hours, setHours] = useState((new Date().getHours() >= 12) ? new Date().getHours() - 12 : new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    setInterval(() => {
        let x = new Date().getHours();
        setHours(prevHours => (x >= 12) ? new Date().getHours() - 12: new Date().getHours())
        setMinutes(prevMinutes => new Date().getMinutes())
        setSeconds(prevSeconds => new Date().getSeconds())
    }, 1000)

    return (
        <div className="container">
            <div className="clock">
                <div className="hourHand hands" style={{transform: `rotateZ(${hours*30 + minutes/2}deg)`}}></div>
                <div className="minuteHand hands" style={{transform: `rotateZ(${minutes*6}deg)`}} ></div>
                <div className="secondHand hands" style={{transform: `rotateZ(${seconds*6}deg)`}} ></div>
            </div>
        </div>
    )
}