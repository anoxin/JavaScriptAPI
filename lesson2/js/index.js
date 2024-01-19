/* Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между 
изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению. */

const sliderImg = document.querySelectorAll(".slider__img");
const sliderNav = document.querySelectorAll(".slider__nav");
const sliderPrev = document.querySelector(".slider__prev");
const sliderNext = document.querySelector(".slider__next");
const sliderBlockButton = document.querySelector(".slider__block-button");

sliderNav.forEach((el) => {
    el.addEventListener("click", (even)=> {

        managingClasses()

document.getElementById(`img-${even.target.id.split('-')[1]}`).classList.add("slider__img_active");
document.getElementById(`nav-${even.target.id.split('-')[1]}`).classList.add("slider__nav_active");
    })

})

sliderBlockButton.addEventListener("click", (even)=> {
    const curentId = +document.querySelector(".slider__img_active").id.split('-')[1];
   
        if (even.target.classList[1] == "slider__prev" && curentId > 1) {
            managingClasses()
            document.getElementById(`img-${curentId-1}`).classList.add("slider__img_active");
            document.getElementById(`nav-${curentId-1}`).classList.add("slider__nav_active");
        }
        if (even.target.classList[1] == "slider__next" && curentId < sliderImg.length) {
            managingClasses()
            document.getElementById(`img-${curentId+1}`).classList.add("slider__img_active");
            document.getElementById(`nav-${curentId+1}`).classList.add("slider__nav_active");
        }
    
})

function managingClasses() {
    document.querySelector(".slider__img_active").classList.remove( "slider__img_active");
    document.querySelector(".slider__nav_active").classList.remove( "slider__nav_active");
}