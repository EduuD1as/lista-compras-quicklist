// Obtendo os elementos html necessários e armazenando em variáveis
const inputItem = document.getElementById('input-item')
const addBtn = document.getElementById('add-btn')
const removeMessageDiv = document.querySelector('.remove-message')
const itemContainer = document.querySelector('.list')
const trashIcon = document.querySelector('.trash-icon')
const removeNotificationBtn = document.getElementById('remove-notification-btn')
const listTitle = document.getElementById('list-title')
const alertMessage = document.querySelector('.alert')
const removeAlert = document.getElementById('remove-alert-btn')

// Armazena a variável que conterá o valor digitado no input do index.html (correspondente ao nome da tarefa)
const listNameFromHome = localStorage.getItem("listName")
listTitle.textContent = listNameFromHome + " | quicklist"
const listName = document.getElementById('quicklist-name')

// Atribui o nome da lista informada pelo usuário no input do home.html
listName.textContent = listNameFromHome

// Arrow function para executar o bloco de código diretamente ao receber o evento de click no botão
addBtn.addEventListener('click', () => {
    // Resgata o valor digitado no input e remove os espaços em branco com o trim()
    const itemValue = inputItem.value.trim()

    // Caso seja digitado algo diferente de "", o bloco de código é executado para criação de um item na lista
    if (itemValue !== "") {
        itemContainer.style.display = 'flex'

        // Div principal para os itens da lista
        const divItems = document.createElement('div')
        divItems.className = 'item'

        // Div contendo o input:checkbox e o nome do item da lista
        const CheckAndTaskname = document.createElement('div')
        CheckAndTaskname.className = 'check-and-name'

        // Criando o input:checkbox propriamente
        const inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.className = 'item-check'

        // Altera a cor do background quando o input for marcado
        inputCheckbox.addEventListener('change', () => {
            if (inputCheckbox.checked) {
                divItems.style.backgroundColor = 'var(--background-done)'
            }
            else {
                divItems.style.backgroundColor = ''
            }
        })

        // Criando o span e usando textContent para informar o nome do item digitado
        const itemName = document.createElement('span')
        itemName.textContent = itemValue;

        // Adicionando o input:checkbox e o span na div 'check-and-taskname'
        CheckAndTaskname.appendChild(inputCheckbox)
        CheckAndTaskname.appendChild(itemName)

        // Adicionando a div 'check-and-taskname' dentro da div 'item'
        divItems.appendChild(CheckAndTaskname)

        // Criando a div que envolve o botão de exclusão do item
        const removeTaskBtnDiv = document.createElement('div')
        removeTaskBtnDiv.className = 'remove-item-btn'

        // Criando o elemento img que servirá como botão para fechar a notificação de exclusão
        const trashIcon = document.createElement('img')
        trashIcon.className = 'trash-icon'
        trashIcon.src = '../public/image/trash.svg'

        // Criando o botão que envolve a imagem acima
        const removeBtn = document.createElement('button')
        removeBtn.id = 'remove-btn'

        // Adicionando o removeBtn dentro da div 'remove-item-btn'
        removeTaskBtnDiv.appendChild(trashIcon);

        // Adicionando a div 'remove-item-btn' dentro da div 'item'
        divItems.appendChild(removeTaskBtnDiv);

        // Limpa o conteudo do input após toda a execução de código acima
        inputItem.value = ""

        // Adicionando a div 'task' dentro da div 'item', que envolve toda a lista
        itemContainer.appendChild(divItems);

        // Arrow Function para aplicar o display 'flex' na div que representa a notificação de exclusão de item
        trashIcon.addEventListener('click', () => {
            itemContainer.removeChild(divItems)
            removeMessageDiv.style.display = 'flex'
            
            // Quanto o botão de exclusão recebe o evento de click, o display é setado como 'none'
            removeNotificationBtn.addEventListener('click', () => {
                removeMessageDiv.style.display = 'none'
                console.log('Botão clicado.')
            })

           


        })
    }
    else {
        alertMessage.style.display = 'flex'

        inputItem.classList.add('input-alert-border')

        // Adiciona um Timeout de 3000ms, fazendo o alerta desaparecer após esse intervalo
        setTimeout(() => {
            alertMessage.style.display = 'none'
            inputItem.classList.remove('input-alert-border')
        }, 3000)

        // Remove o alerta ao receber o evento de click no botão de remoção
        removeAlert.addEventListener('click', () => {
            alertMessage.style.display = 'none'
            inputItem.classList.remove('input-alert-border')
        })
    }
})
