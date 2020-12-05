import React from 'react'
import baby from './Assets/Images/baby.PNG';
import robertsong from './Assets/Images/robertsong.PNG';

export default function Timeline(props) {
        console.log(props)
    if(props.timeline ==='flex')
    return (
        <div style={{ width: '80vw', maxWidth: '50em'}} className="MyDisplay">
            <div style={{display:'flex', alignItems:'center', flexDirection:'column', overflowX:'scroll', height: '100vh', background: 'aliceblue'}}>
                <h2>Growing Up Robert</h2>
                <img  alt="first attempt at robert design"style={{ borderRadius:'50%', margin:'1em 0em 0em 3em', height:'500px'}} src={baby}></img>
                 <p>Robert's first render</p>
                <img  alt="robert first 5 line stanza" style={{ width:'100%', margin:'1em 0em 0em 5em', height:'500px'}} src={robertsong} ></img>
                <p>Robert's first song</p>
            </div>        
        </div>
    )
    return(
        <div style={{display:'none'}}>
            <h2>Growing Up Robert</h2>
                <img  alt="first attempt at robert design" style={{height:'4em', width:'4em', borderRadius:'50%'}} src={baby}></img>
                <p style={{ marginBottom:'3em'}}>Robert's first render</p>
                <img  alt="robert first 5 line stanza"  style={{height:'200px', width: '500px', borderRadius:'50%'}} src={robertsong}></img>
                <p>Robert's first song</p>
        </div>
    )
}
