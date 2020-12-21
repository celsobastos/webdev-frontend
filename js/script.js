/* 
    Author: Impacta
    Date: 19/12/2020
    Description: Primeira aula de JS
*/

let codigo = 1;

let produtos = document.getElementById("produto")

produtos.onchange = function () {
    
    let objectContent = document.getElementById("selectproduto");

    switch(parseInt(produtos.value)){

        case 1: 
            objectContent.innerHTML = "Batata";
        break;
        case 2: 
            objectContent.innerHTML = "Óleo";
        break
        case 3: 
            objectContent.innerHTML = "Sabão";
        break
        default:
            objectContent.innerHTML = "Não Encontrado";
    }

    //debbuger
    console.log(produtos.value);

}







/*
var login = "lucas";
var senha = "12345";
senha === "123" || senha === "1234" || (login == "" && senha === "") ? console.log("Dados Incorreta") : console.log("senha OK");
*/

/*
if(senha === "123"){
    console.log("Senha Incorreta");
}
else{
    console.log("senha OK");
}
*/

/*
// Trabalhando com loop e collctions
let elements = document.getElementsByTagName("input");
var i;
for (i = 0; i < elements.length ; i++) {  
elements[i].onblur = function () {
    if(this.name == "email"){    
        let error = document.getElementById("error");
        let content = this.value.indexOf("@");

        if(content == -1){
            error.style.color = "red";
            error.innerHTML += "<strong>Ops! Email não existe!</strong>";
        }
        else{
            error.innerHTML = "";
        }
    }
    else{
        let error = document.getElementById("error");
        let contentIdade = isNaN(parseInt(idade.value));

        if(contentIdade){
            error.style.color = "red";
            error.innerHTML += "<br>Ops! Idade Incorreta";
        }
        else{
            error.innerHTML = "";
        }
    }
  }
}
*/

// debbuger
//console.log(elements);
/*
let error = document.getElementById("error");
    let contentIdade = isNaN(parseInt(idade.value));

    if(contentIdade){
        error.style.color = "red";
        error.innerHTML += "<br>Ops! Idade Incorreta";
    }
    else{
        e// debbuger
console.log(numero);rror.innerHTML = "";
    }
*/


/*
// Loop
var dados = [10,"A",5,52,"Sabado",85];
var i = 0;let error = document.getElementById("error");
    let contentIdade = isNaN(parseInt(idade.value));

    if(contentIdade){
        error.style.color = "red";
        error.innerHTML += "<br>Ops! Idade Incorreta";
    }
    else{
        e// debbuger
console.log(numero);rror.innerHTML = "";
    }

while (i < dados.length){
    console.log(dados[i]);
    i++;
}
*/


/*
var i;
for (i = 0; i < dados.length ; i++) {
    consollet error = document.getElementById("error");
    let contentIdade = isNaN(parseInt(idade.value));

    if(contentIdade){
        error.style.color = "red";
        error.innerHTML += "<br>Ops! Idade Incorreta";
    }
    else{
        e// debbuger
console.log(numero);rror.innerHTML = "";
    }
}
*/

/*
// Test Onblur in form
let email = document.getElementById("email");

email.onblur = function () {
    let error = document.getElementById("error");

    let content = email.value;
    let valida = content.indexOf("@");

    if(valida == -1){
        error.style.color = "red";
        error.innerHTML += "<strong>Ops! Email não existe!</strong>";
    }
    else{
        error.innerHTML = "";
    }

}

let idade = document.getElementById("idade");

idade.onblur = function () {
    let error = document.getElementById("error");
    let contentIdade = isNaN(parseInt(idade.value));

    if(contentIdade){
        error.style.color = "red";
        error.innerHTML += "<br>Ops! Idade Incorreta";
    }
    else{
        e// debbuger
console.log(numero);rror.innerHTML = "";
    }

}
*/


/*
var numero = parseFloat("2.52");
// debbuger
console.log(numero);
*/

/*
// Funções internas
let objectButton = document.getElementById("replace");

objectButton.onclick = function () {
    let objectContent = document.getElementById("content").innerHTML;
    let newContent = objectContent.replace("quer","planeta"); 

    document.getElementById("content").innerHTML = newContent;
}
*/

/*
let nome = "Paulo Ricardo de Souza";
let cont = nome.length;
let search = nome.indexOf("@");

// debbuger
console.log(objectContent); */

/*
//Events
let objectContent = document.getElementById("content");
let objectBtn = document.getElementById("btn");
let objectButtons = document.getElementsByTagName("button");
///let objectImages = document.querySelectorAll("img.imagem");
let objectImages = document.getElementById("imagem");


objectBtn.onclick = function () {
    objectContent.innerHTML = "Olá, Você Clicou no botão!";
    objectContent.style.color = "#fff";
    objectContent.style.backgroundColor = "#000";
    objectContent.style.fontSize = "30px";
}

objectImages.onmouseover = function () {
    this.src = "images/paris.jpg";
}

objectImages.onmouseout = function () {
    this.src = "images/meadow.jpg";
}
*/


//objectImages.src = "images/paris.jpg";

// debbuger
//console.log(objectImages); 

/*
// Criando Objetos
let pessoa = {
    nome : "Paulo",
    sobrenome : "Silva",
    idade : 40,
    salario : 4000.00,
    dados: [150,20,30,50,62],
    fullname : function () {
        return this.nome + " " + this.sobrenome;
    }
}
let result = pessoa.dados[1];
let result2 = pessoa.fullname();
// debbuger
console.log(result); 
*/

/*
let newNumber = 1;// debbuger
//console.log(objectImages); 

/*
// Criando Objetos
let pessoa = {
    nome : "Paulo",
    sobrenome : "Silva",
    idade : 40,
    salario : 4000.00,
    dados: [150,20,30,50,62],
    fullname : function () {
        return this.nome + " " + this.sobrenome;
    }
}
let result = pessoa.dados[1];
let result2 = pessoa.fullname();
// debbuger
console.log(result); 
*/

/*
let newNumber = 1;
//criando funções
function soma (n1, n2 = 4) {
    let adicao = n1 + n2;
    return adicao + newNumber;
}
let result = 5
//console.log(result);      


/* Tipos primitivos */

/*
let nome = ""; // empty
// debbuger
console.log(nome);
*/

/*
let dados = [];
//let data = [500,"Casa","idade", 4.5];
//let info = data[3] + data[1];
dados[0] = "OLá";
dados[1] = "Mundo";
// debbuger
console.log(dados[0] + " " + dados[1] );
*/

/*
let test = "Olá 1 don't ";
test = 4000.50;
// debbuger5
console.log(typeof test);
*/

/*
let num1 = "1"; //string
let num2 = 1;   // number
let compare = !(num1 === num2); 
// debbuger
console.log(compare);
*/

/*
let nome = "Paulo";
let sobrenome = "da Silva";
let fullname = nome + " " + sobrenome;
// debbuger5

//var num = 1;
//num = num + 5
//num += 5;

//console.log(result);      


/* Tipos primitivos */

/*
let nome = ""; // empty
// debbuger
console.log(nome);
*/

/*
let dados = [];
//let data = [500,"Casa","idade", 4.5];
//let info = data[3] + data[1];
dados[0] = "OLá";
dados[1] = "Mundo";
// debbuger
console.log(dados[0] + " " + dados[1] );
*/

/*
let test = "Olá 1 don't ";
test = 4000.50;
// debbuger5
console.log(typeof test);
*/

/*// debbuger
//console.log(objectImages); 

/*
// Criando Objetos
let pessoa = {
    nome : "Paulo",
    sobrenome : "Silva",
    idade : 40,
    salario : 4000.00,
    dados: [150,20,30,50,62],
    fullname : function () {
        return this.nome + " " + this.sobrenome;
    }
}
let result = pessoa.dados[1];
let result2 = pessoa.fullname();
// debbuger
console.log(result); 
*/

/*
let newNumber = 1;
//criando funções
function soma (n1, n2 = 4) {
    let adicao = n1 + n2;
    return adicao + newNumber;
}
let result = 5
//console.log(result);      


/* Tipos primitivos */

/*
let nome = ""; // empty
// debbuger
console.log(nome);
*/

/*
let dados = [];
//let data = [500,"Casa","idade", 4.5];
//let info = data[3] + data[1];
dados[0] = "OLá";
dados[1] = "Mundo";
// debbuger
console.log(dados[0] + " " + dados[1] );
*/

/*
let test = "Olá 1 don't ";
test = 4000.50;
// debbuger5
console.log(typeof test);
*/

/*
let num1 = "1"; //string
let num2 = 1;   // number
let compare = !(num1 === num2); 
// debbuger
console.log(compare);
*/

/*
let nome = "Paulo";
let sobrenome = "da Silva";
let fullname = nome + " " + sobrenome;
// debbuger5

//var num = 1;
//num = num + 5
//num += 5;

console.log(compare);
*/

/*
let nome = "Paulo";
let sobrenome = "da Silva";
let fullname = nome + " " + sobrenome;
// debbuger5
*/

//var num = 1;
//num = num + 5
//num += 5;