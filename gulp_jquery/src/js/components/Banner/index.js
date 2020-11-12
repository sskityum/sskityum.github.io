import {
    myPhoto,
    imgsrc
} from '../../constants'

let img = $('<img>')

export function def() {
    myPhoto.append(img)
    let defrr = $.Deferred()

    img.attr({
        'src': imgsrc,
        'alt': 'моё фото'
    }).animate({
        top: 0,
        opacity: 1.0,
    }, 2000, "easeOutBounce")
    .animate({brightness: 1.0}, {
        duration: 1000,
        easing: 'easeOutCubic',
        step: function() {
            img.css({'filter': 'brightness(' + this.brightness + ')'})
        }
    })

    defrr.resolve()
    return defrr.promise()
}

export function sib(dfrr) {
    dfrr.done(setTimeout(function() {
        img.siblings('.left').animate({
            left: 350,
            opacity: 0.1
        })
        img.siblings('.right').animate({
            left: 50,
            opacity: 0.1
        })
    }, 3000))
}


