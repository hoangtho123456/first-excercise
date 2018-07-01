<?php
  $namehost = 'localhost';
  $userhost = 'root';
  $password = '';
  $database = 'messenger';

  //connect database
  $con = mysqli_connect($namehost, $userhost, $password, $database) or die('Could not connect to db.');

  // if(!$con) {
  // 	echo 'Could not connect to db';
  // }
?>
