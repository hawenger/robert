import React from 'react';
import SpeechBubble from './SpeechComponents/SpeechBubble';
import DisplayBox from './ResultsComponents/DisplayBox';

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
                <DisplayBox {...props}/>
            </div>    
        </div>

    )
}
