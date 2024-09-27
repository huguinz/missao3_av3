/*********************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 26/09/2024
 * Autor: Hugo Lopes
 * Versão: 1.0
 *********************************************/

function validarDados(tabuadainicial, tabuadafinal, contadorinicial, contadorfinal) {
    let resultado; 
    let tabuadaI = parseInt(tabuadainicial)
    let tabuadaF = parseInt(tabuadafinal)
    let contadorI = contadorinicial
    let contadorF = contadorfinal

    if (isNaN(tabuadaI) || isNaN(tabuadaF) || isNaN(contadorI) || isNaN(contadorF)) {
        resultado = 'Só é permitida a entrada de números'
    } else if (tabuadaI < 2 || tabuadaI > 100 || tabuadaF < 2 || tabuadaF > 100) {
        resultado = 'Só é permitida a entrada de valores entre 2 e 100'
    } else if (contadorI < 1 || contadorI > 50 || contadorF < 1 || contadorF > 50) {
        resultado = 'Só é permitida a entrada de valores entre 1 e 50'
    }
    return resultado
}

function calcularTabuada(tabuadainicial, tabuadafinal, contadorinicial, contadorfinal) {
    let resultado = ''
    
    for (let i = tabuadainicial; i <= tabuadafinal; i++) {
        resultado += `Tabuada do ${i}\n`
        for (let j = contadorinicial; j <= contadorfinal; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`
        }
        resultado += '\n'
    }
    return resultado;
}

let tabuadainicial = 10
let tabuadafinal = 12
let contadorinicial = 1
let contadorfinal = 30

let resultadoValidacao = validarDados(tabuadainicial, tabuadafinal, contadorinicial, contadorfinal)
if (resultadoValidacao) {
    console.log(resultadoValidacao)
} else {
    let tabuadaResultado = calcularTabuada(tabuadainicial, tabuadafinal, contadorinicial, contadorfinal)
    console.log(tabuadaResultado)
}