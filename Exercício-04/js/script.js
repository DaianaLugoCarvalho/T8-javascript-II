//Vamos criar um objeto pinguim que contenha nome, idade e origem. Depois, criaremos métodos para o pinguim andar e voar. Para voar, ele deverá ter uma propriedade podeVoar verdadeira.

let  pinguim = {
    "nome":"linux",
    "idade": 19,
    "origem": "windows",  
    
}

pinguim.andar = function () { console.log ("andou") } //declarando o metodo, função  fora 

pinguim.podeVoar = true

pinguim.voar = function () {

    if (pinguim.podeVoar === false ){ //ou if (this.podeVoar )
    console.log ("voa")

}  else {
    console.log ("nao voa não")
}}

