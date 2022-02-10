import React from "react";
import "./styles.css"

import Toggle from "../toggle/toggle";

const Timeframe = () => {
    return (
        <>
            <div>
                <h5 style={{ marginBlock: "10px", color: "black" }}>Timeframe</h5>
                <div className="timeframe-buttons">
                    <button className="timeframe-btn1">1 Day</button>
                    <button className="timeframe-btn">2 Day</button>
                    <button className="timeframe-btn">3 Day</button>
                    <button className="timeframe-btn">4 Day</button>
                    <button className="timeframe-btn">5 Day</button>
                </div>
            </div>
            <div className="timeframe-toggle-container">
                <h3>Enable Accelarated APY</h3>
                <div className="timeframe-toggle">
                    <Toggle className="toggle-scale" />
                </div>
            </div>
            <h5 style={{ marginBlock: "15px" }}>Select Tier</h5>
            <div className="timeframe-buttons">
                <button className="timeframe-btn1">Tier 1</button>
                <button className="timeframe-btn">Tier 2</button>
                <button className="timeframe-btn">Tier 3</button>
                <button className="timeframe-btn">Tier 4</button>
                <button className="timeframe-btn">Tier 5</button>
            </div>
            <div className="timeframe-rates">ROI at Current Rates</div>
            <div className="timeframe-input-container">
                <input className="timeframe-input" placeholder="0.000 USD" />
            </div>
            <div className="timeframe-cake">~ 0.000 CAKE + 0.000000 DON</div>
        </>
    )
}

export default Timeframe