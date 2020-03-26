export function popupMenu(controlTag, controlTagOpenClass, mouseTag, paragraphPopupMenu, popupOpenClass, openBlockText, closeBlockText, sectionAnchor, topAnchor) {
    mouseTag.onmouseover = mouseTag.onmouseout = handler

    function handler(event) {
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