const fullScreenElement = document.querySelector("#fullscreen-div");
document
  .querySelector(".toggle-fullscreen-btn")
  .addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      fullScreenElement.requestFullscreen();
    }
  });