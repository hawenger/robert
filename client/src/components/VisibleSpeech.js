import React from 'react';
import SpeechMoodSort from './SpeechMoodSort.js';

export default function VisibleSpeech(props) {
    return (
        <div className="VisibleSpeech">
            <SpeechMoodSort {...props}/>
        </div>
    )
}
