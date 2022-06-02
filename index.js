// Escreva	um	algoritmo	para	ler	uma	temperatura	em	graus	Fahrenheit,	calcular	e	escrever o	valor	correspondente	em	graus	Celsius.

var fahr, cels;

// Entrada de temperatura
fahr = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

// Cálculo de conversão F° para C° 
cels = (fahr - 32) / 1.8
  
  alert ('\nA temperatura F°' + fahr.toFixed(0) + ' "Fahrenheit" corresponde a C°' + cels.toFixed(0) + ' "Celsius"');