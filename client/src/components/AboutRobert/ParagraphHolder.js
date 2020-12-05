import React, { useState, useRef } from 'react'
import MakeArtRobert from './MakeArtRobert';
import TheProcess from './TheProcess';
import Timeline from './Timeline';

export default function ParagraphHolder() {
    const art= useRef();
    const process = useRef();
    const timeline = useRef();
    const back=useRef();

    const [showArt, setArt] = useState('none');
    const [showProcess, setProcess] = useState('none');
    const [showTimeline, setTimeline] = useState('none');
    const [showBackButton, setButton] = useState('none');


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

function backButtonClick() {
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
            <button onClick={backButtonClick} className="bottom-market" const ref={back}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            </div>    
            <div onClick={displayProcess} const ref={process} className="Buttons">    
                <TheProcess const process={showProcess} />
            <button onClick={backButtonClick} className="bottom-market" const ref={back}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            </div>    
            <div onClick={displayTimeline} const timeline={timeline} className="Buttons">    
                <Timeline const timeline={showTimeline} />
            <button onClick={backButtonClick} className="bottom-market" const ref={back}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            </div>
            <button onClick={backButtonClick} className="bottom-market" const ref={back}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        </>
    )
}
