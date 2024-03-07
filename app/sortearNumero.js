const menorValor = 1
const maiorValor = 100

const NumeroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto:', NumeroAleatorio)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.textContent = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.textContent = maiorValor