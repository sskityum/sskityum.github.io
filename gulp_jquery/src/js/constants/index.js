export const accordion = $('#accordion')

// --banner-------------------------------------------------------------------------------------------
export const myPhoto = $('#banner')
export const imgsrc = '../../vanillajs/img/Vietnam_p_7.png'

// --decorativeArrow----------------------------------------------------------------------------------
export const decorativeArrow = $('.decorative-arrow')

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
    '../../vanillajs/img/cat_gallery/IMG_20160201_210358_min.jpg',
    '../../vanillajs/img/cat_gallery/IMG_0268.JPG'
]
export const galleryPhoto = accordion.find('.gallery-photo-closed')
export const sketches = galleryPhoto.find('.gallery-photo-preview')
export const fullPhoto = galleryPhoto.find('.full-photo')

// --task-list-----------------------------------------------------------------------------------------
export const toDoList = $('.case-list-closed')
export const list = toDoList.find('.todo-list')
export const updateTasksArray = toDoList.find('.update-tasks-array')
export const emptyListMessage = toDoList.find('.empty-tasks')
export const newItemTask = toDoList.find('.add-task')
export const newItemTitle = newItemTask.find('.add-task-input')
export const taskTemplate = $('#task-template')
export const newItemTemplate = taskTemplate.find('.todo-list-item')
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
export const sentencesClosed = $('.sentences-pictures-closed')
export const cardList = sentencesClosed.find('.sentences')
export const updateCardArray = sentencesClosed.find('.update-card-array')
export const hdCardsData = [
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

// --open/close sections with tooltip------------------------------------------------------------------
export const hiddenMap = $('#aside-anchor')
export const mapIcon = $('.map-icon')
export const hiddenMapPopupMenu = $('.hidden-map-popup-menu')