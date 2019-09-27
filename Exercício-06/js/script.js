let formulario = document.querySelector(".transacao__form")
let mae = document.querySelector("extrato__table")


formulario.addEventListener("submit", function(evento){

    evento.preventDefault()

    let inputNome = document.getElementById("transacaoInputNome")
    let ValorInputNome = inputNome.value 

    let InputValor = document.getElementById ("transacaoInputValor")
    let ValorInputValor= inputValor.value

    let InputData = document.getElementById ("transacaoInputData")
    let valorInputData = inputData.value

    let novaLinha = document.createElement("tr")
    mae.appendChild(novaLinha)

    let NovoNome= document.createElement("td")
    novaLinha.appendChild(NovoNome)
    NovoNome.textContent= valorInputNome


    let NovoPreco = document.createElement ("td")
    novaLinha.appendChild(NovoPreco)
    NovoPreco.textContent= inputValor

    let NovaData= document.createElement("td")
    novaLinha.appendChild(NovaData)
    NovaData.textContent= nputData
})