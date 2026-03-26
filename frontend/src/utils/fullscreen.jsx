function enterFullscreen(element = document.documentElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function isFullscreen() {
  return document.fullscreenElement != null;
}

export { enterFullscreen, exitFullscreen, isFullscreen };