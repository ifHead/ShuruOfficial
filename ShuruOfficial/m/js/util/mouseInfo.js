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



