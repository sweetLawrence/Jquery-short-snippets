
//LET'S EXPLORE JQUERY 

//****Selectors*********//

function func1() {
    $("div").css("background-color", 'orange');
    $("#p1").css('font-style', 'italic');
    $(".pp").css('font-weight', 'bold');
    $("#fst1,#fst3").css('background-color', 'green');//multiple selection
    $("#fst1,li").css('background-color', 'maroon')
    $("div p").fadeToggle();//direct children / div > p
    $("p:first").fadeToggle();//specificity in position -even 
    $("li:odd").fadeToggle();//specificity in position -odd
}

//******Events*******//


$("document").ready(function () {
    $("button").click(function () {
        $("#img1").css('width', '500px');
    })
    $("button").dblclick(function () {
        $("#img1").css('width', '500px');
    });
})

$("document").ready(function () {
    $("#img1").mouseenter(function () {
        $("#img1").css('width', '500px');
    })

    $("#img1").mouseleave(function () {
        $("#img1").css('width', '200px');
        //    })

        $("#img1").hover(func1, func2);
        function func1() {
            $("#img1").css('width', '500px');
        }
        function func2() {
            $("#img1").css('width', '200px');
        }
    })
})


//******* Effects ********//

$("document").ready(function () {

    //show , hide , toggle
    $("#b1").click(function () {
        $("#img1").hide(2000);
    });

    $("#b2").click(function () {
        $("#img1").show(500);
    });

    $("#b3").click(function () {
        $("#img1").toggle(3000);
    });

    // fadeIn, fadeOut, fadeToggle

    $("#b4").click(function () {
        $("#img1").fadeIn(1000);
    });
    $("#b5").click(function () {
        $("#img1").fadeOut(1000);
    });
    $("#b6").click(function () {
        $("#img1").fadeToggle(1000);
    });

    // slideUp, slideDown, slideToggle
    $("#b7").click(function () {
        $("#img1").slideUp(1000);
    });
    $("#b8").click(function () {
        $("#img1").slideDown(1000);
    });
    $("#b9").click(function () {
        $("#img1").slideToggle(1000);
    });

    // Stop
    $("#b10").click(function () {
        $("#img1").stop();
    });



})


// **** Animate function ****//

$("document").ready(function () {
    $("#b11").click(function () {
        $("#img1").animate({
            left: '300px',
            top: '100px',
            height: '400px',
            width: '400px',
            opacity: '1'
        }, 10000)
    });
})







