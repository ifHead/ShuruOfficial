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

window.addEventListener("resize", () => {
    this.location.reload(false); /* false to get page from cache */
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function () {
    }, 200);
});

gsap.to("#CorpDemo", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#CorpDemo",
    },
})

gsap.to("#CorpDemo", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth + " center",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    duration: 0.2,
})

gsap.to("#Structure_1", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#Structure_1",
        scrub: true,
    },
})

gsap.to("#Structure_2", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#Structure_2",
        scrub: true,
    }
})

gsap.to("#Structure_2", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.5 + " center",
        end: "top+=" + window.innerWidth * 0.5 + " center-=" + window.innerWidth * 0.3,
        scrub: true,
    },
    opacity: 1
})

gsap.to("#Structure_3", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#Structure_3",
    }
})

gsap.to("#Structure_3", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.8 + " center",
        end: "top+=" + window.innerWidth * 0.8 + " center-=" + window.innerWidth * 0.3,
        scrub: true,
    },
    opacity: 1
})

gsap.from(".TitleBox1", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        toggleActions: "play pause resume reverse"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".TitleBox2", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        toggleActions: "play pause resume reverse"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2.5,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".TitleBox3", {
    scrollTrigger: {
        trigger: "#StructureContainer",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        toggleActions: "play pause resume reverse"
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
});

gsap.to(".BigTitleBox", {
    scrollTrigger: {
        trigger: ".BigTitleBox",
        start: "top bottom"
    },
    y: -150,
    opacity: 1,
    duration: 1,
    ease: "power4.out"
})

let tlk = gsap.timeline();

tlk.fromTo("#band-1",
    {
        x: -window.innerWidth * 8
    },
    {
        x: 0,
        duration: 80,
        ease: "slow(0.01, 0.01, false)"
    }
)
.fromTo("#band-2", 
    {
        x: -window.innerWidth * 8
    }, 
    {
        x: 0,
        duration: 80,
        ease: "slow(0.01, 0.01, false)"
    }, 
    "<"
);

tlk.repeat(-1);

let slotPopupAnimTimeline = gsap.timeline(); 
slotPopupAnimTimeline.pause();

slotPopupAnimTimeline.from("#slot-popup", {
    y: window.innerHeight * 0.3,
    duration: 1,
    opacity: 0,
    border: 0,
    width: 0,
    height: 0,
    ease: "power2.in",
})
.to("#slot-img", {
    opacity: 0,
    duration: 1,
    border: 0,
    ease: "power3.in"
}, "<+=0.3");

gsap.fromTo("#skyline-below", 
    {
        y: 0
    }, 
    {
        y: window.innerHeight - window.innerWidth > 0 ? window.innerHeight - 200 * (window.innerHeight / window.innerWidth) : window.innerWidth * 1.2,
        scrollTrigger: {
            trigger: "#sky-bg-below",
            start: "top-=100 bottom",
            end: "top top",
            scrub: true
        }
    }
);
