const body = document.querySelector("body");

window.addEventListener("scroll", (event) => {
  body.classList.add("is-scrolling");
  setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
  console.log("La page scroll!");
});

gsap.registerPlugin(ScrollTrigger);
const Scroll = document.querySelector(".mouse");

gsap.registerPlugin(MorphSVGPlugin);

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
