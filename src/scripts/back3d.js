import { init } from 'aos';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import road from './scene/road.jpg'


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

camera.position.y = 3;
camera.position.z = 10;
camera.position.x = 0;
 

orbit.update();

const light1 = new THREE.AmbientLight(0xffffff,0.1);
scene.add(light1);

const light = new THREE.SpotLight(0xffffff,0.15);
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

const rectLight = new THREE.RectAreaLight( 0xffffff, 5,  2, 15 );
rectLight.position.set( -1, 2, 0 );
rectLight.lookAt( -10, 2, 0 );
scene.add( rectLight );


const planeGeo = new THREE.PlaneGeometry(150,5,10,10);
const roadTex = new THREE.TextureLoader().load(road);
roadTex.wrapS = THREE.RepeatWrapping;
roadTex.repeat.x = 5;
const planeMat = new THREE.MeshStandardMaterial({map: roadTex, roughness: 1,metalness: 0.1});

const planeMesh = new THREE.Mesh(planeGeo,planeMat);
planeMesh.rotation.x = -Math.PI / 2;
planeMesh.receiveShadow = true;
scene.add(planeMesh);


// animate the texture offset to create the illusion of movement
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();


// const skyboxGeo = new THREE.BoxGeometry(500,500,500);
// let matArr = [];
// let skyboxarr = [fnt,bk,tp,btm,rgt,lt];

// skyboxarr.forEach( item => {
//     const texture = new THREE.TextureLoader().load(item)
//     matArr.push(new THREE.MeshBasicMaterial({map: texture}));
// });

// matArr.forEach(item => {
//     item.side = THREE.BackSide;
// });

// const skybox = new THREE.Mesh(skyboxGeo,matArr);

// scene.add(skybox);


// car model place holder
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshStandardMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.y += 0.5;
scene.add( cube );



// // Terrain

import terrianImg from './scene/terrianTexture.jpg';
import terrHeighImg from './scene/heightmap.png';
import { event } from 'jquery';

const terrHeigh = new THREE.TextureLoader().load(terrHeighImg);
const terrainGeo1 = new THREE.PlaneGeometry(60 ,40, 2048, 2048);
const terrainTex = new THREE.TextureLoader().load(terrianImg);
terrainTex.wrapS = THREE.RepeatWrapping;
terrainTex.repeat.x = 3;
const terrainMat1 = new THREE.MeshStandardMaterial({color: 0x595959, map: terrainTex, displacementMap: terrHeigh, displacementScale: 5});

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

// moon
var textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 

const moonGeo = new THREE.SphereGeometry( 30,512,512 );
const moonMat = new THREE.MeshBasicMaterial({color: 0xbfbfbf, map: new THREE.TextureLoader().load(textureURL)});

var moon = new THREE.Mesh( moonGeo, moonMat );
moon.position.x = 0;
moon.position.y = 20;
moon.position.z = -200;
scene.add(moon);





const tick = () => {
    requestAnimationFrame(tick);

// Move the road and the car
    planeMesh.position.x += 0.1;
    terrain1.position.x += 0.01;
    terrain2.position.x += 0.01;
    renderer.render(scene, camera);

    if(planeMesh.position.x >= camera.position.x + 50){
        planeMesh.position.x = camera.position.x - 50;
    }

    if(terrain1.position.x >= camera.position.x + 42){
        terrain1.position.x = -45;
    }

    if(terrain2.position.x >= camera.position.x + 42){
        terrain2.position.x = -45;
    }






}

tick();



