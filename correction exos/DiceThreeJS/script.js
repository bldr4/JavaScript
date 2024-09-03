const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = [
    new THREE.MeshBasicMaterial( { color: 'red' } ),
    new THREE.MeshBasicMaterial( { color: 'green' } ),
    new THREE.MeshBasicMaterial( { color: 'blue' } ),
    new THREE.MeshBasicMaterial( { color: 'yellow' } ),
    new THREE.MeshBasicMaterial( { color: 'purple' } ),
    new THREE.MeshBasicMaterial( { color: 'orange' } )
];
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

let isAnimating = false;
function animeRot(axis, angle){

    if(isAnimating) return;
    isAnimating = true;

    let rotationRad = cube.rotation[axis] + THREE.MathUtils.degToRad(angle);

    gsap.to(cube.rotation, 
        {
            [axis]: rotationRad,
            duration: 1,
               ease: "power1.inOut",
               onUpdate: () => {
                renderer.render( scene, camera );
               },
               onComplete: () => {
                isAnimating = false;
               }
            }
        );
}

document.querySelector('#up').addEventListener('click', () => {
    animeRot('x', 90);
    console.log(isAnimating);
})

document.querySelector('#down').addEventListener('click', () => {
    animeRot('x', -90);
})

document.querySelector('#left').addEventListener('click', () => {
    animeRot('y', 90);
})

document.querySelector('#right').addEventListener('click', () => {
    animeRot('y', -90);

})

// renderer.setAnimationLoop( animate );

function animate() {

	renderer.render( scene, camera );

}
animate();