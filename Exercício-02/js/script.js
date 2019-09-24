
        //@@@@ *** REMOVER O GATO QUANDO CLICADO ***@@@@///

// Let meuGato = document.querySelectorAll(".item")

// meuGato.addEventListener("click", function () {
//     meuGato.classList.remove = (meuGato) 
// })


     // ***   OU   ***/// 


//  let meuGato = document.querySelectorAll (".item__imagem") 
 
 
//  for (let i=0 ; i < meuGato.length; i++){
 
//  meuGato.addEventListener ("click", function(){
//     meuGato.classList.add ("cat")
//  })
// }


    // ***   OU PROFESSORA  ***/// 

let muitosGatos = document.querySelectorAll(".item__imagem")

// muitosGatos.forEach (function (gato) {

//     gato.addEventListener ("click", function(evento) {
//         evento.target.classList.add("cat") //target > quem disparou  evento, com quem aconteceu o evento.
//         // gato.classList.add("minha classe")
//         // gato.classList.remove("minha classe")
//     })    
// })

muitosGatos.forEach (function (gato) {
    gato.addEventListener ("click", function(evento) {
    if (gato.classList.contains("cat")) { // quando for clicado o gato desapare, se a classe cat, que deixa invisivel, for verdadeira o gato some, caso ele esteja invisivel ele remove a classe, e o deixa visivel.
        gato.classList.remove ("cat")
    }  else {
        gato.classList.add("cat")
    }




        // evento.target.classList.add("cat") //target > quem disparou  evento, com quem aconteceu o evento.
        // gato.classList.add("minha classe")
        // gato.classList.remove("minha classe")
     })    
})






//quando o eventListerner foi acionado, os gatos somem, remover o evento quando for clicado.
//buscar pela classe se for verdadeiro,  








// for (let i =0; i < muitosGatos.length; i++){
//     muitosGatos[i].addEventListener("click", function (){
//         muitosGatos[i].classList.add ("cat")
//     } )
// } 








              //  #########  incluides     //  #########
  
// const reprograma = ["html", "css", "java"]

// reprograma.incluides ("css") // incluides, procura dentro da array o que esta no parametro.
// true

// reprograma.includes("php")
// false



               // ***   OU PROFESSORA ( GATOS APARECEM  ) ***/// 