
export function renderImg(src, process, photoBanner) {
    return new Promise(function(resolve, reject) {
        process.innerText = "загрузка..."
        let img = document.createElement('img')
        img.src = src
        img.alt = "моё фото"
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error(`Не удалось загрузить изображение ${src}`))
        photoBanner.appendChild(img)
    })
}