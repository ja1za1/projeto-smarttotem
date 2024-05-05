const videos = document.querySelectorAll("video");

for (const video of videos) {
  let playerVideo = video.nextElementSibling;

  const iconePlay = playerVideo.querySelector(".icone-play");
  const iconePause = playerVideo.querySelector(".icone-pause");
  const iconeVoltar = playerVideo.querySelector(".voltar-video");
  const iconeAvancar = playerVideo.querySelector(".avancar-video");
  const botaoPlayPause = playerVideo.querySelector(".play-pause");

  iconeVoltar.addEventListener("click", voltar);
  iconeAvancar.addEventListener("click", avancar);
  botaoPlayPause.addEventListener("click", reproduzir);
  video.addEventListener("click", reproduzir);
  iconePause.style.display = "none";

  video.addEventListener("timeupdate", () => {
    let tempoCorrente = (video.currentTime / video.duration) * 100;
    if (video.ended) {
      iconePlay.style.display = "block";
      iconePause.style.display = "none";
      video.currentTime = 0;
    }
    playerVideo.querySelector(".inner").style.width = `${tempoCorrente}%`;
  });

  function reproduzir() {
    if (video.paused) {
      iconePlay.style.display = "none";
      iconePause.style.display = "block";
      video.play();
    } else {
      iconePlay.style.display = "block";
      iconePause.style.display = "none";
      video.pause();
    }
  }

  function voltar() {
    video.currentTime -= 5;
  }

  function avancar() {
    video.currentTime += 5;
  }
}
