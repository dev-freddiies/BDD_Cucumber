const readline = require('readline');
const Calculadora = require('./calculadora');

// Interfaz de entrada/salida en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calc = new Calculadora();

// Preguntar primer número
rl.question('Introduce el primer número: ', (a) => {
  calc.setOperandoA(Number(a));

  // Preguntar segundo número
  rl.question('Introduce el segundo número: ', (b) => {
    calc.setOperandoB(Number(b));

    console.log(`\nResultados:`);
    calc.sumar();
    console.log(`${a} + ${b} = ${calc.getResultado()}`);

    calc.restar();
    console.log(`${a} - ${b} = ${calc.getResultado()}`);

    calc.multiplicar();
    console.log(`${a} * ${b} = ${calc.getResultado()}`);

    calc.dividir();
    console.log(`${a} / ${b} = ${calc.getResultado()}`);

    rl.close();
  });
});
