import { init } from 'aos';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
import * as POSTPROCESSING from "postprocessing";

import road from './scene/road.jpg'
import roadHmap from './scene/r.jpg'

import fnt from './scene/skybox/front.png'
import bk from './scene/skybox/back.png'
import btm from './scene/skybox/bottom.png'
import lt from './scene/skybox/left.png'
import rgt from './scene/skybox/right.png'
import tp from './scene/skybox/top.png'


import terrianImg from './scene/terrianTexture.jpg';
import terrHeighImg from './scene/heightmap.png';
import sHeightMap from './scene/beach/sandHeight.png';
import sandTex from './scene/beach/sandTex.jpg';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 2000);

const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight, 1, 5000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg3'),
    antialias: true
});

renderer.shadowMap.enabled = true
renderer.shadowMap.type =  THREE.PCFSoftShadowMap;

camera.lookAt(new THREE.Vector3(0,5,0));

const orbit = new OrbitControls(camera,renderer.domElement);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const resize = () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

onload = () => {
    resize();
}

window.addEventListener('resize', resize());

// document.onmousemove = (event) =>{
//     let centerX = window.innerWidth/2;
//     let centerY = window.innerHeight/2
//     camera.position.x = (event.clientX - centerX) * 0.0025;
//     camera.position.y = 2 + (event.clientY - centerY) * 0.0005;
   

//     camera.lookAt(new THREE.Vector3(0,0,0));
// }


camera.position.y = 3;
camera.position.z = 10;
camera.position.x = 0;
 

orbit.update();

const light1 = new THREE.AmbientLight(0xffffff,0.15);
scene.add(light1);

const light = new THREE.SpotLight(0xffffff,0.2);
light.position.x = 0;
light.position.y = 10;
light.position.z = -40;
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.visible = true;
light.shadow.radius = 15;
light.shadow.camera.shadowMapType = THREE.PCFSoftShadowMap;
light.lookAt(new THREE.Vector3(0,0,0));
scene.add(light);



const planeGeo = new THREE.PlaneGeometry(150,5,1026,1026);
const roadTex = new THREE.TextureLoader().load(road);
roadTex.wrapS = THREE.RepeatWrapping;
roadTex.repeat.x = 5;
const planeMat = new THREE.MeshStandardMaterial({map: roadTex, roughness: 0.5});

const planeMesh = new THREE.Mesh(planeGeo,planeMat);
planeMesh.rotation.x = -Math.PI / 2;
planeMesh.receiveShadow = true;
planeMesh.castShadow = true;
scene.add(planeMesh);




const skyboxGeo = new THREE.BoxGeometry(500,500,500);
let matArr = [];
let skyboxarr = [bk,fnt,btm,tp,rgt,lt];

for (var i = 0; i < skyboxarr.length; i++) {
    matArr.push(new THREE.MeshBasicMaterial({color: 0x404040,map: new THREE.TextureLoader().load(skyboxarr[i]),side: THREE.DoubleSide}));
  }

const skybox = new THREE.Mesh(skyboxGeo,matArr);

scene.add(skybox);

// // Terrain


const terrHeigh = new THREE.TextureLoader().load(terrHeighImg);
const terrainGeo1 = new THREE.PlaneGeometry(60 ,40, 2048, 2048);
const terrainTex = new THREE.TextureLoader().load(terrianImg);
terrainTex.wrapS = THREE.RepeatWrapping;
terrainTex.repeat.x = 3;
const terrainMat1 = new THREE.MeshStandardMaterial({color: 0x595959, map: terrainTex, displacementMap: terrHeigh, displacementScale: 4, roughness: 0.9});

const terrain1 = new THREE.Mesh(terrainGeo1,terrainMat1);
terrain1.position.z -= 23;
terrain1.position.y += 0.25;
terrain1.rotation.x += 275;
terrain1.rotation.z += 132;
terrain1.castShadow = true;
terrain1.receiveShadow = true;
scene.add(terrain1);

const terrain2 = new THREE.Mesh(terrainGeo1,terrainMat1);
terrain2.position.z -= 23;
terrain2.position.y += 0.25;
terrain2.position.x += -45;
terrain2.rotation.x += 275;
terrain2.castShadow = true
terrain2.receiveShadow = true;
scene.add(terrain2);

// Front Plane

const makeBeach = () => {
    const beachPiece = new THREE.Group();
    const frontPlaneGeo = new THREE.PlaneGeometry(35,2,126,126);
    const frontPlaneMat = new THREE.MeshStandardMaterial({displacementMap: new THREE.TextureLoader().load(sHeightMap), map: new THREE.TextureLoader().load(sandTex), displacementScale: 1, roughness: 0.75});
    const frontPlane = new THREE.Mesh(frontPlaneGeo,frontPlaneMat);
    frontPlane.rotation.x = -Math.PI/2;
    frontPlane.position.z = 3;
    frontPlane.position.y = -0.25;
    frontPlane.castShadow = true;
    frontPlane.receiveShadow = true;

    beachPiece.add(frontPlane);
    beachPiece.add(water);
    return beachPiece;
};

const beach1 = makeBeach();
const beach2 = makeBeach();
scene.add(beach1);
beach2.position.x += 19.35;
scene.add(beach2);

// moon
var textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 

const moonGeo = new THREE.SphereGeometry( 5,512,512 );
const moonMat = new THREE.MeshBasicMaterial({color: 0xbfbfbf, map: new THREE.TextureLoader().load(textureURL)});
var moon = new THREE.Mesh( moonGeo, moonMat );
// moon.layers.set(1);
moon.position.x = 0;
moon.position.y = 18;
moon.position.z = -200;
scene.add(moon);





const makeCar = () => {
    const car = new THREE.Group();

    // const wheelMat = new THREE.MeshStandardMaterial({color: 'gray'});
    // const wheelGop = new THREE.CylinderGeometry(0.3,0.3,0.25);
    // const wheelf = new THREE.Group();
    // const wheelb = new THREE.Group();

    // const whellypos = 0.29;
    // const whellzpos = 0.75

    // const wheelrf = new THREE.Mesh(wheelGop,wheelMat);
    // wheelrf.rotation.x = Math.PI/2;
    // wheelrf.position.z = -(whellzpos)

    // const wheellf = new THREE.Mesh(wheelGop,wheelMat);
    // wheellf.rotation.x = Math.PI/2;
    // wheellf.position.z = whellzpos;

    // wheelf.add(wheellf);
    // wheelf.add(wheelrf);

    // wheelf.position.x = -0.75;
    // wheelf.position.y = whellypos;

    // const wheelrb = new THREE.Mesh(wheelGop,wheelMat);
    // wheelrb.rotation.x = Math.PI/2;
    // wheelrb.position.z = -(whellzpos);

    // const wheelld = new THREE.Mesh(wheelGop,wheelMat);
    // wheelld.rotation.x = Math.PI/2;
    // wheelld.position.z = whellzpos;

    // wheelb.add(wheelld);
    // wheelb.add(wheelrb);

    // wheelb.position.x = 0.75;
    // wheelb.position.y = whellypos;

    // car.add(wheelf);
    // car.add(wheelb);

    // const baseGeometry = new THREE.BoxGeometry( 2.5, 0.6, 1.55 ); 
    // const baseMaterial = new THREE.MeshStandardMaterial( {color: 'white'} ); 
    // const carBase = new THREE.Mesh( baseGeometry, baseMaterial ); 
    // carBase.position.y += 0.5;
    // car.add(carBase);

    // const cabinGeometry = new THREE.BoxGeometry(1.75, 0.50, 1.4 ); 
    // const cabinMaterial = new THREE.MeshStandardMaterial( {color: 'red'} ); 
    // const cabin = new THREE.Mesh( cabinGeometry, cabinMaterial ); 
    // cabin.position.y += 1;
    // cabin.position.x += 0.25;
    // car.add(cabin);

    const rectLight = new THREE.RectAreaLight( 0xffffff, 5,  2, 15 );
    rectLight.position.set( -2, 3, 0 );
    rectLight.lookAt( -10, 2, 0 );
    car.add(rectLight);



    return car;

}

const car = makeCar()
scene.add(car);





const tick = () => {
    requestAnimationFrame(tick);

// Move everything 
    
    //road
    planeMesh.position.x += 0.05;

    // Terrrains
    terrain1.position.x += 0.01;
    terrain2.position.x += 0.01;

    //skybox
    skybox.rotation.y += 0.00005;

    //sand
    beach1.position.x += 0.05;
    beach2.position.x += 0.05;

    renderer.render(scene,camera);


    if(planeMesh.position.x >= camera.position.x + 50){
        planeMesh.position.x = camera.position.x - 50;
    }

    if(terrain1.position.x >= camera.position.x + 42){
        terrain1.position.x = -45;
    }

    if(terrain2.position.x >= camera.position.x + 42){
        terrain2.position.x = -45;
    }

    if(beach1.position.x >= camera.position.x + 12){
        beach1.position.x = -17;
    }

    if(beach2.position.x >= camera.position.x + 12){
        beach2.position.x = -17;
    }

    

   

}

tick();



