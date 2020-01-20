$(document).ready(
  function() {
    //var numberSquare = $('.square').length;
    // var numberSquare = $('.wrapper').children().length;
    // var numberSquare = $('.wrapper').children().length;
    //console.log(numberSquare);
    // for (var i = 0; i < numberSquare; i++) {
    //
    // }
    for (var i = 0; i < 10; i++) {
      $('.wrapper').append('<div class="square"></div>');
    }


    // $('.square').click(
    //   function(){
    //     $(this).text(getRandomIntInclusive(1,10))
    //   }
    // );
    $('.square').on('click',
      function(){
        $(this).text(getRandomIntInclusive(1,10));
      }
    );

    $('.square').each(function (index) {
      console.log(index);
      if(index % 2 == 0) {
        $(this).addClass('red');
      } else {
        $(this).addClass('green');
      }
      // $(element).text(getRandomIntInclusive(1, 100));
    });

  }
);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
