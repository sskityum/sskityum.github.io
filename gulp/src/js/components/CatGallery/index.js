
export function addSketchClickHandler(sketch, photo, bigPhoto) {
    sketch.addEventListener('click', function () {
        bigPhoto.src = photo;
      });    
}