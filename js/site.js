(function() {
  $(function() {
    return $('.screenshot').on('click', function(e) {
      return $(this).toggleClass('zoomed');
    });
  });

}).call(this);
