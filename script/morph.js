// Ce fichier est uniquement un test pour le morphing
//gsap.registerPlugin(MorphSVGPlugin);

//let anim = gsap.to("#QuestionMark", {
//  morphSVG: "#ExclamationPoint",
//});

gsap.registerPlugin(DrawSVGPlugin);

TweenLite.to("#path", 1, {
  drawSVG: "40% 60%",
  delay: 0.5,
});
document.addEventListener("click", function () {
  console.log("reset");
  anim.progress(0).pause();
  const myTimeout = setTimeout(function () {
    anim.play();
  }, 1000);
});
