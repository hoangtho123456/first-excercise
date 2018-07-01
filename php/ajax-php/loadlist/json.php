<?php 
//Font UTF-8 to devoid font bug
header('Content-Type: text/html; charset=utf-8');

//Connect DB
$conn = mysqli_connect('localhost', 'root', '', 'testajax') or die('Can not connect to mysql');

//get list member
$query = mysqli_query($conn , 'select * from member');

$result = array();

if(mysqli_num_rows($query) > 0) {
	while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
		$result[] = array(
			'username' => $row['username'],
			'email' => $row['email']
		);
	}
}

die(json_encode($result));

 ?>