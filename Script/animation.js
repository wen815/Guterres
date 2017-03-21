$(function(){
     $("#unav #pro").addClass("border");
    $("#unav li").click(function(){
        $(this).addClass("border").siblings().removeClass("border");
       });
                 $("#unav #pro").click(function(){ 
               $("#spro").css("opacity","0");
         $(".sub").not(this).animate({opacity:"0"},200);     
           $("#spro").animate({opacity:"1"},2000);            
          });

          $("#unav #edu").click(function(){ 
               $("#sedu").css("opacity","0");
         $(".sub").not(this).animate({opacity:"0"},200);     
           $("#sedu").animate({opacity:"1"},2000);            
          });
          
                    $("#unav #exp").click(function(){ 
               $("#sexp").css("opacity","0");
         $(".sub").not(this).animate({opacity:"0"},200);     
           $("#sexp").animate({opacity:"1"},2000);            
          });
              $("#unav #con").click(function(){ 
               $("#scon").css("opacity","0");
         $(".sub").not(this).animate({opacity:"0"},200);     
           $("#scon").animate({opacity:"1"},2000);            
          });

});

