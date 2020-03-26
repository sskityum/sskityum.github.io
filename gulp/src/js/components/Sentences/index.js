export function makeElement(tagName, className, text) {
    let element = document.createElement(tagName)
    element.classList.add(className)
    if (text) {
        element.textContent = text
    }
    return element
}

export function createCard(product) {
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