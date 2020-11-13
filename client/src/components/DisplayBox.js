import React from 'react';

export default function DisplayBox() {

    let displayOn = true;
    let innerText = "About this project"
    let projectLinkTitle = "About Waffles"
    if(displayOn===false) {
    return (
        <div className="DisplayDiv">
            <h1>{innerText}</h1>
            <a>{projectLinkTitle}</a>
        </div>
    )
    }
    return (
        <div></div>
    )
}
