// Armazenando os elementos html do index.html em variáveis
const addListBtn = document.getElementById('add-list-btn')
const listnameInput = document.getElementById('input-listname')
const alertMessage = document.querySelector('.alert')
const removeAlert = document.getElementById('remove-notification-btn')

// Arrow Function para iniciar um bloco de código ao receber o evento de click no botão de Adicionar Item
addListBtn.addEventListener('click', () => {
    // Resgata o valor digitado no input e remove os espaços em branco com o trim()
    const listname = listnameInput.value.trim()

    // Caso o valor digitado seja diferente de "vazio", esse valor é armazenado no localStorage
    if (listname !== "") {
        localStorage.setItem("listName", listname)
        window.location.href = "./pages/list.html";
    }
    // Sendo igual a "vazio", irá forçar o aparecimento de um alerta para o usuário.
    else {
        alertMessage.style.display = 'flex'

        listnameInput.classList.add('input-alert-border')

        // Adiciona um Timeout de 3000ms, fazendo o alerta desaparecer após esse intervalo
        setTimeout(() => {
            alertMessage.style.display = 'none'
            listnameInput.classList.remove('input-alert-border');
        }, 3000)

        // Remove o alerta ao receber o evento de click no botão de remoção
        removeAlert.addEventListener('click', () => {
            alertMessage.style.display = 'none'
            inputItem.classList.remove('input-alert-border')
        })
    }
})