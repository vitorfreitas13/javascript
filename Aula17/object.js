const input = document.getElementById('novaTarefa');
const btn = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
  const tarefa = input.value.trim(); // remove espaços extras
  if (tarefa !== '') {
    const li = document.createElement('li');
    li.textContent = tarefa;

    // Marcar como concluída ao clicar
    li.addEventListener('click', () => {
      li.classList.toggle('concluida');
    });

    lista.appendChild(li);
    input.value = ''; // limpa o input
  } else {
    alert('Digite uma tarefa!');
  }
}

// Adicionar ao clicar no botão
btn.addEventListener('click', adicionarTarefa);

// Adicionar ao apertar Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});
