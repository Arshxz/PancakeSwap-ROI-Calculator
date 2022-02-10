import React from "react"
import "./styles.css"

const Header = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="header">
                    <h4>ROI Calculator</h4>
                    <div>X</div>
                </div>
                <div className="toggle-mini">
                    <div className="icon"></div>
                    <div className="toggle-usd">CAKE</div>
                    <div className="toggle">Toggle</div>
                </div>
                <div className="input-container">
                    <input className="input" placeholder="0.000 USD" />
                </div>
                <div className="buttons">
                    <div className="container">
                        <button className="btn">$1000</button>
                        <button className="btn">$100</button>
                    </div>
                    <div className="cake">~CAKE 0.000</div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header
