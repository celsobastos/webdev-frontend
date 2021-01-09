//Arrow Function

/*
//Ex: 01
let hellow = function (message) {
    return "Hello World! " + message;
}
*/

/*
//Ex: 02
let hellow = (message) => {
    return "Hello World! " + message;
}
*/
let hellow = (message) =>  "Hello World! " + message;
document.getElementById('soma').innerHTML = hellow("Arrow Function.");


//Callback
function display(soma) {
    document.getElementById('soma').innerHTML = soma
}
function calculadora(n1, n2 , callback) {

    let soma = n1 + n2 ;
    callback(soma);
}
//calculadora(10, 7 , display);



// manipulando nodes
function addNew(noticia) {
    let lista = document.getElementById('lista');
    let paragrafo = document.createElement('p'); //<p></p>
    let text = document.createTextNode(noticia); // Novo text
    paragrafo.appendChild(text); ////<p>Novo text</p>
    lista.appendChild(paragrafo);
}

function removeElement(element) {
    element.remove();
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    addNew("Esta é uma noticia nova");
})

let btnRemove = document.getElementById('btnremove');
btnRemove.addEventListener('click', function() {
    let p = document.getElementById('noticia01');
    removeElement(p);
})






//Convert objeto em json
let object = {nome:"Carlos"}
let json = JSON.stringify(object)
//console.log(json);


//Convert json em objeto
let vJson = '{"nome":"Carlos"}'
let VObject = JSON.parse(vJson)
//console.log(VObject);


let pessoa = {
    nome: 'Carlos',
    idade: 54,
    sexo: 'Masculino',
    fullName : ['Carlos','Silva'],
    saudacao : function (nome) {
        alert('olá, meu nome é ' + this.nome)    
    },
    mydata: function () {
        alert(this.nome + ' ' + this.idade + ' ' + this.sexo)
    },
    getNome: function () {
        return this.nome
    },
    nomeCompleto: function (name, sobrenome) {
        return this.fullName[name] + ' ' + this.fullName[sobrenome]
    }
}

//let fullName = pessoa.nomeCompleto(0,1)
//console.log(fullName)

//let nome = pessoa.getNome()
//let fullName = pessoa.fullName[1];
//console.log(fullName)

//let div = document.getElementById('noticias');
//div.innerHTML = 'Erro'

let pessoas = [{
    nome: 'Carlos',
    idade: 54,
    sexo: 'Masculino',
    fullName : {nome: 'Carlos',sobreNome: 'Silva'},
    saudacao : function (nome) {
        alert('olá, meu nome é ' + this.nome)    
    },
    mydata: function () {
        alert(this.nome + ' ' + this.idade + ' ' + this.sexo)
    },
    getNome: function () {
        return this.nome
    },
    nomeCompleto: function () {
        return this.fullName.nome + ' ' + this.fullName.sobrenome
    },
}];

//var test = [{nome:'carlos'},{nome:'pedro'}]
//console.log(pessoas[0].nome)

