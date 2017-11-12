<?php 
include "connect.php";

		/*$sql = "SELECT * FROM LOGIN WHERE username = '".$username."'";
		$result  = mysqli_query($conn, $sql);		
		$num_rows = mysqli_num_rows($result);
		echo $num_rows;*/
	function check($username) {
		global $conn;
		$sql = "SELECT * FROM LOGIN WHERE username='".$username."'";
		$result = mysqli_query($conn,$sql);
		$rows = mysqli_num_rows($result);
		if ($rows <= 0 ) {
			echo "available";
			echo $rows;
		} else { 
			echo "good job"; 
			echo $rows;
		}
		//echo $rows;
	}	
	
		/*$username = "hoghjgjhangtho";
		$sql = "SELECT * FROM LOGIN WHERE username='".$username."'";
		$result = mysqli_query($conn,$sql);
		$rows = mysqli_fetch_row($result);
		//echo $rows[1];
		if(!$rows[1]) {
			echo "available";
		} else echo "good";
	*/
	$username = "hoangtho";
	check($username);
	//echo $username;
	echo "<br>adada";
	mysqli_close($conn);
?>
/*global $conn;
	$sql = "SELECT * FROM LOGIN WHERE username='".$username."'";
	$result = mysqli_query($conn, $sql);
	$rows = mysqli_num_rows($result);
	if ($rows <= 0) {
		echo "username is available!";
	} else { 
		echo "user was exist!";
	}*/