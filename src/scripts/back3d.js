import { init } from 'aos';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


//import skybox images
import fnt from './scene/skybox/back.jpg'
import bk from './scene/skybox/front.jpg'
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

camera.position.z = 5;

orbit.update();

const light = new THREE.AmbientLight(0xd1d1d1);
light.position.x = 0;
light.position.y = 0;
light.position.z = 0;
scene.add(light);


const skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
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

const tick = () => {
    window.requestAnimationFrame(tick);

    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    // box.rotation.z += 0.01;
    renderer.render(scene,camera);



}
tick();

renderer.render(scene,camera);
