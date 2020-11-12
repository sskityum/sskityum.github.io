import {
    sentencesClosed,
    cardList,
    updateCardArray,
    hdCardsData
} from '../../constants'

let cardsData
export function readCardsData() {
    cardsData = localStorage.getItem('savedCardsData') ? JSON.parse(localStorage.getItem('savedCardsData')) : hdCardsData

}

let indices = []
let maxLikesNumber = -9999

function makeElement(tagName, className, text) {
    let element = $(tagName)
    element.addClass(className)
    if (text) {
        element.html(text)                
    }
    return element
}

function createCard(arrayPictures) {
    let listItem = makeElement('<li>', 'sentence')

    let title = makeElement('<h2>', 'sentence-title', arrayPictures.source)
    title.appendTo(listItem)

    let picture = makeElement('<img>', 'sentence-image')
    picture.attr('src', arrayPictures.cardUrl)
    picture.attr('alt', arrayPictures.text)
    picture.appendTo(listItem)

    let thumbsDown = makeElement('<i>', 'far')
    thumbsDown.addClass('fa-thumbs-down')
    thumbsDown.appendTo(listItem)

    let heartLike = makeElement('<i>', 'far')
    heartLike.addClass('fa-heart fa-2x')
    heartLike.appendTo(listItem)

    let thumbsUp = makeElement('<i>', 'far')
    thumbsUp.addClass('fa-thumbs-up')
    thumbsUp.appendTo(listItem)

    let sentence = makeElement('<p>', 'like-number', arrayPictures.likesNumber)
    sentence.appendTo(listItem)

    if (arrayPictures.winner) {
        listItem.addClass('winner')
        let likesNumberWinner = makeElement('<p>', 'old-like-number', arrayPictures.likesOld)
        likesNumberWinner.appendTo(listItem)
    }

    let likeCounter = listItem.find('.like-number')
    let decrease = listItem.find('.fa-thumbs-down')
    let increase  = listItem.find('.fa-thumbs-up')
    let heart = listItem.find('.fa-heart')

    increase.on('click', function () {
        likeCounter.text(+(likeCounter.text()) + 1)
        heart.addClass('fa-3x')
        setTimeout(function(){
            heart.removeClass('fa-3x')
        }, 50)
    })

    decrease.on('click', function() {
        likeCounter.text(+(likeCounter.text()) - 1)
        heart.removeClass('fa-2x')
        heart.addClass('fa-1x')
        setTimeout(function(){
            heart.addClass('fa-2x')
            heart.removeClass('fa-1x')
        }, 50)
    })

    return listItem
}

export function createPlatformImages() {
    $.each(cardsData, function(id) {
        let cardItem = createCard(cardsData[id])
        cardItem.appendTo(cardList)
    })
}

export function updateSaveCardsData() {
    updateCardArray.on('click', function() {
        indices = []
        $.each(cardList.children(), function(id) {
            cardsData[id].likesOld = cardsData[id].likesNumber
            cardsData[id].winner = false
            cardsData[id].likesNumber = $(this).find('.like-number').text()
    
            if (+(cardsData[id].likesNumber) > maxLikesNumber) {
                maxLikesNumber = cardsData[id].likesNumber
                indices = []
                indices.push(id)
            } else if (+(cardsData[id].likesNumber) == maxLikesNumber) {
                indices.push(id)
            }
        })
        
        $.each(indices, function(id) {
            if (indices.length == cardList.children().length) {
                cardsData[indices[id]].winner = false
            } else {
                cardsData[indices[id]].winner = true
            }
        })
    
        localStorage.setItem('savedCardsData', JSON.stringify(cardsData))
        window.location.reload()
    })
}
