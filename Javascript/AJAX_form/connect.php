<?php
	$servername = "localhost";
	$userDB = "id3063238_root";
	$password = "123456";
	$database = "id3063238_user";
			
	//Create connection
	$conn = mysqli_connect($servername, $userDB, $password,$database);
	if (!$conn) {
		die("Coulde not connect:". mysqli_connect_error($conn));
	}

?>