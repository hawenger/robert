import React from 'react'

export default function EyeballControls(props) {
    if (props.awake !== true) 
    return (
        <div className="electric_on_body eyeball">
            <div className="eyelid sleep-twitch">
                <div className="pupil"></div>
            </div>
        </div>
    )
    return (
        <div className="awake-eyeball">
            <div className="awake-eyelid">
                <div className="awake-pupil"></div>
            </div>
        </div>
    )
}
