<?php
//connect db
include 'includes/general.php';
if(!$user) {
	header('Location: index.php');
}
//declare variable which cover data is sent from sendMsg.js
$bodyMsg = @mysqli_real_escape_string($con, $_POST['bodyMsg']);
//execute string
$bodyMsg = htmlentities($bodyMsg);
$bodyMsg = trim($bodyMsg);

//if bodyMsg is not ''
if ($bodyMsg !='') {
  //send mess
	$querySendMsg = mysqli_query($con, "INSERT INTO message VALUES (
		'',
		'$bodyMsg',
		'$user',
		'$date_curr'
		)");
}

?>