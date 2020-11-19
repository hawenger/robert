import React from 'react'
import { useStoreContext } from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 
import * as Tone from 'tone';

export default function CallCreateSong(props) {

    let randomSongTitle= "Midnight in Rhapsody"

    const [state, dispatch] = useStoreContext();
    
    //Call API to get all moods
    //const setRobertReturning = () => {
    //    robertService.getAllMood({
    //    })
    //    .then(result => {
    //      const toggleOn = true;
    //      const toggleOff = false;
    //      randomMood= result[Math.floor(Math.random()*result.length)];
    //      dispatch({
    //        type: SET_ROBERT_MOOD_RETURNING,
    //        mood: randomMood.mood,
    //        returningSpeech: randomMood.innerText
    //      });
    //      dispatch({
    //          type: DISPLAY_OBJECT,
    //          yesNoButtons: toggleOn,
    //          displayButton: toggleOff
    //        });
    //    dispatch({
    //        type: HIDE
    //    });
    //    })
    //    .catch(err => console.log(err));
    // };
    let x;
    let y;
    let z;
    let a;
    let b;
    let c;
    
    function randomScale() {
                for(var i=0; i < 10; i++); {
                    x = (Math.floor(Math.random() * 5) + 1);
                    y = (Math.floor(Math.random() * 5) + 1);
                    z = (Math.floor(Math.random() * 5) + 1);
                    a = (Math.floor(Math.random() * 5) + 1);
                    b = (Math.floor(Math.random() * 5) + 1);
                    c = (Math.floor(Math.random() * 5) + 1);
                }
    };
    randomScale();
    const synth = new Tone.PolySynth();
    //synth.oscillator.type = 'sine';
    const gain = new Tone.Gain(0.5);
    gain.toDestination();
    synth.connect(gain);
    
    
    
    let index = 0;
    
    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
    
    }, '8n');
    
    function repeat(time) {
        const notes = [`C${x} E${x} G${x}`, `F${y} A${y} C${y}`, `D${z} F${z} A${z}`, `C${a} E${a} G${a}`, `A${b} C${b} E${b}`, `C${c} E${c} G${c} B${b}`];
        let note = notes[index % notes.length];
        synth.triggerAttackRelease(note, '8n', time);
        index ++;
    }

    const playASong = () => {
    //await 
    randomScale();
    Tone.start()
    Tone.Transport.start();
    setTimeout(() => {
        Tone.Transport.stop();
    }, 5000);
};

    return (
        <>
            <button className="actionbtn" style={state.display} onClick={playASong}><i style={{color:'#ff352e', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-headphones" aria-hidden="true"></i></button>
        </>
    )
}
