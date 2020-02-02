var addBtn=document.getElementById('add');
var listItem=document.getElementById('addText');
var todoList=document.getElementById('tasks');

addBtn.addEventListener("click",function(){
  var todoText=listItem.value;

  if(todoText!==""){
    listItem.value="";
    var todo=document.createElement("LI");
    var text=document.createElement("SPAN");
    todo.classList.add("todo");
    // todo.innerHTML=todoText;
    var deleteTask=document.createElement("BUTTON");
    deleteTask.classList.add("remove-btn");
    deleteTask.innerHTML="Done!!";
    deleteTask.addEventListener("click",function(){
      todo.parentNode.removeChild(todo);
    });
    text.append(todoText);
    todo.append(text);
    todo.append(deleteTask);
    todoList.append(todo);
  }


});
