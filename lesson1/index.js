/* Вы разрабатываете веб - страницу для отображения расписания занятий в спортивном клубе.Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

1. Создайте веб - страницу с заголовком "Расписание занятий" и областью для отображения занятий.

2. Загрузите информацию о занятиях из предоставленных JSON - данных.Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

3. Пользователь может нажать на кнопку "Записаться" для записи на занятие.Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться". */

// infoData = [
//   {
//     name: "Карате",
//     date: "25.03.2024",
//     maxPerson: 20,
//     currentPerson: 10,
//   },
//   {
//     name: "Бокс",
//     date: "27.03.2024",
//     maxPerson: 10,
//     currentPerson: 9,
//   },
//   {
//     name: "Плавание",
//     date: "20.06.2024",
//     maxPerson: 30,
//     currentPerson: 17,
//   },

// ];

let infoData = [];

const getData = () => {
  return fetch('./db.json')
    .then(res => res.json())
}

getData().then(value => {
  infoData = value.infoData;
  printSportsActivities();
  changeInfo();
});




const sportsActivities = document.querySelector(".sports-activities");

function printSportsActivities() {
  for (const item of infoData) {
    const divElem = document.createElement("div");
    divElem.classList.add("item");
    sportsActivities.appendChild(divElem);

    const titleElem = document.createElement("h2");
    titleElem.classList.add("sports-activities__title");
    titleElem.textContent = item.name;
    divElem.appendChild(titleElem);

    const infoElem = document.createElement("div");
    infoElem.classList.add("sports-activities__info");
    divElem.appendChild(infoElem);

    const dateElem = document.createElement("div");
    dateElem.textContent = `Дата: ${item.date}`;
    infoElem.appendChild(dateElem);

    const maxPersonElem = document.createElement("div");
    maxPersonElem.textContent = `Количество мест: ${item.maxPerson}`;
    infoElem.appendChild(maxPersonElem);

    const currentPersonElem = document.createElement("div");
    currentPersonElem.classList.add("current-person");
    currentPersonElem.textContent = `Количество записанных человек: ${item.currentPerson}`;
    infoElem.appendChild(currentPersonElem);

    const buttonsElem = document.createElement("div");
    buttonsElem.classList.add("sports-activities__btn");
    divElem.appendChild(buttonsElem);


    const addBtnElem = document.createElement("button");
    addBtnElem.classList.add("button__add");
    addBtnElem.textContent = "Записаться";
    buttonsElem.appendChild(addBtnElem);

    const removeBtnElem = document.createElement("button");
    removeBtnElem.classList.add("button__remove");
    removeBtnElem.textContent = "отменить запись";
    buttonsElem.appendChild(removeBtnElem);
  }
}




function changeInfo() {
  let addButtons = document.querySelectorAll(".button__add");
  let removeButtons = document.querySelectorAll(".button__remove");


  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", (event) => {
      if (infoData[i].currentPerson >= infoData[i].maxPerson) {
        event.target.textContent = "Нет мест!!!"
      } else {
        infoData[i].currentPerson = infoData[i].currentPerson + 1;
        const currentPerson = document.querySelectorAll('.current-person');
        currentPerson[i].textContent = `Количество записанных человек: ${infoData[i].currentPerson}`;

      }
    });
  }


  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", (event) => {
      if (infoData[i].currentPerson > 0) {
        infoData[i].currentPerson = infoData[i].currentPerson - 1;
      }
      const currentPerson = document.querySelectorAll('.current-person')
      currentPerson[i].textContent = `Количество записанных человек: ${infoData[i].currentPerson}`;

      if (event.target.parentElement.firstChild.textContent === "Нет мест!!!") {
        event.target.parentElement.firstChild.textContent = "Записаться";
      }
    });
  }

}

