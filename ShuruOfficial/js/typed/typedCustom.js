import Typed from "./typed.min.js";

var auto = new Typed('.auto-text', {
    strings: ['우리는 어릴 적 모두 발명가였습니다.', '당신의 무한한 잠재력을', '일깨우는 기업이 되겠습니다.'],
    loop: true,
    backSpeed: 1,
    typeSpeed: 1,
    IPColor: 'white',
});

auto.start();