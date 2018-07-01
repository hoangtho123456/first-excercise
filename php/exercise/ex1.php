<!-- array -->
<?php 
$arr = array(2, 32, 43, 12, 43);
$arr_dif = array('honda' => 'Honda Evic', 'BW1' => 'Bford', 'Dream' => 'WazeZ');

foreach ($arr as $var) {
	echo $var . '<br>';
}

foreach ($arr_dif as $key => $val) {
	echo $key . ': ' . $val . '<br>';
}

sort($arr_dif);
print_r($arr_dif);

krsort($arr_dif);
echo '<br>';
print_r($arr_dif);
 ?>
