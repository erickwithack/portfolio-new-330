function activateDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function openLinkedIn() {
  var url = "https://www.linkedin.com/in/erick-meikoki-ba4426158/";
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
}

function openGitHub() {
  var url = "https://github.com/erickwithack";
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
}

function directToMusicPage() {
  var url = "https://erickwithack.github.io/music-store/";
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
}
