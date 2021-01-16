if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("name", "Celso");
    document.getElementById("div2").innerHTML = localStorage.getItem("name");

    if(!localStorage.clickButton){
        localStorage.clickButton = 0;
    }
    $('button#test').on('click', function () {
        
        var n = Number(localStorage.clickButton) + 1;
        localStorage.clickButton = n;

        $('#div2').text(localStorage.clickButton)
        .css({
            'font-size':'36px',
            'color': '#fff',
        }); 
    })

    if(!sessionStorage.clickButton){
        sessionStorage.clickButton = 0; 
    }
    $('button#test2').on('click', function () {
        
        var n = Number(sessionStorage.clickButton) + 1;
        sessionStorage.clickButton = n;

        $('#div3').text(sessionStorage.clickButton)
        .css({
            'font-size':'36px',
            'color': '#fff',
        }); 
    })

    
} else {
// Sorry! No Web Storage support..
}


