// // Como seleccionar elementos

// let parrafo = document.getElementById('parrafo') //obtiene el elemento por el ID
// console.log(parrafo)

// let myDiv = document.querySelector(".my-div") //obtiene el primer elemento que coincida con el selector CSS
// console.log(myDiv)

// let list = document.querySelectorAll("ul > li") //lista de nodos que hayamos seleccionado
// console.log(list)

// // Modificar elementos 

// parrafo.innerText = "Manipulando el DOM" // modificar texto

// parrafo.innerHTML = "<h2>hola</h2>"
// parrafo.setAttribute('class', 'gey') //podemos cambiar atributos de un elemento

// myDiv.style.backgroundColor = "#000"; //para modificar elementos css

// let oldDiv = document.querySelector(".old-div") ;
// document.body.removeChild(oldDiv)

// let newDiv = document.createElement("div") // se crea el elemento en memoria
// newDiv.innerText = "alo" // se modifica el elemento en memoria
// document.body.appendChild(newDiv) // se mueve el elemento al body

// let button = document.querySelector("button")

// button.addEventListener("click", function() {
//     alert("boton presionado");
// }) // Un listener de eventos, escoges que evento y que va hacer dentro de la función anonima 

// let button2 = document.getElementById("boton2")

// function showMessage(message) {
//     alert(message)
// }

// button2.addEventListener("click", showMessage.bind(null, "Hola"))

// let inputTask = document.querySelector("#inputTask")

// let addTaskButton = document.querySelector("#addTask")


// let taskList = document.querySelector("#taskList")

// addTaskButton.addEventListener("click", function(){
//     if (inputTask.value.trim() != "") {
//         newTask = document.createElement("li")
//         newTask.innerText = inputTask.value 
//         taskList.appendChild(newTask)
//         inputTask.value = ""
//     }
// })

let inputTask = document.querySelector("#inputTask")

let addTaskButton = document.querySelector("#addTaskButton")

let form = document.querySelector("#form-add-task")

// let task = document.querySelector("#task")

let taskContainer = document.querySelector("#task-list-container")



form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e)
    if (inputTask.value.trim() != "") {

        let newTaskTittle = document.createElement("h2")
        let newTask = document.createElement("div")
        

        newTaskTittle.textContent = inputTask.value
        // newTaskTittle.setAttribute("class", "taskTittle")

        newTaskTittle.classList.add("taskTittle")

        newTask.appendChild(newTaskTittle)

        let newTaskCheckbox = document.createElement("input")
        newTaskCheckbox.setAttribute("type", "checkbox")
        newTaskCheckbox.setAttribute("class", "checkTaskButton")
        newTask.appendChild(newTaskCheckbox)

        let newTaskDelete = document.createElement("input")
        newTaskDelete.setAttribute("type", "button")
        newTaskDelete.setAttribute("class", "deleteTaskButton")
        newTaskDelete.setAttribute("value", "Delete")

        newTask.appendChild(newTaskDelete)


        taskContainer.appendChild(newTask)

        inputTask.value = ""
    }
})


// Eliminar task y marcar completada
taskContainer.addEventListener("click", function(e) {
    console.log(e.target.classList)
    if (e.target.classList.contains("deleteTaskButton") ) {
        e.target.parentElement.remove()
    } 
    
    else if (e.target.classList.contains("checkTaskButton")) {
        e.target.parentElement.querySelector(".taskTittle").classList.toggle("active")
    }
})
