// let easeStrength = 0.03;
// let far = 0.015;
// let middle = 0.05;
// let near = 0.1;

// /* 여기만 편집 */
// // let followObjectC = assignObject("StarMainFG", far);
// // let followObjectA = assignObject("Logo3D", middle);
// // let followObjectB = assignObject("LogoDeco", near);
// // let followObjects = [followObjectA, followObjectB, followObjectC];
// /* ------------- */

// function assignObject(idOfDomElement, _distance){
//     let domElem = document.getElementById(idOfDomElement);
//     let obj = {
//         id: idOfDomElement,
//         dom: domElem,
//         originX: parseFloat(
//             window.getComputedStyle(domElem).left 
//             + window.getComputedStyle(domElem).width / 3 
//         ),
//         originY: parseFloat(
//             window.getComputedStyle(domElem).top
//             + window.getComputedStyle(domElem).height / 3
//         ),
//         curX: parseFloat(window.getComputedStyle(domElem).left),
//         curY: parseFloat(window.getComputedStyle(domElem).top),
//         distance: _distance,
//         dx: 0,
//         dy: 0
//     }
    
//     return obj;
// }

// let mouseX = 0, mouseY = 0;

// // function updateObjects(){
// //     for(let elem of followObjects){
// //         elem.curX = parseFloat(window.getComputedStyle(elem.dom).left);
// //         elem.curY = parseFloat(window.getComputedStyle(elem.dom).top);
// //     }
// // }

// function easeObjects(_mouseX, _mouseY) {
//     let windowHalfX = window.innerWidth / 2;
//     let windowHalfY = window.innerHeight / 2;
//     let targetX, targetY;
//     for(let elem of followObjects){
//         targetX = (1 - elem.distance) * windowHalfX + mouseX * elem.distance;
//         targetY = (1 - elem.distance) * windowHalfY + mouseY * elem.distance;
//         elem.dx = targetX - elem.curX;
//         elem.dy = targetY - elem.curY;
//         elem.curX += elem.dx * easeStrength;
//         elem.curY += elem.dy * easeStrength;
//         elem.dom.style.left = elem.curX + "px";
//         elem.dom.style.top = elem.curY + "px";
//     }
// }

// addEventListener('mousemove', (event) => {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// });

// const slightFollowAnimation = () => {
//     // updateObjects();
//     easeObjects(mouseX, mouseY);
// }

// let animation = setInterval(slightFollowAnimation, 15);
