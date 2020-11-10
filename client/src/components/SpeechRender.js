import React from 'react'
import EmptySpeech from './EmptySpeech';
import VisibleSpeech from './VisibleSpeech';

export default function SpeechRender(props) {
    const talking = props.talking;
    if (talking) {
        return <VisibleSpeech {...props} />;
    }
    return <EmptySpeech {...props} />;
}
