import React, { Fragment, useState } from 'react'

const Tier = () => {
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
        <Fragment>
            <h5 style={{ marginBlock: "15px" }}>Select Tier</h5>
            <div className="timeframe-buttons">
                <button onClick={btn1} className={button1 ? "timeframe-btn hover" : "timeframe-btn"}>Tier 1</button>
                <button onClick={btn2} className={button2 ? "timeframe-btn hover" : "timeframe-btn"}>Tier 2</button>
                <button onClick={btn3} className={button3 ? "timeframe-btn hover" : "timeframe-btn"}>Tier 3</button>
                <button onClick={btn4} className={button4 ? "timeframe-btn hover" : "timeframe-btn"}>Tier 4</button>
                <button onClick={btn5} className={button5 ? "timeframe-btn hover" : "timeframe-btn"}>Tier 5</button>
            </div>
            <div className="timeframe-rates">ROI at Current Rates</div>
            <div className="timeframe-input-container">
                <input type="number" className="timeframe-input" placeholder="0.000 USD" />
            </div>
            <div className="timeframe-cake">~ 0.000 CAKE + 0.000000 DON</div>
        </Fragment>
    )
}

export default Tier