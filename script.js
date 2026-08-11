// Add task form elements
let addTaskForm = document.querySelector("#add-task-form")
let inputTask = document.querySelector("#input-task")

// Task container 
let taskListContainer = document.querySelector("#task-list-container")



addTaskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e)
    if (inputTask.value.trim() != "") {
        // Task elements
        let task = document.createElement("li")
        task.classList.add("task")

        let label = document.createElement("label")

        let checkTask = document.createElement("input")
        checkTask.classList.add("check-task")
        checkTask.setAttribute("type", "checkbox")
        
        let taskTitle = document.createElement("span")
        taskTitle.classList.add("task-title")
        taskTitle.textContent = inputTask.value
    
        
        let deleteTaskButton = document.createElement("button")
        deleteTaskButton.classList.add("delete-task-button")
        deleteTaskButton.textContent = "Delete task"
        
        label.appendChild(checkTask)
        label.appendChild(taskTitle)
        task.appendChild(label)
        task.appendChild(deleteTaskButton)
        taskListContainer.appendChild(task)

        inputTask.value = ""
    }
})


// Check Task
taskListContainer.addEventListener("change", function(e){
    if (e.target.classList.contains("check-task")) {
        e.target.parentElement.querySelector(".task-title").classList.toggle("active")
    }
})

// Delete task
taskListContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-task-button") ) {
        e.target.parentElement.remove()
    } 
})
