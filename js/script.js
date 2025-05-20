// Getting the HTML elements and storing them in variables
const inputTask = document.getElementById('input-item')
const addBtn = document.getElementById('add-btn')
const removeMessageDiv = document.querySelector('.remove-message')
const taskContainer = document.querySelector('.list')
const trashIcon = document.getElementById('trash-icon')
const removeNotificationBtn = document.getElementById('remove-notification-btn')
const listNameFromHome = localStorage.getItem("listName")
const listName = document.getElementById('quicklist-name')

// Atribui o nome da lista informada pelo usuário no input do home.html
listName.textContent = listNameFromHome

// Executa a função createItem() ao receber o click 
addBtn.addEventListener('click', () => {
    // Resgata o valor digitado no input e remove os espaços em branco com o trim()
    const listValue = inputTask.value.trim()

    // Caso o usuário digita algo diferente de "", o bloco de código é executado para criação de um item na lista
    if (listValue !== "") {
        // Div principal das tasks
        const divTasks = document.createElement('div')
        divTasks.className = 'item'

        // Div contendo o input:checkbox e o nome do item da lista
        const CheckAndTaskname = document.createElement('div')
        CheckAndTaskname.className = 'check-and-name'

        // Criando o input:checkbox propriamente
        const inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.className = 'item-check'

        // Criando o span, usando o textContent para indicar que o valor de texto do span será o item digitado no inputTask
        const itemName = document.createElement('span')
        itemName.textContent = listValue;

        // Adicionando o input:checkbox e o span na div 'check-and-taskname'
        CheckAndTaskname.appendChild(inputCheckbox)
        CheckAndTaskname.appendChild(itemName)

        // Adicionando a div 'check-and-taskname' dentro da div 'task'
        divTasks.appendChild(CheckAndTaskname)

        // Criando a div que envolve o botão de exclusão do item
        const removeTaskBtnDiv = document.createElement('div')
        removeTaskBtnDiv.className = 'remove-item-btn'

        // Criando o elemento img que servirá como botão para fechar a notificação de exclusão
        const trashIcon = document.createElement('img')
        trashIcon.className = 'trash-icon'
        trashIcon.src = './public/image/Frame.svg'

        // Criando o botão que envolve a imagem acima
        const removeBtn = document.createElement('button')
        removeBtn.id = 'remove-btn'

        // Adicionando o removeBtn dentro da div 'remove-item-btn'
        removeTaskBtnDiv.appendChild(trashIcon);

        // Adicionando a div 'remove-item-btn' dentro da div 'task'
        divTasks.appendChild(removeTaskBtnDiv);


        // Limpa o conteudo do input após toda a execução de código acima
        inputTask.value = ""

        // Adicionando a div 'task' dentro da div 'tasks-div', que envolve toda a lista
        taskContainer.appendChild(divTasks);

        // Arrow Function para aplicar o display 'flex' na div que representa a notificação de exclusão de item
        trashIcon.addEventListener('click', () => {
            taskContainer.removeChild(divTasks)
            removeMessageDiv.style.display = 'flex'

            // Adiciona um intervalo de tempo no qual a notificação fica em tela. Após 3000ms o display 'none' é aplicado novamente
            setTimeout(() => {
                removeMessageDiv.style.display = 'none'
            }, 3000)

            // Quanto o botão de exclusão recebe o evento de click, o display é setado como 'none'
            removeNotificationBtn.addEventListener('click', () => {
                removeMessageDiv.style.display = 'none'
            })
        })
    }
})