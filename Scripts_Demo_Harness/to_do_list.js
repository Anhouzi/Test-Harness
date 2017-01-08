var input;
var todoList = [];

function addToDo() {
    var newTODO = prompt("What is the TODO?");
    todoList.push(newTODO);
}

function printToDo() {
    console.log("*************");
        
   //Inline function. Replace 'function' with printToDo. 
    todoList.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    
    console.log("*************");
}

function deleteToDo() {
    var todo = prompt("Enter an index.");

    //splice.(index, number of elements to remove);
    todoList.splice(todo, 1);
}
while (input !== "quit") {
    input = prompt("What would you like to do?");
    
    if (input === "new") {
        addToDo();
    }
    else if (input === "view") {
        printToDo();
    }
    else if (input === "remove") {
        deleteToDo();
    }
}

