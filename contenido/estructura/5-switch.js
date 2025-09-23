/**
 *      ESTRUCTURA SWITCH
 * 
 */

//Costos de una fruta en la tienda

let comprar = "Mangos";

switch (comprar) {
    case "Naranjas":
        console.log("Las naranjas cuentas Q16 la mano");
        break;
    case "Platanos":
        console.log("Los planatos se evenden a Q18 la docena");
        break;
    case "Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5");
        break;
    //casos compartidos
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y la papayas vale Q12 la libra");
        break;
    default:
        console.log(`No se encontraron con inventario para ${comprar}`)//Alt+96
        break;
}