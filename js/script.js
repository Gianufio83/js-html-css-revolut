$(document).ready(
  function() {
    $('.dropdown_link').mouseover(
      function(){
        $(this).children('.dropdown').toggleClass('active');
      }
    );
  }
);
