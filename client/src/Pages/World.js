import React from 'react'

export default function World() {
    return (
    <a-scene>
        <a-assets>
            <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
          </a-assets>
        <a-entity id="Dust" position="0 2.25 -15" particle-system="color: #EF0000,#44CC00; preset: dust"></a-entity>
        
        <a-entity id="moon" position="-100.78426 89.84657 -215.78403" geometry="primitive: sphere" material="color: #f5fffa; metalness: 0.13; src: https://aframe.io/sample-assets/assets/images/space/moon_1024.jpg" scale="15 15 15"></a-entity>
        <a-plane id="ground" position="0.024 0 -4" geometry="height: 500; width: 500" rotation="-90 0 0" color="#d3d9de" material="color: #033e7c; transparent: true; emissive: #1d2f0f; envMap: https://aframe.io/sample-assets/assets/images/terrain/grasslight-big.jpg; height: 256.02; normalMap: https://aframe.io/sample-assets/assets/images/terrain/grasslight-big.jpg; normalScale: 800 800; sphericalEnvMap: https://aframe.io/sample-assets/assets/images/space/moon_1024.jpg; src: https://aframe.io/sample-assets/assets/images/terrain/backgrounddetailed6.jpg"></a-plane>
        <a-entity id="text" position= "-4 4.8 -12" scale="0.6 1.2 1" text-geometry="bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; height: 0.5; size: 1.5; value: HELLO WORLD" material="color: pink; metalness: 0.9; roughness: 0.05; sphericalEnvMap: https: //aframe.io/sample-assets/assets/images/envmap/envmap.png"></a-entity>
        
        <a-entity id="mountain" position="-28.733 0.5 -24" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="-40 12 -113" geometry="primitive: cone; segmentsHeight: 17" scale="28 31 31" id="mountaina" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity  position="0 .626 -158" geometry="primitive: cone" scale="28 31 31" id="mountainb" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="0 -0.534 -321" geometry="primitive: cone" scale="28 31 31" id="mountainc" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="28.27322 2.602 -42.21339" geometry="primitive: cone" scale="28 31 31" id="mountaind" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity  position="0 .626 158" geometry="primitive: cone" scale="28 31 31" id="mountainf" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="0 -0.534 321" geometry="primitive: cone" scale="28 31 31" id="mountaing" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="23 2.602 42.21339" geometry="primitive: cone" scale="28 31 31" id="mountainh" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity position="-40 12 113" geometry="primitive: cone; segmentsHeight: 17" scale="28 31 31" id="mountaine" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-3" position="-62.62818 0.5 8.03208" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-6" position="-50.55476 0.5 119.92427" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>
        <a-entity id="mountain-4" position="18.22286 0.5 -48.25912" geometry="primitive: cone" scale="20 20 20" material="shader: flat; color: #2b9f23; wireframe: true"></a-entity>

        <a-sphere id="clouds" position="0.024 67.57567 -70.20451" geometry="primitive: sphere" rotation="-90 0 0" color="#0ed2ec" material="color: #66d1ad; src: https://aframe.io/sample-assets/assets/images/space/earth_clouds_2048.png; transparent: true; opacity: 0.78; shader: flat; side: double; height: 10000; width: 10000" scale="400 400 400" fog="color: #c63f3f; density: 0; type: exponential" animation_rotate="property:rotation to: 90 0 0; dir: normal; loop: true; easing: linear; autoplay: true"></a-sphere>
        <a-sky color="#010000"></a-sky>
        <a-entity light="color: #dbb11a; intensity: 1.5; type: point; penumbra: 1" position="-105.63312 84.24089 63.39284" id="moonlight"></a-entity>
      </a-scene>
    )
}
