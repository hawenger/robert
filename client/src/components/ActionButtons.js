import React from 'react';
import CallRobertMood from './SpeechComponents/CallRobertMood';
import CallCreateSong from './SongComponents/CallCreateSong';
import Navbar from './NavigationComponent/Navbar'

export default function ActionButtons(props) {

    return (
        <div className="ActionButtonDiv">
            <CallRobertMood {...props} />
            <CallCreateSong {...props} />
            <Navbar/>
        </div>
    )
}
