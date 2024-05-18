document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var section = document.getElementById('section');
      section.classList.remove('hidden');
  }, 1000); // Aguarda 1000 milissegundos (1 segundo) antes de remover a classe
});