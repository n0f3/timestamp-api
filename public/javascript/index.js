$(function() {
  $('#send-data').on('click', (function(e) {
    console.log('clicked');
    e.preventDefault();
    var input = $('#data-input').val();
    if (input !== 'undefined' && input !== '') {
      $.get('/' + input).done(function(data, textStatus) {
        $('#return-object').html(data);
        
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
      }).always(function() {
        $('#data-input').val('');
      });
    }
  }));
});