import React from 'react'

export default function SpeechBubbleButtons(props) {
    return (
        <div>
            <button value={false}>{props.buttons.buttonText[0]}</button>
            <button value={true}>{props.buttons.buttonText[1]}</button>
        </div>
    )
}
