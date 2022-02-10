import React, { Fragment } from 'react'
import "./styles.css"

const Toggle = () => {
    return (
        <Fragment>
            <label className="switch">
                <input type="checkbox" />
                <span className='slider rounded' />
            </label>
        </Fragment>
    )
}

export default Toggle