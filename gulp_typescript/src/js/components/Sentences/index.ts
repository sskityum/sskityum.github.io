import {
    ISentences,
    hdCardsData
} from './data'

import {
    arrayUnlabeledLists,
    updateCardArray,
    cardList,

} from '../../constants'

let cardsData: ISentences[]
export function readCardsData(): void {
    cardsData = localStorage.getItem('savedCardsData') ? JSON.parse(localStorage.getItem('savedCardsData')) : hdCardsData
}

function makeElement(tagName: string, className: string, text?: string): HTMLElement {
    let element: HTMLElement = document.createElement(tagName)
    element.classList.add(className)
    if (text) {
        element.innerText = text
    }
    return element
}

function createCard(product: ISentences): HTMLElement {
    let listItem: HTMLElement = makeElement('li', 'sentence')

    let title: HTMLElement = makeElement('h2', 'sentence-title', product.source)
    listItem.appendChild(title)
    
    let picture: HTMLImageElement = makeElement('img', 'sentence-image') as HTMLImageElement
    picture.src = product.cardUrl
    picture.alt = product.text
    listItem.appendChild(picture)

    let decrease: HTMLElement = makeElement('i', 'far')
    decrease.classList.add('fa-thumbs-down')
    listItem.appendChild(decrease)

    let heart: HTMLElement = makeElement('i', 'far')
    heart.classList.add('fa-heart')
    heart.classList.add('fa-2x')
    listItem.appendChild(heart)

    let increase: HTMLElement = makeElement('i', 'far')
    increase.classList.add('fa-thumbs-up')
    listItem.appendChild(increase)

    let likeCounter: HTMLElement = makeElement('p', 'like-number', product.likesNumber.toString())
    listItem.appendChild(likeCounter)

    if (product.winner) {
        listItem.classList.add('winner')
        let likesNumberWinner: HTMLElement = makeElement('p', 'old-like-number', product.likesOld.toString())
        listItem.appendChild(likesNumberWinner)
    }

    increase.addEventListener('click', function () {
        if (product.signLikeCounterUpdate) {
            product.likesOld = product.likesNumber
        }
        product.likesNumber ++
        product.signLikeCounterUpdate = false
        likeCounter.innerText = product.likesNumber.toString()
        heart.classList.add('fa-3x')
        setTimeout(function(){
            heart.classList.remove('fa-3x')
        }, 50)
    })

    decrease.addEventListener('click', function() {
        if (product.signLikeCounterUpdate) {
            product.likesOld = product.likesNumber
        }
        product.likesNumber --
        product.signLikeCounterUpdate = false
        likeCounter.innerText = product.likesNumber.toString()
        heart.classList.remove('fa-2x')
        heart.classList.add('fa-1x')
        setTimeout(function(){
            heart.classList.add('fa-2x')
            heart.classList.remove('fa-1x')
        }, 50)
    })

    return listItem
}

export const createPlatformImages = (): void => {
    cardsData.forEach(c => cardList.append(createCard(c)))
}

export const updateSaveCardsData = (): void => {
    let maxLikesNumber: number = -9999
    let indices: number[]
    
    updateCardArray.addEventListener('click', function() {
        indices = []
        for (let i = 0; i < arrayUnlabeledLists.length; i++) {
            cardsData[i].signLikeCounterUpdate = true
            cardsData[i].winner = false
            cardsData[i].likesNumber = Number(arrayUnlabeledLists[i].querySelector('.like-number').textContent)
    
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
}