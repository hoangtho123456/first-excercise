<?php
include "checkuser.php";
$checkUser = new checkUser();

/**
*Action: check username if is exist in database 
*/
if(isset($_GET['username'])) {
	$username = $_GET['username'];
	$tmp = $checkUser->checkUsername($username);
	if($tmp === 0)
	{
		echo "user name is available!";
	} else {
		echo "username was exist!";
	}
}

//Action: check all value input again in server
if(isset($_GET['username']) && isset($_GET['password']) && isset($_GET['email']) && isset($_GET['calen'])) {
	$username = $_GET['username'];
	$password = $_GET['password'];
	$email = $_GET['email'];
	$birthday = $_GET['calen'];
	//Check input on front-end
	$input_exist = $checkUser->checkUsername($username);
	$input_name = $checkUser->validateName($username);
	$input_pass = $checkUser->validatePass($password);
	$input_email = $checkUser->validateEmail($email);
	$input_date = $checkUser->validateBirthday($birthday);

	if ($input_exist==1 || $input_name == 0 || $input_pass == 0 || $input_email == 0 || $input_date ==0) {
		echo "Submit failed!";
	} else { 
		echo "Submit successull!"; 
	}
}

mysqli_close($conn);
?>