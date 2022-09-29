function adicionaItem(event){
    event.preventDefault();
    const container = document.getElementById("container");
    const novoItem = document.createElement("article");
    novoItem.innerHTML ="Labenu!";
    container.insertAdjacentElement("beforeend",novoItem);
    // exercicio2
    novoItem.setAttribute("class","item");
    novoItem.setAttribute("onclick","removeItem(event)");
}
//exercicio 3
function removeItem(event){
    event.target.remove();
}


