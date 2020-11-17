import React from 'react';
import CallRobertMood from './SpeechComponents/CallRobertMood';
import CallCreateSong from './SongComponents/CallCreateSong';

export default function ActionButtons(props) {

    return (
        <div>
            <CallRobertMood {...props} />
            <CallCreateSong {...props} />
        </div>
    )
}
