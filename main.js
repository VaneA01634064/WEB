$(document).ready(function(){
   $("#fans").click(function(event){
       event.preventDefault();
       var next_song = "one.png" ;
       $(".nav-brand").attr("src", next_song);
   });
});



 ScrollReveal().reveal('.showcase');
 ScrollReveal().reveal('#integrante img', { delay: 500 });
ScrollReveal().reveal('#integrante p', { delay: 500 });
ScrollReveal().reveal('#social', { delay: 500 });
ScrollReveal().reveal('.avisos', { delay: 500 });