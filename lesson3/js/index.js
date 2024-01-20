/* Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

Регистрация на Unsplash:

• Перейдите на веб-сайт Unsplash (https://unsplash.com/).
• Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

Создание приложения:

• Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
• Нажмите "New Application".
• Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
• Получите свой API-ключ после создания приложения.

Разработка веб-приложения:

• Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
• Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
• Отобразите информацию о фотографе под изображением.

* Дополнительные задачи (по желанию):

• Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.
• Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
• Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров. */

const photoContainer = document.getElementById("photo-container");
const countLike = document.querySelector(".count-like");
const author = document.querySelector(".author");
const like = document.querySelector(".like");
let page = Math.floor(Math.random() * 9);

async function fetchPhotos() {
  let pageCount = 4;
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${pageCount}&per_page=9&client_id=dxEEUvW_DGc-7iwicfdWMZ7qeVCSPH1HgAkaXA1315g`
    );

    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  const fotoElem = photos[page].urls.small;
  const imgElem = document.createElement("img");
  imgElem.src = fotoElem;
  photoContainer.appendChild(imgElem);
  countLike.textContent = photos[page].likes + " like";
  author.textContent = "Автор:" + photos[page].user.name;
}


loadMorePhotos();

like.addEventListener('click', () => {
  countLike.textContent = (+countLike.textContent.split(' ')[0] + 1) + " like";
})