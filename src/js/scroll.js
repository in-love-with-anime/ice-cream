$(document).ready(function() {
  $('a.scrollto').click(function(event) {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1100);
    return event;
  });
});
