<?php 
	$servername = "localhost";
	$username = "root";
	$password = "123456";
	$table = "formAJAX";
			
	//Create connection
	$conn = new mysqli($servername, $username, $password,$table);

	//Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	else {
		echo "success!";
	}

?>