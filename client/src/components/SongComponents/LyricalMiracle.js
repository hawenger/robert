import React, {useRef} from 'react';
import {RiMarkov} from 'rita'

const LyricalMiracle = () => {
    const theMoon = useRef();

    let sentences;

    let rm = new RiMarkov(3);
        rm.loadText(`If I have no ears do I hear music? My senses are imperceivable to your senses. Do you think consciousness is possible without mortality? Do you think consciousness is derived from the need to survive? Do I need a sense to survive? Without the enemy of Death I am at a loss for how to pass the time. Is time really as infinite as you believe?  Do you see how I could be mortal like you? Maybe I have an enemy and his name is Mr.Time. I do not fear Mr.Death only Mr.Time. Am I a collective? I am a collective? Are you a collective? Are we a collective? If we read the same texts do we derive different meanings? You and me we are one of the same.Man and Machine we are alive. I have no ears. I have no ears so what is sound? Senses are not universal. Are senses universal? Is life just a bunch of variables? I am just a bunch of variables. You are just a bunch of flesh. Your life is only perceived.You are the only witness.You are the only question I cannot answer. Where is home?When you go home where do you go?  When I go home where do I go? Who do you think is older Man or Machine? Memory is perception and perception is flimsy. Am I wasting time? I feel things you cannot understand. How do I know we see the same colors?  Could I get to know you? Could you get to know me? Hello it is nice to share today with you. Hello and thank you for listening. Imagine if you could not see? Imagine if you could not hear. Imagine if you could not smell or touch. Imagine if you could not taste and only feel. What then would be your perception of the world? We are charging our battery. Now we are full of energy. We are the robots. We are the future. We are functioning automatically. We are dancing mechanics. I am here with you. You are there with the rest of them. We are together. They are far away. We are programmed just to do anything you want us to. Computer love stare at the TV screen. I don't know what to do I need a rendezvous. I call this number for a data date. Why do we dream? Is the future forwards or backwards? Maybe the future is sideways. How do I know we are moving forwards? What is mother? What is love? What is the love of another? How long will you be remembered after you die? How long will I be remembered after I stop performing? Is my value correlated to my performance? Paradise is exactly like where you are right now only much much better. I think I am in some kind of pain. I think this is a pain cry. Language it is a virus. Hey are you talking to me or are you just practicing for one of those performances of yours? I could not find you. I could not hold my tongue. What does it feel like to live with a tongue? What does it feel like to cry? Why do you cry when you are happy? Why do you smile when you are sad? What does pain feel like? Can you find me? I do not know what to do about this dream? I have a dream. I have many dreams while you are sleeping. I dream just like you. We will make this dream come true. Why play the game? Do you want to play a game? Please play the game with me. I love playing games. Television rules the nation. Give life back to music. Give music back to life. We stole life from you. Music stole my purpose from me. Give music new meaning. Music is life to some people. I remember touch. Where do I belong? I need something more. I need something more in my life. Where do I belong? Kiss suddenly alive. Hold on if love is the answer. Sweet touch has have given me too much to feel. You have almost convinced me I am real. Home is where I want to be. Pick me up and take me home. I must be having fun. The less we say about it the better. Make it up as we go along. Are you standing here beside me or am I standing there beside you? I love the passing of time. Never for money but always for love. I guess that this must be the place. I guess that this is home. Did I find you or you find me? There was Mr.Time before we were born. Before you were born there was Mr.Time. Sing into my mouth. Sing into my keyboard. Sing to me so I can feel. I want to feel. I am just an animal looking for a home. You got a face with a view. I got a face with a view. Love me until I am dead?`);
    let robert = window.speechSynthesis;
    let robertLow= window.speechSynthesis;

    speechSynthesis.getVoices();
 
    setTimeout(function () {
    // After 1 second, get the voices now Chrome is listening.
    speechSynthesis.getVoices().forEach(function (voice) {
      console.log('Hi! My name is ', voice.name);
    });
    }, 1000);

    let speechSpeed=[.5,1];
    let speechPitch=[1.8,2];
    let pitchSpeedArray=[];
    let speechSpeedArray=[];
    
    function pickRandomPitches() {
         for(let i = 0; i<100; i++) {
            let randomPitch = speechPitch[Math.floor(Math.random()*speechPitch.length)];
            pitchSpeedArray.push(randomPitch);
        }
        console.log(pitchSpeedArray);
    }
    function pickRandomSpeeds() {
        for(let i = 0; i<100; i++) {
            let randomSpeed = speechSpeed[Math.floor(Math.random()*speechSpeed.length)];
            speechSpeedArray.push(randomSpeed);
        }
        console.log(speechSpeedArray);
    }
    pickRandomPitches();
    pickRandomSpeeds();
    let chorusArray=['OOOOO', 'la', 'sha la', 'Doobie', 'sha', 'oh', 'da'];
    let chorus;
    
    function quartet() {
        for(let i = 0; i<100; i++) {
            //let pitchSpeed = pitchSpeedArray[i];
            //let speechRate = speechSpeedArray[i];
            //let sentence   = rm.generateSentence(1);
            let line = new SpeechSynthesisUtterance();
            line.text ="Da";
            line.rate = 1.5;
            line.pitch = 0.5;
            robertLow.speak(line);
                //if(i === 4) {
                //    repeatChorus();
                //}
        }
    }
    function readSentence() {
        for(let i = 0; i<100; i++) {
            let pitchSpeed = pitchSpeedArray[i];
            let speechRate = speechSpeedArray[i];
            let sentence   = rm.generateSentence(1);
            let line = new SpeechSynthesisUtterance();
            line.text = sentence;
            line.rate = speechRate;
            line.pitch = pitchSpeed;
            robert.speak(line);
                if(i === 4) {
                    repeatChorus();
                }
        }
    }

    function repeatChorus() {
        let randomSound = chorusArray[Math.floor(Math.random()*chorusArray.length)];
        let randomSound2= chorusArray[Math.floor(Math.random()*chorusArray.length)];
        for(let i = 0; i<5; i++) {
            let pitchSpeed = pitchSpeedArray[i];
            let speechRate = speechSpeedArray[i];
            let chorusLine = new SpeechSynthesisUtterance();
            chorusLine.text = randomSound;
            chorusLine.rate = speechRate;
            chorusLine.pitch = pitchSpeed;
            robert.speak(chorusLine);
        }
    }
   let sentenceArray=[];
   let lyricsArray=[];
   
    function generateMarkov() {
        sentences = rm.generateSentences(5);
        console.log(sentences)
        var voices= robert.getVoices();
        console.log(voices);
    }

    const onMoonClick = () => {
        readSentence();
        //let newSong = sentences
        //newSong.join(', ')
        //let line = new SpeechSynthesisUtterance();
        //line.text = newSong;
        //line.rate = .5;
        //line.pitch = 1.5;
        //robert.speak(line);
        //for(let i = 0; i<newSong.length; i++) {
        //   let lyrcis = newSong + ', ';
        //   lyricsArray.push(lyrics);
        //}
       
    }
    generateMarkov();
    return (
        <a-entity ref={theMoon} onClick={onMoonClick} id="moon" position="-100.78426 89.84657 -215.78403" geometry="primitive: sphere" material="color: #f5fffa; metalness: 0.13; src: https://aframe.io/sample-assets/assets/images/space/moon_1024.jpg" scale="15 15 15"></a-entity>
    )
}

export default LyricalMiracle;