gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true
});

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();

// tl.to("#StructureContainer", {
//     scrollTrigger: {
//         trigger: "#StructureContainer",
//         start: "bottom top",
//         end: "",
//         pin: true,
//         scrub: true,
//         markers: true,
//     }
// });
// // .to("#Structure_2", {opacity: 0})
// // .to("#Structure_3", {opacity: 0});

// // ScrollTrigger.create({
// //     animation: tl,
// //     trigger: "#StructureContainer",
// //     start: "top top",
// //     markers: true,
// //     scrub: true,
// //     pin: true,
// // });

// // let scrollTopVal = 0;

// // window.addEventListener('scroll', function (e) {
// //     scrollTopVal = window.scrollY;
// //     bodyScrollBar.scrollTop = window.scrollY;
// // }

// // ScrollTrigger.scrollerProxy(document.body, {
// // })

// // bodyScrollBar.addListener(ScrollTrigger.update);