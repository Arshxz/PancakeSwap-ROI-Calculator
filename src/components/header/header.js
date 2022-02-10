import React, { useState } from "react"
import "./styles.css"

import Toggle from "../toggle/toggle"

const Header = () => {
    const [value, setValue] = useState()

    const addMoney = () => {
        setValue(100)
    }

    const addMoney2 = () => {
        setValue(100)
    }

    return (
        <React.Fragment>
            <section className="section">
                <div className="header">
                    <h4 className="heading">ROI Calculator</h4>
                    <div className="x">X</div>
                </div>
                <div className="toggle-mini">
                    <div className="icon"></div>
                    <div className="cake">CAKE</div>
                    <div className="toggle-usd"><Toggle /> USD</div>
                </div>
                <div className="input-container">
                    <input className="input" placeholder="0.000 USD" />
                </div>
                <div className="buttons">
                    <div className="container">
                        <button onClick={addMoney} className="btn">$1000</button>
                        <button onClick={addMoney2} className="btn">$100</button>
                    </div>
                    <div className="cake">~CAKE 0.000</div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header
