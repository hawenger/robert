import React from 'react';
import SpeechBubbleButtons from './SpeechBubbleButtons';
import SpeechBubbleText from './SpeechBubbleText';
//import robertService from '../services/robertService'

export default function SpeechMoodSort(props) {
    const currentMood = props.robert.mood;
    //const getmoods = async () => {
    //    let res = await robertService.getAllMood();
    //    console.log(res);
    //    console.log(currentMood);
    //    //const x = res.map(element => element.userId)
    //    //console.log(x)
    //    //setState(user.userId, x);
    //    }
    //    getmoods();
    return (
        <div>
            <SpeechBubbleText {...props}/>
            <SpeechBubbleButtons {...props}/>
        </div>
    )
}
