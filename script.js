const list = document.getElementById("todo-list");

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];
console.log(arrayOfTodos[0].userId);
console.log(arrayOfTodos[1].userId);

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};
const populateTodos = () => {
  

  for (let i = 0; i < arrayOfTodos.length; i++) {
    const listItem = document.createElement("li");
    const text = document.createTextNode(arrayOfTodos[i].title);
    listItem.appendChild(text);
    list.appendChild(listItem);
    console.log(listItem)
  }
};
