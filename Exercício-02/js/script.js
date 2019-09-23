
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

muitosGatos.forEach (function (gato) {

    gato.addEventListener ("click", function(evento) {
        evento.target.classList.add("cat") //tardeg> quem disparou  evento, com quem aconteceu o evento.
        // gato.classList.add("minha classe")
        // gato.classList.remove("minha classe")
    })    
})




// for (let i =0; i < muitosGatos.length; i++){
//     muitosGatos[i].addEventListener("click", function (){
//         muitosGatos[i].classList.add ("cat")

//     } )
// } 




