<?php 
  // print_r($_GET);
  // print_r($_POST);
  if ($_POST) {
    echo 'Age: ' . $_POST['age'];
  }
 ?>

<form action="" method="post">
	<input type="text" name="age" />
	<input type="submit" name="submit" value="submit" />
</form>