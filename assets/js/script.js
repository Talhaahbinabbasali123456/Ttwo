$(document).ready(function () {
  // your code
  $(".clickme").click(function () {
    $(this).siblings(".hidden-box").toggleClass("hidden-box-show");
    $(this).toggleClass("clickmebtnavtive");
  });



  $(".humburger").click(function () {
    $(".side-navbar").toggleClass("side-active");
    $(".content-wrapper").toggleClass("blur-filter");
    $(".humburger").toggleClass("humburger2");
  });


  $(".side-navbar ul").click(function () {
    $(".side-navbar").toggleClass("side-active");
    $(".content-wrapper").toggleClass("blur-filter");
    $(".humburger").toggleClass("humburger2");
  });

  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
     frictionY: .1
  });

  var window = $(window);



  
})