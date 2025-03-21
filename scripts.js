
let tarefas = []
const mensagem = document.getElementById("mensagem")

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let buttonRemove = document.createElement("button")
        buttonRemove.className = "remover"
        buttonRemove.textContent = "X"
        buttonRemove.onclick = () => removerTarefa(i)

        let buttonEdit = document.createElement("button")
        buttonEdit.className = "editar"
        buttonEdit.textContent = "Editar"
        buttonEdit.onclick = () => editarTarefas(i)

        novaTarefa.appendChild(buttonRemove);
        novaTarefa.appendChild(buttonEdit);
        listaTarefas.appendChild(novaTarefa);

    }

}


function removerTarefa(i) {
    tarefas.splice(i, 1)

    let tarefaRemovida = "A tarefa foi removida com sucesso!"
    mensagem.textContent = tarefaRemovida
    renderizarTarefas()
}

function editarTarefas(i) {
    let tarefaEditada = prompt("Digite a nova tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        let mensagemEditada = "A tarefa foi editada com sucesso!"
        mensagem.textContent = mensagemEditada
        renderizarTarefas()
    }
}

function limparTarefas() {
    if (tarefas == "") {
        let mensagemErro = "Não há tarefas para serem apagadas!"
        mensagem.textContent = mensagemErro
        renderizarTarefas()
    }
    else {
        tarefas = []
        let mensagemApagada = "Todas as tarefas foram apagadas!"
        mensagem.textContent = mensagemApagada
        renderizarTarefas()
    }
}
