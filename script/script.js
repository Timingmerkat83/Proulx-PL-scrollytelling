gsap.registerPlugin(ScrollTrigger);
const Scroll = document.querySelector(".mouse");

const fullScreenElement = document.querySelector("#fullscreen-div");
document.querySelector('.toggle-fullscreen-btn').addEventListener("click", () => {
if (document.fullscreenElement) {
    document.exitFullscreen();
 } else {
    fullScreenElement.requestFullscreen();
 }
});
/* Animation de l'icône scroll de l'intro*/
gsap.to('.mouse',{
duration: '1',
delay: '0.5',
y: '110px',
rotation: '180',
stagger: '0.1',
yoyo: true,
repeat: '-1'
});