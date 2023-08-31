/*
let nombre, apellido, ciudad;
nombre = 'Juan';
apellido = 'Perez';
ciudad = 'Buenos Aires';
*/

//console.log(nombre);

//Objetos literales
let persona = {
    nombre: "Juan",
    apellido : "Perez",
    dni : "43790298",
    edad: "23",
    altura: 1.80,
    correr : function(){
        console.log("estoy corriendo! xd")
    }
}

//typeof te dice el tipo de dato
console.log(typeof persona.dni)

// funciona el parseInt
console.log(parseInt(persona.edad)+1)

console.log(persona.correr())

//Desestructuración: extraigo un solo valor de un objeto literal

const {nombre} = persona;

console.log(nombre)

//Arreglos

//homogeneo
let lista = [1,2,3,4,5]
//heterogeneo
let lista2 =  ["Lencina",21,{provincia : "Buenos aires", ciudad: "Muñiz"},true]

// para desestructurar el objeto lista, podemos hacer lo siguiente:

const  [apellido,edad,ubicacion,actividad] = lista2;
//notese que se en la nueva constante se le puede asignar un "alias" a esos valores de la lista

// en los siguientes console.log se hace referencia al mismo objeto
console.log(lista2[2].ciudad)
console.log(ubicacion.ciudad)