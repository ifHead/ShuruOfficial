gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    content: "#smooth_content",
    smooth: 1.3,
});

gsap.to("#AirPlane", {
    scrollTrigger: {
        trigger: "#AirPlane",
        start: "top bottom",
        toggleActions: "play none resume reset"
    },
    x: -window.innerWidth * 1.4,
    y: window.innerHeight,
    duration: 3,
    ease: "slow(0.5, 0.5, false)"
})

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

gsap.from(".TitleBox1", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top center",
        toggleActions: "play pause resume reset"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".TitleBox2", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top center",
        toggleActions: "play pause resume reset"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2.5,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".TitleBox3", {
    scrollTrigger: {
        trigger: "#StructureTrigger_1",
        start: "top center",
        toggleActions: "play pause resume reset"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 3,
    ease: "elastic.out(1, 0.55)"
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
})

gsap.to("#Band", {
    scrollTrigger: {
        trigger: "#Band",
        start: "top bottom",
        toggleActions: 'play pause resume reset'
    },
    x: 0,
    duration: 120
})
