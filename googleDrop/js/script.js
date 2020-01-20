$(document).ready(
  function () {
    $('.parent-dropdown > a.hamburger-icon').click(
      function () {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
