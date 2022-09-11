var list = document.getElementById("todo_list")
var arr = [];
var todoList = localStorage.getItem("todo-list");
if (todoList) {
    arr = JSON.parse(todoList);
}

function loadAllTodo() {
    list.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var li = `
        <li> ${arr[i]} 
        <span class="bt_div">
        <button class="btn btn-secondary bt2 btn-sm" onclick="deleteOne('${i}')">Del</button>
        <button class="btn btn-secondary bt2 btn-sm" onclick="editTodo('${arr[i]}','${i}')">Edit</button> 
        </span>
        </li>
        `;
        list.innerHTML += li;
    }
}
loadAllTodo();

function addTodo() {
    var input = document.getElementById("todo_value");
    if (input.value.trim() !== "") {
        var li = `
        <li> ${input.value}
        <span class="bt_div"> 
        <button class="btn btn-secondary bt2 btn-sm " onclick="deleteOne('${arr.length}')">Del</button>
        <button class="btn btn-secondary bt2 btn-sm" onclick="editTodo('${input.value}','${arr.length}')">Edit</button> 
        </span>
        </li>
        `;
        arr.push(input.value);
        localStorage.setItem("todo-list", JSON.stringify(arr));
        list.innerHTML += li;
        input.value = "";
        input.focus();
    };
};


function deleteAll() {
    list.innerHTML = "";
    localStorage.removeItem("todo-list");
  }
  
  function deleteOne(i) {
    console.log(i);
    arr.splice(i, 1);
    localStorage.setItem("todo-list", JSON.stringify(arr));
    event.target.parentNode.remove();
    loadAllTodo();
  }
  
  function editTodo(a, i) {
    var oldValue = prompt("Enter updated value", a);
    if (oldValue) {
      arr.splice(i, 1, oldValue);
      localStorage.setItem("todo-list", JSON.stringify(arr));
      event.target.parentNode.firstChild.nodeValue = oldValue;
    }
  }