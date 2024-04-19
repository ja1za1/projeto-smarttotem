const audios = []
const limiteAudios = 10
const imagemBotao = document.getElementById("imagem-botao-reproduzir-audio")
const textoReproduzir = document.getElementById("texto-reproduzir")
const DELAY_PADRAO = "500"

function obterParametro(nomeParametro){
    const url = window.location.search;
    const parametrosUrl = new URLSearchParams(url);
    return parametrosUrl.get(nomeParametro);
}

function obterNomeDaPagina() {
    const url = window.location.href;
    const partesDaUrl = url.split("/");
    const nomeDaPaginaComExtensao = partesDaUrl[partesDaUrl.length - 1];
    const nomeDaPagina = nomeDaPaginaComExtensao.split(".")[0];
    if (nomeDaPagina === "template"){
        return obterParametro("local")
    }
    return nomeDaPagina;
}

function extrairNumeroDoTexto(url) {
    const match = url.match(/-texto(\d+)\.mp3/);
    return match ? parseInt(match[1]) : null;
}


function carregarAudios() {
    const nomeDaPagina = obterNomeDaPagina();
    for (let i = 1; i <= limiteAudios; i++) {
        const audio = new Audio(`../../assets/audios/${nomeDaPagina}-texto${i}.mp3`);

        audio.addEventListener('loadeddata', () => {
            audios.push(audio)
        });
    }
    
}

function ordenarArrayAudios(){
    audios.sort((audioA, audioB) => {
        const numeroDoTextoA = extrairNumeroDoTexto(audioA.currentSrc);
        const numeroDoTextoB = extrairNumeroDoTexto(audioB.currentSrc);
        
        return numeroDoTextoA - numeroDoTextoB;
    });
}

document.getElementById("btn-reproduzir-som").addEventListener("click", () => {
    if(checarAudiosPausados()){
        ordenarArrayAudios()
        audios[0].play()
        let carrosel
        try {
            carrosel = new bootstrap.Carousel("#carrosel")
            carrosel.to(0)
        } catch (error) {
            console.log("Página não possuí carrosel")
        }
        
        imagemBotao.src = "../../assets/images/stop.png"
        textoReproduzir.innerHTML = "Reproduzindo..."
        for(let i = 0; i < audios.length; i++){
            if(i + 1 == audios.length){
                audios[i].addEventListener("ended", () => {
                    imagemBotao.src = "../../assets/images/som.png"
                    textoReproduzir.innerHTML = "Reproduzir texto em aúdio"
                }) 
            } else{
                audios[i].addEventListener("ended", () => {
                    carrosel.to(i+1)
                    setTimeout( () => {
                        audios[i+1].play()
                    }, DELAY_PADRAO)
                })
            }
        }
    } else{
        const audioTocando = obterAudioTocando()
        audioTocando.pause()
        audioTocando.currentTime = 0
        imagemBotao.src = "../../assets/images/som.png"
        textoReproduzir.innerHTML = "Reproduzir texto em aúdio"
    }
})

function checarAudiosPausados(){
    return audios.every(audio => audio.paused)
}

function obterAudioTocando(){
    return audios.find(audio => !audio.paused)
}

window.onload = () => {
    carregarAudios()
    
}