$(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
 

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
      $('#main-content section').each(function(i){
        if($(this).position().top <= windscroll + 10) {
          $('#panel-nav li a.active').removeClass('active');
          $('#panel-nav li a').eq(i).addClass('active');
        }
      });
    }).scroll();
  });
    