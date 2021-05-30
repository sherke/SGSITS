$(document).ready(function(){
    $("#news").click(function(){
        $("#news").css({"background-color":"lime","border":"2px solid lime"})
        $("#event").css({"background-color":"lightskyblue","border":"2px solid lightskyblue"})
        $("#mylink").css("display","none")
        $("#mytitle").css("display","block")
        $("#description").css("display","block")

        document.getElementById("myselect").value = "News";

    })

    $("#event").click(function(){
        $("#event").css({"background-color":"lime","border":"2px solid lime"})
        $("#news").css({"background-color":"lightskyblue","border":"2px solid lightskyblue"})
        $("#mylink").css("display","block")
        $("#mytitle").css("display","none")
        $("#description").css("display","none")

        document.getElementById("myselect").value = "Events";
    })


    $(".validate").css("display","none")


    $(".confirmblock").css("display","none")

    $("#btnpost").click(function(){

        if( (document.getElementById("myname").value.length >= 5) && (document.getElementById("myabout").value.length >= 5) && (document.getElementById("myemail").value.length >= 13)){


            if(document.getElementById("myselect").value != ""){
                if((document.getElementById("mytitle").value.length >= 10) && (document.getElementById("mydescription").value != "") ){
                    $(".confirmblock").css("display","flex")
                }
                else if(document.getElementById("mylink").value.length >= 5){
                    $(".confirmblock").css("display","flex")
                }
                else{
                    
                    $(".validate").css("display","flex")
                }
            } 
            else{
                $(".validate").css("display","flex")
            }

        }


    })

    $(".validok").click(function(){
        $(".validate").css("display","none")
    })



    $("#cross").click(function(){
        $(".confirmblock").css("display","none")
    })
})