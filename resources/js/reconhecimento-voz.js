const palavrasEducacaoAmbiental = ["educação ambiental", "sustentabilidade", "reciclagem", "conservação", "ecossistema", "biodiversidade", "poluição", "desenvolvimento sustentável", "energia renovável", "preservação", "ecologia", "redução de resíduos"]

const palavrasSucessaoEcologica = ["sucessão ecológica", "ecese", "organismos pioneiros"]

const palavrasIncendio = ["incendio", "fogo", "queimada", "chamas", "incêndio florestal", "ignição", "devastação", "fogaréu"]

const palavrasAtividadeHumana = ["atividade humana", "intervenção humana", "ações humanas", "humana", "humanos"]

const palavrasQualidadeAgua = ["qualidade da água", "água", "água potável", "beber água", "consumir água"]

const palavrasEspecieArborea = ["classificação arbórea", "classificação árvores", "arbórea", "pioneiras", "secundárias", "clímax"]

const palavrasEspecieFlora = ["espécies de flora", "tipos de plantas", "flora", "espécies de planta", "árvores", "árvore"]

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

    let mensagemResposta = "Desculpe não encontrei nenhum conteúdo relacionado a esta pergunta."

    if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEducacaoAmbiental)) {
        mensagemResposta = "Entendi que você está se referindo a educação ambiental. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/educacao-ambiental.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasSucessaoEcologica)){
        mensagemResposta = "Entendi que você está se referindo a sucessão ecológica. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/sucessao-ecologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasIncendio)){
        mensagemResposta = "Entendi que você está se referindo a incêndio. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/incendio-criminoso.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasAtividadeHumana)){
        mensagemResposta = "Entendi que você está se referindo a atividades humanas. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/atividades-humanas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasQualidadeAgua)){
        mensagemResposta = "Entendi que você está se referindo a qualidade da água. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/classificacao-agua.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieArborea)){
        mensagemResposta = "Entendi que você está se referindo a classificação das espécies arbóreas. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/especies-arboreas.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFlora)){
        mensagemResposta = "Entendi que você está se referindo as espécies de flora existentes na reserva. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/especies-flora-mapa.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClassificacaoGeologica)){
        mensagemResposta = "Entendi que você está se referindo a classificação geológica. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/classificacao-geologica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasEspecieFauna)){
        mensagemResposta = "Entendi que você está se referindo as espécies de fauna existentes na reserva. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/especies-fauna.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasBioma)){
        mensagemResposta = "Entendi que você está se referindo ao bioma da reserva. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/bioma-mata-atlantica.html"
    } else if (verificarPossuiPalavra(textoFaladoUsuario, palavrasClima)){
        mensagemResposta = "Entendi que você está se referindo ao clima da cidade. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/clima-cidade.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasContextoHistorico)){
        mensagemResposta = "Entendi que você está se referindo ao contexto histórico da reserva. Aqui está um conteúdo sobre isso."
        window.location.href = "./resources/html/contextualizacao-historica.html"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaQuatro)){
        mensagemResposta = "Para chegar até a lagoa quatro siga as seguintes instruções: siga a trilha destacada no mapa, localizada próximo ao totem e a lagoa quatro estará localizada próxima a construção histórica."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasConstrucaoHistorica)){
        mensagemResposta = "Para chegar até a construção histórica siga as seguintes instruções: siga a trilha destacada no mapa. A construção histórica está localizada próximo a lagoa quatro. Uma curiosidade: essa construção era utilizada para criação de animais antigamente."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaTres)){
        mensagemResposta = "Para chegar até a lagoa três siga as seguintes instruções: siga a trilha destacada no mapa. Após passar pela construção histórica a lagoa três estará logo a frente."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasReflorestamento)){
        mensagemResposta = "Existem duas áreas de reflorestamento na reserva: uma está localizada após a lagoa 3, na parte esquerda da estrada e possuí uma vista muito bela. A outra está na parte direita da estrada, próximo a lagoa 1. Esta passou por diversas queimadas ao longo dos anos, mas se tornou resiliente. Siga a trilha destacada no mapa para identificar qual deseja visitar."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasRuínas)){
        mensagemResposta = "Para chegar até as ruínas siga as seguintes instruções: siga a trilha destacada no mapa. As ruínas estão logo após cruzar para o lado direito da estrada. Esse Foi o local onde foram gravados os episódios de uma série de vídeos do Ponto de Partida conhecida como: Um bocadinho de Manoel."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasFragmentoMata)){
        mensagemResposta = "Para chegar até o fragmento de Mata Atlântica siga as seguintes instruções: siga a trilha destacada no mapa. Após passar pelas ruínas, no lado direito da estrada, siga para a esquerda e você chegará até o local. Lembre-se que é um local importante para conservar a biodiversidade da reserva."
        window.location.href = "#mapa"
    } else if(verificarPossuiPalavra(textoFaladoUsuario, palavrasLagoaUm)){
        mensagemResposta = "Para chegar até a lagoa um siga as seguintes instruções: siga a trilha destacada no mapa. Após passar pelas ruínas, no lado direito da estrada, siga em frente até encontrar a lagoa um. Nessa lagoa é possível encontrar patinhos e passarinhos ao redor."
        window.location.href = "#mapa"
    }

    
    carregarMensagemVoz(mensagemResposta)
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

function carregarMensagemVoz(textoSerDito) {
    const mensagemFalar = new SpeechSynthesisUtterance(textoSerDito);
    mensagemFalar.rate = 1.6;
    mensagemFalar.pitch = 1;
    mensagemFalar.volume = 1;
    mensagemFalar.lang = "PT-BR"


    window.speechSynthesis.speak(mensagemFalar)
}

function verificarPossuiPalavra(textoFalado, listaPalavras){
    return listaPalavras.some(palavra => textoFalado.includes(palavra))
}