import React from 'react'
//import {RiMarkov} from 'rita'
import SwanSong from '../components/SongComponents/SwanSong';
import LyricalMiracle from '../components/SongComponents/LyricalMiracle';
import Controls from '../components/AframeScene/Controls/Controls';
import ParticleSystem from '../components/AframeScene/Sky/ParticleSystem';
import Ocean from '../components/AframeScene/Ground/Ocean';
import Clouds from '../components/AframeScene/Sky/Clouds';
import TheSky from '../components/AframeScene/Sky/TheSky';
import Moon from '../components/AframeScene/Sky/Moon';
import Buttons from '../components/AframeScene/Sky/Buttons';
import Lights from '../components/AframeScene/Lighting/Lights';
import Lemon from '../components/AframeScene/MiscObjects/Lemon';
import HomeNav from '../components/NavigationComponent/HomeNav';
//import * as Tone from 'tone';

export default function World() {

    //egg "Egg" by joe_carrot is licensed under Creative Commons Attribution. https://skfb.ly/6uALr To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.
    return (
    <a-scene loading-screen="dotsColor: red; backgroundColor: #010000">
        <a-assets>
            <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
            <img id="dataImg" preload="auto" crossOrigin="anonymous" ></img>
            <img id="skyImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://aframe.io/sample-assets/assets/images/space/earth_clouds_2048.png"></img>
            <img id="strawberryImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://i.pinimg.com/originals/bc/d1/11/bcd1116aa32c8768e66525d4f6148dcf.jpg"></img>
            <img id="strawberryTopImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://heattransfervinyl4u.com/image/cache/catalog/Patterns/Green%20leaf%20Pattern%20main-800x800.jpg"></img>
            <img id="straw" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://www.xmple.com/wallpaper/stripes-lines-red-streaks-white-1920x1080-c2-b22222-fffff0-l2-47-66-a-90-f-1.svg"></img>
            <img id="lemonimgsdf" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://toppng.com/uploads/preview/lemon-slices-11546987836s7311dzyys.png"></img>
            <img id="lemonimg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://mk-website-media.s3.amazonaws.com/wp-content/uploads/2018/10/18234402/Wallpaper-KH-FlowePool-Fullbloom-1-1100x1318.jpg"></img>
        </a-assets>
        
        <Controls/>

        <ParticleSystem/>
        <Moon/>
        <Buttons/>

        <LyricalMiracle/>
        <a-entity id="lemon" position="0 -0.84073 0" geometry="primitive: cone; height: 2; radiusBottom: 5" rotation="180 160 0" material="src: #lemonimg; flatshading: true; roughness: 1; emissive: #010000"></a-entity>

        <a-entity id="NavPortal" rotation="-56.47104820034774 -165.10325225096832 -1.4395342622991512e-15" position="0 5.937 90.10055" link="href:  /;  title:  HOME;  visualAspectEnabled:  true;  backgroundColor:  #965640;  highlighted:  true;  peekMode:  true;  titleColor:  #f21818;  highlightedColor:  #965640;  borderColor:  #965640" material="shader:  portal;  side:  double;  backgroundColor:  #965640;  strokeColor:  #965640;  opacity:  0.8;  transparent:  true; pano: #lemon" geometry="primitive: circle; radius: 10; segments: 64" scale="1 1 1"><a href="/">HOME</a> <a-entity text="align: center; value: NOEXIT; width: 30; wrapCount: 6.5" position="0 8.7781 -0.30295" id="NOEXIT"></a-entity><a-entity geometry="primitive: cylinder; height: 6; radius: 15" material="shader: portal; side: double; opacity: 0.8; transparent: true; backgroundColor: #965640; strokeColor: #965640" id="spherewindow"></a-entity><a-entity position="0 0 15" geometry="height: 5; width: 4" material="shader: portal; side: double; opacity: 0.8; transparent: true; backgroundColor: #16100e; strokeColor: #140d0a" id="door" visible="" position="0 0 15"></a-entity><a-entity position="-12.38423 5.79416 -0.39341" id="NOEXIT" text-geometry="bevelSize: 12; bevelThickness: 20; curveSegments: 20; height: 10; size: 5; value: NO EXIT" material="blending: additive; color: #6c2d2d; emissive: #000000; metalness: 0.3; roughness: 0"></a-entity></a-entity>
       
     
        <Ocean/>
        
        <a-entity id="text" position= "-4 4.8 -12" scale="0.6 1.2 1" text-geometry="bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; height: 0.5; size: 1.5; value: HELLO WORLD" material="color: pink; metalness: 0.9; roughness: 0.05; sphericalEnvMap: https: //aframe.io/sample-assets/assets/images/envmap/envmap.png"></a-entity>
        <TheSky/>
        <Clouds/>
        <SwanSong/>
        
      
        

      
    </a-scene>
    )
}
