//function send message
function sendMsg() {
	//variabble	
	$bodyMsg = $('#form_sending input[type="text"]').val();

	//send data
	$.ajax({
		url: 'sendmsg.php',
		type: 'post',
		dataType: 'text',
		data: {
			bodyMsg: $bodyMsg
		},
		//send data success
		success: function () {
			$('#form_sending input[type="text"]').val(''); //empty text in chat box
		}
	});
}

//click 'enter' in keyboard
$('#form_sending input[type="text"]').keypress(function() {
	var keyCode = (event.keyCode? event.keyCode : event.which);
	if(keyCode == '13') {
		sendMsg();
	}
});

//click event
$('#form_sending input[type="text"]').click(function() {
	//scroll browser to the bottom
	window.scrollBy(0, $('html, body').height());
});
