var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)

    if(this.value.length > 0){
        for(var i = 0; i < tarefas.length; i++){
            var licao = tarefas[i]
            var tdNome = licao.querySelector(".info-disciplina")
            var nome = tdNome.textContent
            if(nome != this.value){
                licao.classList.add("invisivel")
            } else {
                licao.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0; i < tarefas.length; i++){
            var licao = tarefas[i]
            licao.classList.remove("invisivel")
        }
    }

})