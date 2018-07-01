<?php
//Font UTF-8 to devoid font bug
header('Content-Type: text/html; charset=utf-8');

//Connect DB
$conn = mysqli_connect('localhost', 'root', '', 'testajax') or die('Can not connect to mysql');

//get list member
$query = mysqli_query($conn, 'select * from member');

//check validate data
if(mysqli_num_rows($query) > 0) {
	echo '<table border="1" cellspacing="0" cellpadding="10">';
    echo '<tr>';
       echo '<td>';
           echo 'Username';
       echo '</td>';
       echo '<td>';
            echo 'Email';
       echo '</td>';
    echo '<tr>';
}

//create list data show to table
while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	echo '<tr>';
		echo '<td>';
			echo $row['username'];
		echo '</td>';
		echo '<td>';
			echo $row['email'];
		echo '</td>';
	echo "</tr>";
}
echo '</table>';

?>
