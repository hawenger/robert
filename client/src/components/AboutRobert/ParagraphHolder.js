import React, { useState, useRef } from 'react'
import MakeArtRobert from './MakeArtRobert';
import TheProcess from './TheProcess';
import Timeline from './Timeline';

export default function ParagraphHolder() {
    const art= useRef();
    const process = useRef();
    const timeline = useRef();

    const [showArt, setArt] = useState('none');
    const [showProcess, setProcess] = useState('none');
    const [showTimeline, setTimeline] = useState('none');

function displayArt() {
    setTimeline('none');
    setProcess('none');
    setArt('flex');
    
}
function displayProcess() {
    setTimeline('none')
    setProcess('flex');
    setArt('none');
}
function displayTimeline() {
    setTimeline('flex')
    setProcess('none');
    setArt('none');
}

function back() {
    setTimeline('none')
    setProcess('none');
    setArt('none');
}
    return (
        <>
            <div className="FullStackTitle">
                        <h1>Hello,</h1>
                        <h1>I'm</h1>
                        <h1>Robert</h1>
            </div>
            <div className="emptyTwo">
            </div>
            <div onClick={displayArt} const ref={art} className="Buttons">
                <MakeArtRobert const Art={showArt} />
            </div>    
            <div const ref={process} const Process={showProcess}className="Buttons">    
                <TheProcess/>
            </div>    
            <div const timeline={timeline} const Timeline={showTimeline} className="Buttons">    
                <Timeline/>
            </div>
            <button className="bottom-market" const ref={back}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        </>
    )
}
