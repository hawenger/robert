import React from 'react'

export default function World() {
    return (
    <a-scene>
        <a-assets>
            <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
        </a-assets>
        <a-camera camera="" position="0 3 5" rotation="11.000789666511789 9.396507840145324 0">
            <a-cursor></a-cursor>
        </a-camera>
        <a-entity id="Dust" position="0 2.25 -15" particle-system="color: #EF0000,#44CC00; preset: dust"></a-entity>
        
        <a-entity id="moon" position="-100.78426 89.84657 -215.78403" geometry="primitive: sphere" material="color: #f5fffa; metalness: 0.13; src: https://aframe.io/sample-assets/assets/images/space/moon_1024.jpg" scale="15 15 15"></a-entity>
        <a-plane id="ground" position="0 0 0" geometry="height: 500; width: 500" rotation="-90 0 0" color="#d3d9de" material="color: #033e7c"></a-plane>
        <a-entity id="text" position= "-4 4.8 -12" scale="0.6 1.2 1" text-geometry="bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; height: 0.5; size: 1.5; value: HELLO WORLD" material="color: pink; metalness: 0.9; roughness: 0.05; sphericalEnvMap: https: //aframe.io/sample-assets/assets/images/envmap/envmap.png"></a-entity>
        
        <a-entity id="mountain" position="-28.733 0 -24" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="-40 0 -113" geometry="primitive: cone; segmentsHeight: 17" scale="28 31 31" id="mountaina" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity  position="0 0 -158" geometry="primitive: cone" scale="28 31 31" id="mountainb" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="0 0 -321" geometry="primitive: cone" scale="28 31 31" id="mountainc" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="28.27322 0 -42.21339" geometry="primitive: cone" scale="28 31 31" id="mountaind" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity  position="0 0 158" geometry="primitive: cone" scale="28 31 31" id="mountainf" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="0 0 321" geometry="primitive: cone" scale="28 31 31" id="mountaing" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="23 0 42.21339" geometry="primitive: cone" scale="28 31 31" id="mountainh" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="-40 0 113" geometry="primitive: cone; segmentsHeight: 17" scale="28 31 31" id="mountaine" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-3" position="-62.62818 0 8.03208" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-6" position="-50.55476 0 119.92427" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-4" position="18.22286 0 -48.25912" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>

        <a-sphere id="clouds" position="0.024 67.57567 -70.20451" geometry="primitive: sphere" rotation="0 0 0" color="#0ed2ec" material="color: #66d1ad; src: https://aframe.io/sample-assets/assets/images/space/earth_clouds_2048.png; transparent: true; opacity: 0.2; shader: flat; side: double; height: 10000; width: 10000" scale="400 400 400" fog="color: #c63f3f; density: 0; type: exponential" animation="property: rotation; to: -360 -360 -360; dur: 800000; loop: true; easing: easeInQuad"></a-sphere>
        <a-sky color="#010000"></a-sky>
        <a-entity light="color: #fdfdfc; intensity: 1.5; type: point; penumbra: 1; target: #moon" position="-105.63312 84.24089 63.39284" id="moonlight"></a-entity>
        <a-entity light="color: #fdfdfc; intensity: 1.5; type: directional" position="-20 84.24089 63.39284" id="lightTextA"></a-entity>
        <a-entity light="color: #fdfdfc; intensity: 1.5; type: directional" position="20 84.24089 63.39284" id="lightTextB"></a-entity>

        <a-entity geometry="primitive: cylinder" scale="0.5 1 1" position="0 1 -5" material="transparent: true; color: #a3d1ab; src: https://i5.walmartimages.com/asr/ae817068-04a0-4b7b-b52f-69435c4fa497_1.5aa6dd95359c7c7b2627a547d4e0e3b2.jpeg" id="peaches" rotation="0 180 0"></a-entity>
    </a-scene>
    )
}
