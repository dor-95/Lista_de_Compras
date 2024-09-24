const item = document.getElementById("input-item");
const botaoAdicionarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();

    let itemDaLista = document.createElement("li");

    let containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item__container");

    let containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("lista-item__nome-compra");
    let nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);
    containerItemLista.appendChild(containerNomeDoItem);

    let containerBotoes = document.createElement("div");
    containerBotoes.append(criaBotao("./img/Excluir.svg", "Deletar"));
    containerBotoes.append(criaBotao("./img/Edição.svg", "Editar"));
    containerItemLista.appendChild(containerBotoes);
    
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}

function criaBotao(imagem, textoAlternativo) {
  
    let botao = document.createElement("button");
    botao.classList.add("botao-acao")
    let icone = document.createElement("img");
    icone.src = imagem;
    icone.alt = textoAlternativo;

    botao.appendChild(icone);

    return botao;

}