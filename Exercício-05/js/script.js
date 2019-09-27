
const livros = {
    1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javaScript"
    },

    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },

    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }}

let mae = document.getElementById("lista-do-catalogo")

for (let i in livros) {    
        let titulo = document.createElement("h1")
        mae.appendChild(titulo)
        titulo.textContent= livros [i]["titulo"]
        titulo.classList.add("livro__titulo")

        let autor= document.createElement("p")
        mae.appendChild(autor)
        autor.textContent=livros [i] ["quemEscreveu"]
        autor.classList.add ("livro__autoria")

        let links = document.createElement("a")
        mae.appendChild(links)
        links.textContent =  [i] ["link"]
        links.setAttribute ("href", livros [i]["link"])
        links.setAttribute ("target", "_blank")
        links.textContent = "Clica em mim"
        links.classList.add ("livro__link")

        let botao = document.createElement ("button")
        mae.appendChild(botao)
        botao.textContent = "Ja li"
        botao.classList.add("botao-lido")

        // let desfazer = document.createElement("button")
        // mae.appendChild(desfazer)
        // desfazer.textContent = "Desfazer"
        // desfazer.classList.add("botao-desfazer")      
        
        // botao.addEventListener("click", function () {      
        // titulo.classList.add("livro__titulo--lido")
        // })

        // desfazer.addEventListener("click", function() {
        //     titulo.classList.remove("livro__titulo--lido")
            
        // })


       ////  >>  OUTRA FORMA DE TICAR E DESTICAR, MUDAR A COR DO BOTAO QUANDO TICADO  <<  /////
        botao.addEventListener("click", function () {
            if (titulo.classList.contains ("livro__titulo--lido") ){
                titulo.classList.remove("livro__titulo--lido")
                botao.textContent= "Lido"
                botao.classList.remove ("botao-lidoVrm")
                
            } else {
                titulo.classList.add ("livro__titulo--lido")
                botao.textContent= "Desfazer"
                botao.classList.add("botao-lidoVrm")
            }  
        })
    }


