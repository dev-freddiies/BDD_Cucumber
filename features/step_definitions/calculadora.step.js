const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const Calculadora = require('../../src/calculadora');

let calc;

Given('que tengo la calculadora encendida', function () {
  calc = new Calculadora();
});

Given('he introducido el primer operando {int}', function (a) {
  calc.setOperandoA(a);
});

Given('he introducido el segundo operando {int}', function (b) {
  calc.setOperandoB(b);
});

When('realizo la operación suma', function () {
  calc.sumar();
});

When('realizo la operación resta', function () {
  calc.restar();
});

When('realizo la operación multiplicacion', function () {
  calc.multiplicar();
});

When('realizo la operación division', function () {
  calc.dividir();
});

Then('el resultado mostrado es {int}', function (resultadoEsperado) {
  assert.strictEqual(calc.getResultado(), resultadoEsperado);
});
