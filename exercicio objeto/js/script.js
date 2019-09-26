>> usar "" na declaração, sem "" se cria uma var
acesar a propriedade > dados.nome OU dados["nome"]


let dados = {
    "nome":"Daiana", 
    "hooby":"Desenho", 
    "sonho":"Dominar o mundo", 
    "serie": "OC",
    "site" : "https://www.warnerbros.com.br",
    "gif": "https://media.giphy.com/media/26FmRLBRZfpMNwWdy/giphy.gif"

}

let dadoUm = document.createElement("li")
let mae = document.getElementById("dados") // OU document.querySelector(#dados)
mae.appendChild(dadoUm)
dadoUm.textContent= dados["nome"] 


let dadoDois = document.createElement("li")
mae.appendChild(dadoDois)
dadoDois.textContent= dados["hooby"]



let dadoTres = document.createElement("li")
mae.appendChild(dadoTres)
dadoTres.textContent= dados["sonho"]



let dadoQuatro = document.createElement("li")
mae.appendChild(dadoQuatro)
dadoQuatro.textContent= dados["serie"]


     //// >>>  COLOCAR LINK  <<<<  /////
let dadoCinco = document.createElement("a")
mae.appendChild(dadoCinco)
dadoCinco.textContent= "Meu site"
dadoCinco.setAttribute("href", dados["site"])
dadoCinco.setAttribute ("target", "_blanck")


    //// >>>  COLOCAR IMG PELO JS  <<<<  /////
let gatinho = document.createElement("img")
mae.appendChild(gatinho)
gatinho.setAttribute("src", dados["gif"])


 //// >>>  FOR QUE SO FUNCIONA NO OBJETO  <<<<  /////
 // >> No For In usasse [] para chamar o objeto
 // >> var propriedade é uma var provisoria 
 for (let propriedade in objeto){//para cada propriedade dentro do objeto, 
        dodos[propriedade]
 }


      // >>> EXERCICIO, FAZER NOVAMENTE COM FOR IN <<<<  /////

 let outrosDados = {
     "nome": "Monica",
     "idade": 25,
     "cidade":"Campinas",
     "cor":"Verde-Limao",          
 }


 let mae = document.getElementById("dados")

 for (let i in outrosDados) {
      let criar = document.createElement ("p")      
      mae.appendChild(criar)
      criar.textContent= (outrosDados[i])     
 }


    //// COM OS LINKS  DE GIF´S////
 let gifs ={
     "link": "https://media.giphy.com/media/l0IpWimdziTLydf8Y/giphy.gif",
     "linki": "https://media.giphy.com/media/l0K4kKbzQ1faZnX8c/giphy.gif",
     "linke": "https://media.giphy.com/media/BPe1fWG9uDoQ0/giphy.gif",     
 }



 let mae = document.getElementById("maeLinks")

 for ( let i in gifs) {
     let criarA = document.createElement("img")
     mae.appendChild(criarA)
     criarA.setAttribute ("src", gifs[i])
     criarA.textContent= "minhas gifs"
           
    }

    
    //// OBJETO DENTRO DE OBJETO /////
   
   
   let dadosDasPessoas = {
       "Telma"{
           "signo":"leao",
           "bairro":"limao",
           "Time":"vasco"
     }
        "Carol"{
            "signo":"libra",
           "bairro":"centro",
           "Time":"Flamengo"
        }
   }