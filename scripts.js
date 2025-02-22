function adicionarTarefa() {
    const input = document.getElementById('input-tarefa');
    const valorDoInput = input.value.trim();

    if (!valorDoInput) return;

    const li = document.createElement('li');
    li.innerHTML = `${valorDoInput} <span onclick="deletarTarefa(this)">❌</span>`;

    const ul = document.getElementById('lista-tarefas');
    ul.appendChild(li);

    input.value = '';
    input.focus(); // Foca no campo de input após adicionar a tarefa
}

function deletarTarefa(elemento) {
    elemento.parentElement.remove();
}
