console.log("Aqui!!!")

// Selecione o formulário
const form = document.querySelector('#contact-form form');

// Adicione um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  // Evite o comportamento padrão do formulário
  e.preventDefault();

  // Obtenha os valores dos campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Valide os campos
  if (name === '') {
    alert('Por favor, preencha o nome');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, preencha um e-mail válido');
    return;
  }

  if (message === '') {
    alert('Por favor, preencha a mensagem');
    return;
  }

  // Se todos os campos estiverem válidos, envie o formulário
  form.submit();
});

// Função para validar e-mail
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}