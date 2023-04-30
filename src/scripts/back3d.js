import { init } from 'aos';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import road from './scene/road.jpg'

//import skybox images
import fnt from './scene/skybox/front.jpg'
import bk from './scene/skybox/back.jpg'
import btm from './scene/skybox/down.jpg'
import lt from './scene/skybox/left.jpg'
import rgt from './scene/skybox/right.jpg'
import tp from './scene/skybox/up.jpg'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 3000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg3'),
});


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
camera.position.z = 5
 

orbit.update();

const light = new THREE.AmbientLight(0xd1d1d1,0.5);
light.position.x = 0;
light.position.y = 0;
light.position.z = 10;
scene.add(light);


const planeGeo = new THREE.PlaneGeometry(50,5,10,10);
const roadTex = new THREE.TextureLoader().load(road);
roadTex.wrapS = THREE.RepeatWrapping;
roadTex.repeat.x = 10;
const planeMat = new THREE.MeshStandardMaterial({map: roadTex});

const planeMesh = new THREE.Mesh(planeGeo,planeMat);
planeMesh.rotation.x += 250;
scene.add(planeMesh);


// animate the texture offset to create the illusion of movement
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();


const skyboxGeo = new THREE.BoxGeometry(500,500,500);
let matArr = [];
let skyboxarr = [fnt,bk,tp,btm,rgt,lt];

skyboxarr.forEach( item => {
    const texture = new THREE.TextureLoader().load(item)
    matArr.push(new THREE.MeshBasicMaterial({map: texture}));
});

matArr.forEach(item => {
    item.side = THREE.BackSide;
});

const skybox = new THREE.Mesh(skyboxGeo,matArr);

scene.add(skybox);

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const cube = new THREE.Mesh( geometry, material ); 
    cube.rotation.x += 250;
    cube.position.y += 0.5;
    scene.add( cube );


    const tick = () => {
        requestAnimationFrame(tick);
  
    // Move the road and the car
        planeMesh.position.x += 0.5;
        cube.position.x += 0.01;
        camera.position.x += 0.01;
        renderer.render(scene, camera);

        if(planeMesh.position.x >= camera.position.x + 10){
            planeMesh.position.x = camera.position.x - 10;
        }

    }

    tick();






