<?php
  //Font utf8
  header('Content-Type: text/html, charet=utf-8');
  
  //connect to db
  $conn = mysqli_connect('localhost', 'root', '', 'testajax') or die('could not connect to db');

  //get lis member
  $query = mysqli_query($conn, 'SELECT * FROM member');

  //check validate data
  if(mysqli_num_rows($query)) {
    echo '<table border="1" cellspacing="0" cellpadding="10">';
    echo '<tr><td>Username</td><td>Email</td></tr>';
  }

  /*  get list data to show in table*/
  while ($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
  	echo '<tr>';
  	echo '<td>';
  	echo $row['username'];
  	echo '</td>';
  	echo '<td>';
  	echo $row['email'];
  	echo '</td>';
  	echo '</tr>';
  }
  echo '</table>';
?>
