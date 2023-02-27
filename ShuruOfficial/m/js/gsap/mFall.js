gsap.to("#fall-1", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+="+innerHeight * 0.1+" top",
        toggleActions: "play none none reset"
    },
    y: window.innerHeight * 4,
    opacity: 0,
    rotate: 330,
    duration: 4
})

gsap.to("#fall-2", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 1.5,
    rotate: 330,
})


gsap.to("#fall-3", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 2.8,
    rotate: 430,
})


gsap.to("#fall-4", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 1.5,
    rotate: 330,
})


gsap.to("#fall-5", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 4,
    rotate: 430,
})


gsap.to("#fall-6", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 3.4,
    rotate: 330,
})

gsap.to("#giant-fall", {
    scrollTrigger: {
        trigger: "#sky-bg",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4.5,
    opacity: 0,
    duration: 1,
})
