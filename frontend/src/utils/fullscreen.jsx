function enterFullscreen(element = document.documentElement) {
  if (element.requestFullscreen) {
    setTimeout(() => {
      element.requestFullscreen();
    }, 1000);
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export { enterFullscreen, exitFullscreen };