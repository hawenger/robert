import React from 'react';
import SpeechBubbleButtons from './SpeechBubbleButtons';
import SpeechBubbleText from './SpeechBubbleText';

export default function SpeechMoodSort(props) {
    //const mood = props.mood;
    return (
        <div>
            <SpeechBubbleText {...props}/>
            <SpeechBubbleButtons {...props}/>
        </div>
    )
}
