import React, {useState} from 'react'
import robertService from '../services/robertService'; 
export default function SpeechBubble(props) {
    //SETTING STATES
    const [returningSpeech, setReturningSpeech] = useState("How can I help you?")
    const [returningButton, setReturningButton] = useState("Show Me Something!")
    const [newButton, setnewButton] = useState("Nice to Meet You!")
    const [newUserSpeech, setNewUserSpeech] = useState("Hi, I'm Robert!");
    const [mood, setMood] = useState(null);
    const [hideResponse, setHideResponse] = useState({ display: 'none' });
    const [hideButton, setHideButton] = useState({display:'flex'});
    const [yesButton, setYesButton] = useState("YES");
    const [noButton, setNoButton] = useState("NO");
    
    //Results of Random Mood Picking Function
    let randomMood;

    //API Call & Pick Random Mood
    const getMoods = async () => {
        let res = await robertService.getAllMood();
        randomMood= res[Math.floor(Math.random()*res.length)];
    }
    //Call API to get all moods
    getMoods();
    
    //TOGGLE ANSWER BUTTONS
    function hideAnswerButtons() {
        setHideResponse({ display: 'none'});
    }
    function showAnswerButtons() {
        setHideResponse({ display: 'flex'});
    }

    //TOGGLE MAIN BUTTON
    function hideMainButton() {
        setHideButton({display:'none'});
    }
    function showMainButton() {
        setHideButton({display:'flex'});
    }

    //Setting States for Returning User On Click
    function displaySomethingReturningUser() {
        setReturningSpeech(randomMood.innerText);
        setMood(randomMood.mood);
        showAnswerButtons();
        hideMainButton();
    }

    //Setting States for New User On Click
    function displaySomethingNewUser() {
        setNewUserSpeech("A long long time ago...");
        setMood("welcome");
        showAnswerButtons();
        hideMainButton();
    }


    function yesButtonTasks() {
        console.log("yes tasks");
    }
    function noButtonTasks() {
        console.log("NO TASKS")
    } 

    //Determine if user is returning thus what to render
    if(props.returning === false) {
        return (
            <div className="BubbleGoodies">
                <h1>{newUserSpeech}</h1>
                <button style={hideButton} onClick={displaySomethingNewUser}>{newButton}</button>
                <button style={hideResponse} onClick={yesButtonTasks}>{yesButton}</button>
                <button style={hideResponse} onClick={noButtonTasks}>{noButton}</button>
            </div>
        )
    }
    return (
        <div className="BubbleGoodies">
            <h1>{returningSpeech}</h1>
            <button style={hideButton} onClick={displaySomethingReturningUser}>{returningButton}</button>
            <button style={hideResponse}onClick={yesButtonTasks}>{yesButton}</button>
            <button style={hideResponse} onClick={noButtonTasks}>{noButton}</button>
        </div>
    )
}
