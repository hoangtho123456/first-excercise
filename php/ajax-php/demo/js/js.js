//btn text click
$('#text-click').click(function() {
	getTextData($('#result1'));
});

//btn text click
$('#json-click').click(function() {
	getJsonData($('#result2'));
});



//use ajax to send request
function getTextData(textTable) {
	$.ajax({
		url: 'result.php',
		type: 'get',
		dataType: 'text',
		success: function(result) {
			textTable.html(result);
		}
	});
}

//use ajax to send request and get json data
function getJsonData(jsonTable) {
	$.ajax({
		url: 'json.php',
		type: 'get',
		dataType: 'json',
		success: function(result) {
		  var html = '';

		  html += '<table border="1" cellspacing="0" cellpadding="10">';
          html += '<tr><td>Username</td><td>Email</td></tr>';

          //execute array object got from result.php
          $.each(result, function(key, item) {
          	html += '<tr>';
          	html += '<td>';
          	html += item['username'];
          	html += '</td>';
          	html += '<td>';
          	html += item['email'];
          	html += '</td>';
          	html += '</tr>';
          });
          jsonTable.html(html);
		}
	});
}
