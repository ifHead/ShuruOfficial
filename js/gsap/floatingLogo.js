let tlsk = gsap.timeline();

tlsk
.to("#Logo3D",{
    y: 20,
    duration: 2,
    ease: "power1.out"
})
.to("#Logo3D",{
    y: 0,
    duration: 2,
    ease: "power1.in"
})
.to("#LogoDeco", {
    y: -35,
    duration: 2,
    ease: "power1.out"
},"-=4")
.to("#LogoDeco", {
    y: 0,
    duration: 2,
    ease: "power1.in"
},"-=2");

tlsk.repeat(-1);