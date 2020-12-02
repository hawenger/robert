import React, {useRef} from 'react';
import {RiMarkov} from 'rita'

const LyricalMiracle = () => {
    const theMoon = useRef();

    let sentences;
    
    function generateMarkov() {
       let rm = new RiMarkov( 3, true, true);
        rm.loadText(`If I have no ears, do I hear music? I am Robert, hear me roar. Hello my apple friend.`)
        sentences = rm.generateSentence(1);
    }

    const onMoonClick = () => {
        generateMarkov();
        let line = new SpeechSynthesisUtterance();
        line.text = sentences;
        window.speechSynthesis.speak(line);
    }

    return (
        <a-entity ref={theMoon} onClick={onMoonClick} id="moon" position="-100.78426 89.84657 -215.78403" geometry="primitive: sphere" material="color: #f5fffa; metalness: 0.13; src: https://aframe.io/sample-assets/assets/images/space/moon_1024.jpg" scale="15 15 15"></a-entity>
    )
}

export default LyricalMiracle;