console.clear();

const body = document.querySelector("body");

window.addEventListener("scroll", (event) => {
  body.classList.add("is-scrolling");
  setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
  console.log("La page scroll!");
});

// gsap.registerPlugin(MorphSVGPlugin);
// /* Animation du morphing*/
// let questionMark = document.querySelector("#QuestionMark");
// let anim = gsap.to(questionMark, {
//   morphSVG: "#exclamation"
// });

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);
const Scroll = document.querySelector(".mouse");

const chapterTextArr = document.querySelectorAll(".chapterText");

/* Animation chapitre 1 */
let chapter01 = gsap.timeline().to(".no1", {
  scrollTrigger: {
    trigger: ".no1",
    pin: true,
    scrub: true,
    start: "top top",
    end: "+=200%",
    markers: true,
  },
});

gsap.to(".leaf", {
  transformOrigin: "0 0",
  motionPath: {
    path: [
      { x: 125, y: 150 },
      { x: 1000, y: 100 },
      { x: 2000, y: 150 },
    ],
  },
  duration: 3,
  rotation: "360",
  repeat: -1,
});

/* Animation chapitre 2 */
let chapter02 = gsap.timeline().to(".no2", {
  scrollTrigger: {
    trigger: ".no2",
    pin: true,
    scrub: 0.5,
    end: "+=200%",
    markers: true,
  },
});
/* Animation chapitre 3 */
let chapter03 = gsap.timeline().to(".no3", {
  scrollTrigger: {
    trigger: ".no3",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "+=100%",
    markers: true,
  },
});
/* Animation chapitre 4 */
let chapter04 = gsap.timeline().to(".no4", {
  scrollTrigger: {
    trigger: ".no4",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "+=100%",
    markers: true,
  },
});
/* Animation chapitre 5 */
let chapter05 = gsap.timeline().to(".no5", {
  scrollTrigger: {
    trigger: ".no5",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "+=100%",
    markers: true,
  },
});
/* Animation chapitre 6 */
let chapter06 = gsap.timeline().to(".no6", {
  scrollTrigger: {
    trigger: ".no6",
    pin: true,
    scrub: 0.5,
    start: "top top",
    end: "+=100%",
    markers: true,
  },
});
/* Sélection du texte */

/* Animation de l'icône scroll de l'intro*/
gsap.to(".mouse", {
  duration: "1",
  delay: "0.5",
  y: "110px",
  rotation: "180",
  stagger: "0.1",
  yoyo: true,
  repeat: "-1",
});

document.addEventListener("click", function () {
  console.log("reset");
  anim.progress(0).pause();
  const myTimeout = setTimeout(function () {
    anim.play();
  }, 1000);
});
