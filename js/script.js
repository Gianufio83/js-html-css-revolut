$(document).ready(
  function() {
    $('button').mouseover(
      function(){
        $(this).next('dropdown').toggleClass('active');
      }
    );
  }
);
