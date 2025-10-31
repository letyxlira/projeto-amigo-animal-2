document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form-cadastro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function(event) {
        
        event.preventDefault(); 

        mensagemSucesso.innerHTML = "<h3>Cadastro enviado com sucesso!</h3><p>Obrigado por se juntar à nossa causa. Entraremos em contato em breve.</p>";
        mensagemSucesso.style.display = "block";
        
        form.reset();

        mensagemSucesso.style.backgroundColor = "#e8f5e9";
        mensagemSucesso.style.color = "#1e4620";
        mensagemSucesso.style.padding = "15px";
        mensagemSucesso.style.border = "1px solid #c9e7ca";
        mensagemSucesso.style.borderRadius = "5px";
    });
}); 
