function getParametro(nomeParametro) {
    const url = window.location.search;
    const parametrosUrl = new URLSearchParams(url);
    return parametrosUrl.get(nomeParametro);
}

window.onload = function() {
    // Verifica se há um parâmetro na URL
    const parametro = getParametro('audio');

    if (parametro) {
        new Audio(parametro).play()
    }
}