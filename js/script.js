// 1. Espera o navegador carregar todo o HTML antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // 2. Encontra o formulário e a caixa de mensagem pelo ID que criamos
    const form = document.getElementById("form-cadastro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    // 3. Adiciona um "ouvinte" que espera pelo evento de "submit" (envio)
    form.addEventListener("submit", function(event) {
        
        // 4. IMPEDE o comportamento padrão do navegador (que é recarregar a página)
        event.preventDefault(); 

        // 5. Adiciona o HTML de sucesso dentro da nossa div
        mensagemSucesso.innerHTML = "<h3>Cadastro enviado com sucesso!</h3><p>Obrigado por se juntar à nossa causa. Entraremos em contato em breve.</p>";

        // 6. Muda o CSS da div para que ela apareça (estava com display: none)
        mensagemSucesso.style.display = "block";
        
        // 7. (Bônus) Limpa os campos do formulário
        form.reset();

        // 8. (Bônus) Adiciona um estilo de "sucesso"
        mensagemSucesso.style.backgroundColor = "#e8f5e9";
        mensagemSucesso.style.color = "#1e4620";
        mensagemSucesso.style.padding = "15px";
        mensagemSucesso.style.border = "1px solid #c9e7ca";
        mensagemSucesso.style.borderRadius = "5px";
    });
});