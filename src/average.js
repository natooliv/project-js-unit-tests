/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numb) => {
  let soma = 0;
 if (numb.length === 0) {
  return undefined;
 }
  for (let index = 0; index < numb.length; index += 1) {
    if (typeof numb[index] !== 'number') {
      return undefined;
    }
    soma += numb[index];
  }
  const media = Math.round(soma / numb.length); // pesquisar
  return media;
};

module.exports = average;
