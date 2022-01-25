const {sumar} = require("./calculadora");
const {restar} = require("./calculadora");

describe("Pruebas en el codigo", () => {
    test("Pruebas en la funcion sumar", () =>{
        expect(sumar(3,5)).toBe(8);
    });
    test("Pruebas en la funcion sumar", () =>{
        expect(restar(13,3)).toBe(10);
    });
});


