import React from 'react'
import baby from './Assets/Images/baby.PNG';
import robertsong from './Assets/Images/robertsong.PNG';

export default function Timeline(props) {
        console.log(props)
    if(props.Timeline ==='flex')
    return (
        <div style={{display:'flex'}}>
            <h2>Growing Up Robert</h2>
                <img  style={{height:'4em', width:'4em', borderRadius:'50%'}} src={baby}></img>
                <img  style={{height:'4em', width:'4em', borderRadius:'50%'}} src={robertsong}></img>
        </div>
    )
    return(
               <div style={{display:'none'}}>
            <h2>Growing Up Robert</h2>
                <img  style={{height:'4em', width:'4em', borderRadius:'50%'}} src={baby}></img>
                <img  style={{height:'4em', width:'4em', borderRadius:'50%'}} src={robertsong}></img>
        </div>
    )
}
