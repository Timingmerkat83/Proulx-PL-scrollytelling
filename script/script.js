console.clear();
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const body = document.querySelector("body");

let event;
window.addEventListener("scroll", (event) => {
  body.classList.add("is-scrolling");
  setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
  console.log("La page scroll!");
});

// gsap.registerPlugin(MorphSVGPlugin);
// /* Animation du morphing*/
let questionMark = document.querySelector("#QuestionMark");
// let anim = gsap.to(questionMark, {
//   morphSVG: "#exclamation"
// });

const Scroll = document.querySelector(".mouse");

const chapterTextArr = document.querySelectorAll(".chapterText");
let chapter01 = document.querySelector("#Ch01");
let chapter02 = document.querySelector("#Ch02");
let chapter03 = document.querySelector("#Ch03");
let chapter04 = document.querySelector("#Ch04");
let chapter05 = document.querySelector("#Ch05");
let chapter06 = document.querySelector("#Ch06");

/* Animation chapitre 1 */
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#Ch01",
      pin: true,
      scrub: true,
      start: "top top",
      end: "100% top",
      toggleActions: "restart complete reset reverse",
      markers: false,
    },
  })
  .from(".chapterText", {
    duration: 1,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  })
  .to("#Marie", {
    transformOrigin: "0 0",
    motionPath: {
      path: [
        { x: 100, y: 0 },
        { x: 20, y: -100 },
      ],
    },
    duration: "10",
    scale: "0.300",
    x: "-40",
    y: "-200",
  })
  .to(
    "#Julia",
    {
      transformOrigin: "0 0",
      motionPath: {
        path: [
          { x: 100, y: 0 },
          { x: 20, y: -100 },
        ],
      },
      delay: 2,
      duration: "10",
      scale: "0.300",
    },
    "<"
  );

let leafAnim = gsap
  .timeline()
  .to(".leaf.no1", {
    transformOrigin: "0 0",
    motionPath: {
      path: [
        { x: 125, y: -400 },
        { x: 1000, y: -200 },
        { x: 2000, y: -450 },
      ],
    },
    duration: 3,
    rotation: "360",
    repeat: -1,
  })
  .to(
    ".leaf.no2",
    {
      transformOrigin: "0 0",
      motionPath: {
        path: [
          { x: 125, y: 150 },
          { x: 1000, y: 100 },
          { x: 2000, y: 150 },
        ],
      },
      duration: 4,
      rotation: "680",
      repeat: -1,
    },
    "-=0.3"
  )
  .to(
    ".leaf.no3",
    {
      transformOrigin: "0 0",
      motionPath: {
        path: [
          { x: 0, y: 500 },
          { x: 1000, y: 100 },
          { x: 2000, y: 500 },
        ],
      },
      duration: 3,
      rotation: "680",
      repeat: -1,
    },
    "-=0.1"
  )
  .to(".leaf.no4", {
    transformOrigin: "0 0",
    motionPath: {
      path: [
        { x: 0, y: 500 },
        { x: 1000, y: 100 },
        { x: 2000, y: 500 },
      ],
    },
    duration: 6,
    rotation: "1080",
    repeat: -1,
  });

/* Animation chapitre 2 */
gsap
  .timeline({
    x: "100%",
    scrollTrigger: {
      trigger: "#Ch02",
      pin: true,
      scrub: true,
      start: "top top",
      end: "200% top",
      toggleActions: "restart complete reset reverse",
      markers: false,
    },
  })
  .from(".chapterText", {
    duration: 3,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  })
  .to(
    "#Ch02",
    {
      scale: 1.5,
      duration: "4",
    },
    2
  )
  .from(".Arm", {
    y: 1000,
    rotate: 80,
  })
  .to(".Arm", {
    y: -100,
    rotate: 50,
    ease: "none",
    duration: "3",
  })
  .to(".Arm", {
    skewY: "-20deg",
    ease: "none",
  })
  .to(".Arm", {
    duration: "3",
    skewY: "0deg",
    ease: "none",
    repeat: 1,
  });
/* Animation chapitre 3 */
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#Ch03",
      pin: true,
      scrub: true,
      start: "top top",
      end: "100% top",
      toggleActions: "restart complete reset reverse",
      markers: false,
    },
  })

  .from(".doorshadow", {
    duration: 1,
    rotation: "0",
    x: 0,
    y: 0,
  })
  .to(
    ".doorshadow",
    {
      rotation: "20",
      x: 1000,
      y: -1000,
    },
    3
  )
  .from(".chapterText", {
    duration: 1,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  })
  .from("#eyes", {
    opacity: 0,
  })
  .to("#eyes", {
    opacity: 1,
  });
/* Animation chapitre 4 */
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#Ch04",
      pin: true,
      scrub: 0.5,
      start: "top top",
      end: "200% top",
      markers: false,
      toggleActions: "restart complete reset reverse",
      ease: "none",
    },
  })
  .from(".chapterText", {
    duration: 1,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  })
  .from("#JuliaCh04", {
    duration: 5,
    x: -1000,
  })
  .to("#QuestionMark", {
    opacity: 0,
  })
  .to("#QuestionMark", {
    opacity: 1,
    duration: 10,
    morphSVG: "#ExclamationPoint",
  })
  .to("#JuliaCh04", {
    opacity: 0,
    duration: "2",
  })
  .to("#Ch04", {
    scale: 1.5,
  })
  .from("#JuliaFace", {
    x: -1000,
  })
  .to("#QuestionMark", {
    opacity: 0,
  })
  .to(
    ".chapterText",
    {
      opacity: 0,
    },
    ">"
  )
  .to("#JuliaFace", {
    duration: 5,
    x: 200,
  })
  .to(
    "#Ch04",
    {
      duration: 5,
      scale: 3,
      x: -1000,
    },
    "+=2"
  )
  //Light Flashings
  .to(
    "#Ch04",
    {
      opacity: 0.05,
      ease: "none",
    },
    "-=2"
  )
  .to("#Ch04", {
    opacity: 1,
    ease: "none",
  })
  .to("#Ch04", {
    opacity: 0.05,
    ease: "none",
  })
  .to("#Ch04", {
    opacity: 1,
    ease: "none",
  })
  .to("#Ch04", {
    opacity: 0.05,
    ease: "none",
  })
  .from(".Jumpscare", {
    opacity: 0,
  })
  .from("#monstre", {
    y: 1000,
    scaleX: 1,
  })
  .to("#monstre", {
    scaleX: -1,
  })
  .to("#Ch04", {
    opacity: 1,
    ease: "none",
  })
  .to(
    "#JuliaFace",
    {
      opacity: 0,
    },
    ">"
  )
  .to(
    "#Ch04",
    {
      duration: 5,
      scale: 1.2,
      x: 0,
    },
    "+=7"
  )
  .to(
    ".Jumpscare",
    {
      opacity: 0,
    },
    "<"
  )
  .to("#monstre", {
    opacity: 0,
  })
  .from(".MonsterArm", {
    opacity: 0,
    y: 500,
  })
  .to(
    ".MonsterArm",
    {
      y: -100,
      scale: 2,
    },
    2
  )
  .to(".MonsterArm", {
    duration: "4",
    rotation: "-150deg",
    x: -500,
    y: 900,
  })
  .to(
    ".blood",
    {
      transformOrigin: "0 0",
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 500, y: -500 },
          { x: 1000, y: -25 },
        ],
      },
      duration: "5",
    },
    "-=2"
  )
  .to(".MonsterArm", {
    duration: "4",
    rotation: "0deg",
    x: 0,
    y: 0,
  })
  .to(".MonsterArm", {
    duration: "4",
    rotation: "-150deg",
    x: -500,
    y: 900,
  })
  .from(".blood02", {
    scale: 0,
  })
  .to(
    ".blood02",
    {
      scale: 1,
      duration: "2",
    },
    "-=1"
  );

/* Animation chapitre 5 */
gsap
  .timeline({
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#Ch05",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      pin: true,
      toggleActions: "restart complete reset reverse",
      markers: false,
    },
  })
  .from(".chapterText", {
    duration: 1,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  });
/* Animation chapitre 6 */
gsap.set(".FloorBlood", {
  skewY: "50deg",
  rotate: -50,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#Ch06",
      pin: true,
      scrub: 0.5,
      start: "top top",
      end: "+=100%",
      toggleActions: "restart complete reset reverse",
      markers: false,
    },
  })
  .to("#MarieCh06", {
    x: 500,
  })
  .from(".chapterText", {
    duration: 1,
    opacity: 0,
  })
  .to(".chapterText", {
    opacity: 1,
  })
  .from("#monstreCh06", {
    opacity: 0,
  })
  .to("#monstreCh06", {
    opacity: 1,
  });
/* Sélection du texte */

/* Animation de l'icône scroll de l'intro*/
gsap.to(".mouse", {
  duration: "1",
  delay: "0.5",
  y: "110px",
  rotation: "180",
  stagger: "0.1",
  repeat: "-1",
  yoyo: true,
});

document.addEventListener("click", function () {
  console.log("reset");
  anim.progress(0).pause();
  const myTimeout = setTimeout(function () {
    anim.play();
  }, 1000);
});
