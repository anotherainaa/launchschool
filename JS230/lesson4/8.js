$(function () {
  // this seems to be attaching an event listener on each anchor tag

  let $p = $("p");
  let OUTPUT = "Your favorite fruit is ";

  $("a").click(function() {
    event.preventDefault();
    let $anchor = $(this);
    $p.text(OUTPUT + $anchor.text());
  });

  $("form").submit(function(event) {
    event.preventDefault();
    let $input = $(this).find("input[type=text]");
    $p.text(OUTPUT + $input.val());
  });
});