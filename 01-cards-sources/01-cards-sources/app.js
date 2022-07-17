function slidesPlugin(activeSlide) {
    const slides=document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides){
        slide.addEventListener('click', () => {
            clearactiveclasses()
            slide.classList.add('active')
        })
    }

    function clearactiveclasses (){
        slides.forEach((slide) => {
        slide.classList.remove('active')
        })
    }
}

slidesPlugin(2)

/* 
const slides=document.querySelectorAll('.slide')

slides[0].classList.add('active')

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearactiveclasses()
        slide.classList.add('active')
    })
}

function clearactiveclasses (){
    slides.forEach((slide) => {
    slide.classList.remove('active')
    })
}
 */