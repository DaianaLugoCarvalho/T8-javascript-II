// document.addEventListener("scroll",function() ) //2 paramentros, o evento, o que acontece, estrutura basica de como se escuta um evento 

// let scroll = 0
 
// document.addEventListener("scroll",function() {
//     console.log ("rolou a pagina")

//     if (scroll > 30) {
//         style.color.backgroundColor("pink")
//     } else {
//         (background-color:black)
//     }

// }) 


// document.addEventListener("scroll",function() {
//     if (document.documentElement.scrollTop >=200){ // document.documentElement tudo que esta no html.
//         document.documentElement.style.backgroundColor= "red"

//     } 


const primeiraSection= document.getElementById("primeira-section")
const segundaSection= document.getElementById("segunda-section")
const terceiraSection= document.getElementById("terceira-section")


document.addEventListener ("scroll", function() {

    if (document.documentElement.scrollTop >=200) {
        primeiraSection.classList.add("rosa")
    } 
    
    if (document.documentElement.scrollTop >401) {
        segundaSection.classList.add ("cinza")     
    }

    if (document.documentElement.scrollTo >600){
        terceiraSection.classList.add ("azul")
    }
})


// document.addEventListener("wheel", function() {
//     console.log( "num sei bem ainda")
// }



// document.addEventListener("dragstart", function() {
//     console.log( "num sei bem ainda")
// }


// document.addEventListener("unload", function(){
//     alert("day")

    
// })


  
let aluna= {  // declarar objeto {}, ele indica uma coleção, existe 2 tipos de coisas dentro do objeto = propriedade e objeto
    "nome": "jenifer"
}  


let prof = {
    "materia": "js"
}

prof.idade=25 // para acrescentar propriedades dentro do objeto

prof.ensinar= function () { console.log("aluna aprendeu")} // para colocar um metodo. 

prof.ensinar() // para chamar a função



   /// *****  

let fruta = { "nome": "uva"}

let frutas = { "nome": "uva"}

fruta == frutas


   /// *****  

let minhaGata= {
    "nome": "Rory",
    "idade" : 7,
    "cor": "off-white",
    "hibbies" : ["dormir", "dormi de barriga pra cima", "mostrar dentinhos"],
    ronronar: function () { console.log ("miau") }
}


let gato = { // assim vai sobrescrever
    "nome": "theo",
    "nome": "rory",
    "nome":"arya"
}

let gatos = {
    "milena": "rory",
    "carol": "arya",
    "manu": "nara"
}

gatos.manu{

}


   /// *****  

let  animal = {
    "nome" : "emilia",
    "tipo" : "Peixe",
    aparecer: function () { console.log (animal.nome) }
}

animal.aparecer() // para chamar a função, 

emilia // <-- o que retorna
