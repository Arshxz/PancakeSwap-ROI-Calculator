import React from "react";
import "./styles.css"

const Details = () => {
    return (
        <>
            <div className="details">
                <div className="hide-show">Hide Details ^</div>
                <div className="details-header">
                    <h5 className="apy">APY</h5>
                    <h3 className="perc">9.0%</h3>
                </div>
                <ul className="details-bullets">
                    <li className="points">Calculated based on current rates</li>
                    <li className="points">All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
                </ul>
            </div>
        </>
    )
}

export default Details