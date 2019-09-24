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





