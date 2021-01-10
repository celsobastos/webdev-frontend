document.getElementById('spinner').style.display = 'none';

let btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', function () {
    executeSearch();  
})

let textSearchPress = document.getElementById('search');
textSearchPress.addEventListener('keyup', function () {
    executeSearch();    
})

function executeSearch() {
    let textSearch = document.getElementById('search').value.trim();
    const url = 'https://jsonplaceholder.typicode.com/users';
    const divResultado  = document.getElementById('resultado');

    search(textSearch, url, divResultado);
}

function search(name , url, div) {

    document.getElementById('spinner').style.display = 'block';
    
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        var error = false;
        var test = data.map((data) => {
            if(name == data.name ){
                div.innerHTML = '<div>' +  data.name + ' - ' + data.email + '</div>';
                error = true;
            }
        })
        if(!error){
            div.innerHTML = 'Ops! Nome não existe.';
        }
        document.getElementById('spinner').style.display = 'none';
        return test;
    })
    .catch((error) => {
        console.log("Ops! Algo deu errado")
    })
}
