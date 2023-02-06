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
		let offset = 0;
		let alpha = 0;

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
				if (releaseTimer == 0) {
					apng.play();
					offset = 0;
				}

				if (releaseTimer > 5 && offset < 10) {
					offset += 1;
				}

				releaseTimer++;

				if (releaseTimer < 22 && releaseTimer > 1) {
					releasedCursor.style.left = a.mouseX - 15 + offset + "px";
					releasedCursor.style.top = a.mouseY - 15 + offset + "px";
				}

				if (isMousePressing && releaseTimer > 3) {
					apng.rewind();
					releaseTimer = 0;
					releaseTimerOn = false;
					a.image(idleCursor, a.mouseX -15, a.mouseY -15, 70, 70);
					releasedCursor.style.left = 99999 + "px";
					releasedCursor.style.top = 99999 + "px";
				}

				if (releaseTimer <= 1) {
					a.image(pressedCursor, a.mouseX - 15, a.mouseY - 15, 70, 70);
				}

				if (releaseTimer >= 22) {
					apng.rewind();
					releaseTimer = 0;
					releaseTimerOn = false;
					a.image(idleCursor, a.mouseX - 15 + offset, a.mouseY - 15 + offset, 70, 70);
					releasedCursor.style.left = 99999 + "px";
					releasedCursor.style.top = 99999 + "px";
				}
			} else {
				if (isMousePressing) {
					a.image(pressedCursor, a.mouseX -15, a.mouseY -15, 70, 70);
				} else if (isMouseReleased) {
					releaseTimerOn = true;
					a.image(pressedCursor, a.mouseX -15, a.mouseY -15, 70, 70);
				} else {
					a.image(idleCursor, a.mouseX -5, a.mouseY -5, 70, 70);
				}
			}

			resetMouseEvents();
		};

		a.watchWindowSize = function () {
			onresize = (event) => {
				a.resizeCanvas(a.windowWidth, a.windowHeight, true);
				a.redraw();
			};
		}

		function resetMouseEvents() {
			isMouseUp = false;
			isMouseDown = false;
			isMouseReleased = false;
		}
	}

	let sketch_a = new p5(sa, document.getElementById("p5canvas_mouse"));
});