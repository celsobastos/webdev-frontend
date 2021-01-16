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

   /*
   $('img').on({
        mouseover:function () {
            //$('body').css('background-color', 'red');
            $(this).attr("src","img/meadow.jpg")
        },
        mouseout:function () {
            //$('body').css('background-color', 'blue');
            $(this).attr("src","img/eagle.jpg")
            $(this).removeClass('error');
        },
        click:function () {
            //$('body').css('background-color', 'green');
            $(this).attr("src","img/paris.jpg")
            $(this).addClass('error');
            $(this).remove();
        }
   });*/

   
   $('.btn').click(function (){
     $(".images").each(function(i){
        if(i === 1){
            $(this).append('Imagem: ' + i);
        }
        $(this).find('strong').css("color","red");
      });
    })



    $('#btnsearch').on('click', () => {
        $("#resposta").html('Aguarde! Estamos processando ... ');

        //function aguarde() {
            $.ajax({
                url: "/jquery/test_ajax.txt",
                success : function (result) {
                    $("#resposta").html(result);
                }
            })   
        //}

        

        //setTimeout(aguarde,5000);
        

        

    })


});