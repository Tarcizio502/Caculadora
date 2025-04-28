function calcular(operador) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let resultado = "";

  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Insira dois números válidos!";
  } else {
    switch (operador) {
      case "+":
        resultado = n1 + n2;
        break;
      case "-":
        resultado = n1 - n2;
        break;
      case "*":
        resultado = n1 * n2;
        break;
      case "/":
        resultado = n2 !== 0 ? n1 / n2 : "Divisão por zero!";
        break;
    }
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
