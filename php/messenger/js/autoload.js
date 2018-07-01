$.ajaxSetup({catch: false});
//set real time loop in 1s
setInterval(function() {$('.main-chat').load('msglog.php');}, 1000);