function Marca(nombre){
    this.nombre = nombre
}

function Modelo(marca, modelo){
    this.marca = marca
    this.modelo = modelo
}

var ford = new Marca("FORD")
var citroen = new Marca("CITROEN")
var seat = new Marca("SEAT")

var ffocus = new Modelo(ford, "FOCUS")
var fiesta = new Modelo(ford, "FIESTA")
var saxo = new Modelo(citroen, "SAXO")
var c4 = new Modelo(citroen, "C4")

var coches = [ffocus, fiesta, saxo, c4]

console.log(ford)
console.log(ford.nombre)
console.log(coches)

var div = document.querySelector("#app")

//Crear una tabla
var table = document.createElement("TABLE")
table.id = "coches"

var thead = document.createElement("thead")
table.appendChild(thead)

var tr = document.createElement("tr")
thead.appendChild(tr)

var th = document.createElement("th")
th.innerText = "MARCA"
tr.appendChild(th)

var th = document.createElement("th")
th.innerText = "MODELO"
tr.appendChild(th)

var tbody = document.createElement("tbody")
table.appendChild(tbody)


for (var i = 0; i < coches.length; i++){
    tr = document.createElement("tr")
    tbody.appendChild(tr)

    td = document.createElement("td")
    td.innerText = coches[i].marca.nombre
    tr.appendChild(td)

    td = document.createElement("td")
    td.innerText = coches[i].modelo
    tr.appendChild(td)
}

div.appendChild(table)

table.style.backgroundColor = "yellow"

console.log(table)