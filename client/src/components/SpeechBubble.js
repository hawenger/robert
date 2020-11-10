import React from 'react';
import SpeechRender from './SpeechRender';

export default function SpeechBubble(props) {
    return (
        <div className="SpeechBubble">
            <SpeechRender {...props}/>
        </div>
    )
}
