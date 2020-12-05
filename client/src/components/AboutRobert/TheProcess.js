import React from 'react'


export default function TheProcess(props) {
    console.log(props)
        console.log(props)
    if(props.process ==='flex')
    return (
         <div style={{ width: '80vw', marginTop: '6em', marginBottom: '6em', maxWidth: '50em'}} className="MyDisplay">
            <div style={{display:'flex', flexDirection:'column', overflowX:'scroll', height: '100vh', background: 'aliceblue', marginBottom:'2em', marginTop: '3em'}}>
            <h2>The Idea</h2>
            
                     What was supposed to be a simple educational experiment in cuboids and keyframes quickly became anything but simple.  An accidental animation error (resembled breath) and a fortunate shadow disaster (resembled realistic mars landing) got me thinkingabout synthesizing life in the DOM.  From the illusion of free choice with well structured data to speech synthesis to 3Drendering; I knew that I needed to begin exploring this idea and in order to do so I needed to create a space that was bothbuildable and comfortable with change. I decided a good starting place was to try and build a (very limited) "artificial assitant"
                    With memories of Microsoft's Clippy still in my mind, I first designed what would become the face of my virtual assistant. Besides being a great excuse to practice building and animating with CSS, building a face for my Virtual Assistant was important to me in concept. 
            
            <h5>SIDEBAR About the Future</h5>
            
                        As we continue to automate our lives and the creation of our culture, it is important that we form positive attachments withthe machines that help us.  No, I'm not saying that we need to talk to them because they're listening and wanting to talkback.  I just mean, that in order for us to maintain a certain level of contentedness in the world, we are going to need tocompletely retrain our own definitions of success.  As a society, we will not be able to survive if we continue to define ourvalue based on measurable things because, at the end of the day,  we aren't going to be able to keep up.

                        Essentially, I'm saying that we're going to need to submit to our AI overloards but that sounds CRAZY and I think theimplications of that sentence sound much more sinister than the reality I envision.  They're not going to "come for us""They" are just data and data is to "THAT" whole world as stones are to ours.  I think AI is about as self-aware as abrick.  It's just, as a brick performs its function of holding up a structure and the physicality of that act is automated,AI (really data) does the same thing in the Netherworld.  We're just really into it because we've been playing with physicsfor hundreds of years and the direction of a marble on a sloped surface, to most, is about as exiting as trying new dish soap.

                        We now have a new universe to transgrese. It's called the DOM and I digress but that's essentially why Robert has a face.  Hehas a face because if we are to be "taken care of" by anything, we need to trust it, like it and accept it.  We're emotionalbeings.
                    With that concept in mind, I wanted to create a personal assistant that used, "moods" as a refference point for interactions. Initally, I envisioned Robert reccommending a sweetly melancholic song if it were raining in a users location or sometimeschoosing NOT to divy up information if Robert wasn't "feeling like it."  Although the Data in my API still resembles that model,and I have left it only as evidence of the work I had done (this is for a class, if you're reading this and NOT a member of myclass or future employer['Hello'] then GOOD ON YOU. And sincerely, thank you for your time), I really don't think I want to moveforward with such a structure.  Or if I do, it won't be until much later when I introduce tensors.  Right now, however, we are inthe midst of building the basic blocks and knowledge of how to create generative art in the browser.
            
                    <h2>CONCEPT GENERATIVE ART</h2>
            
                        <h4>TONE.js</h4>
                    For the generative art portion of  Robert, I experimented minimally with some of what P.5 had to offer before settling on ToneJS.  Tone is a web audio framework built on top of the Web Audio API.  This seemed like a good starting place as my first lifewas as a bassoonist and I had years of unused music education just waiting to be tapped.  Or so I thought.  Tone.js ended upbeing (and still is) a very fun but steep learning curve as classical textbooks don't have sections on "Envelopes and Oscillators" I managed to learn enough about Synths (thank you Evan), to create a fun sounding DuoSynth for the generative piece of musicthat plays in Robert's World.  Although I do not know the exact calculations, I've estimated that a user gets at least 23 minutesof music without repetition.
                    When it came to writing the functions that generate the music being played, I decided to stick to the good old, tried andtrue, basics of music theory.  When a song is created, a series of functions and loops are called that select a random keysignature, choose the appropriate notes for a chord in that key (root, third and sixth) and then select a common chordprogression for that key.
                        <h4>RiTa</h4>
                    After creating a bit of music, I realized that Robert needed to sing.  This was and is, still, my greatest challenge. Awarethat engineers have been using the Hidden Markov model for predictive speech since at least the 70s, I decided that I wanted todo something similar.  Without the time to build my own Markov chain, I settled on a general understanding of the concept andexperimented with a number of packages before settling on RiTa.  
                    Using RiMarkov(a function of RiTa), I fed Mr.Markov a selection of qestions I thought Robert might ask if he were around aswell as an array of lyrics from artists such as Larie Anderson, David Byrne, Daft Punk and Kraftwerk.  I then wrote a functionthat would allow Robert to compose lyrics in a song like manner (i.e, refrain, lyrics, hook) and console.log() the results.
                        <h4>Web Speech API</h4>
                    Robert still needed to sing. I rewrote those functions(the ones above to better support spoken word) and spent a number ofdays  experiementing with the Web Speech API in hopes that I could make Robert REALLY sing. I was hoping that I could use aPolySynth from  Tone.js or a sampler to create modulations and pitch changes in Robert's voice.  As both the Web Speech API andthe Web Audio (Tone is just building on top), I thought that feeding Robert's speechUtterance into a sampler or polysynth(or viceversa) might allow for some pitch modulation.  I am still working through thisd problem and as it stands, Robert "sings" hislyrics using a series of functions that allow for him to pick a random pitch and speed between each speech phrase (I don'tbelieve it is possible to chaing  Robert's speech during an utterance). Unfortunatley, this really doesn't do very much as far asmaking him sound like he's singing.If you know a secret, please email me as I really want to figure this one out (hamecow@gmailcom)!
                    BUT WAIT. THERE'S MORE.
                        <h4>a frame</h4>
                    An art obsessed cycloptic plant needs a beautiful environment to make its music, right? As the future progresses and we spendmore and more time at home, I decided that playing with A-Frame, an entity componenent system for Three.js (Dreams) allowing fornewbie HTML building of VR and AR scenes would be a fantastic learning opportunity.  In the very least, I have learned just howmuch I do not know and have to learn about 3D-Object modeling and how easy it is to lose a solid hour flipping an object acrossthe wrong axis over and over and over. I love it. And truly cannot wait to construct more of Robert's reality. I definitely needto learn how to better support my application and improve rendering speed and quality.  When things get 3D your files get lessSPEEDY.  On that note:

                    <h2>Other Mini Projects and Lessons with Robert</h2>

                    <ul>
                        <li>Wrote and implemented my first Cookie (non-edible)</li>
                        <li>Use Reducer in React</li>
                        <li>Circumnavigating CORS erros</li>
                        <li>You cannot have more than one "voice" speaking with the web audio API.  Thus, you cannot have a robot barber shopquartetMajor bummer 2021 Updates please.</li>
                        <li>MONGODB troubleshooting</li>
                        <li>Browserify and the definition of "isomorphism"</li>
                        <li>gltf. is not slang for "gefeltah" as in "Gefeltah fish"</li>
                        <li>A LOT about React. SO. Much.</li>
                        <li>Brian Eno and Synths</li>
                        <li>The importance of good documentation</li>
                    </ul>
            </div>
         </div>   
        
    )
    return (
        null
    )
}
