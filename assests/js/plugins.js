var document, $;
$(document).ready(function (){
    
  'use strict';  
    //adjust slider height
    
    var winH=$(window).height();
  
     var upperH=$(".upperbar").innerHeight();
     var navH=$(".navbar").innerHeight();
     var searchH=$(".search-sec").innerHeight();
    
    $(".slide").height(winH - (upperH + navH + searchH));
    
    window.console.log($(window).height());
     window.console.log($(".upperbar").innerHeight());
     window.console.log($(".navbar").innerHeight());
     window.console.log($(".search-sec").innerHeight());
});

     
              