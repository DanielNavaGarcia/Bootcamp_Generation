const {sumar} = require("./calculadora");
const {restar} = require("./calculadora");
const {multiplicar} = require("./calculadora");
const {dividir} = require("./calculadora");

describe("Pruebas en el codigo", () => {
    test("Pruebas en la funcion sumar", () =>{
        expect(sumar(3,5)).toBe(8);
    });
        test("Pruebas en la funcion restar", () =>{
        expect(restar(13,3)).toBe(10);
    });
    test("Pruebas en la funcion multiplicar", () =>{
        expect(multiplicar(12,12)).toBe(144);
    });
    test("Pruebas en la funcion dividir", () =>{
        expect(dividir(120,12)).toBe(10);
    });
});


