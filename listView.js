(function($) {
  $(document).ready(function() {
    $(".status").html("ready");
    $.getJSON("urls.json", function(data) {
      $(".status").html("loaded");
      console.log(data);
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