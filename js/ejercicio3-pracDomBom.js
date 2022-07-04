// /*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar
//  una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
//  cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
//  para ese fin.
//  */
let lista = document.getElementById('lista')
let tarea = document.getElementById('tareaInput')

function btnAgregar(){
  let li = document.createElement("li")
  li.setAttribute('id', tarea.value)
  li.appendChild(document.createTextNode(tarea.value))
  lista.appendChild(li)
}

function btnEliminar(){
  let item = document.getElementById(tarea.value)
  lista.removeChild(item)
}

