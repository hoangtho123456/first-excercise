<?php
//font utf8
header('Content-Type: text/html, charet=utf-8');

//connect db
$conn = mysqli_connect('localhost', 'root', '', 'testajax') or die('could not connect to db');

//get list data from table
$query = mysqli_query($conn, 'SELECT * FROM member');

//check validate data
//variable contain list arr data
$arr = array();
if(mysqli_num_rows($query)) {
  /*convert list data array to json*/
  while ($row =  mysqli_fetch_array($query, MYSQLI_ASSOC)) {
  	# code...
  	$arr[] = array(
  		'username' => $row['username'],
  		'email' => $row['email']
  	);
  }
}
die(json_encode($arr));
?>
