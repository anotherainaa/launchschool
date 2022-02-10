$(function() {
  console.log('Hello');

  let $key;
  
  $('form').on('submit', function(event) {
    event.preventDefault();
    $key = $('input[type=text]').val();
    console.log(`${$key}`);
  })
  // document is not a variable, we're using vanilla js 
  $(document).off('keypress').on('keypress', function(event) {
    if (event.key !== $key) {
      return;
    } else {
      console.log('clicked')
      // This is triggering the anchor click event below! cool!
      $('a').trigger('click');
    }
  });

  $('a').on('click', function(event) {
    event.preventDefault();
    $('#accordion').slideToggle();
  })
})