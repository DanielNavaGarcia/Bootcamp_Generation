/* 
Operaciones relacionales o de comparacion
    Mayor que: a > b                a es mayor que b
    Menor que: a < b                a es menor que b
    Mayor o igual que: a >= b       a es mayor o igual que b
    Menor o igual que: a <= b       a es menor o igual que b
    Igual: a == b                   a es igual a b       
    Distinto: a != b                a es diferente a b    
*/

/*
    Operador estricto: ===
    Operador diferente estricto: !==
*/
let numero1 = 22;
let numero2 = 15;

const mayorEjemplo = numero1>numero2
console.log ("22 > 15 → "+ mayorEjemplo)

const menorEjemplo = numero1<numero2
console.log ("22 < 15 → "+ menorEjemplo)

const mayorOIgualEjemplo = numero1>=numero2
console.log ("22 >= 15 → "+ mayorOIgualEjemplo)

const menorOIgualEjemplo = numero1<=numero2
console.log ("22 <= 15 → "+ menorOIgualEjemplo)

const igualEjemplo = numero1==numero2
console.log ("22 == 15 → "+ igualEjemplo)

const distintoEjemplo = numero1!=numero2
console.log ("22 != 15 → "+ distintoEjemplo)
