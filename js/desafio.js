/* let ingresarNumero = parseInt (prompt ("Ingrese Numero"));
for (i = 1 ; i <= ingresarNumero ; i++) {
    console.log ("Hola" +i);
} */

let ingreseDato = prompt ("Ingrese por favor la palabra correcta");
while (ingreseDato != "coderhouse") {
    alert ("El usuario ingreso "+ ingreseDato + " pero esta palabra es incorrecta")
    ingreseDato = prompt ("Nueva oportunidad, ingresa una nueva palabra ");
}