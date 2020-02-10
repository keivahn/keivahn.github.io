// basic javascript file to add universals to all HTML pages

$(function(){
  // add the footer and header
  $("header").load("static/nav.html");
  $("footer").load("static/footer.html");

  // add the Google Analytics tracker
  // get and store the analytics data
  $.get("static/googleAnalytics.html", function(analytics) {
    // analystics contains the code necessary for Google Analytics tracking
    // add that code to the beginning of head
    $("head").prepend(analytics);
  }, 'html');
});
