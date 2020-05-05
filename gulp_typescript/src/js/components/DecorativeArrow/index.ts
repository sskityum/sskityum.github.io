import {
    decorativeArrow
} from '../../constants'

export function decArr() {
    decorativeArrow.onmouseover = decorativeArrow.onmouseout = function(event: MouseEvent): void {
        if (event.type == 'mouseover') {
            decorativeArrow.classList.add('decorative-arrow-open')
        }
        if (event.type == 'mouseout') {
            decorativeArrow.classList.remove('decorative-arrow-open')
        }
    }
}

