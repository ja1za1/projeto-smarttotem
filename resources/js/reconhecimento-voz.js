const palavrasEducacaoAmbiental = ["educação ambiental", "sustentabilidade", "reciclagem", "conservação", "ecossistema", "biodiversidade", "poluição", "desenvolvimento sustentável", "energia renovável", "preservação", "ecologia", "redução de resíduos"]

const palavrasSucessaoEcologica = ["sucessão ecológica", "ecese", "organismos pioneiros"]

const palavrasIncendio = ["incêndio", "fogo", "queimada", "queimadas", "chamas", "incêndio florestal", "ignição", "devastação", "fogaréu"]

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

// const audioEducacaoAmbiental = "https://github.com/ja1za1/projeto-smarttotem/raw/main/audio/educacao-ambiental.mp3"
const audioRespostaPadrao = "../../assets/audios/resposta-padrao.mp3"
const audioEducacaoAmbiental = "../../assets/audios/educacao-ambiental.mp3"
const audioSucessaoEcologia = "../../assets/audios/sucessao-ecologica.mp3"
const audioIncendio = "../../assets/audios/incendio.mp3"
const audioAtividadeHumana = "../../assets/audios/atividades-humanas.mp3"
const audioQualidadeAgua = "../../assets/audios/qualidade-agua.mp3"
const audioEspecieArborea = "../../assets/audios/classificacao-arborea.mp3"
const audioEspecieFlora = "../../assets/audios/especies-flora.mp3"
const audioClassificacaoGeologica = "../../assets/audios/classificacao-geologica.mp3"
const audioEspecieFauna = "../../assets/audios/especies-fauna.mp3"
const audioBioma = "../../assets/audios/bioma.mp3"
const audioClima = "../../assets/audios/clima.mp3"
const audioContextoHistorico = "../../assets/audios/contexto-historico.mp3"
const audioLagoaQuatro = "../../assets/audios/lagoa4.mp3"
const audioConstrucaoHistorica = "../../assets/audios/construcao-historica.mp3"
const audioLagoaTres = "../../assets/audios/lagoa3.mp3"
const audioReflorestamento = "../../assets/audios/areas-reflorestamento.mp3"
const audioRuinas = "../../assets/audios/ruinas.mp3"
const audioFragmentoMata = "../../assets/audios/fragmento-mata-atlantica.mp3"
const audioLagoaUm = "../../assets/audios/lagoa1.mp3"

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

botaoConfirmouFala.addEventListener('click', async () => {
    modalConfirmacao.hide()

    var textoFaladoUsuario = textoConfirmacaoFala.innerHTML
    let nomeArquivoAudioSerTocado = audioRespostaPadrao
    let localRedirecionamento = ""
    let redirecionarOutraPagina = false

    if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEducacaoAmbiental)) {
        nomeArquivoAudioSerTocado = audioEducacaoAmbiental
        localRedirecionamento = "../html/educacao-ambiental.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasSucessaoEcologica)){
        nomeArquivoAudioSerTocado = audioSucessaoEcologia
        localRedirecionamento = "../html/sucessao-ecologica.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasIncendio)){
        nomeArquivoAudioSerTocado = audioIncendio
        localRedirecionamento = "../html/incendio-criminoso.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasAtividadeHumana)){
        nomeArquivoAudioSerTocado = audioAtividadeHumana
        localRedirecionamento = "../html/atividades-humanas.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasQualidadeAgua)){
        nomeArquivoAudioSerTocado = audioQualidadeAgua
        localRedirecionamento = "../html/classificacao-agua.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieArborea)){
        nomeArquivoAudioSerTocado = audioEspecieArborea
        localRedirecionamento = "../html/especies-arboreas.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFlora)){
        nomeArquivoAudioSerTocado = audioEspecieFlora
        localRedirecionamento = "../html/especies-flora-mapa.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClassificacaoGeologica)){
        nomeArquivoAudioSerTocado = audioClassificacaoGeologica
        localRedirecionamento = "../html/classificacao-geologica.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFauna)){
        nomeArquivoAudioSerTocado = audioEspecieFauna
        localRedirecionamento = "../html/especies-fauna.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasBioma)){
        nomeArquivoAudioSerTocado = audioBioma
        localRedirecionamento = "../html/bioma-mata-atlantica.html"
        redirecionarOutraPagina = true
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClima)){
        nomeArquivoAudioSerTocado = audioClima
        localRedirecionamento = "../html/clima-cidade.html"
        redirecionarOutraPagina = true
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasContextoHistorico)){
        nomeArquivoAudioSerTocado = audioContextoHistorico
        localRedirecionamento = "../html/contextualizacao-historica.html"
        redirecionarOutraPagina = true
    }
    
    // Commenting this piece of code due to change of voice interaction to another page

    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaQuatro)){
    //     nomeArquivoAudioSerTocado = audioLagoaQuatro
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasConstrucaoHistorica)){
    //     nomeArquivoAudioSerTocado = audioConstrucaoHistorica
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaTres)){
    //     nomeArquivoAudioSerTocado = audioLagoaTres
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasReflorestamento)){
    //     nomeArquivoAudioSerTocado = audioReflorestamento
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasRuínas)){
    //     nomeArquivoAudioSerTocado = audioRuinas
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasFragmentoMata)){
    //     nomeArquivoAudioSerTocado = audioFragmentoMata
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaUm)){
    //     nomeArquivoAudioSerTocado = audioLagoaUm
    //     localRedirecionamento = "#mapa"
    //     redirecionarOutraPagina = false
    // }

    if(redirecionarOutraPagina){
        await tocarArquivoAudio(new Audio(nomeArquivoAudioSerTocado))
        window.location.href = localRedirecionamento
    } else{
        if(localRedirecionamento){
            window.location.href = localRedirecionamento
        }
        tocarArquivoAudio(new Audio(nomeArquivoAudioSerTocado))
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

function tocarArquivoAudio(arquivoAudio) {
    return new Promise(resposta =>{
        arquivoAudio.play()
        arquivoAudio.onended = resposta
      })
}

function verificarPossuiPalavra(textoFalado, listaPalavras){
    return listaPalavras.some(palavra => textoFalado.includes(palavra))
}
