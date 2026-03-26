function enterFullscreen(element = document.documentElement) {
  if (element.requestFullscreen || !document.fullscreenElement) {
    element.requestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export { enterFullscreen, exitFullscreen };