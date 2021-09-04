const checkpoint = 100;
const subtitle_checkpoint = 175;

function pageScroll() {
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 0.1);
}

pageScroll();

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
    subtitle_opacity = 0 + currentScroll / checkpoint;
  } else if (subtitle_opacity !== 0) {
    subtitle_opacity = 1 - currentScroll / subtitle_checkpoint;
    text_opacity = 0 + currentScroll / subtitle_checkpoint;
  } else {
    opacity = 0;
    subtitle_opacity = 1;
  }
  document.querySelector(".fade").style.opacity = opacity;
  document.querySelector(".fade-sub-title").style.opacity = subtitle_opacity;
  document.querySelector(".down").style.opacity = text_opacity;
});