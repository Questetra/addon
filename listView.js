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
        rowHtml += '<td><a help="' + service.help.ja + '">help</a></td>';
        rowHtml += '<th rowspan="2"><a href="' + service.file + '">' + service.file + '</a></th>';
        rowHtml += '<th rowspan="2">' + service['last-modified'] + '</th>';

        rowHtml += '</tr>';

        rowHtml += '<tr>';

        rowHtml += '<td>en</td>';
        rowHtml += '<td>' + service.label.en + '</td>';
        rowHtml += '<td><a help="' + service.help.en + '">help</a></td>';

        rowHtml += '</tr>';

        $('tbody.services').append(rowHtml);
      }


      /*
      for (var i = 0; i < data.length; i++) {
        var dataRow = data[i];
        var rowHtml = '<tr>';
        rowHtml += '<th rowspan="2">' + dataRow.id + '</th>';
        rowHtml += '<td>ja</td>';
        rowHtml += '<td>' + dataRow.category.ja + '</td>';
        rowHtml += '<td><a href="' + dataRow.url.ja + '" target="_blank">' + dataRow.title.ja + '</a></td>';
        rowHtml += '<td><a href="' + dataRow.url.ja + '" target="_blank">' + dataRow.url.ja + '</a></td>';
        rowHtml += '<td>[q_manual code="' + dataRow.id + '" lang="ja"]</td>';
        rowHtml += '</tr>';

        rowHtml += '<tr>';
        rowHtml += '<td>en</td>';
        rowHtml += '<td>' + dataRow.category.en + '</td>';
        rowHtml += '<td><a href="' + dataRow.url.en + '" target="_blank">' + dataRow.title.en + '</a></td>';
        rowHtml += '<td><a href="' + dataRow.url.en + '" target="_blank">' + dataRow.url.en + '</a></td>';
        rowHtml += '<td>[q_manual code="' + dataRow.id + '"]</td>';
        rowHtml += '</tr>';

        $('tbody.urls').append(rowHtml);
      }
      */
    });
  });
})(window.jQuery);