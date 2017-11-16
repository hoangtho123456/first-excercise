<?php
	$servername = "localhost";
	$userDB = "root";
	$password = "";
	$database = "user";
			
	//Create connection
	$conn = mysqli_connect($servername, $userDB, $password,$database);
	if (!$conn) {
		die("Coulde not connect:". mysqli_connect_error($conn));
	}
?>