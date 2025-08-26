Feature: Operaciones básicas de una calculadora
  Para comprobar el correcto funcionamiento de la calculadora
  Como usuario
  Quiero realizar operaciones aritméticas básicas

  Scenario Outline: Suma de dos valores
    Given que tengo la calculadora encendida
    And he introducido el primer operando <a>
    And he introducido el segundo operando <b>
    When realizo la operación suma
    Then el resultado mostrado es <resultado>

    Examples:
      | a  | b  | resultado |
      | 2  | 3  | 5         |
      | -1 | 4  | 3         |

  Scenario Outline: Resta de dos valores
    Given que tengo la calculadora encendida
    And he introducido el primer operando <a>
    And he introducido el segundo operando <b>
    When realizo la operación resta
    Then el resultado mostrado es <resultado>

    Examples:
      | a  | b  | resultado |
      | 5  | 3  | 2         |
      | 3  | 7  | -4        |

  Scenario Outline: Multiplicación de dos valores
    Given que tengo la calculadora encendida
    And he introducido el primer operando <a>
    And he introducido el segundo operando <b>
    When realizo la operación multiplicacion
    Then el resultado mostrado es <resultado>

    Examples:
      | a | b | resultado |
      | 2 | 4 | 8         |
      | 3 | 0 | 0         |

  Scenario Outline: División de dos valores
    Given que tengo la calculadora encendida
    And he introducido el primer operando <a>
    And he introducido el segundo operando <b>
    When realizo la operación division
    Then el resultado mostrado es <resultado>

    Examples:
      | a  | b | resultado |
      | 8  | 2 | 4         |
      | 10 | 5 | 2         |
