//func send data
function Join() {
  $username = $('#username').val();
  $password = $('#password').val();

  $.ajax({
  	url: 'join.php',
  	type: 'POST',
  	data: {
  		username: $username,
  		password: $password
  	},
  	success: function(result) {
  		$('#form-join .btn-submit').html('START');
  		$('#form-join .alert').html(result);
  	}
  });
}

$('#form-join .btn-submit').click(function() {
	$(this).html('Loading...');
	Join();
});
