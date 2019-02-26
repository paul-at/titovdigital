var footerLoadedEvent = new Event('footerLoaded')

$(function() {
  $.ajax({
    url: "/includes/footer.html",
  })
    .done(function( data ) {
      $('body').append(data);
      if (document.readyState == 'complete') {
        // document already ready if all resources referenced in included file
        // are available in cache
        window.dispatchEvent(footerLoadedEvent)
      } else {
        // wait for resources to load
        window.addEventListener("load", function(event) {
          window.dispatchEvent(footerLoadedEvent)
        })
      }
    });
});
