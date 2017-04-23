$(function() {
  $('#send-data').click(function(e) {
    e.preventDefault();
    var input = $('#data-input').val();
    if (input !== 'undefined' && input !== '') {
      $.ajax({
        url: '/' + input,
        data: input,
      }).done(function(data, textStatus) {
        $('#return-object').html(data);
        
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
      }).always(function() {
        $('#data-input').val('');
      });
    }
  })
});