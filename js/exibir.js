var btnMostrarAtividades = document.querySelector("#exibirValores")

for(var i = 0; i < tarefas.length; i++){

    btnMostrarAtividades[i].onclick
    var licao = tarefas[i]
    exibirAsTarefasNaTela(listaDeTarefas)
}

function exibirAsTarefasNaTela(listaDeTarefas) {
    licao.classList.remove("invisivel")
}