

function tareaPrincipal(callback){
    setTimeout (() => {
        console.log("Realizando una tarea...")
    }, 1000)
    callback()
}

function tareaSecundaria(callback){
    setTimeout(() => {
        console.log("La tarea principal ya ha acabado")
    }, 1000);
    callback()
}

function tareaTerciaria(callback){
    setTimeout (() => {
        console.log("Realizando la tercera tarea")
    }, 1000)
    callback()
}


//CALLBACK HELL (Anidación excesiva de llamamiento a funciones)
tareaPrincipal(() => {
    tareaSecundaria (() => {
        tareaTerciaria (() => {
            setTimeout (() => {
                console.log("Hemos terminado las tareas")
            }, 1000)  
        })
    })
})


//PROMESAS
function tareaPrincipalPromesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea principal promesa controlada.")
            resolve()
        }, 1000)
    })
}

function tareaSecundariaPromesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea secundaria promesa controlada")
            resolve()
        }, 1000);
    })
}

function tareaTerciariaPromesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea terciaria promesa controlada")
            resolve()
        }, 1000);
    })
}

tareaPrincipalPromesa()
    .then(tareaSecundariaPromesa)
    .then(tareaTerciariaPromesa)
    .then(() => {
        console.log("Hemos acabado las tareas")
    })

//ASYNC AWAIT

async function ejecutarTareas() {
    await tareaPrincipalPromesa()
    await tareaSecundariaPromesa()
    await tareaTerciariaPromesa()
    console.log("Hemos acabado las tareas")
}

ejecutarTareas()