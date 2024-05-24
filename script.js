const taskList = document.getElementById("taskList");
// нахожу элемент <ul>
const taskInput = document.getElementById("taskInput");
// нахожу элемент <input>
const button = document.getElementById("addButton");
// нахожу элемент <button>

button.addEventListener("click", function () {
  createTask();
  console.log("Добавлено!");
}); // добавляю функцию-обработчик к событию клика на кнопку и вызываю внутри функцию, которая добавляет новую задачу, внутри обработчика-события при нажатии кнопки добавить;
//вопрос - есть ли разница в каком месте кода я это делаю?

function createTask() {
  const newTask = document.createElement("li");
  // создаю новый элемент <li>
  const addTaskText = taskInput.value;
  // Получаю значение, введенное в поле ввода
  newTask.textContent = addTaskText;
  // присваиваю текст из поля ввода в качестве содержимого новой задачи
  taskList.append(newTask);
  // Добавляю новую задачу в список с помощью метода append
  taskInput.value = "";
  // очищаю поле ввода
}

function checkTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("line");
  }
}
taskList.addEventListener("click", checkTask);
// тут тот же самый вопрос - есть ли разница в каком месте кода я это делаю?

// также есть вопрос - могла ли я сделать анонимную функцию? просто в задании написано было создать именную функцию, а в материалах уроках addEventlistener применяется как анонимная функция
