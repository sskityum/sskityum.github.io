import {
    mapIcon,
    hiddenMapPopupMenu,
    asideAnchor,
    topbarAnchor,
    galleryPhoto,
    openGalleryPhotoH1,
    hiddenGalleryPopupMenu,
    catGalleryAnchor,
    toDoList,
    openToDoList,
    hiddenTodoListPopupMenu,
    taskListAnchor,
    sentencesClosed,
    openSentences,
    hiddenSentencesPopupMenu,
    anchorQuotesPictures,
    
} from '../../constants'

function popupMenu(
        controlTag: HTMLElement,
        controlTagOpenClass: string,
        mouseTag: HTMLElement,
        paragraphPopupMenu: HTMLElement,
        popupOpenClass: string,
        openBlockText: string,
        closeBlockText: string,
        sectionAnchor: HTMLElement,
        topAnchor: HTMLElement): void {

    mouseTag.onmouseover = mouseTag.onmouseout = handler

    function handler(event: MouseEvent):void {
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
                    topAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
                })
            }
            paragraphPopupMenu.classList.add(popupOpenClass)
        }
        if (event.type == 'mouseout') {
            paragraphPopupMenu.classList.remove(popupOpenClass)
        }
    }    
}

export const hideOpenMap = () => {
    popupMenu(asideAnchor,
        'my-location-opened',
        mapIcon,
        hiddenMapPopupMenu,
        'open-map-popup-menu',
        'Показать на карте',
        'Закрыть карту',
        asideAnchor,
        topbarAnchor)
}

export const hideOpenCatGallery = () => {
    popupMenu(galleryPhoto,
        'gallery-photo-open',
        openGalleryPhotoH1,
        hiddenGalleryPopupMenu,
        'open-gallery-popup-menu',
        'Открыть котогалерею',
        'Закрыть котогалерею',
        catGalleryAnchor,
        topbarAnchor)
}

export const hideOpenToDoList = () => {
    popupMenu(toDoList,
        'case-list-open',
        openToDoList,
        hiddenTodoListPopupMenu,
        'open-todo-list-popup-menu',
        'Открыть todo-list',
        'Закрыть todo-list',
        taskListAnchor,
        topbarAnchor)
}

export const hideOpenSentences = () => {
    popupMenu(sentencesClosed,
        'sentences-pictures-opened',
        openSentences,
        hiddenSentencesPopupMenu,
        'open-sentences-popup-menu',
        'Открыть картинки-цитаты',
        'Закрыть картинки-цитаты',
        anchorQuotesPictures,
        topbarAnchor)
}
