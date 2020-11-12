import {
    toDoList,
    list,
    updateTasksArray,
    emptyListMessage,
    newItemTask,
    newItemTitle,
    taskTemplate,
    newItemTemplate,
    hdTasksData
} from '../../constants'

let tasksData
export function readTasksData() {
    tasksData = localStorage.getItem('savedTasksData') ? JSON.parse(localStorage.getItem('savedTasksData')) : hdTasksData
}

export function makeTask() {
    $.each(tasksData, function(id) {
        let task = taskTemplate.clone()
        task.tmpl(tasksData[id]).appendTo(list)    
    })
}

function refreshTasksData() {
    tasksData = []

    $.each(list.children(), function() {
        let newTasksDataItem = {}
        newTasksDataItem.taskDataDescription = $(this).find('span').text()
        if ($(this).find('.todo-list-input').is(':checked')) {
            newTasksDataItem.taskMark = 'marked'
        } else {
            newTasksDataItem.taskMark = 'unmarked'
        }
        tasksData.push(newTasksDataItem)
    })
    return tasksData
}

export function toggleEmptyListMessage() {
    if (list.children().length === 0) {
        emptyListMessage.removeClass('hidden-tasks')        
    } else {
        emptyListMessage.addClass('hidden-tasks')
    }
}

export function addCheckHandler() {
    $.each(list.children(), function(id) {
        $(this).on('change', '.todo-list-input', function() {
            if ($(this).is(':checked')) {
                $(this).attr('checked', 'checked')
            } else {
                $(this).removeAttr('checked')
            }
            refreshTasksData()
        })
        $(this).on('click', '.trash', function() {
            $(this).parent().remove()
            tasksData.splice(id, 1)
            toggleEmptyListMessage()
            refreshTasksData()
        })
    })
}

export function newTasks() {
    newItemTask.on('submit', function(event) {
        event.preventDefault()
        list.empty()
        let newTasksDataItem = {}
        newTasksDataItem.taskDataDescription = newItemTitle.val()
        newTasksDataItem.taskMark = 'unmarked'
        tasksData.push(newTasksDataItem)
        makeTask()
        addCheckHandler()
        toggleEmptyListMessage()
        newItemTitle.val('')
    })
}

export function saveTasksData() {
    updateTasksArray.on('click', function() {
        localStorage.setItem('savedTasksData', JSON.stringify(tasksData))
        window.location.reload()
    })
}
