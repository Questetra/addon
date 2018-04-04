(function($) {
  $(document).ready(function() {
    $(".status").html("ready");
    $.getJSON("list.json", function(data) {
      $(".status").html("loaded");

      for(var i = 0; i < data.services.length; i++){
        var service = data.services[i];
        var rowHtml = '<tr>';

        rowHtml += '<th rowspan="2">' + service.id + '</th>';
        rowHtml += '<td>ja</td>';
        rowHtml += '<td>' + service.label.ja + '</td>';
        rowHtml += '<td><a href="' + service.help.ja + '">help</a></td>';
        rowHtml += '<th rowspan="2"><a href="' + service.file + '">' + service.file + '</a></th>';
        rowHtml += '<th rowspan="2">' + service['last-modified'] + '</th>';

        rowHtml += '</tr>';

        rowHtml += '<tr>';

        rowHtml += '<td>en</td>';
        rowHtml += '<td>' + service.label.en + '</td>';
        rowHtml += '<td><a href="' + service.help.en + '">help</a></td>';

        rowHtml += '</tr>';

        $('tbody.services').append(rowHtml);
      }

      for(var i = 0; i < data.options.length; i++){
        var options = data.options[i];
        var rowHtml = '<tr>';

        rowHtml += '<th rowspan="2">' + options.id + '</th>';
        rowHtml += '<td>ja</td>';
        rowHtml += '<td>' + options.label.ja + '</td>';
        rowHtml += '<td><a href="' + options.help.ja + '">help</a></td>';
        rowHtml += '<th rowspan="2"><a href="' + options.file + '">' + options.file + '</a></th>';
        rowHtml += '<th rowspan="2">' + options['last-modified'] + '</th>';

        rowHtml += '</tr>';

        rowHtml += '<tr>';

        rowHtml += '<td>en</td>';
        rowHtml += '<td>' + options.label.en + '</td>';
        rowHtml += '<td><a href="' + options.help.en + '">help</a></td>';

        rowHtml += '</tr>';

        $('tbody.options').append(rowHtml);
      }
      
    });
  });
})(window.jQuery);