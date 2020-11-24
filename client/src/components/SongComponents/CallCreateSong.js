import React from 'react'
import { useStoreContext } from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 
import * as Tone from 'tone';

export default function CallCreateSong(props) {
    let randomMoodScale;
    let randomProgressionRoot;
    let randomProgressionThird;
    let randomProgressionSixth;
    let sequence1;
    let sequence2;
    let sequence3;
    let sequence4;
    //holds string version of random songs array positions
    let rootArray=[];
    let thirdArray=[];
    let sixthArray=[];

    //Final Melody
    let rootMelody=[];
    let thirdMelody=[];
    let sixthMelody=[];

    //Defining all major and minor scales

    const scales = [['C','D','E','F','G','A','B'],['G','A','B','C','D','E','F#'],['D','E','F#','G','A','B','C#'],['A','B','C#','D','E','F#','G#'],['E','F#','G#','A','B','C#','D#'],['B','C#','D#','E','F#','G#','A#']];

    //Defining common chord progressions for a 3 note chord (root, third, sixth);
    const chordProgressionsRoot =[[0,4,5,3],[4,5,3,0],[5,3,0,4],[3,0,4,5]];
    const chordProgressionsThird =[[2,6,0,5],[6,0,5,2],[0,5,2,6],[5,2,6,0]];
    const chordProgressionsSixth =[[4,1,2,0],[1,2,0,4],[2,0,4,1],[0,4,1,2]];

    //Picking random major/minor scale for song
    function pickRandomScale() {
        randomMoodScale = scales[Math.floor(Math.random()*scales.length)];
        //console.log(randomMoodScale);
    }

    //Picking 4 chord progression sequences to form song
    function pickRandomChordProgression() {
        sequence1 = Math.floor(Math.random() * 4);
        sequence2 = Math.floor(Math.random() * 4);
        sequence3 = Math.floor(Math.random() * 4);
        sequence4 = Math.floor(Math.random() * 4);
        pickRandomChordProgressionRoot();
        pickRandomChordProgressionThird();
        pickRandomChordProgressionSixth();
        
        //console.log(sequence1, sequence2, sequence3, sequence4);
    }

    //Function to grab scale array note placements for rooth, third and sixth
    function pickRandomChordProgressionRoot() {
        rootArray.push((`${chordProgressionsRoot[sequence1]},${chordProgressionsRoot[sequence2]},${chordProgressionsRoot[sequence3]},${chordProgressionsRoot[sequence4]}`).split(','));
        //console.log(rootArray);
    }

    function pickRandomChordProgressionThird() {
        thirdArray.push((`${chordProgressionsThird[sequence1]},${chordProgressionsThird[sequence2]},${chordProgressionsThird[sequence3]},${chordProgressionsThird[sequence4]}`).split(','));
        //console.log(thirdArray);

    }

    function pickRandomChordProgressionSixth() {
        sixthArray.push((`${chordProgressionsSixth[sequence1]},${chordProgressionsSixth[sequence2]},${chordProgressionsSixth[sequence3]},${chordProgressionsSixth[sequence4]}`).split(','));
        //console.log(sixthArray);
    }
    pickRandomScale();
    pickRandomChordProgression();
    defineChordSequence();

    function defineChordSequence() {
        rootChordSequence();
        thirdChordSequence();
        sixthChordSequence();
        //console.log(thirdMelody);
    }

    function rootChordSequence() {
        //console.log(randomMoodScale);
        //console.log(rootArray[0]);
        rootMelody = rootArray[0].map(element => randomMoodScale[parseInt(element)]);
        console.log(rootMelody);
    };
    function thirdChordSequence() {
        //console.log(randomMoodScale);
        //console.log(thirdArray[0]);
        thirdMelody = thirdArray[0].map(element => randomMoodScale[parseInt(element)]);
        
    };
    function sixthChordSequence() {
        //console.log(randomMoodScale);
        //console.log(sixthArray[0]);
        sixthMelody = sixthArray[0].map(element => randomMoodScale[parseInt(element)]);
        //console.log(sixthMelody);
    };
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
    const synth = new Tone.Synth();
    const synth2 = new Tone.MembraneSynth();
    //synth.oscillator.type = 'sine';
    const gain = new Tone.Gain(0.5);
    gain.toDestination();
    synth.connect(gain);
    synth2.connect(gain);
    
    
    
    let index = 0;
    
    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
    
    }, '8n');
    
    function repeat(time) {
        const notes = [`C${x} E${x} G${x}`, `F${y} A${y} C${y}`, `D${z} F${z} A${z}`, `C${a} E${a} G${a}`, `A${b} C${b} E${b}`, `C${c} E${c} G${c} B${b}`];
        const notes2= [`G${y} C${y} E${y}`, `C${x} F${x} A${x}`, `A${a} D${a} F${a}`, ` G${z} C${z} E${z}`, `E${c} A${c} C${c}`, `G${b} C${b} E${b} B${b}`];
        let note = notes[index % notes.length];
        let note2 = notes2[index% notes2.length];
        synth.triggerAttackRelease(note, '8n', time);
        synth2.triggerAttackRelease(note2, '8n', time);
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
