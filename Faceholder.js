// Stop throwing up alone over IE8, ever again.
// Let Faceholder hold your face while you do.
// And let it polyfill your placeholders.
(function($) {
  this._Placeholders = new Array(); // Temp field array

  $('input[placeholder]').each(function() {
    var placeholder = $(this).attr('placeholder');
    $(this).attr('value', placeholder)
  });

  // Clear fields
  $('input[placeholder]').each(function() {
      _Placeholders[$(this).index('input[placeholder]')] = $(this).attr('value');
  });

  $('input[placeholder]').focusin(function() {
    if($(this).attr('value') == _Placeholders[$(this).index('input[placeholder]')]) {
        $(this).attr('value', '');
    }
  }).focusout(function() {
    if($(this).attr('value')=='') {
        $(this).attr('value', _Placeholders[$(this).index('input[placeholder]')]);
    }
  });
})(jQuery);
