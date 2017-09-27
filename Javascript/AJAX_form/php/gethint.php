<?php
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