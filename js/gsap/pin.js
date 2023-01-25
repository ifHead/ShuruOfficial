gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    content: "#smooth_content",
    smooth: 1.3,
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
        start: "top-=" + window.innerWidth * 0.3 + "center",
        end: "top top",
        // pin: "#StructureContainer",
        scrub: true,
        markers: true,
    },
    opacity: 1
})
.to("#Structure_3", {
    scrollTrigger: {
        trigger: "#StructureTrigger_3",
        start: "top-=" + window.innerWidth * 0.3 + " center",
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
        scrub: true,
    },
    y: window.innerWidth / innerHeight > 1 ? -window.innerWidth * 0.6 : -window.innerWidth * 1.2,
})
.from(".TitleBox1", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top+=" + window.innerHeight * 0.1 + " bottom",
        end: "center center+=" + window.innerHeight * 0.15,
        scrub: true,
    },
    opacity: -1.5,
    y: -window.innerHeight * 2,
    x: -window.innerWidth * 0.7
})
.from(".TitleBox2", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top+="+window.innerHeight*0.2 +" bottom",
        end: "center center",
        scrub: true,
    },
    opacity: -1.5,
    y: -window.innerHeight * 2,
    x: -window.innerWidth
})
.from(".TitleBox3", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top+=" + window.innerHeight * 0.3 + " bottom",
        end: "center center-=" + window.innerHeight * 0.15,
        scrub: true,
    },
    opacity: -1.5,
    y: -window.innerHeight,
    x: -window.innerWidth
})

let tlse = gsap.timeline();

tlse
.to("#CloudLineContainer", {
    scrollTrigger: {
        trigger: "#CloudLineContainer",
        start: "top bottom",
        scrub: true
    },
    y: -window.innerHeight * 2.2
})
.from(".BigTitleBox", {
    scrollTrigger: {
        trigger: ".BigTitleBox",
        start: "top bottom-=" + window.innerHeight * 0.1,
        scrub: true
    },
    y: -300,
    opacity: 0.5,
    duration: 2
});

gsap.to("#Band", {
    scrollTrigger: {
        trigger: "#Band",
        start: "top bottom",
        toggleActions: 'restart none none none',
        once: false,
        markers: true
    },
    x: 0,
    duration: 120
})
// .from("ShuPush"){

// }

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