
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Verifica se todos os campos foram preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        errorMessage.classList.remove('hidden'); // Exibe a mensagem de erro
        errorMessage.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    } else {
        errorMessage.classList.add('hidden'); // Oculta a mensagem de erro
        alert('Mensagem enviada com sucesso!');
        document.querySelector('form').reset(); // Limpa os campos do formulário
    }
});

document.getElementById('prank-button').addEventListener('click', function () {
    const prankMessage = document.getElementById('prank-message');
    prankMessage.classList.remove('hidden'); // Exibe a mensagem de brincadeira
    setTimeout(() => {
        prankMessage.classList.add('hidden'); // Oculta a mensagem após 3 segundos
    }, 3000);
});