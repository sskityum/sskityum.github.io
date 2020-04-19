
import {
    accordion,
    hdTasksData
} from './constants'

import { def, sib } from './components/Banner'
import { decArr } from './components/DecorativeArrow'
import { drawCatGallery } from './components/CatGallery'
import { readTasksData, makeTask, toggleEmptyListMessage, addCheckHandler, newTasks, saveTasksData } from './components/TaskList'
import { readCardsData, createPlatformImages, updateSaveCardsData } from './components/Sentences'
import { openingClosingCardPrompt } from './components/Tooltip'

// ----------------проверка установки jquery ui------------------------------------------------------
// if (typeof jQuery == "function" && ('ui' in jQuery) && jQuery.ui && ('version' in jQuery.ui)) {
//     console.log('Версия jQuery ui - ' + jQuery.ui.version)
//     }   else
//     console.log('jQuery ui не подключена')

$(document).ready(() => {       // -------------аккордеон------------------------------------------
    $( function() {             
        accordion.accordion()
    })

    let d = def()               // -------------загрузка баннера-----------------------------------
    let s = sib(d)

    decArr()                    // -------------декоративная стрелка-------------------------------

    drawCatGallery()            // -------------котогалерея----------------------------------------

    readTasksData()             // -------------список дел-----------------------------------------

    makeTask()
    toggleEmptyListMessage()
    addCheckHandler()
    newTasks()
    saveTasksData()

    readCardsData()             // -------------цитаты----------------------------------------------
    createPlatformImages()
    updateSaveCardsData()

    openingClosingCardPrompt()  // -------------open/close map - tooltip----------------------------

})

