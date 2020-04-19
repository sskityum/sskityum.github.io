
import {
    photos,
    galleryPhoto,
    sketches,
    fullPhoto
} from '../../constants'

export function drawCatGallery() {
    $.each(sketches, function(id) {
        $(this).on('click', function() {
            fullPhoto.attr('src', photos[id])
        })
    })    
}
