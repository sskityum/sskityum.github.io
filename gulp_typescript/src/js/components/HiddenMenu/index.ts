import {
    decorativeArrow,
    hiddenMenu,
    hiddenMenuItems,
    galleryPhoto,
    toDoList,
    sentencesClosed,
    asideAnchor,
    toCloseHiddenMenu,
    catGalleryAnchor,
    taskListAnchor,
    anchorQuotesPictures,
    toRestartOnHiddenMenu
} from '../../constants'

export function openCloseHiddenMenu(): void {
    decorativeArrow.onclick = () => {
        hiddenMenu.classList.add('hidden-menu-is-open')
    }

    toCloseHiddenMenu.onclick = () => {
        hiddenMenu.classList.remove('hidden-menu-is-open')
    }

    toRestartOnHiddenMenu.onclick = () => {
        window.location.reload()
    }
}

//  
function hiddenMenuButtonProc(clickedObject: HTMLElement, domObject: HTMLElement, classObject: string, itemAnchor: HTMLElement): void {
    clickedObject.onclick = () => {
        domObject.classList.add(classObject)
        itemAnchor.scrollIntoView({block: 'start', behavior: 'smooth'})
        hiddenMenu.classList.remove('hidden-menu-is-open')
    }        
}

export function openSections(): void {
    for (let i = 0; i < hiddenMenuItems.length; i++) {
        if (i == 2) {
            hiddenMenuButtonProc(hiddenMenuItems[i], galleryPhoto, 'gallery-photo-open', catGalleryAnchor)
        } else if (i == 3) {
            hiddenMenuButtonProc(hiddenMenuItems[i], toDoList, 'case-list-open', taskListAnchor)
        } else if (i == 4) {
            hiddenMenuButtonProc(hiddenMenuItems[i], sentencesClosed, 'sentences-pictures-opened', anchorQuotesPictures)
        } else if (i == 5) {
            hiddenMenuButtonProc(hiddenMenuItems[i], asideAnchor, 'my-location-opened', asideAnchor)
        }
    }
}
