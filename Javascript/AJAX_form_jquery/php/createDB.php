<?php 
	$servername = "localhost";
	$username = "root";
	$password = "123456";
	$table = "formAJAX";

	//Create connection
	$conn = new mysqli($servername, $username, $password, $table);

	//Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	//sql to create table
	$sql = "CREATE TABLE Login (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(25) NOT NULL,
	password VARCHAR(25) NOT NULL,
	email VARCHAR(50)
	)";

	if($conn->query($sql) === true) {
		echo "Created table successfully!";
	}
	else {
		echo "ERROR: " . $conn->error;
	}

	$conn->close();
?>
