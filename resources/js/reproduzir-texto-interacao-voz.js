const audioInteracaoVoz = new Audio("../../assets/audios/texto-interacao-voz.mp3")
const imagemBotao = document.getElementById("imagem-botao-reproduzir-audio")

document.getElementById("btn-reproduzir-som").addEventListener("click", () => {
    if(audioInteracaoVoz.paused){
        audioInteracaoVoz.play()
        imagemBotao.src = "../../assets/images/stop.png"
    } else{
        audioInteracaoVoz.pause()
        audioInteracaoVoz.currentTime = 0
        imagemBotao.src = "../../assets/images/som.png"
    }
})


audioInteracaoVoz.addEventListener("ended", () => {
    imagemBotao.src = "../../assets/images/som.png"
})