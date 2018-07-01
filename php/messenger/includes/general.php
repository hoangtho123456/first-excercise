<?php
  //connect to db
  include('connectdb.php');

  //get time zone for all page
  date_default_timezone_set('Asia/Ho_Chi_Minh');
  $date_curr = '';
  $date_curr = date("Y-m-d H:i:sa");
  ?>

<?php
//store session
session_start();

//if session is existed
if(@$_SESSION['username']) {
	$user = $_SESSION['username'];
} else {
	$user = '';
}
  
?>
