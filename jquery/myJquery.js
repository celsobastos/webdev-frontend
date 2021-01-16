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
    //let contentHeader = $('header').html();
    //let contentAttr = $('header').attr('class');
    //let contentInput = $('input').val();

    //if(contentInput.length > 10){
    //    $('input[type="text"]').css('border','2px solid red');
    //}


    //setter
    //$('header').html('Meu test');
    //$('header').html(contentAttr);
    //$('header').html(function (i, content) {
    //    return "olá " + content + " new element";
    //});
    //$('header').attr("class","error");

    //APPEND
    let contentHeader = $('header').html();
    $('header').append("test 2")
    $('header').prepend("test 1")
    //$('header').after(contentHeader)
    //$('header').before(contentHeader)

    /*
    $('img').click(function () {
        let attrAlt = $(this).attr('alt');
        $(this).width('20%')
    })
    */

   /*
   $('img').on('click mouseout', function () {

        let attrAlt = $(this).attr('alt');
        $(this).width('20%')

   })*/

   $('img').on({
       mouseover:function () {
           $('body').css('background-color', 'red');
       }
   },{
       mouseout:function () {
        $('body').css('background-color', 'blue');
       } 
   },{
       click:function () {
        $('body').css('background-color', 'green');
       } 
   })



})