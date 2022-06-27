
/* Array -- Almacenar los intereses, amortización y saldo final de cada cuota */
const cuotaPrimera = [];
const valoresIniciales = [];
const cuotasAlmacenadas = [];

/* Selectores del HTML - INPUTS */
let inputCapital = document.querySelector(".montoCapital");
let inputNroCuotas = document.querySelector(".nroCuotas");
let inputInteresBase = document.querySelector(".interesMensual")

/* Buttons */
const btnSubmit = document.querySelector(".botonEnviar");
const btnReset = document.querySelector (".botonReset");
const btnlimpiar = document.querySelector (".btnlimpiar");

/* Agregar al HTML */
const tableConceptos = document.querySelector(".tableConceptos");
const filaResultados = document.querySelector(".filaResultados");
const listaCuotas = document.querySelector("#lista");
