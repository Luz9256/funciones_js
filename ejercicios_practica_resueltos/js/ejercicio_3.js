"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada


function generarInvitados(){
    let primerInvitado = prompt("Nombre del primer invitado");
    let segundoInvitado = prompt("Nombre del segundo invitado");
    let tercerInvitado = prompt("Nombre del tercer invitado");
    console.log(`Los invitados son ${primerInvitado}, ${segundoInvitado} y ${tercerInvitado}`);
}

generarInvitados();