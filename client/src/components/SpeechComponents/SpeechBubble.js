import React, {useState} from 'react'
import { useStoreContext} from "../../services/GlobalState";
import YesNoButtons from './YesNoButtons';
import ActionButtons from '../ActionButtons';

export default function SpeechBubble(props) {
    //SETTING STATES
    const [newUserSpeech] = useState("Hi, I'm Robert!");
    
    const [state] = useStoreContext();

    //Determine if user is returning thus what to render
    if(props.returning === false) {
        return (
            <div className="BubbleGoodies">
                <h1>{newUserSpeech}</h1>
                <ActionButtons {...props}/>
                <YesNoButtons  {...props}/>
            </div>
        )
    }
    return (
        <div className="BubbleGoodies">
            <h2>{state.speech}</h2>
            <ActionButtons {...props} />
            <YesNoButtons {...props} />
        </div>
    )
}
