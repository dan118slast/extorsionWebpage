
document.addEventListener("DOMContentLoaded", function () {
  const audioTriggers = document.querySelectorAll(".audio-trigger");

  audioTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const audioSrc = this.getAttribute("data-src");
      const audio = new Audio(audioSrc);

      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
