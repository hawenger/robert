import React from 'react';

const DeveloperContext = React.createContext({
    mood:"",
    actions:"",
    userid:0,
    returning: false,
    speechbubbletext:"",
    buttontext:""

});

export default DeveloperContext;