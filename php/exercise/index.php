<!DOCTYPE html>
<html>
<head>
	<title>PHP project 1</title>
</head>
<body>
  
  <?php
    $color ='red';
    echo "My car is " . $color . "<br>";
	echo "My house is " . $color . "<br>";
	echo "My boat is " . $color . "<br>";

	function myTest() {
      global $color;
      echo "<p>Variable x inside function is:" . $color . "</p>";
    }
    myTest();

    echo $color." is good";
  ?>
  
  <?php
    class Vehicle {
    	function Vehicle() {
    		$this->wheel = 'OO';
    	}
    }
    $car = new Vehicle();
    echo $car->wheel;
  ?>

</body>
</html>