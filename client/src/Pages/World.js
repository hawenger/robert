import React from 'react'
//import {RiMarkov} from 'rita'
import SwanSong from '../components/SongComponents/SwanSong';
import LyricalMiracle from '../components/SongComponents/LyricalMiracle';
import HomeNav from '../components/NavigationComponent/HomeNav';
//import * as Tone from 'tone';

export default function World() {
    return (
    <a-scene>
        <a-assets>
            <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
            <img id="dataImg" preload="auto" crossOrigin="anonymous" ></img>
            <img id="groundImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://files.123freevectors.com/wp-content/uploads/new/pattern/147-water-pattern-vector-free.png"></img>
            <img id="oceanImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://files.123freevectors.com/wp-content/uploads/new/pattern/147-water-pattern-vector-free.png"></img>
            <img id="skyImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://aframe.io/sample-assets/assets/images/space/earth_clouds_2048.png"></img>
            <img id="fishImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blue-water-bubbles-frank-tschakert.jpg"></img>
            <img id="strawberryImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://i.pinimg.com/originals/bc/d1/11/bcd1116aa32c8768e66525d4f6148dcf.jpg"></img>
            <img id="strawberryTopImg" crossOrigin="anonymous" preload="auto" src="https://cors-anywhere.herokuapp.com/https://heattransfervinyl4u.com/image/cache/catalog/Patterns/Green%20leaf%20Pattern%20main-800x800.jpg"></img>
            <img id="homeThumbnail" crossOrigin="anonymous" preload="auto" src="../components/AframeAssets/images/homepage.png"></img>
        </a-assets>
        <a-camera camera="" position="0 3 5" rotation="11.000789666511789 9.396507840145324 0">
            <a-cursor></a-cursor>
        </a-camera>
        <a-entity id="Dust" position="0 2.25 -15" particle-system="color: #EF0000,#44CC00; preset: dust"></a-entity>
        <LyricalMiracle/>
        
        <a-entity id="NavPortal" rotation="-5.276242544228801 0 0" position="-6.12 1.798 -15.73"link="href: /; title: EXIT; visualAspectEnabled: true; backgroundColor: #885959; highlighted: true; image: #homeThumbnail; peekMode: true; titleColor: #f21818" material="" geometry="primitive: torus; radius: 10; radiusTubular: 3"><a href="/">HOME</a><a-entity text="color: white; align: center; font: kelsonsans; value: EXIT; width: 4" position="0 1.5 0"></a-entity><a-entity geometry="primitive: sphere; segmentsWidth: 64; segmentsHeight: 64; phiLength: 180; thetaLength: 360" material="shader: portal; borderEnabled: 0; side: back" rotation="0 180 0" position="" visible="false"></a-entity><a-entity geometry="primitive: sphere; radius: 10; segmentsWidth: 64; segmentsHeight: 64" material="shader: portal; borderEnabled: 0; side: back" visible="false"></a-entity><a-entity text="color: white; align: center; font: kelsonsans; value: EXIT; width: 5" position="0 1.5 0" rotation=""></a-entity><a-entity geometry="primitive: sphere; segmentsWidth: 64; segmentsHeight: 64; phiLength: 180; thetaLength: 360" material="shader: portal; borderEnabled: 0; side: back" rotation="0 180 0" position="" visible="false"></a-entity><a-entity geometry="primitive: sphere; radius: 10; segmentsWidth: 64; segmentsHeight: 64" material="shader: portal; borderEnabled: 0; side: back" visible="false"></a-entity></a-entity>
     
        <a-entity id="ocean" position="0 -2 -25" ocean="density: 50; width: 200; depth: 200; speed: 2" src="#oceanImg" material="color: #1f2d32; opacity: 0.75; roughness: 1; displacementBias: 0.51; emissive: #010304; blending: additive" rotation="-90 0 0"></a-entity>
        <a-plane src="#groundImg" id="oceanFloor" wireframelinewidth="0" repeat="50 50" position="0 -20 -25" geometry="primitive: circle; radius: 200" rotation="-90 0 0" material="color: #000000; emissive: #000000; flatShading: true; metalness: 1; roughness: 0.9" visible=""></a-plane>
        
        <a-entity id="text" position= "-4 4.8 -12" scale="0.6 1.2 1" text-geometry="bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; height: 0.5; size: 1.5; value: HELLO WORLD" material="color: pink; metalness: 0.9; roughness: 0.05; sphericalEnvMap: https: //aframe.io/sample-assets/assets/images/envmap/envmap.png"></a-entity>

        <a-sphere id="clouds" src="#skyImg" position="0.024 67.57567 -70.20451" geometry="primitive: sphere" rotation="0 0 0" color="#0ed2ec" material="color: #66d1ad; transparent: true; opacity: 0.2; shader: flat; side: double; height: 10000; width: 10000" scale="400 400 400" fog="color: #c63f3f; density: 0; type: exponential" animation="property: rotation; to: -360 -360 -360; dur: 800000; loop: true; easing: easeInQuad"></a-sphere>
        <a-sky color="#010000"></a-sky>
        <a-entity light="color: #fdfdfc; intensity: 2.5" position="-99.8987 88.1312 -214.88725" id="moonlight"></a-entity>
        <a-entity light="color: #fdfdfc; intensity: 2; target: #moon; penumbra: 1; castShadow: true" position="0 88.1312 214.88725" target="#moon" id="sun"></a-entity>
        <a-entity light="color: #000000; intensity: 0.5; type: hemisphere; groundColor: #0b1a28; penumbra: 0.8; castShadow: true" position="-99.8987 88.1312 -214.88725" id="moonLightambient" visible=""></a-entity>
        <SwanSong/>
        <a-entity geometry="primitive: cylinder; radius: 8; height: 500" scale="" position="0 -5.09776 100" repeat="50 50" material="color: #070b0e" id="fishtube" rotation="0 180 0"></a-entity>

        <a-entity id="milkbox" position="50 80 -180" geometry="depth: 10; height: 20; width: 10" rotation="80 90 0"></a-entity>
        <a-entity id="milkboxtop-3" position="37.235 78.88805 -176.48411" geometry="height: 10; width: 0.5; depth: 10" rotation="80 -119.99999999999999 0"></a-entity>
        <a-entity id="milkboxtop-2" position="37.235 78.88805 -184.22219" geometry="height: 10; width: 0.5; depth: 10" rotation="80 119.99999999999999 0"></a-entity>
    </a-scene>
    )
}
