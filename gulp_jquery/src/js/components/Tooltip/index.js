import {
    hiddenMap,
    mapIcon,
    hiddenMapPopupMenu
} from '../../constants'

export function openingClosingCardPrompt() {
    mapIcon.on('click', function() {
        $('html, body').animate({
            scrollTop: $('#aside').offset().top
        }, 1000)
        if (hiddenMap.hasClass('my-location-opened')) {
            hiddenMap.removeClass('my-location-opened')
            $('html, body').animate({
                scrollTop: $('#topbar').offset().top
            }, 1000)
        } else {
            hiddenMap.addClass('my-location-opened')
        }
    })
    
    mapIcon.on({
        mouseenter: function() {
            if (!hiddenMap.hasClass('my-location-opened')) {
                hiddenMapPopupMenu.text('Открыть карту')
            } 
            if (hiddenMap.hasClass('my-location-opened')) {
                hiddenMapPopupMenu.text('Закрыть карту')
            }
            hiddenMapPopupMenu.addClass('open-map-popup-menu')
        },
        mouseleave: function() {
            hiddenMapPopupMenu.removeClass('open-map-popup-menu')
        }
    })
}

