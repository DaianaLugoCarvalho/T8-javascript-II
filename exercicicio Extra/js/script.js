//para capturar os elementos usando o DOM, esta capturando o elemento e salvar numa var, no caso const para poder usar depois.
//quando o usuario digitar vai acontecer o evento do Submit, sempre que um formulario for enviado
// colocar a orelhinha para ouvir o evento, para escutar somente no formulario ( por isso não usar o document)  >> formulario.addEventListener,  passar 2 paramentros, ( o tipo de evento > com uma string , uma função, o que quer que ele faça )
//dentro da função colocar o que quer que aconteça,
//quando se cria um callback, ela cria um evento (evento), o evento coloca todas as caracteristicas, quem/quando fez o que por exemplo ( raissa cuspiu na caixa)
// evento.preventDefault, vai tirar o comportamento padrão, no caso, quando acontece o submit, a pagina recarrega.
//Value > ele vai guardar a msn na var,
//pq colocar a var fora ou dentro ( teatro da agua )
 


const formulario = document.getElementById ("formulario-de-comentarios")


formulario.addEventListener ("submit", function(evento) {
    evento.preventDefault()

    let input = document.getElementById ("inputform")
// ou > let inputUsuario= document.querySelector (".input-de-texto")

    let mensagem = input.value.trim() //vai guardar a msn

    


    
    if (mensagem() === "") { //.trim() => tira os espaços do começo e do final.
        let erro = document.createElement("p")
        formulario.appendChild(erro)

        erro.textContent= "errado"
        erro.classList.add("validarErro")

    } else {

    let paragrafo = document.createElement("p") // criar um paragrafo

    diviComent.appendChild(paragrafo) // que a divComent é mãe do paragrafo, coloca no () o filho.  >> mae.adote(filho) <<

    paragrafo.textContent= mensagem //que a var paragrafo vai receber o conteudo da mensagem, o que foi guardado na var mensagem.

    paragrafo.classList.add("comentario")//ele vai buscar no css os paramentros da classe no css.

    
    formulario.reset() //quando o usuario enviar a msn, ele vai resetar para estado inicial do formulario, ou seja deixar em branco.// input.value = ""

    }







                   // * * * * OU  PROF  * * * * //
    // let  msnValidar ="ta vazio"

    // if (input === ""){
    //     // alert ("campo vazio")
    //     let validar = document.createElement("p")
    //     diviComent.appendChild(validar)
    //     validar.textContent= msnValidar
    //     validar.classList.add(validarErro);
        
    // }else {
    //     input.value
        
    // }



})


    

