"use strict";
let nome = "Murilo";
let idade = 10;
let isTryber = true;
let stringOrNumber = 10;
stringOrNumber = "Maria";
// NÃO USAR NUNCA
let any = 10;
any = "Murilo";
any = true;
const students = ["Kaylane", "Luiz monte", "Ronny velardez", 10];
const objArray = [{ name: "Carlos" }];
const soma = (a, b) => a + b;
const concatena = (a, b) => a + b;
function somaTrad(a, b) {
    return a + b;
}
function hello(name) {
    console.log(`Hello ${name}`);
}
function retornaMedia(arr, student) {
    const soma = arr.reduce((acc, nota) => acc + nota, 0);
    const media = soma / arr.length;
    if (media < 7) {
        return 'Você não passou dessa vez, tente novamente';
    }
    return media;
}
const arrayDeArray = [["casa", "predio"], ["garfo", "faca"], []];
var Profissoes;
(function (Profissoes) {
    Profissoes["PROGRAMADOR"] = "PROGRAMADOR";
    Profissoes["QA"] = "QA";
    Profissoes["PO"] = "PO";
    Profissoes["PM"] = "PM";
})(Profissoes || (Profissoes = {}));
const input = "PROGRAMADOR";
const profissao1 = Profissoes.PROGRAMADOR;
const profissao2 = Profissoes[input];
console.log("Código executado 3");
