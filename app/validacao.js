function ValorValido() {
    const numero = +chute

    if (ChuteInvalido(numero)) {
        ElementoChute.innerHTML += 'Valor Invalido'
        return
    }

    if (MensagemErro(numero)) {
        ElementoChute.innerHTML += `Valor Inválido: O numero precisa ser entre
        ${menorValor} e ${maiorValor}`
        return
    }

    if (numero === NumeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O numero secreto era ${NumeroAleatorio}</h3>
        <button id="JogarNovamente" class="Jogar-Novamente">Jogar Novamente</button>
        `
    } else if (numero > NumeroAleatorio) {
        ElementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        ElementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function MensagemErro(numero) {
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'JogarNovamente') {
        window.location.reload()
    }
})