
import * as c from './constants'

import { renderImg } from './components/Banner'
import { addSketchClickHandler } from './components/CatGallery'
import { makeTask, addCheckHandler } from './components/TaskList'
import { makeElement, createCard } from './components/Sentences'
import { popupMenu } from './components/Tooltip'

renderImg("../../vanillajs/img/Vietnam_p_7.png", c.status, c.myPhoto)
    .then((img) => {c.status.innerText = ""})
    .then((img) => {c.decoration.classList.add('decoration_move')})
    .then((img) => {c.spLeft.classList.add('move_left')})
    .then((img) => {c.spRight.classList.add('move_right')})
    .catch(error => alert(`Ошибка: ${error.message}`))

// -hidden-menu--------------------------------------------------------------------------
let timerIdMenuOpen
 
function startDelay () {
    timerIdMenuOpen = setTimeout (function() {
        c.openMenuIcon.classList.remove('open')        
    }, 10000)
}

function counterReset () {
    clearTimeout(timerIdMenuOpen)
}

c.arrowMenuIcon.onmouseover = c.arrowMenuIcon.onmouseout = c.arrowMenuIcon.onclick = handler

function handler(event) {
        
    if (event.type == 'mouseover') {
        c.arrowMenuIcon.classList.add('menu-icon-open')
    }
    if (event.type == 'mouseout') {
        c.arrowMenuIcon.classList.remove('menu-icon-open')
    }
    if (event.type == 'click') {
        c.openMenuIcon.classList.add('open')
        startDelay()
    }
}

c.toCloseMenuIcon.addEventListener('click', function () {
    counterReset()
    c.openMenuIcon.classList.remove('open')
})

function hiddenMenuButtonProc(clickedObject, domObject, classObject, itemAnchor) {
    clickedObject.addEventListener('click', function() {
        domObject.classList.add(classObject)
        itemAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
        counterReset()
        c.openMenuIcon.classList.remove('open')
    })        
}

for (let i = 0; i < c.hiddenMenuItems.length; i++) {
    if (i == 2) {
        hiddenMenuButtonProc(c.hiddenMenuItems[i], c.galleryPhoto, 'gallery-photo-open', c.catGalleryAnchor)
    } else if (i == 3) {
        hiddenMenuButtonProc(c.hiddenMenuItems[i], c.toDoList, 'case-list-open', c.taskListAnchor)
    } else if (i == 4) {
        hiddenMenuButtonProc(c.hiddenMenuItems[i], c.sentencesClosed, 'sentences-pictures-opened', c.anchorQuotesPictures)
    } else if (i == 5) {
        hiddenMenuButtonProc(c.hiddenMenuItems[i], c.hiddenMap, 'my-location-opened', c.asideAnchor)
    }
}

// -cat-gallery-----------------------------------------------------------------------------------------
for (var i = 0; i < c.sketches.length; i++) {
    addSketchClickHandler(c.sketches[i], c.photos[i], c.fullPhoto)
}

// -todo-list-------------------------------------------------------------------------------------------
let tasksData = localStorage.getItem('savedTasksData') ? JSON.parse(localStorage.getItem('savedTasksData')) : c.hdTasksData

for (let i = 0; i < tasksData.length; i++) {
    makeTask(tasksData[i], c.newItemTemplate, c.list)
}

const toggleEmptyListMessage = function () {
    if (c.items.length === 0) {
        c.emptyListMessage.classList.remove('hidden-tasks')
    } else {
        c.emptyListMessage.classList.add('hidden-tasks')
    }
}

for (let i = 0; i < c.items.length; i++) {
    addCheckHandler(c.items[i], toggleEmptyListMessage)
}

c.newItemTask.addEventListener('submit', function (event) {
    event.preventDefault()
    let taskText = c.newItemTitle.value
    let task = c.newItemTemplate.cloneNode(true)
    let taskDescription = task.querySelector('span')
    taskDescription.innerText = taskText
    addCheckHandler(task, toggleEmptyListMessage)
    c.list.appendChild(task)
    toggleEmptyListMessage()
    c.newItemTitle.value = ''
})

c.updateTasksArray.addEventListener('click', function () {
    tasksData = []
    for (let i = 0; i < c.items.length; i ++) {
        let itemObj = {}
        itemObj.taskDataDescription = c.items[i].querySelector('span').textContent
        if (c.items[i].querySelector('.todo-list-input').hasAttribute('checked')) {
            itemObj.taskMark = 'marked'
        } else {
            itemObj.taskMark = 'unmarked'
        }
        tasksData.push(itemObj)
    }
    localStorage.setItem('savedTasksData', JSON.stringify(tasksData))
    window.location.reload()
})

// -sentences----------------------------------------------------------------------------------
let cardsData = localStorage.getItem('savedCardsData') ? JSON.parse(localStorage.getItem('savedCardsData')) : c.hDCardsData

for (let i = 0; i < cardsData.length; i++) {
    const cardItem = createCard(cardsData[i])
    c.cardList.appendChild(cardItem)
}

let updateCardArray = c.sentencesClosed.querySelector('.update-card-array')
let arrayUnlabeledLists = c.sentencesClosed.querySelectorAll('.sentence')
let maxLikesNumber = -9999
let indices = []

updateCardArray.addEventListener('click', function () {
    indices = []
    for (let i = 0; i < arrayUnlabeledLists.length; i++) {
        cardsData[i].likesOld = cardsData[i].likesNumber
        cardsData[i].winner = false
        cardsData[i].likesNumber = arrayUnlabeledLists[i].querySelector('.like-number').textContent

        if (Number(cardsData[i].likesNumber) > Number(maxLikesNumber)) {
            maxLikesNumber = cardsData[i].likesNumber
            indices = []
            indices.push(i)
        } else if (cardsData[i].likesNumber == maxLikesNumber) {
            indices.push(i)
        }
    }
    for (let i = 0; i < indices.length; i ++) {
        if (indices.length == arrayUnlabeledLists.length) {
            cardsData[indices[i]].winner = false
        } else {
            cardsData[indices[i]].winner = true
        }
    }
    localStorage.setItem('savedCardsData', JSON.stringify(cardsData))
    window.location.reload()
})

// -tooltip----------------------------------------------------------------------------------------
popupMenu(c.hiddenMap,
    'my-location-opened',
    c.mapIcon,
    c.hiddenMapPopupMenu,
    'open-map-popup-menu',
    'Показать на карте',
    'Закрыть карту',
    c.asideAnchor,
    c.topbarAnchor
    )
popupMenu(c.galleryPhoto,
    'gallery-photo-open',
    c.openGalleryPhotoH1,
    c.hiddenGalleryPopupMenu,
    'open-gallery-popup-menu',
    'Открыть котогалерею',
    'Закрыть котогалерею',
    c.catGalleryAnchor,
    c.topbarAnchor
    )
popupMenu(c.toDoList,
    'case-list-open',
    c.openToDoList,
    c.hiddenTodoListPopupMenu,
    'open-todo-list-popup-menu',
    'Открыть todo-list',
    'Закрыть todo-list',
    c.taskListAnchor,
    c.topbarAnchor
    )
popupMenu(c.sentencesClosed,
    'sentences-pictures-opened',
    c.openSentences,
    c.hiddenSentencesPopupMenu,
    'open-sentences-popup-menu',
    'Открыть картинки-цитаты',
    'Закрыть картинки-цитаты',
    c.anchorQuotesPictures,
    c.topbarAnchor
    )