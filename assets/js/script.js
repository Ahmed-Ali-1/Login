var input = document.getElementById("input");

function addTodo() {
    if (input.value == "") {
        alert("Do you want to continue")
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
        input.value = ""

    }
}

function deleteTodo(id) {
    var li = document.getElementById(id)
    li.remove();
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
    console.log("input ==>", input.value);
    var li = document.getElementById(editLiId);
    li.firstChild.firstChild.nodeValue = input.value;
    input.value = ""
    document.getElementById("addBtn").style.display = "inline-block";
    document.getElementById("editBtn").style.display = "none";
}

