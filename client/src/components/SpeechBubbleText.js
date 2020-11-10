import React from 'react'

export default function SpeechBubbleText(props) {
    const innerText = props.speechBubble.speechText;
    return (
        <div>
            <p>{innerText}</p>
        </div>
    )
}
