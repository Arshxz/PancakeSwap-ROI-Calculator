import React, { useState } from "react";
import "./styles.css"

const Details = () => {
    const [dropdown, setDropdodwn] = useState(false)
    return (
        <>
            <div className="hide-show" onClick={() => setDropdodwn(!dropdown)}>{dropdown ? "Hide Details ^" : "Show Details"}</div>
            {dropdown ?
                <div className="details" >
                    <div className="details-header">
                        <h5 className="apy">APY</h5>
                        <h3 className="perc">9.0%</h3>
                    </div>
                    <div>
                        <div className="details-bullets">
                            <div className="points">Calculated based on current rates</div>
                            <div className="points">All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default Details