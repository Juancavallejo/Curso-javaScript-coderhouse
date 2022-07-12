const URL =`js/tasasInteres.json`

/* Array -- Almacenar los intereses, amortización y saldo final de cada cuota */
let tasasDeInteresJSON = []
let tasasAMostrar = ""
const cuotaPrimera = []; /* Array cuota primera */
const valoresIniciales = []; 
const cuotasAlmacenadas = []; /* Array para cuotas desde la 2 y siguiente */

/* Selectores del HTML - INPUTS */
const tasasInteres = document.querySelector ("#tasasInteres")
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

/* Preloader */

const spinner = document.querySelector ("#mainSpinner")