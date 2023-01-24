gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    content: "#smooth_content",
    smooth: 2,
});

let tl = gsap.timeline();

window.addEventListener("resize", () => {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function () {
        this.location.reload(false); /* false to get page from cache */
    }, 200);
});


tl
.to("#Structure_1", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom+=" + window.innerWidth + " top",
        pin: "#StructureContainer",
        scrub: true,
        markers: true,
    },
})
.to("#Structure_2", {
    scrollTrigger: {
        trigger: "#StructureTrigger_2",
        start: "top center",
        end: "bottom top",
        // pin: "#StructureContainer",
        scrub: true,
        markers: true,
    },
    opacity: 1
})
.to("#Structure_3", {
    scrollTrigger: {
        trigger: "#StructureTrigger_3",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom-=" + window.innerWidth * 0.3 + " top",
        scrub: true,
        markers: true,
    },
    opacity: 1
})
.to("#CorpDemo", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top+=" + window.innerWidth * 0.3 + " center ",
        end: "bottom+=" + window.innerWidth + " top",
        scrub: true
    },
    y: -window.innerWidth * 1.3,
    duration: 10
})



// .to("#Structure_3", {
//     scrollTrigger: {
//         trigger: "#StructureTrigger_3",
//         start: "top+=" + window.innerHeight / 4 + " center",
//         pin: "#StructureContainer",
//         scrub: true,
//         markers: true,
//     },
//     opacity: 1
// })

// // // ScrollTrigger.create({
// // //     animation: tl,
// // //     trigger: "#StructureContainer",
// // //     start: "top top",
// // //     markers: true,
// // //     scrub: true,
// // //     pin: true,
// // // });

// // // let scrollTopVal = 0;

// // // window.addEventListener('scroll', function (e) {
// // //     scrollTopVal = window.scrollY;
// // //     bodyScrollBar.scrollTop = window.scrollY;
// // // }

// // // ScrollTrigger.scrollerProxy(document.body, {
// // // })

// // // bodyScrollBar.addListener(ScrollTrigger.update);