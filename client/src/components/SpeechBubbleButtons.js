import React, {setState} from 'react'

export default function SpeechBubbleButtons(props) {
    function stopConversation() {
        console.log("stop")
    }
    function continueConversation() {
        console.log("Contine");
        console.log(props);
    }
    return (
        <div>
            <button onClick={continueConversation} value={true}>{props.buttons.buttonText[0]}</button>
            <button onClick={stopConversation} value={false}>{props.buttons.buttonText[1]}</button>
        </div>
    )
}
