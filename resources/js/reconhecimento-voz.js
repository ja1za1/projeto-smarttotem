const botaoFalar = document.getElementById("btn-reconhecer-voz");
const botaoConfirmouFala = document.getElementById("botaoConfirmouTexto");
const textoConfirmacaoFala = document.getElementById("confirmacaoTexto");
const modalConfirmacao = new bootstrap.Modal(
  document.getElementById("modalConfirmacao")
);
const audioRespostaPadrao = "../../assets/audios/resposta-padrao.mp3";

//Verifica qual biblioteca está sendo utilizada pelo navagedor
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let reconhecimentoVoz = new SpeechRecognition();

//Define se a gravação é continua ou não
reconhecimentoVoz.continuos = true;

//Especifica a linguagem a ser usada
reconhecimentoVoz.lang = "pt-BR";

botaoFalar.addEventListener(
  "click",
  () => {
    try {
      botaoFalar.classList.remove("pulando");
      reconhecimentoVoz.start();
    } catch (erro) {
      botaoFalar.classList.add("pulando");
      reconhecimentoVoz.stop();
    }
  },
  false
);

botaoConfirmouFala.addEventListener("click", async () => {
  modalConfirmacao.hide();

  var textoFaladoUsuario = textoConfirmacaoFala.innerHTML;
  let nomeArquivoAudioSerTocado = audioRespostaPadrao;
  let localRedirecionamento = "";
  let redirecionarMapa = false;

  for (const tipoConteudo of TIPOS_CONTEUDO) {
    for (const conteudo of tipoConteudo) {
      if (verificarPossuiPalavra(textoFaladoUsuario, conteudo["palavras"])) {
        nomeArquivoAudioSerTocado = conteudo["audio"];
        localRedirecionamento = conteudo["pagina"];
        redirecionarMapa = conteudo["mapa"];
      }
    }
  }

  if (redirecionarMapa) {
    window.location.href = `${localRedirecionamento}?audio=${nomeArquivoAudioSerTocado}`;
  } else if (localRedirecionamento) {
    await tocarArquivoAudio(new Audio(nomeArquivoAudioSerTocado));
    window.location.href = localRedirecionamento;
  } else {
    tocarArquivoAudio(new Audio(nomeArquivoAudioSerTocado));
  }
});

reconhecimentoVoz.addEventListener("result", function (evt) {
  var textoFaladoUsuario = evt.results[0][0].transcript;
  textoConfirmacaoFala.innerHTML = textoFaladoUsuario;
  modalConfirmacao.show();
});

reconhecimentoVoz.addEventListener("audiostart", function () {
  const textoGravando = document.getElementById("gravando-pergunta-voz");
  if (textoGravando.classList.contains("invisible")) {
    textoGravando.classList.remove("invisible");
  }
});

reconhecimentoVoz.addEventListener("audioend", function () {
  const textoGravando = document.getElementById("gravando-pergunta-voz");
  if (!textoGravando.classList.contains("invisible")) {
    textoGravando.classList.add("invisible");
  }
});

function tocarArquivoAudio(arquivoAudio) {
  return new Promise((resposta) => {
    arquivoAudio.play();
    arquivoAudio.onended = resposta;
  });
}

function verificarPossuiPalavra(textoFalado, listaPalavras) {
  return listaPalavras.some((palavra) =>
    textoFalado.toLowerCase().includes(palavra.toLowerCase())
  );
}

function verificarFalouPlanta(textoFalado) {
  palavras = textoFalado.split(" ");
  for (palavra of palavras) {
    palavaraMinusculo = palavra.toLowerCase();
    if (palavaraMinusculo in PLANTAS) {
      return palavaraMinusculo;
    }
  }
  return null;
}
