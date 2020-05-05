const page: HTMLElement = document.getElementById('page')
const footer: HTMLElement = document.getElementById('footer')

// --anchors------------------------------------------------------------------------------------------
export const topbarAnchor: HTMLElement = document.getElementById('topbar')
export const catGalleryAnchor: HTMLElement = document.getElementById('cat-gallery-anchor')
export const taskListAnchor: HTMLElement = document.getElementById('task-list-anchor')
export const anchorQuotesPictures: HTMLElement = document.getElementById('anchor-quotes-pictures')
export const asideAnchor: HTMLElement = document.getElementById('aside-anchor')

// --banner-------------------------------------------------------------------------------------------
export const myPhoto: HTMLElement = document.getElementById('banner') 
export const ldStatus: HTMLElement = document.getElementById('status')
export const spLeft: HTMLElement = myPhoto.querySelector('.left')
export const spRight: HTMLElement = myPhoto.querySelector('.right')
export const decoration: HTMLElement = page.querySelector('.decoration')

// --decorativeArrow----------------------------------------------------------------------------------
export const decorativeArrow: HTMLElement = topbarAnchor.querySelector('.decorative-arrow')

// --hidden-menu---------------------------------------------------------------------------------------
export const hiddenMenu: HTMLElement = topbarAnchor.querySelector('.hidden-menu')
export const hiddenMenuItems = hiddenMenu.querySelectorAll <HTMLElement> ('li')
export const toCloseHiddenMenu: HTMLElement = hiddenMenu.querySelector('.hidden-menu li:nth-child(1)')
export const toRestartOnHiddenMenu: HTMLElement = hiddenMenu.querySelector('.hidden-menu li:nth-child(2)')

// --hidden sections-----------------------------------------------------------------------------------
export const galleryPhoto: HTMLElement = catGalleryAnchor.querySelector('.gallery-photo-closed')
export const toDoList: HTMLElement = taskListAnchor.querySelector('.case-list-closed')
export const sentencesClosed: HTMLElement = anchorQuotesPictures.querySelector('.sentences-pictures-closed')

// --cat-gallery---------------------------------------------------------------------------------------
export const photos: string[] = [
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
export const sketches = galleryPhoto.querySelectorAll <HTMLElement> ('.gallery-photo-preview')
export const fullPhoto: HTMLImageElement = galleryPhoto.querySelector('.full-photo')

// --task-list-----------------------------------------------------------------------------------------
export const list: HTMLElement = toDoList.querySelector('.todo-list')
export const listItems = list.children
export const updateTasksArray: HTMLElement = toDoList.querySelector('.update-tasks-array')
export const emptyListMessage: HTMLElement = toDoList.querySelector('.empty-tasks')
export const newItemTask: HTMLElement = toDoList.querySelector('.add-task')
export const newItemTitle: HTMLInputElement = newItemTask.querySelector('.add-task-input')
export const taskTemplate: HTMLTemplateElement = toDoList.querySelector('#task-template')
export const taskTemplateContent = taskTemplate.content
export const newItemTemplate: HTMLElement = taskTemplateContent.querySelector('.todo-list-item')

// --sentences-pictures--------------------------------------------------------------------------------
export const cardList: HTMLElement = sentencesClosed.querySelector('.sentences')
export const arrayUnlabeledLists = cardList.children
export const updateCardArray: HTMLElement = sentencesClosed.querySelector('.update-card-array')

// --aside---------------------------------------------------------------------------------------------
// export const hiddenMap = aside.querySelector('.hidden-my-location')  -  asideAnchor

// --open/close sections with tooltip------------------------------------------------------------------
export const openGalleryPhotoH1: HTMLElement = catGalleryAnchor.querySelector('h1')
export const openToDoList: HTMLElement = taskListAnchor.querySelector('h1')
export const openSentences: HTMLElement = anchorQuotesPictures.querySelector('h1')
export const mapIcon: HTMLElement = footer.querySelector('.map-icon')

export const hiddenMapPopupMenu: HTMLElement = footer.querySelector('.hidden-map-popup-menu')
export const hiddenGalleryPopupMenu: HTMLElement = catGalleryAnchor.querySelector('.hidden-gallery-popup-menu')
export const hiddenTodoListPopupMenu: HTMLElement = taskListAnchor.querySelector('.hidden-todo-list-popup-menu')
export const hiddenSentencesPopupMenu: HTMLElement = anchorQuotesPictures.querySelector('.hidden-sentences-popup-menu')