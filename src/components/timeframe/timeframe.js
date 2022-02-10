import React, { useState } from "react";
import "./styles.css"

import Toggle from "../toggle/toggle";

const Timeframe = () => {
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)
    const [button5, setButton5] = useState(false)

    const btn1 = () => {
        setButton1(true)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(false)
    }
    const btn2 = () => {
        setButton1(false)
        setButton2(true)
        setButton3(false)
        setButton4(false)
        setButton5(false)
    }
    const btn3 = () => {
        setButton1(false)
        setButton2(false)
        setButton3(true)
        setButton4(false)
        setButton5(false)
    }
    const btn4 = () => {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(true)
        setButton5(false)
    }
    const btn5 = () => {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(true)
    }

    return (
        <>
            <div>
                <h5 style={{ marginBlock: "10px", color: "black" }}>Timeframe</h5>
                <div className="timeframe-buttons">
                    <button onClick={btn1} className={button1 ? "timeframe-btn hover" : "timeframe-btn"}>1 Day</button>
                    <button onClick={btn2} className={button2 ? "timeframe-btn hover" : "timeframe-btn"}>7 Days</button>
                    <button onClick={btn3} className={button3 ? "timeframe-btn hover" : "timeframe-btn"}>30 Days</button>
                    <button onClick={btn4} className={button4 ? "timeframe-btn hover" : "timeframe-btn"}>1 Year</button>
                    <button onClick={btn5} className={button5 ? "timeframe-btn hover" : "timeframe-btn"}>5 Year</button>
                </div>
            </div>
            <div className="timeframe-toggle-container">
                <h3>Enable Accelerated APY</h3>
                <div className="timeframe-toggle">
                    <Toggle className="toggle-scale" />
                </div>
            </div>
        </>
    )
}

export default Timeframe 