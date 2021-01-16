$(function () {
    
    //console.log("test");
    //$('nav a').css('border','2px solid #000');
    //$('a',$('nav')).css('border','2px solid #000');
    //$('a[target="_blank"]', $('nav')).css('border','2px solid #000');
    //$('div.images:first').css('border','3px solid red');
    //$('div.images:last').css('border','3px solid red');
    //$('[target="_blank"]').css('border','2px solid #000');

    /*
    $('div.images:last').css({
        'border':'2px solid #000',
        'font-size' : '50px',
        'color' : 'red'
    });
    */

    //getter
    let contentHeader = $('header').html();
    let contentAttr = $('header').attr('class');


    //setter
    //$('header').html('Meu test');
    //$('header').html(contentAttr);
    $('header').html(function (i, content) {
        return "olá " + content + " new element";
    });
    $('header').attr("class","error");





})