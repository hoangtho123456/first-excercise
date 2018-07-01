<?php 

//connect db, get general data
include('includes/general.php');
if(!$user) {
	header('Location: index.php');
}
//get data from table messagee following order idMsg
$queryGetMess = mysqli_query($con, "SELECT * FROM message ORDER BY id_msg ASC");

//Use loop to get data
while($row = mysqli_fetch_assoc($queryGetMess)) {
  //time sent message
	$dateSent = $row['date_sent'];
	$daySent = substr($dateSent, 8, 2); //day
	$monthSent = substr($dateSent, 5, 2); //month
	$yearSent = substr($dateSent, 0, 4); //year
	$hourSent = substr($dateSent, 11, 2); // Giờ gửi
    $minSent = substr($dateSent, 14, 2); // Phút gửi
    
    //green
    if($row['user_from'] == $user) {
    	echo '<div class="msg-user">
			<p>'. $row['body'] . '</p>
			<div class="info-msg-user">
				You - ' . $daySent . '/' .$monthSent . '/' . $yearSent . ' at ' . $hourSent . ': ' . $minSent . $row['user_from'] . '
			</div>
		</div>';
    } else {
    	 echo '<div class="msg">
                <p>' . $row['body'] . '</p>
                <div class="info-msg">
                        ' . $row['user_from'] . ' - ' . $daySent . '/' . $monthSent . '/' . $yearSent . ' at ' . $hourSent . ':' . $minSent . '
                </div>
        </div>';
    }
}
?>
