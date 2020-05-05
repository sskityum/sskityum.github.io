import {
    ITask,
    hdTasksData
} from './data'
import {
    newItemTemplate,
    list,
    listItems,
    emptyListMessage,
    newItemTask,
    newItemTitle,
    updateTasksArray
} from '../../constants'

let tasksData: ITask[]
export function readTasksData(): void {
    tasksData = localStorage.getItem('savedTasksData') ? JSON.parse(localStorage.getItem('savedTasksData')) : hdTasksData
}

const makeTask = function (item: ITask) {
    let taskText: string = item.taskDataDescription
    let task: HTMLElement = newItemTemplate.cloneNode(true) as HTMLElement
    let taskDescription: HTMLElement = task.querySelector('span')
    let attributeChecked: HTMLElement = task.querySelector('.todo-list-input')
    taskDescription.innerText = taskText
    if (item.taskMark == 'marked') {
        attributeChecked.setAttribute('checked', 'checked')
    }
    list.appendChild(task)
}

export function renderTaskData(): void {
    for (let i = 0; i < tasksData.length; i++) {
        makeTask(tasksData[i])
    }
}

export function toggleEmptyListMessage(): void {
    if (listItems.length === 0) {
        emptyListMessage.classList.remove('hidden-tasks')
    } else{
        emptyListMessage.classList.add('hidden-tasks')
    }
}

function addCheckHandler(item: any): void {
    let checkbox: HTMLInputElement = item.querySelector('.todo-list-input')
    let deleteTask: HTMLElement = item.querySelector('.trash')
    checkbox.addEventListener('change', function () {
        if (checkbox.hasAttribute('checked')) {
            checkbox.removeAttribute('checked')
        } else {
            checkbox.setAttribute('checked', 'checked')
        }
    })
    deleteTask.addEventListener('click', function () {
        item.remove()
        toggleEmptyListMessage()
    })
}

export function addCheckHandlers(): void {
    for (let i = 0; i < listItems.length; i++) {
        addCheckHandler(listItems[i])
    }
}

export function newTasks(): void {
    newItemTask.addEventListener('submit', function(event: any): void {
        event.preventDefault()
        let taskText: string = newItemTitle.value
        let task: HTMLElement = newItemTemplate.cloneNode(true) as HTMLElement
        let taskDescription: HTMLElement = task.querySelector('span')
        taskDescription.innerText = taskText
        addCheckHandler(task)
        list.appendChild(task)
        toggleEmptyListMessage()
        newItemTitle.value = ''
    })
}

export function refreshTasksDataSaveLocalStorage(): void {
    updateTasksArray.addEventListener('click', function(): void {
        let tasksData: ITask[] = []
        for (let i = 0; i < listItems.length; i ++) {
            let itemObj = {
                taskDataDescription: '',
                taskMark: 'unmarked'
            }
            itemObj.taskDataDescription = listItems[i].querySelector('span').textContent
            if (listItems[i].querySelector('.todo-list-input').hasAttribute('checked')) {
                itemObj.taskMark = 'marked'
            }
            tasksData.push(itemObj)
        }
        console.log(tasksData)
        localStorage.setItem('savedTasksData', JSON.stringify(tasksData))
        window.location.reload()
    })
}