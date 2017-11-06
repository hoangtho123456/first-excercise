<?php 
include "connect.php";
//Create a object to validate info was got from form AJAX 
class checkUser {
	/*
	*Action: check username is existed in database or not?
	*@param {string} $username: username
	*@return {value} 0: username is not exist; 1: username is exist. 
	*/
	public function checkUsername($username) {
		global $conn; //should check global to get connect from "connect.php"
		$sql = "SELECT * FROM LOGIN WHERE username = '".$username."'";
		$result  = mysqli_query($conn, $sql);		
		$num_rows = mysqli_num_rows($result);
		if ($num_rows <= 0) {
			return 0;
		} else { return 1; }
	}
	/*
	*Action: check username is correct?
	*@param {string} $username: username 
	*/
	public function validateName($username) {
		if(strlen($username) < 8) {
			return false;
		} elseif (strlen($username) > 25) {
			return false;
		} elseif (!preg_match("/^[a-zA-Z0-9.-]*$/", $username)) {
			return false;
		}
		return true;
	}

	/*
	*Action: check password is correct?
	*@param {string} $password: password 
	*/
	public function validatePass($password) {
		if(strlen($password) < 8) {
			return false;
		} else if(strlen($password) > 25) {
			return false;
		} 
		return true;
	}
	/*
	*Action: check email is correct?
	*@param {string} $email: email 
	*/
	public function validateEmail($email)
	{
		if (!preg_match("/([\w\-\.]+\@[\w\-]+\.[\w\-]+)/", $email)) {
			return false;
		}
		return true;
	}
	/*
	*Action: check date is correct?
	*@param {string} $birthday: calen 
	*/
	public function validateBirthday($birthday) {
		$arr_date = explode('/', $birthday);
		return (checkdate($arr_date[1], $arr_date[0], $arr_date[2]));
	}
}
?>