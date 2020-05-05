import {
    sketches,
    photos,
    fullPhoto
} from '../../constants'

function addSketchClickHandler(sketch: HTMLElement, photo: string, bigPhoto: HTMLImageElement) {
    sketch.addEventListener('click', function () {
        bigPhoto.src = photo;
      });    
}

export function fromPreviewsToFull(): void {
    for (var i = 0; i < sketches.length; i++) {
        addSketchClickHandler(sketches[i], photos[i], fullPhoto)
    }
}

