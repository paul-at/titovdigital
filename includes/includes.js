var footerLoadedEvent = new Event('footerLoaded')

$(function() {
  $.ajax({
    url: "/includes/footer.html",
  })
    .done(function( data ) {
      $('body').append(data);
      window.dispatchEvent(footerLoadedEvent)
    });
});
