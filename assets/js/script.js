var input = document.getElementById("input");
var ul = document.getElementById("output");

var currentUser = JSON.parse(localStorage.getItem("currentUser"));

var saveUserTodoKey = "Name: " + currentUser.Name + " || " + "Email: " + currentUser.Email;

var todos = JSON.parse(localStorage.getItem(saveUserTodoKey)) || [];


function addTodo() {
    if (input.value == "") {
        alert("You must write something!")
    } else {
        var ul = document.getElementById("output");
        var li = document.createElement("li");
        var counter = ul.childElementCount;

        li.innerHTML = "<div class='outputLi'>"
            + input.value
            + "<div><button onclick='editTodo(" + counter + ")'><i class='fa-solid fa-pen-to-square'></i></button>"
            + "<button onclick='deleteTodo(" + counter + ")'><i class='fa-solid fa-trash'></i></button></div></div>";

        li.setAttribute("id", counter)
        ul.appendChild(li)


        todos.push(input.value)
        localStorage.setItem(saveUserTodoKey, JSON.stringify(todos))

        input.value = ""
    }
}

function deleteTodo(id) {
    var li = document.getElementById(id)
    li.remove();

    todos.splice(id, 1);
    localStorage.setItem(saveUserTodoKey, JSON.stringify(todos));
}

var editLiId;
function editTodo(id) {
    var li = document.getElementById(id);
    var text = li.firstChild.firstChild.nodeValue;
    input.value = text;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";
    editLiId = id;

}

function editTodoLi() {
    var li = document.getElementById(editLiId);
    li.firstChild.firstChild.nodeValue = input.value;
    console.log(li);


    todos[editLiId] = input.value;
    localStorage.setItem(saveUserTodoKey, JSON.stringify(todos));

    input.value = ""
    document.getElementById("addBtn").style.display = "inline-block";
    document.getElementById("editBtn").style.display = "none";

}


window.onload = function () {
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("id", i);
        li.innerHTML = "<div class='outputLi'>"
            + todos[i]
            + "<div><button onclick='editTodo(" + i + ")'><i class='fa-solid fa-pen-to-square'></i></button>"
            + "<button onclick='deleteTodo(" + i + ")'><i class='fa-solid fa-trash'></i></button></div></div>";

        ul.appendChild(li);
    }
}