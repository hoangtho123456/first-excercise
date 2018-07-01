<?php
//get number value from form in html
$number = isset($_GET['number']) ? (int)$_GET['number'] : false;

if(!$number || $number < 0) {
	die("<h1>Please enter the number greater than 0</h1>");
} 

for ($i = 1; $i <= $number; $i++) {
  echo "<li>Number: " . $i . "</li>";
}
?>
