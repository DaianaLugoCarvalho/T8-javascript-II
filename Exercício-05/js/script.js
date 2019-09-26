const livros = {
    1: {
        "titulo": "Java Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
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
    }
}

let mae = document.getElementById("lista-do-catalogo")

for (let i in livros) {    
        let titulo = document.createElement("h1")
        mae.appendChild(titulo)
        titulo.textContent= livros [i]["titulo"]

        let autor= document.createElement("p")
        mae.appendChild(autor)
        autor.textContent=livros [i] ["quemEscreveu"]


    }
