let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
    console.log("variableAsincrona",variableAsincrona);
},2000);

console.log("variableAsincrona",variableAsincrona);