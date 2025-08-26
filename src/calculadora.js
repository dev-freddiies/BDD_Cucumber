class Calculadora {
  constructor() {
    this.a = 0;
    this.b = 0;
    this.resultado = 0;
  }

  setOperandoA(valor) { this.a = Number(valor); }
  setOperandoB(valor) { this.b = Number(valor); }

  sumar()        { this.resultado = this.a + this.b; }
  restar()       { this.resultado = this.a - this.b; }
  multiplicar()  { this.resultado = this.a * this.b; }
  dividir()      { this.resultado = this.a / this.b; }

  getResultado() { return this.resultado; }
}

module.exports = Calculadora;
