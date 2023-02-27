gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

let smoother = ScrollSmoother.create({
    content: "#smooth_content",
    smooth: 1.3,
});

gsap.to("#airplane", {
    scrollTrigger: {
        trigger: "#airplane",
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

gsap.to("#corp-demo", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom+=" + window.innerHeight / 3,
        pin: "#corp-demo",
    },
})

gsap.to("#corp-demo", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "bottom bottom+=500",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    duration: 0.2,
})

gsap.to("#structure-1", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#structure-1",
        scrub: true,
    },
})

gsap.to("#structure-2", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#structure-2",
        scrub: true,
    }
})

const tlsef = gsap.timeline({
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top top-=200",
    },
});

tlsef.fromTo("#structure-2", 
    {opacity: 0}, 
    {opacity: 1, ease: "sine", duration: 1},
)
.fromTo("#structure-3",
    { opacity: 0 },
    { opacity: 1, ease: "sine", duration: 1}, 
    ">"
);

gsap.to("#structure-3", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        end: "bottom bottom",
        pin: "#structure-3",
    }
})


gsap.from(".title-box-1", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        toggleActions: "play pause resume reverse"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".title-box-2", {
    scrollTrigger: {
        trigger: "#structure-container",
        start: "top+=" + window.innerWidth * 0.3 + " center",
        toggleActions: "play pause resume reverse"
    },
    opacity: 0,
    x: -window.innerWidth / 3,
    duration: 2.5,
    ease: "elastic.out(1, 0.6)"
})

gsap.from(".title-box-3", {
    scrollTrigger: {
        trigger: "#structure-container",
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
.to("#cloud-line-container", {
    scrollTrigger: {
        trigger: "#cloud-line-container",
        start: "top bottom",
        scrub: true
    },
    y: -window.innerHeight * 2.2
});

gsap.to(".big-title-box", {
    scrollTrigger: {
        trigger: ".big-title-box",
        start: "top bottom",
        toggleActions: "play none none reset"
    },
    y: -150,
    duration: 2,
    ease: "elastic.out(1, 0.7)"
});

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
.to("#slot-flex-box", {
    opacity: 0,
    duration: 1,
    border: 0,
    ease: "power3.in"
}, "<+=0.3")
.to("#slot-bg", {
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

gsap.to("#header",
    {
        scrollTrigger: {
            trigger: "#sky-bg",
            start: "top top",
            end: "bottom+=50000 bottom",
            pin: "#header"
        }
    }
);

function gotoContact(){
    gsap.to(window, {
        duration: 0.1, 
        scrollTo: {y: "max"},
        ease: "power1"
    });
}