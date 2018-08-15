$(function() {
  $.ajax({
    url: "includes/footer.html",
  })
    .done(function( data ) {
      $('body').append(data);
    });
});
