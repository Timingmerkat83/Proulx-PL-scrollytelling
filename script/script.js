console.clear();
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* ------------------------------
   Smooth scroll-state handling
------------------------------ */
const body = document.body;
let scrollTimeout;

window.addEventListener("scroll", () => {
  body.classList.add("is-scrolling");

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    body.classList.remove("is-scrolling");
  }, 120);
});

/* ------------------------------
   Cached DOM references
------------------------------ */
const chapterText = ".chapterText";

/* ------------------------------
   Chapter 1
------------------------------ */
gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch01",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "100% top"
  }
})
.from(chapterText, { opacity: 0, duration: 1 })
.to(chapterText, { opacity: 1 })
.to("#Marie", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 100, y: 0 }, { x: 20, y: -100 }] },
  duration: 10,
  scale: 0.3,
  x: -40,
  y: -200
})
.to("#Julia", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 100, y: 0 }, { x: 20, y: -100 }] },
  duration: 10,
  scale: 0.3
}, "<2");

/* ------------------------------
   Leaf loop animation
------------------------------ */
gsap.timeline({ repeat: -1 })
.to(".leaf.no1", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 125, y: -400 }, { x: 1000, y: -200 }, { x: 2000, y: -450 }] },
  duration: 3,
  rotation: 360
})
.to(".leaf.no2", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 125, y: 150 }, { x: 1000, y: 100 }, { x: 2000, y: 150 }] },
  duration: 4,
  rotation: 680
}, "-=2.7")
.to(".leaf.no3", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 0, y: 500 }, { x: 1000, y: 100 }, { x: 2000, y: 500 }] },
  duration: 3,
  rotation: 680
}, "-=3.9")
.to(".leaf.no4", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 0, y: 500 }, { x: 1000, y: 100 }, { x: 2000, y: 500 }] },
  duration: 6,
  rotation: 1080
});

/* ------------------------------
   Chapter 2
------------------------------ */
gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch02",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "200% top"
  }
})
.from(chapterText, { opacity: 0, duration: 2 })
.to(chapterText, { opacity: 1 })
.to("#Ch02", { scale: 1.5, duration: 4 }, 2)
.from(".Arm", { y: 1000, rotate: 80 })
.to(".Arm", { y: -100, rotate: 50, duration: 3, ease: "none" })
.to(".Arm", { skewY: -20, ease: "none" })
.to(".Arm", { skewY: 0, duration: 3, repeat: 1, ease: "none" });

/* ------------------------------
   Chapter 3
------------------------------ */
gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch03",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "100% top"
  }
})
.from(".doorshadow", { rotation: 0, x: 0, y: 0, duration: 1 })
.to(".doorshadow", { rotation: 20, x: 1000, y: -1000 }, 3)
.from(chapterText, { opacity: 0, duration: 1 })
.to(chapterText, { opacity: 1 })
.from("#eyes", { opacity: 0 })
.to("#eyes", { opacity: 1 });

/* ------------------------------
   Chapter 4
------------------------------ */
gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch04",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "200% top"
  }
})
.from(chapterText, { opacity: 0, duration: 1 })
.to(chapterText, { opacity: 1 })
.from("#JuliaCh04", { x: -1000, duration: 5 })
.from("#QuestionMark", { opacity: 0 })
.to("#QuestionMark", { opacity: 1 })

// Morph removed (plugin unavailable)
// Replace with a dramatic scale + rotation
.to("#QuestionMark", {
  duration: 3,
  scale: 1.4,
  rotate: 20,
  ease: "power2.inOut"
})

.to("#JuliaCh04", { opacity: 0, duration: 2 })
.to("#Ch04", { scale: 1.5 })
.from("#JuliaFace", { x: -1000 })
.to("#QuestionMark", { opacity: 0 })
.to(chapterText, { opacity: 0 }, ">")
.to("#JuliaFace", { x: 200, duration: 5 })
.to("#Ch04", { scale: 3, x: -1000, duration: 5 }, "+=2")

// Flashing effect
.to("#Ch04", { opacity: 0.05, ease: "none" }, "-=2")
.to("#Ch04", { opacity: 1, ease: "none" })
.to("#Ch04", { opacity: 0.05, ease: "none" })
.to("#Ch04", { opacity: 1, ease: "none" })
.to("#Ch04", { opacity: 0.05, ease: "none" })

.from(".Jumpscare", { opacity: 0 })
.from("#monstre", { y: 1000, scaleX: 1 })
.to("#monstre", { scaleX: -1 })
.to("#Ch04", { opacity: 1 })
.to("#JuliaFace", { opacity: 0 }, ">")
.to("#Ch04", { scale: 1.2, x: 0, duration: 5 }, "+=7")
.to(".Jumpscare", { opacity: 0 }, "<")
.to("#monstre", { opacity: 0 })
.from(".MonsterArm", { opacity: 0, y: 500 })
.to(".MonsterArm", { y: -100, scale: 2 }, 2)
.to(".MonsterArm", { rotation: -150, x: -500, y: 900, duration: 4 })
.to(".blood", {
  transformOrigin: "0 0",
  motionPath: { path: [{ x: 0, y: 0 }, { x: 500, y: -500 }, { x: 1000, y: -25 }] },
  duration: 5
}, "-=2")
.to(".MonsterArm", { rotation: 0, x: 0, y: 0, duration: 4 })
.to(".MonsterArm", { rotation: -150, x: -500, y: 900, duration: 4 })
.from(".blood02", { scale: 0 })
.to(".blood02", { scale: 1, duration: 2 }, "-=1");

/* ------------------------------
   Chapter 5
------------------------------ */
gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch05",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
})
.from(chapterText, { opacity: 0, duration: 1 })
.to(chapterText, { opacity: 1 });

/* ------------------------------
   Chapter 6
------------------------------ */
gsap.set(".FloorBlood", { skewY: 50, rotate: -50 });

gsap.timeline({
  scrollTrigger: {
    trigger: "#Ch06",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "+=100%"
  }
})
.to("#MarieCh06", { x: 500 })
.from(chapterText, { opacity: 0, duration: 1 })
.to(chapterText, { opacity: 1 })
.from("#monstreCh06", { opacity: 0 })
.to("#monstreCh06", { opacity: 1 });

/* ------------------------------
   Intro scroll icon
------------------------------ */
gsap.to(".mouse", {
  y: 110,
  rotation: 180,
  duration: 1,
  delay: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
