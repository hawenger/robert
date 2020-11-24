import React from 'react'
import { useStoreContext } from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 
import * as Tone from 'tone';

export default function CallCreateSong(props) {
    let randomMoodScale;
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

    const scales = [['C','D','E','F','G','A','B'],['G','A','B','C','D','E','F#'],['D','E','F#','G','A','B','C#'],['A','B','C#','D','E','F#','G#'],['E','F#','G#','A','B','C#','D#'],['B','C#','D#','E','F#','G#','A#'],['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb'],['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],['F', 'G', 'A', 'Bb', 'C', 'D', 'E']];

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



    //Call all root chord sequence formulas
    function defineChordSequence() {
        rootChordSequence();
        thirdChordSequence();
        sixthChordSequence();
        //console.log(thirdMelody);
    }

    //Functions to define Root Chord Sequences
    function rootChordSequence() {
        //console.log(randomMoodScale);
        //console.log(rootArray[0]);
        rootMelody = rootArray[0].map(element => randomMoodScale[parseInt(element)]);
        //console.log(rootMelody);
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
    let root =[];
    let third = [];
    let sixth = [];

    //Give the root of the chord piano placement (i.e Define placement of note in variance of middle C)
    function rootSynthPlacement() {
        randomScale();
        root = rootMelody.map(element => element + letterArray[Math.floor(Math.random()*letterArray.length)]);
        console.log(root);
    };
    function thirdSynthPlacement() {
        randomScale();
        third = thirdMelody.map(element => element + letterArray[Math.floor(Math.random()*letterArray.length)]);
        console.log(third);
    };
    function sixthSynthPlacement() {
        randomScale();
        sixth= sixthMelody.map(element => element + letterArray[Math.floor(Math.random()*letterArray.length)]);
        console.log(sixth);
    }
    //Call to get final arrangments for three parts
    function finalSynthCall(){
        rootSynthPlacement();
        thirdSynthPlacement();
        sixthSynthPlacement();
    }

    //Generate Random placements of notes/distance from middle C
    let x;
    let y;
    let z;
    let a;
    let b;
    let c;
    let letterArray=[];
    
    function randomScale() {
                for(var i=0; i < 10; i++); {
                    x = (Math.floor(Math.random() * 4) + 2);
                    y = (Math.floor(Math.random() * 4) + 2);
                    z = (Math.floor(Math.random() * 4) + 2);
                    a = (Math.floor(Math.random() * 4) + 2);
                    b = (Math.floor(Math.random() * 4) + 2);
                    c = (Math.floor(Math.random() * 5) + 1);
                }
        letterArray.push(x,y,z,a,b,c);
        //console.log(letterArray);    
    };


    function createSong() {
        pickRandomScale();
        pickRandomChordProgression();
        defineChordSequence();
        finalSynthCall();
    }
    
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

    randomScale();
    const synth = new Tone.PolySynth(Tone.Synth);
    //const synth2 = new Tone.Synth();
    //const synth3 = new Tone.Synth();
    //const synth4 = new Tone.AMSynth();
    const percussion = new Tone.MetalSynth();
    //synth.oscillator.type = 'sine';
    const gain = new Tone.Gain(0.5);
    gain.toDestination();
    synth.connect(gain);
    //synth2.connect(gain);
    //synth3.connect(gain);
    percussion.connect(gain);
    
    //let '8n';
//
    //function pickNoteLength() {
    //    const '8n'Array=[ '8n', '12n']
    //    '8n'='8n'Array[Math.floor(Math.random()*'8n'Array.length)]
    //};
    
    let index = 0;
    
    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
    
    }, '8n');
    
    function repeat(time) {
        const notes = root;
        const notes2 = third;
        const notes3 = sixth;
        let note = notes[index % notes.length];
        let note2 = notes2[index% notes2.length];
        let note3 = notes3[index% notes3.length];
        synth.triggerAttackRelease(note, '8n', time);
        synth.triggerAttackRelease(note2, '8n', time);
        synth.triggerAttackRelease(note3, '8n', time);
        //synth.triggerAttackRelease(note, '8n', time + 4);
        //synth.triggerAttackRelease(note2, '8n', time);
        //synth.triggerAttackRelease(note3, '8n', time + 8);
        //synth.triggerAttackRelease(note, '8n', time + 6);
        //synth.triggerAttackRelease(note2, '12n', time);
        //synth.triggerAttackRelease(note3, '8n', time);
        //synth2.triggerAttackRelease(note2, '8n', time);
        //synth.triggerAttackRelease(note3, '8n', time + 12);
        //percussion.triggerAttackRelease(note, '8n', time);
        index ++;
    }

    const playASong = () => {
    //await 
    //randomScale();
    //pickNoteLength();
    createSong();
    Tone.start()
    Tone.Transport.start();
    //setTimeout(() => {
    //    Tone.Transport.stop();
    //}, 5000);
    };

    return (
        <>
            <button className="actionbtn" style={state.display} onClick={playASong}><i style={{color:'#ff352e', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-headphones" aria-hidden="true"></i></button>
        </>
    )
    }
