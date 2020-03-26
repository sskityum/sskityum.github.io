export const topbarAnchor = document.getElementById('topbar')
const page = document.getElementById('page')
const aside = document.getElementById('aside')
const footer = document.getElementById('footer')

export const asideAnchor = document.getElementById('aside-anchor')
export const catGalleryAnchor = document.getElementById('cat-gallery-anchor')
export const taskListAnchor = document.getElementById('task-list-anchor')
export const anchorQuotesPictures = document.getElementById('anchor-quotes-pictures')

// --banner-------------------------------------------------------------------------------------------
export const myPhoto = document.getElementById('banner')
export const status = document.getElementById('status')
export const spLeft = myPhoto.querySelector('.left')
export const spRight = myPhoto.querySelector('.right')
export const decoration = page.querySelector('.decoration')

// --hidden-menu---------------------------------------------------------------------------------------
export const arrowMenuIcon = topbar.querySelector('.menu-icon')
export const openMenuIcon = topbar.querySelector('.hidden-menu')
export const hiddenMenuItems = openMenuIcon.querySelectorAll('li')
export const toCloseMenuIcon = openMenuIcon.querySelector('.hidden-menu li:nth-child(1)')

// --cat-gallery---------------------------------------------------------------------------------------
export const photos = [
    '../../vanillajs/img/cat_gallery/IMG_0010.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0029.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0030.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0031.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0271_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0915.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0916_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0917.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0918_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_0920_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_2395_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_5789_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_5791_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_5827_min.JPG',
    '../../vanillajs/img/cat_gallery/IMG_20160201_210358_min.jpg',
    '../../vanillajs/img/cat_gallery/IMG_0268.JPG'
]
export const galleryPhoto = catGalleryAnchor.querySelector('.gallery-photo-closed')
export const sketches = galleryPhoto.querySelectorAll('.gallery-photo-preview')
export const fullPhoto = galleryPhoto.querySelector('.full-photo')

// --task-list-----------------------------------------------------------------------------------------
export const toDoList = taskListAnchor.querySelector('.case-list-closed')
export const list = toDoList.querySelector('.todo-list')
export const items = list.children
export const updateTasksArray = toDoList.querySelector('.update-tasks-array')
export const emptyListMessage = toDoList.querySelector('.empty-tasks')
export const newItemTask = toDoList.querySelector('.add-task')
export const newItemTitle = newItemTask.querySelector('.add-task-input')
export const taskTemplate = toDoList.querySelector('#task-template').content
export const newItemTemplate = taskTemplate.querySelector('.todo-list-item')
export const hdTasksData = [
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

// --sentences-pictures--------------------------------------------------------------------------------
export const sentencesClosed = anchorQuotesPictures.querySelector('.sentences-pictures-closed')
export const cardList = sentencesClosed.querySelector('.sentences')
export const arrayUnlabeledLists = sentencesClosed.querySelectorAll('.sentence')
export const updateCardArray = sentencesClosed.querySelector('.update-card-array')
export const hDCardsData = [
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../../vanillajs/img/quotes_pictures/kotik.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410266806_frazochki-kartinochki-pozitivchik-20.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../../vanillajs/img/quotes_pictures/buhgalter.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410757507_002.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../../vanillajs/img/quotes_pictures/peshehodi.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1410757510_007.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/izmenit.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283714_25qt4fbqss4.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/cherchil.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283729_e7ciiey7fu4.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/zarabotat.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1478283768_0_g6duztxzi.svg',
        winner: false,
        likesOld: '0'
    },
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../../vanillajs/img/quotes_pictures/vezenie.svg',
        likesNumber: '0',
        text: 'Смешная картинка со смыслом - 1350147044_pozitivnie_kartinki_so_smislom_527_29-12.svg',
        winner: false,
        likesOld: '0'
    }
]

// --aside---------------------------------------------------------------------------------------------
export const hiddenMap = aside.querySelector('.hidden-my-location')

// --open/close sections with tooltip------------------------------------------------------------------
export const openGalleryPhotoH1 = catGalleryAnchor.querySelector('h1')
export const openToDoList = taskListAnchor.querySelector('h1')
export const openSentences = anchorQuotesPictures.querySelector('h1')
export const mapIcon = footer.querySelector('.map-icon')

export const hiddenMapPopupMenu = footer.querySelector('.hidden-map-popup-menu')
export const hiddenGalleryPopupMenu = catGalleryAnchor.querySelector('.hidden-gallery-popup-menu')
export const hiddenTodoListPopupMenu = taskListAnchor.querySelector('.hidden-todo-list-popup-menu')
export const hiddenSentencesPopupMenu = anchorQuotesPictures.querySelector('.hidden-sentences-popup-menu')
