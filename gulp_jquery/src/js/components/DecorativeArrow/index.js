import {
    accordion,
    decorativeArrow
} from '../../constants'

export function decArr() {
    decorativeArrow.on({
        mouseenter: function() {
            $(this).addClass('decorative-arrow-open')
        },
        mouseleave: function() {
            $(this).removeClass('decorative-arrow-open')
        },
        click: function() {
            $('html').animate({
                scrollTop: accordion.offset().top
            }, 1000)
        }
    })
}
