<?php
//connect db,get general data
include('includes/general.php');
//connect header
include('includes/header.php');

if($user) {
	//show chat layout
	echo '<div class="main-chat">
	  </div><!--end main chat-->
	  <div class="box-chat">
		<form action="" method="POST" id="form_sending" onsubmit="return false;">
			<input type="text" placeholder="content" />
		</form> <!-- end form sending -->
	  </div> <!-- end boxchat -->';

} else {
	echo '<div class="box-join">
		<p>Create a account to join us.</p>
		<form action="" method="POST" id="form-join" onsubmit="return false;">
			<input type="text" placeholder="username" class="data-input" id="username">
			<input type="password" placeholder="password" class="data-input" id="password">
			<button class="btn-submit">START</button>
	        <div class="alert danger"></div>
		</form> <!-- end form -->
	</div> <!-- end box join -->';
}

// Kết nối footer
include('includes/footer.php');
?>
