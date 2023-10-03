// Captura a lista de presentes e os botões "Marcar"
const presentList = document.getElementById('present-list');
const markButtons = document.querySelectorAll('.mark-button');

// Adiciona um evento de clique a cada botão "Marcar"
markButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Obtém o elemento de status do presente clicado
        const statusElement = presentList.children[index].querySelector('.status');
        
        // Alterna o status entre "Disponível" e "Marcado"
        if (statusElement.textContent === 'Disponível') {
            statusElement.textContent = 'Marcado';
            button.textContent = 'Desmarcar';
            presentList.children[index].classList.add('marked'); // Adiciona a classe "marked"
        } else {
            statusElement.textContent = 'Disponível';
            button.textContent = 'Quero esse';
            presentList.children[index].classList.remove('marked'); // Remove a classe "marked"
        }
    });
});
