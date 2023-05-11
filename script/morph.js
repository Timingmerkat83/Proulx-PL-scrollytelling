// Ce fichier est uniquement un test pour le morphing
//gsap.registerPlugin(MorphSVGPlugin);

//let anim = gsap.to("#QuestionMark", {
//  morphSVG: "#ExclamationPoint",
//});

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#path0");
document.addEventListener("click", function () {
  console.log("reset");
  anim.progress(0).pause();
  const myTimeout = setTimeout(function () {
    anim.play();
  }, 1000);
});
