import {suma, resta, multiplicacion, division} from './Modularizacion.js'

const calcular = (a,b, operador) =>{

    switch(operador){
        case "+":
            console.log(suma(a,b))
            break;
        case "-":
            console.log(resta(a,b))
            break;
        case "*":
            console.log(multiplicacion(a,b))
            break;
        case "/":
            console.log(division(a,b))
            break;
    }
}

calcular(8,2,"+")