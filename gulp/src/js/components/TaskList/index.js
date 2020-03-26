export function makeTask(item, newItemTemplateObj, listObj) {
    let taskText = item.taskDataDescription
    let task = newItemTemplateObj.cloneNode(true)
    let taskDescription = task.querySelector('span')
    let attributeChecked = task.querySelector('.todo-list-input')
    taskDescription.innerText = taskText
    if (item.taskMark == 'marked') {
        attributeChecked.setAttribute('checked', 'checked')
    }
    listObj.appendChild(task)
}

export function addCheckHandler(item, funcToggleEmptyListMessage) {
    let checkbox = item.querySelector('.todo-list-input')
    let deleteTask = item.querySelector('.trash')
    checkbox.addEventListener('change', function () {
        if (checkbox.hasAttribute('checked')) {
            checkbox.removeAttribute('checked')
        } else {
            checkbox.setAttribute('checked', 'checked')
        }
    })
    deleteTask.addEventListener('click', function () {
        item.remove()
        funcToggleEmptyListMessage()
    })
}
