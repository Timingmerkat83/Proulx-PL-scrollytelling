console.clear();

const body = document.querySelector("body");

window.addEventListener("scroll", (event) => {
  body.classList.add("is-scrolling");
  setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
  console.log("La page scroll!");
});

gsap.registerPlugin(MorphSVGPlugin);
/* Animation du morphing*/
let questionMark = document.querySelector("#QuestionMark");
let anim = gsap.to(questionMark, {
  morphSVG: "#exclamation"
});

gsap.registerPlugin(ScrollTrigger);
const Scroll = document.querySelector(".mouse");


/* Animation chapitre 1 */

/* Animation chapitre 2 */

/* Animation chapitre 3 */

/* Animation chapitre 4 */

/* Animation chapitre 5 */

/* Animation chapitre 6 */

const sections = gsap.utils.toArray("#chapitre").forEach(function(elem){

  /* Sélection du texte */
  const text = elem.querySelectorAll(".chapterText");
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: elem,
    pin: elem,
    scrub:0.5,
    start: "top top",
    end: '+=200%',
    markers: true,
  },
})
.from(text, {})
});

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



document.addEventListener("click", function() {
  console.log("reset");
  anim.progress(0).pause();
  const myTimeout = setTimeout(function() {
    anim.play();
  }, 1000);
});

