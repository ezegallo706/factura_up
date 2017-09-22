$(document).ready(function() {
  
var scroll_pos = 0;
$(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 200){
        $(".tel-bottom").css('background-color', 'green');
    } /*else if (scroll_pos >= 140) {
        $(".tel-bottom").css('background-color', 'red');*/
    }

});






/*smooth scroll*/
$('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

}); /*cierra documentReady*/
