document.getElementById('formTask').addEventListener('submit', saveTask)

function saveTask(info) {
    info.preventDefault()
    let title = document.getElementById('title').value
    let descripcion = document.getElementById('descripcion').value
    if(!title.length) return alert('Debes poner un titulo')
    if(!descripcion.length) return alert('Debes poner una descripcion')
    const task = {
        titulo: title,
        description: descripcion
    }
    if (localStorage.getItem('tasks') == null) {
        let tasks = []
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    getTasks()
    document.getElementById('formTask').reset()
}


function getTasks() {
    let tasks =  JSON.parse(localStorage.getItem('tasks'))
    let tasksView = document.getElementById('tasks')

    tasksView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].titulo
        let description = tasks[i].description
        tasksView.innerHTML += `<div class="card mb-2 bg-secondary">
        <div class="body p-3 bg-dark">
        <p class="text-white">${title} - ${description}</p>
        <a class="btn btn-success" onClick="deleteTask('${title}', '${description}')">Ok</a>
        </div>
        </div>`
        
    }
}

function deleteTask(title, descripcion) {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].titulo == title && tasks[i].description == descripcion){
            tasks.splice(i, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            getTasks()
            return
        }
        
    }
}

getTasks()