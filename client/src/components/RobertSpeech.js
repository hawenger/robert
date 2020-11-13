import React from 'react';
import SpeechBubble from './SpeechBubble';
import DisplayBox from './DisplayBox';

export default function RobertSpeech(props) {
    console.log(props);
    if(props.returning === null) { 
    return (
        <div>
            <div className="SpeechElementsContainer">
            </div>
        </div>
    )
    }
    return (
        <div className="SpeechElementsContainer">
            <div className="SpeechBubble"> 
                <SpeechBubble {...props}/>
            </div>
            <div className="DisplayBox">
                <DisplayBox/>
            </div>    
        </div>

    )
}
