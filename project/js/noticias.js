$(function() {

    $('button#hide').mouseover(function () {
        $('.container div').hide();
    })

    $('button#show').click(function () {
        $('.container div').show();
    })

    $('button#toggle').click(function () {
        $('.container div').toggle();
    })

    $('.container div').mouseover(function () {
            //$(this).hide(1000);
            //$(this).fadeOut('slow');
            $(this).fadeOut(3000);
    });

    $('button#fade').click(function () {
        $('.container div').fadeIn(3000);
    })

    /*
    $('button#animate').click(function () {
        $('.container div').animate({
            width : '50px',
            height: '200px',
            opacity:'0.3',
        }, 2000);
    })*/

    /*
    $('button#animate').click(function () {
        $('.container #div2').slideUp()
    })
    */
   
   $('button#animate').click(function () {
     $('.container #div2')
        .slideUp(1000)
        .slideDown(1000)
        .css({
            'color' : '#fff', 
            'background' : '#000',
        });
   })


   $('button#get').click(function () {
        // get
        let texto = $('.container #div2').text();
        let attrib = $('.container #div2').attr("id");
        let html = $('.container #div2').html();

        //$('.container #div2').text("Meu texto");

        $('.container #div1').html(html);


    })








})