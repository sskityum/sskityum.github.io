
export function renderImg(src: string, process: HTMLElement, photoBanner: HTMLElement) {
    return new Promise <HTMLElement>(function(resolve, reject) {
        process.innerText = "загрузка..."
        let img = document.createElement('img')
        img.src = src
        img.alt = "моё фото"
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error(`Не удалось загрузить изображение ${src}`))
        photoBanner.appendChild(img)
    })
}
