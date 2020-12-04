import React from "react";
import "../App.css";
import "../Robert.css";
import RobertSpeech from '../components/RobertSpeech';
import RobertsBody from '../components/RobertsBodyComponents/RobertsBody';
import WakeButton from "../components/Buttons/WakeButton";

export default function Home(props) {
  
    return (
        <>
            <div className="RobertContainer">
                <RobertsBody/>
            </div>
            <div className= "SpeechContainer">
                <RobertSpeech/>
            </div>
            <WakeButton/>
        </>    

    )
}
