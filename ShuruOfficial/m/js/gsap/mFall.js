gsap.to("#Fall1", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+="+innerHeight * 0.1+" top",
        toggleActions: "play none none reset"
    },
    y: window.innerHeight * 4,
    opacity: 0,
    rotate: 330,
    duration: 4
})

gsap.to("#Fall2", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 1.5,
    rotate: 330,
})


gsap.to("#Fall3", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 2.8,
    rotate: 430,
})


gsap.to("#Fall4", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 1.5,
    rotate: 330,
})


gsap.to("#Fall5", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 4,
    rotate: 430,
})


gsap.to("#Fall6", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 3.4,
    rotate: 330,
})

gsap.to("#GiantFall", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4.5,
    opacity: 0,
    duration: 1,
})
