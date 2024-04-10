const palavrasEducacaoAmbiental = ["educação ambiental", "sustentabilidade", "reciclagem", "conservação", "ecossistema", "biodiversidade", "poluição", "desenvolvimento sustentável", "energia renovável", "preservação", "ecologia", "redução de resíduos"]

const palavrasSucessaoEcologica = ["sucessão ecológica", "ecese", "organismos pioneiros"]

const palavrasIncendio = ["incêndio", "fogo", "queimada", "chamas", "incêndio florestal", "ignição", "devastação", "fogaréu"]

const palavrasAtividadeHumana = ["atividade humana", "intervenção humana", "ações humanas", "humana", "humanos"]

const palavrasQualidadeAgua = ["qualidade da água", "água", "água potável", "beber água", "consumir água"]

const palavrasEspecieArborea = ["classificação arbórea", "classificação árvores", "arbórea", "pioneiras", "secundárias", "clímax"]

const palavrasEspecieFlora = ["espécies de flora", ,"espécies de Flora", "tipos de plantas", "flora", "espécies de planta", "árvores", "árvore"]

const palavrasClassificacaoGeologica = ["classificação geológica", "classificação solo", "análise do solo", "análise solo", "geologia", "topografia", "solo"]

const palavrasEspecieFauna = ["espécies de fauna", "fauna", "animais", "aves", "mamíferos", "répteis", "anfíbios", "passarinho", "passarinhos", "capivara", "tipo de animais", "tipos de animais", "sapo", "cobra", "tipo de animal", "animal"]

const palavrasBioma = ["bioma", "vegetação", "fragmento florestal"]

const palavrasClima = ["clima", "úmido"]

const palavrasContextoHistorico = ["contexto histórico", "história", "estação sericícola", "seda", "bituca"]

const palavrasLagoaQuatro = ["lagoa 4", "Lagoa 4", "local mais próximo", "lugar mais próximo", "local mais perto", "lugar mais perto"]

const palavrasConstrucaoHistorica = ["construção histórica", "construção"]

const palavrasLagoaTres = ["lagoa 3", "Lagoa 3"]

const palavrasReflorestamento = ["reflorestamento", "Reflorestamento"]

const palavrasRuínas = ["ruínas", "Ruínas"]

const palavrasFragmentoMata = ["fragmento", "mata atlântica"]

const palavrasLagoaUm = ["lagoa 1", "Lagoa 1"]


const botaoFalar = document.getElementById("btn-reconhecer-voz")
const botaoConfirmouFala = document.getElementById("botaoConfirmouTexto")
const textoConfirmacaoFala = document.getElementById("confirmacaoTexto")
const modalConfirmacao = new bootstrap.Modal(document.getElementById("modalConfirmacao"))

const caminhoPastaAudio = "../../audio/"
const audioRespostaPadrao = "resposta-padrao.mp3"
const audioEducacaoAmbiental = "educacao-ambiental.mp3"
const audioSucessaoEcologia = "sucessao-ecologica.mp3"
const audioIncendio = "incendio.mp3"
const audioAtividadeHumana = "atividades-humanas.mp3"
const audioQualidadeAgua = "qualidade-agua.mp3"
const audioEspecieArborea = "classificacao-arborea.mp3"
const audioEspecieFlora = "especies-flora.mp3"
const audioClassificacaoGeologica = "classificacao-geologica.mp3"
const audioEspecieFauna = "especies-fauna.mp3"
const audioBioma = "bioma.mp3"
const audioClima = "clima.mp3"
const audioContextoHistorico = "contexto-historico.mp3"
const audioLagoaQuatro = "lagoa4.mp3"
const audioConstrucaoHistorica = "construcao-historica.mp3"
const audioLagoaTres = "lagoa3.mp3"
const audioReflorestamento = "areas-reflorestamento.mp3"
const audioRuinas = "ruinas.mp3"
const audioFragmentoMata = "fragmento-mata-atlantica.mp3"
const audioLagoaUm = "lagoa1.mp3"

//Verifica qual biblioteca está sendo utilizada pelo navagedor
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let reconhecimentoVoz = new SpeechRecognition()

//Define se a gravação é continua ou não
reconhecimentoVoz.continuos = true

//Especifica a linguagem a ser usada
reconhecimentoVoz.lang = 'pt-BR'

botaoFalar.addEventListener("click", () => {
    try {
        reconhecimentoVoz.start()
    } catch (erro) {
        reconhecimentoVoz.stop()
    }
}, false)

botaoConfirmouFala.addEventListener('click', () => {
    modalConfirmacao.hide()

    var textoFaladoUsuario = textoConfirmacaoFala.innerHTML

    let nomeArquivoAudioSerTocado = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/resposta-padrao.mp3"

    if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEducacaoAmbiental)) {
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioEducacaoAmbiental
        window.location.href = "./resources/html/educacao-ambiental.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasSucessaoEcologica)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioSucessaoEcologia
        window.location.href = "./resources/html/sucessao-ecologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasIncendio)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioIncendio
        window.location.href = "./resources/html/incendio-criminoso.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasAtividadeHumana)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioAtividadeHumana
        window.location.href = "./resources/html/atividades-humanas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasQualidadeAgua)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioQualidadeAgua
        window.location.href = "./resources/html/classificacao-agua.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieArborea)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioEspecieArborea
        window.location.href = "./resources/html/especies-arboreas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFlora)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioEspecieFlora
        window.location.href = "./resources/html/especies-flora-mapa.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClassificacaoGeologica)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioClassificacaoGeologica
        window.location.href = "./resources/html/classificacao-geologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFauna)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioEspecieFauna
        window.location.href = "./resources/html/especies-fauna.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasBioma)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioBioma
        window.location.href = "./resources/html/bioma-mata-atlantica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClima)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioClima
        window.location.href = "./resources/html/clima-cidade.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasContextoHistorico)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioContextoHistorico
        window.location.href = "./resources/html/contextualizacao-historica.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaQuatro)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioLagoaQuatro
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasConstrucaoHistorica)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioConstrucaoHistorica
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaTres)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioLagoaTres
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasReflorestamento)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioReflorestamento
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasRuínas)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioRuinas
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasFragmentoMata)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioFragmentoMata
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaUm)){
        nomeArquivoAudioSerTocado = caminhoPastaAudio + audioLagoaUm
        window.location.href = "#mapa"
    }

    tocarArquivoAudio(nomeArquivoAudioSerTocado)
})

reconhecimentoVoz.addEventListener('result', function (evt) {
    var textoFaladoUsuario = evt.results[0][0].transcript
    textoConfirmacaoFala.innerHTML = textoFaladoUsuario
    modalConfirmacao.show()
})

reconhecimentoVoz.addEventListener('audiostart', function (){
    const textoGravando = document.getElementById("gravando-pergunta-voz")
    if(textoGravando.classList.contains("invisible")){
        textoGravando.classList.remove("invisible")
    }
})

reconhecimentoVoz.addEventListener('audioend', function (){
    const textoGravando = document.getElementById("gravando-pergunta-voz")
    if(!textoGravando.classList.contains("invisible")){
        textoGravando.classList.add("invisible")
    }
})

function tocarArquivoAudio(nomeArquivoAudio) {
    console.log(nomeArquivoAudio)
    const arquivoAudio = new Audio(nomeArquivoAudio)
    const promise = arquivoAudio.play();
    if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.
    promise
        .then(() => {
            console.log("audio tocando")
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function verificarPossuiPalavra(textoFalado, listaPalavras){
    return listaPalavras.some(palavra => textoFalado.includes(palavra))
}
