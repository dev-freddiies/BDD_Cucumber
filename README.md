# BDD_Cucumber
Actividad extraordinaria En esta actividad emplearemos los conocimientos y competencias adquiridos en la asignatura para replicar un proceso de desarrollo parcial de una aplicación empleando conceptos sobre metodologías, técnicas, prácticas y patrones de diseño y arquitectura estudiados en la materia. La aplicación, “study mate”,

# Study Mate – BDD (Cucumber)

Este repositorio contiene la práctica del **punto 5 (BDD con Cucumber)** de la actividad extraordinaria de **Ingeniería del Software Avanzada (UNIR)**.

Incluye:
- El **tutorial oficial de Cucumber** (`is_it_friday_yet.feature`).
- Una **feature propia de calculadora** (`calculadora.feature`) con cuatro escenarios (suma, resta, multiplicación y división).
- Sus **step definitions** e implementación mínima en JavaScript.
- Evidencia de ejecución en verde (captura incluida en la memoria de entrega).

---

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado).  
- npm (se instala junto con Node).

Comprueba la instalación:

```bash
node -v
npm -v
```

---

## Estructura del proyecto 

study-mate-bdd/
  features/
    is_it_friday_yet.feature
    calculadora.feature
    step_definitions/
      friday.steps.js
      calculadora.steps.js
  src/
    calculadora.js
    demo.js          # uso interactivo opcional en consola
  package.json
  package-lock.json

--- 

Instalación

Clona el repositorio y entra en la carpeta del proyecto:

git clone https://github.com/<tu-usuario>/study-mate-bdd.git
cd study-mate-bdd


Instala las dependencias:

npm install


Ejecución de pruebas BDD

Lanza todas las pruebas definidas en los .feature:

npm run test:bdd


También puedes ejecutar directamente:

npx cucumber-js

---

## Uso interactivo opcional (demo)

El archivo src/demo.js permite probar la calculadora introduciendo valores por consola.

Ejecuta:

node src/demo.js


Ejemplo de salida:

Introduce el primer número: 5
Introduce el segundo número: 2

Resultados:
5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.5


