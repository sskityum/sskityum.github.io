
const rozhaImg = document.getElementById('banner')
const status = document.getElementById('status')
const spLeft = document.querySelector('.left')
const spRight = document.querySelector('.right')

function renderImg(src) {
    return new Promise(function(resolve, reject) {
        status.innerText = "загрузка..."
        let img = document.createElement('img')
        img.src = src
        img.alt = "моё фото"
        

        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error(`Не удалось загрузить изображение ${src}`))

        rozhaImg.appendChild(img)
    })
}

renderImg("./img/Vietnam_p_7.png")
    .then((img) => {status.innerText = ""})
    .then((img) => {document.querySelector('.decoration').classList.add('decoration_move')})
    .then((img) => {spLeft.classList.add('move_left')})
    .then((img) => {spRight.classList.add('move_right')})
    .catch(error => alert(`Ошибка: ${error.message}`))

//-------------------------------------------------------------
const arrow = document.querySelector('.menu-icon')
const open = document.querySelector('.hidden-menu')
const toClose = document.querySelector('.hidden-menu li:nth-child(1)')

function remClass() {
    open.classList.remove('open')
} 
function startDelay() {
    timerId = setTimeout(remClass, 10000)
}

function counterReset() {
    clearTimeout(timerId)
}

arrow.onmouseover = arrow.onmouseout = arrow.onclick = handler

function handler(event) {
        
    if (event.type == 'mouseover') {
        arrow.classList.add('menu-icon-open')
    }
    if (event.type == 'mouseout') {
        arrow.classList.remove('menu-icon-open')
    }
    if (event.type == 'click') {
        open.classList.add('open')
        startDelay()
    }
}

toClose.addEventListener('click', function () {
    counterReset()
    open.classList.remove('open')
})

//-------------------------------------------------------------
const photos = [
    'img/cat_gallery/IMG_0010.JPG',
    'img/cat_gallery/IMG_0029.JPG',
    'img/cat_gallery/IMG_0030.JPG',
    'img/cat_gallery/IMG_0031.JPG',
    'img/cat_gallery/IMG_0271_min.JPG',
    'img/cat_gallery/IMG_0915.JPG',
    'img/cat_gallery/IMG_0916_min.JPG',
    'img/cat_gallery/IMG_0917.JPG',
    'img/cat_gallery/IMG_0918_min.JPG',
    'img/cat_gallery/IMG_0920_min.JPG',
    'img/cat_gallery/IMG_2395_min.JPG',
    'img/cat_gallery/IMG_5789_min.JPG',
    'img/cat_gallery/IMG_5791_min.JPG',
    'img/cat_gallery/IMG_5827_min.JPG',
    'img/cat_gallery/IMG_20160201_210358_min.jpg',
    'img/cat_gallery/IMG_0268.JPG'
]
const sketches = document.querySelectorAll('.gallery-photo-preview')
const fullPhoto = document.querySelector('.full-photo')
const openGalleryPhotoHiddenMenu = document.querySelector('.hidden-menu li:nth-child(3)')
const openTodoListHiddenMenu = document.querySelector('.hidden-menu li:nth-child(4)')
const openSentencesHiddenMenu = document.querySelector('.hidden-menu li:nth-child(5)')
const openMapHiddenMenu = document.querySelector('.hidden-menu li:nth-child(6)')
const openGalleryPhotoH1 = document.querySelector('.gallery-section h1')
const sentencesClosed = document.querySelector('.sentences-pictures-closed')
const galleryPhoto = document.querySelector('.gallery-photo-closed')
const toDoList = document.querySelector('.case-list-closed')
const hiddenMap = document.querySelector('.hidden-my-location')
const openToDoList = document.querySelector('.task-list h1')
const catGalleryAnchor = document.getElementById('cat-gallery-anchor')
const taskListAnchor = document.getElementById('task-list-anchor')
const anchorQuotesPictures = document.getElementById('anchor-quotes-pictures')
const asideAnchor = document.getElementById('aside-anchor')

const addSketchClickHandler = function (sketch, photo) {
    sketch.addEventListener('click', function () {
        fullPhoto.src = photo;
      });
}

for (var i = 0; i < sketches.length; i++) {
    addSketchClickHandler(sketches[i], photos[i])
}

openGalleryPhotoHiddenMenu.addEventListener('click', function () {
    galleryPhoto.classList.add('gallery-photo-open')
    catGalleryAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
    counterReset()
    open.classList.remove('open')
})

openTodoListHiddenMenu.addEventListener('click', function () {
    toDoList.classList.add('case-list-open')
    taskListAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
    counterReset()
    open.classList.remove('open')
})

openSentencesHiddenMenu.addEventListener('click', function () {
    sentencesClosed.classList.add('sentences-pictures-opened')
    anchorQuotesPictures.scrollIntoView({block: 'start', behavior: 'smooth'})
    counterReset()
    open.classList.remove('open')
})

openMapHiddenMenu.addEventListener('click', function () {
    hiddenMap.classList.add('my-location-opened')
    asideAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
    counterReset()
    open.classList.remove('open')
})

//-------------------------------------------------------------
const list = document.querySelector('.todo-list')
const taskTemplate = document.querySelector('#task-template').content
const newItemTemplate = taskTemplate.querySelector('.todo-list-item')
const hdTasksData = [
    {
        taskDataDescription: 'Покормить Васю',
        taskMark: 'marked'
    },
    {
        taskDataDescription: 'Разобраться где что и когда оно уже',
        taskMark: 'unmarked'
    },
    {
        taskDataDescription: 'Подучить Angular',
        taskMark: 'marked'
    }
]

let tasksData = localStorage.getItem('savedTasksData') ? JSON.parse(localStorage.getItem('savedTasksData')) : hdTasksData

const makeTask = function (item) {
    let taskText = item.taskDataDescription
    let task = newItemTemplate.cloneNode(true)
    let taskDescription = task.querySelector('span')
    let attributeChecked = task.querySelector('.todo-list-input')
    taskDescription.innerText = taskText
    if (item.taskMark == 'marked') {
        attributeChecked.setAttribute('checked', 'checked')
    }
    list.appendChild(task)
}

for (let i = 0; i < tasksData.length; i++) {
    makeTask(tasksData[i])
}

const items = list.children
const emptyListMessage = document.querySelector('.empty-tasks')
const newItemTask = document.querySelector('.add-task')
const newItemTitle = newItemTask.querySelector('.add-task-input')
const updateTasksArray = document.querySelector('.update-tasks-array')

const toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden-tasks')
    } else {
        emptyListMessage.classList.add('hidden-tasks')
    }
}

const addCheckHandler = function (item) {
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
        toggleEmptyListMessage()
    })
}

for (let i = 0; i < items.length; i++) {
    addCheckHandler(items[i])
}

newItemTask.addEventListener('submit', function (event) {
    event.preventDefault()
    let taskText = newItemTitle.value
    let task = newItemTemplate.cloneNode(true)
    let taskDescription = task.querySelector('span')
    taskDescription.innerText = taskText
    addCheckHandler(task)
    list.appendChild(task)
    toggleEmptyListMessage()
    newItemTitle.value = ''
})

function saveToLocalStorage (key, value, callback) {
    localStorage.setItem(key, JSON.stringify(value))
    callback()
}

updateTasksArray.addEventListener('click', function () {
    tasksData = []
    for (let i = 0; i < items.length; i ++) {
        itemObj = {}
        itemObj.taskDataDescription = items[i].querySelector('span').textContent
        if (items[i].querySelector('.todo-list-input').hasAttribute('checked')) {
            console.log(items[i].querySelector('.todo-list-input'))
            itemObj.taskMark = 'marked'
        } else {
            itemObj.taskMark = 'unmarked'
        }
        tasksData.push(itemObj)
    }
    saveToLocalStorage('savedTasksData', tasksData, window.location.reload())
})

//-------------------------------------------------------------
let hDCardsData = [
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../vanillajs/img/quotes_pictures/kotik.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410266806_frazochki-kartinochki-pozitivchik-20.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../vanillajs/img/quotes_pictures/buhgalter.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410757507_002.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../vanillajs/img/quotes_pictures/peshehodi.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410757510_007.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../vanillajs/img/quotes_pictures/izmenit.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283714_25qt4fbqss4.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../vanillajs/img/quotes_pictures/cherchil.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283729_e7ciiey7fu4.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../vanillajs/img/quotes_pictures/zarabotat.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283768_0_g6duztxzi.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../vanillajs/img/quotes_pictures/vezenie.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1350147044_pozitivnie_kartinki_so_smislom_527_29-12.svg',
        winner: false,
        likesOld: '0'
    }
]

let cardsData = localStorage.getItem('savedCardsData') ? JSON.parse(localStorage.getItem('savedCardsData')) : hDCardsData

const makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName)
    element.classList.add(className)
    if (text) {
        element.textContent = text
    }
    return element
}

const createCard = function (product) {
    let listItem = makeElement('li', 'sentence')

    let title = makeElement('h2', 'sentence-title', product.source)
    listItem.appendChild(title)

    let picture = makeElement('img', 'sentence-image')
    picture.src = product.cardUrl
    picture.alt = product.text
    listItem.appendChild(picture)

    let thumbsDown = makeElement('i', 'far')
    thumbsDown.classList.add('fa-thumbs-down')
    listItem.appendChild(thumbsDown)

    let heartLike = makeElement('i', 'far')
    heartLike.classList.add('fa-heart')
    heartLike.classList.add('fa-2x')
    listItem.appendChild(heartLike)

    let thumbsUp = makeElement('i', 'far')
    thumbsUp.classList.add('fa-thumbs-up')
    listItem.appendChild(thumbsUp)

    let sentence = makeElement('p', 'like-number', product.likesNumber)
    listItem.appendChild(sentence)

    if (product.winner) {
        listItem.classList.add('winner')
        let likesNumberWinner = makeElement('p', 'old-like-number', product.likesOld)
        listItem.appendChild(likesNumberWinner)
    }

    let likeCounter = listItem.querySelector('.like-number')
    let decrease = listItem.querySelector('.fa-thumbs-down')
    let increase  = listItem.querySelector('.fa-thumbs-up')
    let heart = listItem.querySelector('.fa-heart')

    increase.addEventListener('click', function () {
        likeCounter.innerText ++
        heart.classList.add('fa-3x')
        setTimeout(function(){
            heart.classList.remove('fa-3x')
        }, 50)
    })

    decrease.addEventListener('click', function() {
        likeCounter.innerText --
        heart.classList.remove('fa-2x')
        heart.classList.add('fa-1x')
        setTimeout(function(){
            heart.classList.add('fa-2x')
            heart.classList.remove('fa-1x')
        }, 50)
    })
        
    return listItem
}

const cardList = document.querySelector('.sentences')

for (let i = 0; i < cardsData.length; i++) {
    const cardItem = createCard(cardsData[i])
    cardList.appendChild(cardItem)
}

//---------сохранение cardsData в lockalStorage-----------------------
const updateCardArray = document.querySelector('.update-card-array')
const arrayUnlabeledLists = document.querySelectorAll('.sentence')
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
    saveToLocalStorage('savedCardsData', cardsData, window.location.reload())
})

const openSentences = document.querySelector('.quote-pictures h1')
const hiddenSentencesPopupMenu = document.querySelector('.hidden-sentences-popup-menu')

// ---------------------------------------------------------------
const mapIcon = document.querySelector('.map-icon')
const hiddenMapPopupMenu = document.querySelector('.hidden-map-popup-menu')
const hiddenGalleryPopupMenu = document.querySelector('.hidden-gallery-popup-menu')
const hiddenTodoListPopupMenu = document.querySelector('.hidden-todo-list-popup-menu')


// 1. controlTag - открывающийся тег (блок) (hiddenMap)
// 2. controlTagOpenClass - класс (controlTag) открытого блока (my-location-opened)
// 3. mouseTag - объект наведения мышкой (mapIcon)
// 4. paragraphPopupMenu - всплывающая подсказка
// 5. popupOpenClass - класс (textParagraph) открытой подсказки
// 6. openBlockText - текст подсказки для открытия (controlTag)
// 7. closeBlockText - текст подсказки для закрытия (controlTag)
// 8. sectionAnchor - якорь section блока controlTag

const popupMenu = function (controlTag, controlTagOpenClass, mouseTag, paragraphPopupMenu, popupOpenClass, openBlockText, closeBlockText, sectionAnchor) {
    mouseTag.onmouseover = mouseTag.onmouseout = handler

    function handler(event) {
        if (event.type == 'mouseover') {
            if (!controlTag.classList.contains(controlTagOpenClass)) {
                paragraphPopupMenu.textContent = openBlockText
                mouseTag.addEventListener('click', function () {
                    controlTag.classList.add(controlTagOpenClass)
                    sectionAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
                })
            } else {
                paragraphPopupMenu.textContent = closeBlockText
                mouseTag.addEventListener('click', function () {
                    controlTag.classList.remove(controlTagOpenClass)
                })
            }
            paragraphPopupMenu.classList.add(popupOpenClass)
        }
        if (event.type == 'mouseout') {
            paragraphPopupMenu.classList.remove(popupOpenClass)
        }
    }    
}

popupMenu(hiddenMap,
    'my-location-opened',
    mapIcon,
    hiddenMapPopupMenu,
    'open-map-popup-menu',
    'Показать на карте',
    'Закрыть карту',
    asideAnchor
    )
popupMenu(galleryPhoto,
    'gallery-photo-open',
    openGalleryPhotoH1,
    hiddenGalleryPopupMenu,
    'open-gallery-popup-menu',
    'Открыть котогалерею',
    'Закрыть котогалерею',
    catGalleryAnchor
    )
popupMenu(toDoList,
    'case-list-open',
    openToDoList,
    hiddenTodoListPopupMenu,
    'open-todo-list-popup-menu',
    'Открыть todo-list',
    'Закрыть todo-list',
    taskListAnchor
    )
popupMenu(sentencesClosed,
    'sentences-pictures-opened',
    openSentences,
    hiddenSentencesPopupMenu,
    'open-sentences-popup-menu',
    'Открыть картинки-цитаты',
    'Закрыть картинки-цитаты',
    anchorQuotesPictures
    )
