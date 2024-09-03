let cube = document.querySelector(".cube");
let rollUp = document.querySelector(".rollUp");
let rollLeft = document.querySelector(".rollLeft");
let rollRight = document.querySelector(".rollRight");
let rollDown = document.querySelector(".rollDown");
let rotX = 0;
let rotY = 0;
let rotZ = 0;

rollUp.addEventListener("click", () => {
    rotX -=90;
    updateRotTopBottom('up');
    updateRot();
});
rollDown.addEventListener("click", () => {
    rotX +=90;
    updateRotTopBottom('down');
    updateRot();
});
rollLeft.addEventListener("click", () => {
    if (isTop()) {
        rotZ += 90;
    } else if (isBottom()) {
        rotZ -=90;
    } else if (isBack()) {
        rotY -= 90;
    } else {
        rotY += 90;
    }
    updateRot();
});
rollRight.addEventListener("click", () => {
    if (isTop()) {
        rotZ -= 90;
    } else if (isBottom()) {
        rotZ +=90;
    } else if (isBack()) {
        rotY += 90;
    } else {
        rotY -= 90;
    }
    updateRot();
});

function isTop() {
    return rotX % 360 === -90 || rotX % 360 === 270;
}

function isBottom() {
    return rotX % 360 === 90 || rotX % 360 === -270;
}

function isBack() {
    return rotX % 360 === 180 || rotX % 360 === -180;
}

function updateRot() {
    cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
    console.log(rotX, rotY, rotZ);

}

function updateRotTopBottom(direction) {
    if (!isTop() && !isBottom()) {
        rotZ = 0;
    }else{
        if(direction == 'up' || direction === 'down' )
            {
                rotY = 0;
            }
        }
    }
