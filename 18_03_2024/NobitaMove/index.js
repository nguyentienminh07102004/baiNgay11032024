function moveUp(){
    let nobita = document.getElementById("nobita");
    nobita.style.top = parseInt(nobita.style.top) - 5 + "px";
}
function moveRight(){
    let nobita = document.getElementById("nobita");
    nobita.style.left = parseInt(nobita.style.left) + 5 + "px";
}
function moveDown(){
    let nobita = document.getElementById("nobita");
    nobita.style.top = parseInt(nobita.style.top) + 5 + "px";
}
function moveLeft(){
    let nobita = document.getElementById("nobita");
    nobita.style.left = parseInt(nobita.style.left) - 5 + "px";
}
function move(evt){
    console.log(evt)
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
    }

}
function doc(){
    window.addEventListener('keydown', move);
}