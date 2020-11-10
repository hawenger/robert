import React from 'react';
import SpeechBubble from './SpeechBubble';
import RenderScene from './RenderScene';

export default function SpeechScene(props) {
    return (
        <div className="SpeechScene">
            <SpeechBubble {...props}/>
            <RenderScene {...props}/>
        </div>
    )
}
