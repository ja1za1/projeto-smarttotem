function getParametro(nomeParametro) {
  const url = window.location.search;
  const parametrosUrl = new URLSearchParams(url);
  return parametrosUrl.get(nomeParametro);
}
// Verifica se há um parâmetro na URL
const parametro = getParametro("local");

if (parametro) {
  fetch(`../json/${parametro}.json`)
    .then((resposta) => resposta.json())
    .then((conteudoJson) => {
      const dadosLocal = conteudoJson.informacoes;

      document.getElementById("titulo-local").innerHTML = dadosLocal.nome;
      document.getElementById("texto-local").innerHTML = dadosLocal.sobre;

      if (dadosLocal.tipo === "local") {
        document.getElementById("imagem-local").style.height = "600px";
        document.getElementById("imagem-local").classList.add("w-100");
        if (dadosLocal.legenda) {
          document.getElementById("legenda-foto").innerHTML =
            dadosLocal.legenda;
        }
      } else {
        document.getElementById("imagem-local").style.height = "700px";
        document.getElementById("imagem-local").classList.add("w-75");
        document.getElementById(
          "nome-cientifico"
        ).innerHTML = `(${dadosLocal.nomeCientifico})`;
      }
      document.getElementById("imagem-local").src = dadosLocal.imagem;
    });
} else {
  document.getElementById("texto-local").innerHTML =
    "Houve um erro ao carregar a página";
}
