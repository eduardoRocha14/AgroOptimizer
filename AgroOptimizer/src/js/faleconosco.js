document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!email || !phone || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("O telefone deve conter apenas números.");
        return;
    }

    
    alert("Formulário enviado com sucesso!");
});