$(document).ready(function () {
  $(".slidingDiv1").hide();
  $(".slidingDiv2").hide();
  $(".slidingDiv3").hide();
  $(".slidingDiv4").hide();

  $('#show_hide1').click(function (e) {
    $(".slidingDiv1").slideToggle("fast");
    var val = $(this).text() == "Hide" ? "Expand" : "Hide";
    $(this).hide().text(val).fadeIn("fast");
    e.preventDefault();
  });

  $('#show_hide2').click(function (e) {
    $(".slidingDiv2").slideToggle("fast");
    var val = $(this).text() == "Hide" ? "Expand" : "Hide";
    $(this).hide().text(val).fadeIn("fast");
    e.preventDefault();
  });

  $('#show_hide3').click(function (e) {
    $(".slidingDiv3").slideToggle("fast");
    var val = $(this).text() == "Hide" ? "Expand" : "Hide";
    $(this).hide().text(val).fadeIn("fast");
    e.preventDefault();
  });

  $('#show_hide4').click(function (e) {
    $(".slidingDiv4").slideToggle("fast");
    var val = $(this).text() == "Hide" ? "Expand" : "Hide";
    $(this).hide().text(val).fadeIn("fast");
    e.preventDefault();
  });
});
