function getParametro(nomeParametro) {
  const url = window.location.search;
  const parametrosUrl = new URLSearchParams(url);
  return parametrosUrl.get(nomeParametro);
}

function desenharCirculoMapa(coordenadasCirculo) {
  let imagemMapa = document.getElementById("imagem-mapa");
  let canvasImagem = document.getElementById("canvas-imagem");
  let textoMapa = document.getElementById("texto-mapa");
  textoMapa.classList.add("visually-hidden");

  canvasImagem.style.position = "absolute";
  canvasImagem.style.left = imagemMapa.offsetLeft + "px";
  canvasImagem.style.top = imagemMapa.offsetTop + "px";

  let ctx = canvasImagem.getContext("2d");
  ctx.beginPath();
  ctx.arc(
    coordenadasCirculo[0],
    coordenadasCirculo[1],
    coordenadasCirculo[2],
    0,
    2 * Math.PI,
    false
  );
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
  canvasImagem.classList.remove("visually-hidden");
}

// Verifica se há um parâmetro na URL
const parametroAudio = getParametro("audio");
const parametroCoordenadas = getParametro("coordenadas");

if (parametroAudio) {
  new Audio(parametroAudio).play();
} else if (parametroCoordenadas) {
  const coordenadas = parametroCoordenadas.split(",");
  desenharCirculoMapa(coordenadas);
}
