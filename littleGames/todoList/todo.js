const todoListContainer = document.querySelector(".todoList");
const todoInput = document.querySelector(".todoList__input > input");
const todoList = document.querySelector(".todoList__list");


let data = JSON.parse(localStorage.getItem("todoData")) || [];
console.log(data);


todoListContainer.addEventListener("click", (e) => {
  // 判定是否點擊到button
  let btn = e.target.closest("button")
  if(!btn) return;

  // add item
  if(btn.dataset.btntype === "add") {
    addItem();
  }
  // delete item
  else if (btn.dataset.btntype === "delete") {
    let index = btn.dataset.num
    deleteItem(index);
  }
  render();
})

// add function
function addItem() {
  let value = todoInput.value || "";
  console.log(value);
  
  if (!value) return;
  data.push(value);
  todoInput.value = "";
  saveToLocalStorage()
}

// 刪除待辦事項
function deleteItem(index) {
  data.splice(index, 1)
  saveToLocalStorage()
}

// 渲染畫面
function render() {
  toggleList();
  let str = "";
    data.forEach((item, i) => {
      str += `<li class="todoList__list--item">
                <p>${data[i]}</p><button data-num="${i}" data-btntype="delete" class="delete"><i class="fa-regular fa-trash-can"></i></button>
              </li>`
    });
    todoList.innerHTML = str;
}

function saveToLocalStorage() {
  localStorage.setItem("todoData", JSON.stringify(data));
}

function toggleList() {
  if (data.length === 0) {
    todoList.classList.remove("active")
  } else if (data.length >= 1 && !todoList.classList.contains("active")){
    todoList.classList.add("active")
  }
}

// 為 addItem 加上鍵盤監聽
window.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    addItem();
  }
  render();
})

render();