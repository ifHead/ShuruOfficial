// APNG로 랩핑한 이유 : apng 필드를 사용하기 위해 p5를 APNG 스코프 내부로 옮김
// 화면을 덮는 스케치는 마우스 이벤트를 모두 가져가므로 pointer-events는 none으로 설정함
// p5canvas_mouse div는 pointer-events가 없어야만 마우스이벤트를 가로채지 않으므로
// mouseInfo.js의 이벤트로부터 정보를 받아옴
// https://codesandbox.io/s/apng-sromh?file=/src/index.js

window.APNG.parseURL("/Image/ReleasedCursor.png").then((apng) => {
	let releasedCursor = document.getElementById("releasedCursor");

	const idleCursorCanvas = document.createElement("canvas");

	idleCursorCanvas.width = apng.width;
	idleCursorCanvas.height = apng.height;
	releasedCursor.appendChild(idleCursorCanvas);

	apng.addContext(idleCursorCanvas.getContext("2d"));
		
	const sa = (a) => {
		let cnv;
		let idleCursor;
		let pressedCursor;
		let releaseTimerOn = false;
		let releaseTimer = 0;

		a.preload = () => {
			idleCursor = a.loadImage('/Image/IdleCursor.png');
			pressedCursor = a.loadImage('/Image/PressedCursor.png');
		}

		a.setup = () => {
			cnv = a.createCanvas(a.windowWidth, a.windowHeight);
			//인스턴스 모드 용 resizeCanvas
			a.watchWindowSize();
		};

		a.draw = () => {
			a.clear();
			if (releaseTimerOn) {
				if(releaseTimer == 0){
					apng.play();
				}
				
				releaseTimer++;
				
				if (releaseTimer < 22 && releaseTimer > 1) {
					releasedCursor.style.left = a.mouseX + "px";
					releasedCursor.style.top = a.mouseY + "px";
				}
				
				if (isMousePressing && releaseTimer > 3) {
					apng.rewind();
					releaseTimer = 0;
					releaseTimerOn = false;
					a.image(idleCursor, a.mouseX, a.mouseY, 70, 70);
					releasedCursor.style.left = 99999 + "px";
					releasedCursor.style.top = 99999 + "px";
				}

				if (releaseTimer <= 1) {
					a.image(pressedCursor, a.mouseX, a.mouseY, 70, 70);
				}

				if(releaseTimer >= 22){
					apng.rewind();
					releaseTimer = 0;
					releaseTimerOn = false;
					a.image(idleCursor, a.mouseX, a.mouseY, 70, 70);
					releasedCursor.style.left = 99999 + "px";
					releasedCursor.style.top = 99999 + "px";
				}
			} else {
				if (isMousePressing) {
					a.image(pressedCursor, a.mouseX, a.mouseY, 70, 70);
				} else if (isMouseReleased) {
					releaseTimerOn = true;
					a.image(pressedCursor, a.mouseX, a.mouseY, 70, 70);
				} else {
					a.image(idleCursor, a.mouseX, a.mouseY, 70, 70);
				}
			}

			resetMouseEvents();
		};

		a.watchWindowSize = function () {
			$(window).resize(function () {
				a.resizeCanvas(a.windowWidth, a.windowHeight, true);
				a.redraw();
			});
		}

		function resetMouseEvents(){
			isMouseUp = false;
			isMouseDown = false;
			isMouseReleased = false;
		}
	}

	let sketch_a = new p5(sa, document.getElementById("p5canvas_mouse"));
});


// //sb is sketch B, b is for sketch a, b, c ...
// const sb = (b) => {
// 	let x = 100;
// 	let y = 500;
// 	let rectX = 0;
// 	let clr;
// 	let cnv;

// 	b.setup = () => {
// 		cnv = b.createCanvas(100, 200);
// 		b.pixelDensity(1);
// 		clr = b.color(255, 0, 0);
// 		cnv.mouseClicked(bMouseClicked);
// 		cnv.mousePressed(bMousePressed);
// 		cnv.mouseReleased(bMouseReleased);
// 		cnv.mouseOver(bMouseOver);
// 		cnv.mouseOut(bMouseOut);
// 	};

// 	b.draw = () => {
// 		b.clear();
// 		b.fill(255);
// 		b.rect(x, y, 50, 50);
// 		rectX = rectX += 3; // Move Rectangle

// 		b.fill(255);
// 		b.triangle(30 - 58 + globalMx, 75, globalMx, 20, 86 - 58 + globalMx, 75);

// 		b.fill(clr);
// 		b.rect(rectX, 40, 20, 20);
// 		console.log("루프 도는 중");
// 	};

// 	function bMouseOut() {
// 		console.log("b 마우스 아웃");
// 		b.noLoop();
// 	}

// 	function bMouseOver() {
// 		console.log("b 마우스 오버");
// 		b.loop();
// 	}

// 	function bMouseClicked() {
// 		console.log("b 마우스 클릭");
// 	}

// 	function bMouseReleased() {
// 		console.log("b 마우스 뗌");
// 	}

// 	function bMousePressed() {
// 		console.log("b 마우스 누르고 있음");
// 	}
// }

// eslint-disable-next-line no-unused-vars, no-undef

// eslint-disable-next-line no-unused-vars, no-undef
// let sketch_b = new p5(sb, document.getElementById("b"));