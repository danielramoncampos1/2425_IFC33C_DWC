/* 
Ejercicio 3: Delegación de eventos
Crea una lista de tareas con los siguientes elementos:
1. Un contenedor ul con tres tareas iniciales como li.
2. Un botón que permita añadir nuevas tareas dinámicamente.
Utiliza delegación de eventos para que, al hacer clic en cualquier tarea (li), se muestre un
mensaje en la consola con el texto de la tarea seleccionada.
Finalmente, añade funcionalidad para que al hacer clic en el botón, se agregue un nuevo
elemento li a la lista, y este también pueda ser detectado por el manejador de eventos del
contenedor ul.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Referencia al contenedor de la lista
    const taskList = document.getElementById('task-list')

    // Delegación de eventos: detectar clics en las tareas
    taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
        console.log(`Tarea seleccionada: ${event.target.textContent}`)
        }
    })

    // Referencia al botón para añadir tareas
    const addTaskBtn = document.getElementById('add-task-btn')

    // Contador para las nuevas tareas
    let taskCounter = 4

// Añadir nuevas tareas dinámicamente
    addTaskBtn.addEventListener('click', () => {
        const newTask = document.createElement('li')
        newTask.textContent = `Tarea ${taskCounter}`
        taskList.appendChild(newTask)
        taskCounter++
    })
})