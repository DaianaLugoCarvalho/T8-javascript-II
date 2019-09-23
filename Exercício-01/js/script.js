let alunas = ["Raquel", "Talita", "Lia ", "Daiana", "Rosana", "Carol" ,"Telma", "Barbara", "Silmara", "Raissa", "Cecilia", "Manu", "Carol", "Angel", "Tais", "Ana","Simone","Marcela", "Jennifer", "Denisa", "Adriely", "Barbara", "Priscila", "Jack", "Adriana", "Pri", "Romenia", "Monique", "Jo","Aline"];

let lista = document.getElementById("lista-alunas")

for (let tamanho = 0; tamanho < alunas.length ; tamanho ++ ) {

let conteudo = document.createElement ("li")

conteudo.textContent= alunas [tamanho]

lista.appendChild(conteudo)

} 

//        ////////  ou  ////////

      
// const lista =document.getElementById("lista-alunas")  //precisa chamar a mãe, passou o id do html, para saber onde vai criar a lista 

        
// for (let i= 0 ; i < alunas.length; i++){ //tem que ser menor que a lista para não ir para o proximo elemento que não existe, pq o indice começa do 0
            
//     let item = document.createElement ("li") //("li")colocar nos parenteses qual o elemento que quer criar, em string, criado a mãe
         
//     item.textContent= alunas[i];  //item.textContent  é uma propriedade ( propriedade são valores), que recebe texto, não usa (), atribui valor. Que seja o conteudo do array, conteudo inserido, chama o array com seus itens 
        
//     lista.appendChild(item)  //apendar a lista, informar onde vc quer inserir    

// }









//const paragrafo = document.creatElement ("p");
//const minhaDiv = document.getElementById("conteudo");
//minhaDiv.apendChild(paragrafo);
//paragrafo.textContent= "estamos viajando";







