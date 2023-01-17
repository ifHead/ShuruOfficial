// p5canvas_mouse div는 pointer-events가 없어야 하므로 
//mouseInfo.js의 이벤트로부터 정보를 받아감

// 업데이트 루프
// window.onload = function (){
//     function update(){
//         isMouseReleased = false;
//     }
//     setInterval(update, 1)
// }

let isMouseIn = false;
let isMouseOut = false;
let isMouseUp = false;
let isMouseDown = false;
let isMousePressing = false;
let isMouseReleased = false;

// function cursorFade(isIn){
//     if(isIn == "In") {
//         alpha += 0.01;
//         if (alpha > 1) alpha = 1;
//         cursor.style.opacity = alpha;
//     } else {
//         alpha -= 0.01
//         if (alpha < 0) alpha = 0;
//         cursor.style.opacity = alpha;
//     }
// }

// onmousemove = function(e){
//     isThereMouseMoveEvent = true;
//     alpha += 0.01;
//     if (alpha > 1) alpha = 1;
//     cursor.style.opacity = alpha;
// }

onmouseout = (event) => {
    isMouseIn = false;
    isMouseOut = true;
};

onmouseover = (event) => {
    isMouseIn = true;
    isMouseOut = false;
};

onmousedown = (event) => {
    isMouseReleased = false;
    isMouseDown = true;
    isMousePressing = true;
    isMouseUp = false;
};

onmouseup = (event) => {
    isMouseReleased = true;
    isMousePressing = false;
    isMouseUp = true;
    isMouseDown = false;
};



