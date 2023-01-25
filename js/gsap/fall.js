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
    duration: 1.5
})


gsap.to("#Fall3", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 2.8
})


gsap.to("#Fall4", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.1 + " top",
        toggleActions: "play none none reset",
        markers: true
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 1.5
})


gsap.to("#Fall5", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
        markers: true
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 4
})


gsap.to("#Fall6", {
    scrollTrigger: {
        trigger: "#SkyBG",
        start: "top+=" + innerHeight * 0.05 + " top",
        toggleActions: "play none none reset",
        markers: true
    },
    y: window.innerHeight * 4,
    opacity: 0,
    duration: 3
})
