const LIMITE_AUDIOS = 10;
const DELAY_PADRAO_REPRODUCAO_AUDIO = 500;
const audios = [];
const imagemBotao = document.getElementById("imagem-botao-reproduzir-audio");
const textoReproduzir = document.getElementById("texto-reproduzir");

function obterParametro(nomeParametro) {
  const url = window.location.search;
  const parametrosUrl = new URLSearchParams(url);
  return parametrosUrl.get(nomeParametro);
}

function obterNomeDaPagina() {
  const url = window.location.href;
  const partesDaUrl = url.split("/");
  const nomeDaPaginaComExtensao = partesDaUrl[partesDaUrl.length - 1];
  const nomeDaPagina = nomeDaPaginaComExtensao.split(".")[0];
  if (nomeDaPagina === "template") {
    return obterParametro("local");
  }
  return nomeDaPagina;
}

function extrairNumeroDoTexto(url) {
  const match = url.match(/-texto(\d+)\.mp3/);
  return match ? parseInt(match[1]) : null;
}

function carregarAudios() {
  const nomeDaPagina = obterNomeDaPagina();
  for (let i = 1; i <= LIMITE_AUDIOS; i++) {
    const audio = new Audio(
      `../../assets/audios/${nomeDaPagina}-texto${i}.mp3`
    );

    audio.addEventListener("loadeddata", () => {
      audios.push(audio);
    });
  }
}

function ordenarArrayAudios() {
  audios.sort((audioA, audioB) => {
    const numeroDoTextoA = extrairNumeroDoTexto(audioA.currentSrc);
    const numeroDoTextoB = extrairNumeroDoTexto(audioB.currentSrc);

    return numeroDoTextoA - numeroDoTextoB;
  });
}

function checarAudiosPausados() {
  return audios.every((audio) => audio.paused);
}

function obterAudioTocando() {
  return audios.find((audio) => !audio.paused);
}

function obterSlideCorrente() {
  try {
    const carrosel = new bootstrap.Carousel("#carrosel");
    const slidesCarrosel = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slidesCarrosel.length; i++) {
      if (slidesCarrosel[i].classList.contains("active")) {
        return i;
      }
    }
  } catch (error) {
    return 0;
  }
}

function instanciarCarrosel(idCarrosel) {
  try {
    return new bootstrap.Carousel(idCarrosel);
  } catch (error) {
    return null;
  }
}

function checarUltimoAudio(indiceAudio) {
  return indiceAudio + 1 === audios.length;
}

function finalizarReproducaoAudio() {
  imagemBotao.src = "../../assets/images/som.png";
  textoReproduzir.innerHTML = "Reproduzir texto em aúdio";
}

function pararReproducaoAudio() {
  const audioTocando = obterAudioTocando();
  if (audioTocando) {
    audioTocando.pause();
    audioTocando.currentTime = 0;
    imagemBotao.src = "../../assets/images/som.png";
    textoReproduzir.innerHTML = "Reproduzir texto em aúdio";
  }
}

function obterVideoReproduzindo() {
  let videos = document.getElementsByTagName("video");

  for (const video of videos) {
    if (!video.paused) {
      return video;
    }
  }
}

function substituirIconeReproducaoVideo(video) {
  let playerVideo = video.nextElementSibling;
  playerVideo.querySelector(".icone-play").style.display = "block";
  playerVideo.querySelector(".icone-pause").style.display = "none";
}

function pausarVideoEmReproducao() {
  let videoReproduzindo = obterVideoReproduzindo();
  if (videoReproduzindo) {
    videoReproduzindo.pause();
    substituirIconeReproducaoVideo(videoReproduzindo);
  }
}

function pausarVideoAoReproduzirVideo() {
  let videos = Array.from(document.getElementsByTagName("video"));

  videos.forEach((video) => {
    video.onplay = (e) => {
      e.preventDefault();
      videos.forEach((rodando) => {
        if (video === rodando) {
          rodando.play();
        } else {
          rodando.pause();
          substituirIconeReproducaoVideo(rodando);
        }
      });
    };
  });
}

function reproduzirProximoAudio(carrosel, posicaoAudioCorrente) {
  // O slide corrente do carrosel sempre está na mesma posição que o aúdio que está tocando.
  // Se o aúdio da posição 0 do array estiver sendo reproduzido, significa que o slide 0
  // estará sendo exibido, se for o aúdio 1 o slide 1 e assim por diante.

  carrosel.to(posicaoAudioCorrente + 1);
  setTimeout(
    () => audios[posicaoAudioCorrente + 1].play(),
    DELAY_PADRAO_REPRODUCAO_AUDIO
  );
}

function adicionarEventoAoFinalizarAudios(posicaoAudioInicial, carrosel) {
  for (let i = posicaoAudioInicial; i < audios.length; i++) {
    if (checarUltimoAudio(i)) {
      audios[i].addEventListener("ended", finalizarReproducaoAudio);
    } else {
      audios[i].addEventListener("ended", () =>
        reproduzirProximoAudio(carrosel, i)
      );
    }
  }
}

function adicionarEventoVideos(videos) {
  for (const video of videos) {
    video.addEventListener("play", () => {
      pararReproducaoAudio();
      pausarVideoAoReproduzirVideo();
    });
  }
}

document.getElementById("btn-reproduzir-som").addEventListener("click", () => {
  if (checarAudiosPausados()) {
    pausarVideoEmReproducao();
    ordenarArrayAudios();
    const slideCorrente = obterSlideCorrente();
    audios[slideCorrente].play();
    imagemBotao.src = "../../assets/images/stop.png";
    textoReproduzir.innerHTML = "Reproduzindo...";
    const carrosel = instanciarCarrosel("#carrosel");

    adicionarEventoAoFinalizarAudios(slideCorrente, carrosel);
  } else {
    pararReproducaoAudio();
  }
});

window.onload = () => {
  carregarAudios();
  const videos = document.getElementsByTagName("video");
  if (videos.length > 0) {
    adicionarEventoVideos(videos);
  }
  const carrosel = document.getElementById("carrosel");
  if (carrosel) {
    carrosel.addEventListener("slide.bs.carousel", (e) => {
      const slideCorrente = e.to;
      if (slideCorrente > audios.length - 1) {
        document
          .getElementById("texto-para-audio")
          .classList.add("visually-hidden");
      } else {
        document
          .getElementById("texto-para-audio")
          .classList.remove("visually-hidden");
      }

      pausarVideoEmReproducao();
    });
  }
};
