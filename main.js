const tasks = [
    {
        title: "Una variable puede declararse usando let o const",
    },
    {
        title: "Un arreglo es un conjunto de datos ordenados",
    }
];

function printTasks() {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i}. ${tasks[i].title}`);
    }
}

function notas(){
    console.clear();
    console.log("Usted tiene 2 notas: ");
    printTasks();
    console.log("-----------------------");
    console.log("¿Qué desea hacer?");
    console.log("1. Crear nota");
    console.log("2. Editar nota");
    console.log("3. Eliminar nota");
}

function createTask(taskName) {
    const task = {
        title: taskName
    };
    tasks.push(task);
}

function edit(taskEd, taskEdit) {
    const edit1 = {
        title: taskEdit
    };
    tasks.splice(taskEd, 1, edit1);
}

function deleteTask(taskId) {
    tasks.splice(taskId, 1);
}

let action;

do {
    notas();
    action = prompt(
      "Abre tu consola por medio del navegador dando click derecho e inspeccionar, refresca la pagina y luego elija una de las opciones que desea hacer 1, 2 o 3. Gracias "
    );

    if (action === "1") {
        const taskName = prompt("Ingrese el nombre de la tarea que desea crear:");
        createTask(taskName);
        alert("Se a creado una nueva tarea");
    } else if (action === "2") {
        const taskEd = Number(prompt("Elija el numero de la tarea que desea modificar :"));
        const taskEdit = String(prompt("Escriba el nuevo texto de la nota"));
        edit(taskEd, taskEdit);
        alert("indice de nota editado");
    } else if (action === "3") {
        const taskId = Number(prompt("Elija el numero de la tarea que desea eliminar : "));
        deleteTask(taskId);
        alert("Se a eliminado una tarea");
    } else if (action !== null) {
        alert("Acción Invalida");
    } else {
        console.clear();
        console.log("Gracias por participar en mi primer proyecto java!");
    }
} while (action !== null);