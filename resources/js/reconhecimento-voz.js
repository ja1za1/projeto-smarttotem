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

const audioRespostaPadrao = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/resposta-padrao.mp3"
const audioEducacaoAmbiental = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/educacao-ambiental.mp3"
const audioSucessaoEcologia = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/sucessao-ecologica.mp3"
const audioIncendio = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/incendio.mp3"
const audioAtividadeHumana = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/atividades-humanas.mp3"
const audioQualidadeAgua = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/qualidade-agua.mp3"
const audioEspecieArborea = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/classificacao-arborea.mp3"
const audioEspecieFlora = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/especies-flora.mp3"
const audioClassificacaoGeologica = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/classificacao-geologica.mp3"
const audioEspecieFauna = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/especies-fauna.mp3"
const audioBioma = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/bioma.mp3"
const audioClima = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/clima.mp3"
const audioContextoHistorico = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/contexto-historico.mp3"
const audioLagoaQuatro = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/lagoa4.mp3"
const audioConstrucaoHistorica = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/construcao-historica.mp3"
const audioLagoaTres = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/lagoa3.mp3"
const audioReflorestamento = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/areas-reflorestamento.mp3"
const audioRuinas = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/ruinas.mp3"
const audioFragmentoMata = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/fragmento-mata-atlantica.mp3"
const audioLagoaUm = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/lagoa1.mp3"

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
    let nomeArquivoAudioSerTocado = audioRespostaPadrao
    let redirecionamento = ""

    if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEducacaoAmbiental)) {
        nomeArquivoAudioSerTocado = audioEducacaoAmbiental
        redirecionamento = "./resources/html/educacao-ambiental.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasSucessaoEcologica)){
        nomeArquivoAudioSerTocado = audioSucessaoEcologia
        redirecionamento = "./resources/html/sucessao-ecologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasIncendio)){
        nomeArquivoAudioSerTocado = audioIncendio
        redirecionamento = "./resources/html/incendio-criminoso.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasAtividadeHumana)){
        nomeArquivoAudioSerTocado = audioAtividadeHumana
        redirecionamento = "./resources/html/atividades-humanas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasQualidadeAgua)){
        nomeArquivoAudioSerTocado = audioQualidadeAgua
        redirecionamento = "./resources/html/classificacao-agua.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieArborea)){
        nomeArquivoAudioSerTocado = audioEspecieArborea
        redirecionamento = "./resources/html/especies-arboreas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFlora)){
        nomeArquivoAudioSerTocado = audioEspecieFlora
        redirecionamento = "./resources/html/especies-flora-mapa.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClassificacaoGeologica)){
        nomeArquivoAudioSerTocado = audioClassificacaoGeologica
        redirecionamento = "./resources/html/classificacao-geologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFauna)){
        nomeArquivoAudioSerTocado = audioEspecieFauna
        redirecionamento = "./resources/html/especies-fauna.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasBioma)){
        nomeArquivoAudioSerTocado = audioBioma
        redirecionamento = "./resources/html/bioma-mata-atlantica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClima)){
        nomeArquivoAudioSerTocado = audioClima
        redirecionamento = "./resources/html/clima-cidade.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasContextoHistorico)){
        nomeArquivoAudioSerTocado = audioContextoHistorico
        redirecionamento = "./resources/html/contextualizacao-historica.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaQuatro)){
        nomeArquivoAudioSerTocado = audioLagoaQuatro
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasConstrucaoHistorica)){
        nomeArquivoAudioSerTocado = audioConstrucaoHistorica
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaTres)){
        nomeArquivoAudioSerTocado = audioLagoaTres
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasReflorestamento)){
        nomeArquivoAudioSerTocado = audioReflorestamento
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasRuínas)){
        nomeArquivoAudioSerTocado = audioRuinas
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasFragmentoMata)){
        nomeArquivoAudioSerTocado = audioFragmentoMata
        redirecionamento = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaUm)){
        nomeArquivoAudioSerTocado = audioLagoaUm
        redirecionamento = "#mapa"
    }

    tocarArquivoAudio(nomeArquivoAudioSerTocado)
    if (redirecionamento){
        window.location.href = redirecionamento
    }
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
        promise.then(() => {
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
