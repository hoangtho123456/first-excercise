<?php
	$servername = "localhost";
	$username = "id3063238_root";
	$password = "123456";
	$database = "id3063238_user";
			
	//Create connection
	$conn = new mysqli($servername, $username, $password,$database);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	else {
		echo "success!";
	}

	if(isset($_GET['username'])) {
		$username = $_GET['username'];
		if($username === "hoangtho") {
			echo "username was exist!";
		}
		else {
			echo "user name available!";
		}
	}
?>