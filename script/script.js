/* ------------------------------
   GSAP Setup
------------------------------ */
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.defaults({
  ease: "power2.out",
  duration: 1
});

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

/* ------------------------------
   Smooth scroll state
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
   Helpers
------------------------------ */
const q = gsap.utils.selector(document);

function createScrollTimeline(trigger, options = {}) {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      pin: true,
      scrub: 1,
      start: "top top",
      invalidateOnRefresh: true,
      ...options
    }
  });
}

/* ------------------------------
   Global Elements
------------------------------ */
const chapterText = q(".chapterText");

/* ------------------------------
   Chapter 1
------------------------------ */
const ch1 = createScrollTimeline("#Ch01", { end: "100% top" });

ch1
  .from(chapterText, { opacity: 0 })
  .to(chapterText, { opacity: 1 })
  .to("#Marie", {
    transformOrigin: "0 0",
    motionPath: {
      path: [{ x: 100, y: 0 }, { x: 20, y: -100 }]
    },
    scale: 0.3,
    x: -40,
    y: -200,
    duration: 8
  })
  .to("#Julia", {
    transformOrigin: "0 0",
    motionPath: {
      path: [{ x: 100, y: 0 }, { x: 20, y: -100 }]
    },
    scale: 0.3,
    duration: 8
  }, "<2");


gsap.utils.toArray(".leaf").forEach((leaf, i) => {
  gsap.to(leaf, {
    motionPath: {
      path: [
        { x: 0, y: gsap.utils.random(-300, 500) },
        { x: 1000, y: gsap.utils.random(-200, 200) },
        { x: 2000, y: gsap.utils.random(-400, 400) }
      ]
    },
    rotation: gsap.utils.random(360, 1080),
    duration: gsap.utils.random(3, 6),
    repeat: -1,
    delay: i * 0.1,
    ease: "none"
  });
});

/* ------------------------------
   Chapter 2
------------------------------ */
const ch2 = createScrollTimeline("#Ch02", { end: "200% top" });

ch2
  .from(chapterText, { opacity: 0, duration: 3 })
  .to(chapterText, { opacity: 1 })
  .to("#Ch02", { scale: 1.5, duration: 4 }, 2)
  .from(".Arm", { y: 1000, rotate: 80 })
  .to(".Arm", { y: -100, rotate: 50, duration: 3, ease: "none" })
  .to(".Arm", { skewY: -20, ease: "none" })
  .to(".Arm", { skewY: 0, duration: 3, repeat: 2, ease: "none" });

/* ------------------------------
   Chapter 3
------------------------------ */
const ch3 = createScrollTimeline("#Ch03", { end: "100% top" });

ch3
  .from(".doorshadow", { rotation: 0, x: 0, y: 0 })
  .to(".doorshadow", { rotation: 20, x: 1000, y: -1000 }, 3)
  .from(chapterText, { opacity: 0 })
  .to(chapterText, { opacity: 1 })
  .from("#eyes", { opacity: 0 })
  .to("#eyes", { opacity: 1 });

/* ------------------------------
   Chapter 4 (Enhanced Horror)
------------------------------ */
const ch4 = createScrollTimeline("#Ch04", {
  end: "200% top",
  scrub: 0.5
});

ch4
  .from(chapterText, { opacity: 0 })
  .to(chapterText, { opacity: 1 })
  .from("#JuliaCh04", { x: -1000, duration: 5 })
  .from("#QuestionMark", { opacity: 0 })
  .to("#QuestionMark", { opacity: 1 })
  .to("#QuestionMark", {
    scale: 1.4,
    rotate: 20,
    duration: 3
  })

  // transition
  .to("#JuliaCh04", { opacity: 0, duration: 2 })
  .to("#Ch04", { scale: 1.5 })
  .from("#JuliaFace", { x: -1000 })
  .to("#QuestionMark", { opacity: 0 })

  // zoom + tension
  .to("#JuliaFace", { x: 200, duration: 5 })
  .to("#Ch04", { scale: 3, x: -1000, duration: 5 }, "+=2")

  // flash effect (stronger)
  .to("#Ch04", { filter: "brightness(5) blur(10px)", duration: 0.1 })
  .to("#Ch04", { filter: "brightness(1) blur(0px)", duration: 0.3 })
  .to("#Ch04", { opacity: 0.05 })
  .to("#Ch04", { opacity: 1 })
  .to("#Ch04", { opacity: 0.05 })
  .to("#Ch04", { opacity: 1 })

  // jumpscare
  .from(".Jumpscare", { opacity: 0 })
  .from("#monstre", { y: 1000 })
  .to("#monstre", { scaleX: -1 })

  // reset
  .to("#JuliaFace", { opacity: 0 })
  .to("#Ch04", { scale: 1.2, x: 0, duration: 5 }, "+=5")

  // monster arm attack
  .from(".MonsterArm", { opacity: 0, y: 500 })
  .to(".MonsterArm", { y: -100, scale: 2 }, 2)
  .to(".MonsterArm", { rotation: -150, x: -500, y: 900, duration: 4 })

  // blood effects
  .to(".blood", {
    transformOrigin: "0 0",
    motionPath: {
      path: [{ x: 0, y: 0 }, { x: 500, y: -500 }, { x: 1000, y: -25 }]
    },
    duration: 5
  }, "-=2")

  .to(".MonsterArm", { rotation: 0, x: 0, y: 0 })
  .to(".MonsterArm", { rotation: -150, x: -500, y: 900 })

  .from(".blood02", { scale: 0 })
  .to(".blood02", { scale: 1, duration: 2 }, "-=1");

/* ------------------------------
   Chapter 5
------------------------------ */
createScrollTimeline("#Ch05", {
  start: "top bottom",
  end: "bottom top"
})
  .from(chapterText, { opacity: 0 })
  .to(chapterText, { opacity: 1 });

/* ------------------------------
   Chapter 6
------------------------------ */
gsap.set(".FloorBlood", { skewY: 50, rotate: -50 });

const ch6 = createScrollTimeline("#Ch06", { end: "+=100%", scrub: 0.5 });

ch6
  .to("#MarieCh06", { x: 500 })
  .from(chapterText, { opacity: 0 })
  .to(chapterText, { opacity: 1 })
  .from("#monstreCh06", { opacity: 0 })
  .to("#monstreCh06", { opacity: 1 });

/* ------------------------------
   Scroll Icon
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

/* ------------------------------
   Bonus Effects
------------------------------ */

// subtle parallax
gsap.to(".background", {
  y: -200,
  scrollTrigger: {
    scrub: true
  }
});

// heartbeat tension
gsap.to("#JuliaFace", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 0.3,
  ease: "power1.inOut"
});