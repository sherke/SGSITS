$(document).ready(function(){

    $("#blog1").hide()
    $("#readbtn11").click(function(){
        $("#blog1").slideToggle();      
    })
    $("#readbtn12").click(function(){
        $("#blog1").slideToggle();      
    })

    $("#blog2").hide()
    $("#readbtn21").click(function(){
        $("#blog2").slideToggle();
    })
    $("#readbtn22").click(function(){
        $("#blog2").slideToggle();
    })

    $("#blog3").hide()
    $("#readbtn31").click(function(){
        $("#blog3").slideToggle();
    })
    $("#readbtn32").click(function(){
        $("#blog3").slideToggle();
    })

    $("#blog4").hide()
    $("#readbtn41").click(function(){
        $("#blog4").slideToggle();
    })
    $("#readbtn42").click(function(){
        $("#blog4").slideToggle();
    })

    $("#blog5").hide()
    $("#readbtn51").click(function(){
        $("#blog5").slideToggle();
    })
    $("#readbtn52").click(function(){
        $("#blog5").slideToggle();
    })

    $("#blog6").hide()
    $("#readbtn61").click(function(){
        $("#blog6").slideToggle();
    })
    $("#readbtn62").click(function(){
        $("#blog6").slideToggle();
    })

    $("#blog7").hide()
    $("#readbtn71").click(function(){
        $("#blog7").slideToggle();
    })
    $("#readbtn72").click(function(){
        $("#blog7").slideToggle();
    })

    $("#blog8").hide()
    $("#readbtn81").click(function(){
        $("#blog8").slideToggle();
    })
    $("#readbtn82").click(function(){
        $("#blog8").slideToggle();
    })

    $("#blog9").hide()
    $("#readbtn91").click(function(){
        $("#blog9").slideToggle();
    })
    $("#readbtn92").click(function(){
        $("#blog9").slideToggle();
    })

    $("#blog10").hide()
    $("#readbtn101").click(function(){
        $("#blog10").slideToggle();
    })
    $("#readbtn102").click(function(){
        $("#blog10").slideToggle();
    })

    $("#blog11").hide()
    $("#readbtn111").click(function(){
        $("#blog11").slideToggle();
    })
    $("#readbtn112").click(function(){
        $("#blog11").slideToggle();
    })

    $("#blog12").hide()
    $("#readbtn121").click(function(){
        $("#blog12").slideToggle();
    })
    $("#readbtn122").click(function(){
        $("#blog12").slideToggle();
    })

    $("#blog13").hide()
    $("#readbtn131").click(function(){
        $("#blog13").slideToggle();
    })
    $("#readbtn132").click(function(){
        $("#blog13").slideToggle();
    })

    $("#blog14").hide()
    $("#readbtn141").click(function(){
        $("#blog14").slideToggle();
    })
    $("#readbtn142").click(function(){
        $("#blog14").slideToggle();
    })

    $("#blog15").hide()
    $("#readbtn151").click(function(){
        $("#blog15").slideToggle();
    })
    $("#readbtn152").click(function(){
        $("#blog15").slideToggle();
    })

    $(".learnmore").hide()
    $(".learnmorebtn").click(function(){
        $(".learnmore").slideToggle();
    })

    $(".addpost").hide();

    $(".addpostbtn").click(function(){
        $(".addpost").slideToggle();
    })

    $("#bottom").click(function(event){
        event.preventDefault();
        var scrollBottom = $(document).height() + $(window).height();
        $("html,body").animate({scrollTop: scrollBottom},2000)
    })



})