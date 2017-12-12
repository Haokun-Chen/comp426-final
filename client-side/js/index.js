function checkTop(){
  if($(window).scrollTop() >=50 ){
    $('#navbar-example').addClass("not-at-top").removeClass("at-top");
  }else{
    $('#navbar-example').addClass("at-top").removeClass("not-at-top");
  }
}

$(document).ready(function(){
    checkTop();
  });

$("#navbar-example a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, 'easeInCubic', function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

$(window).scroll(function() {
  checkTop();
});