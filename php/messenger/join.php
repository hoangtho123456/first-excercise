<?php

include('includes/general.php');
if($user) {
	header('Location: index.php');
}
//variables
$username = @mysqli_real_escape_string($con, $_POST['username']);
$password = @mysqli_real_escape_string($con, $_POST['password']);
//@ use to ignore the code if that code create bugs.

//variables show alert
$showAlert = '<script>$("#form-join .alert").show();</script>';  //show bug
$hideAlert = '<script>$("#form-join .alert").hide();</script>';  //hide bug
$successAlert = '<script>$("#form-join .alert").attr("class", "alert success");</script>';

//check user is exist?
//must prevent sql injection by use prepare
$queryCheckExistUser = mysqli_query($con, "SELECT * FROM users WHERE username = '$username'");

if($username == '' || $password == '') {
  echo $showAlert . 'Please enter your acount and password above.';
} else {
  //if exist, execute login
	if(mysqli_num_rows($queryCheckExistUser)) {
		$password = md5($password); //Encode pass to md5
		
		//variable check info login
		$queryCheckLogin = mysqli_query($con, "SELECT * FROM users WHERE username='$username' 
			AND password='$password'");
		if (mysqli_num_rows($queryCheckLogin)) {
			echo $showAlert . $successAlert . 'Login success';
			$_SESSION['username'] = $username; //store session value username
			echo "<script>window.location.reload();</script>"; //reload page
		} else {
			echo $showAlert . 'username or password is not correct.'; // alert
		}
	} 
    //if not, sign up
	else {
		if (strlen($username) < 6 || strlen($password) > 40) {
			echo $showAlert . 'username is 6-40 chars';
		}
		//if user has special char
		else if(preg_match('/\W/', $username)) {
			echo $showAlert . 'username must not to contain any special chars.';
		}
		//if strlen pass > 6
		else if(strlen($password) < 6) {
			echo $showAlert . 'password length is so short, try again.';
		}
		//if it validated, insert to table
		else {
			$password = md5($password);
			//add user info to table
			$query_create_user = mysqli_query($con, "INSERT INTO users VALUES (
				'',
				'$username',
				'$password',
				'$date_curr'
			)");

			echo $showAlert . $successAlert . 'Sign up success.'; // Thông báo
            $_SESSION['username'] = $username; // Lưu session giá trị username
            echo '<script>window.location.reload();</script>'; // Tải lại trang
		}
	}
}

?>
