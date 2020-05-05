import {
    myPhoto,
    ldStatus,
    spLeft,
    spRight,
    decoration,
} from './constants'

import { renderImg } from './components/Banner'
import { decArr } from './components/DecorativeArrow'
import { openCloseHiddenMenu, openSections } from './components/HiddenMenu'
import { fromPreviewsToFull } from './components/CatGallery'
import {
    readTasksData,
    renderTaskData,
    toggleEmptyListMessage,
    addCheckHandlers,
    newTasks,
    refreshTasksDataSaveLocalStorage 
} from './components/TaskList'
import { 
    readCardsData, createPlatformImages, updateSaveCardsData
} from './components/Sentences'
import { hideOpenMap, hideOpenToDoList, hideOpenSentences, hideOpenCatGallery } from './components/Tooltip'

// --banner--------------------------------------------------------
renderImg("../../vanillajs/img/Vietnam_p_7.png", ldStatus, myPhoto)
    .then((data) => {
        return new Promise((resolve, reject) => {
            data.style.top = '0px'
            data.style.opacity = '1'

            resolve(data)
        })
    })
    .then(() => {ldStatus.innerText = ""})
    .then(() => {decoration.classList.add('decoration_move')})
    .then(() => {spLeft.classList.add('move_left')})
    .then(() => {spRight.classList.add('move_right')})
    .catch(error => alert(`Ошибка: ${error.message}`))

// --decorativeArrow-----------------------------------------------
decArr()

// --hidden-menu---------------------------------------------------
openCloseHiddenMenu()
openSections()

// --cat-gallery---------------------------------------------------
fromPreviewsToFull()

// --task-list-----------------------------------------------------
readTasksData()
renderTaskData()
toggleEmptyListMessage()
addCheckHandlers()
newTasks()
refreshTasksDataSaveLocalStorage()

// --sentences-pictures--------------------------------------------
readCardsData()
createPlatformImages()
updateSaveCardsData()

// --open/close sections, map - tooltip----------------------------
hideOpenMap()
hideOpenCatGallery()
hideOpenToDoList()
hideOpenSentences()