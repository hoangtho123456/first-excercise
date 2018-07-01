<!DOCTYPE html>
<html>
  <head>
  	<title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="js.jquery-3.3.1.min.js"></script>
    <style type="text/css">
    	table {
		    border-collapse: collapse;
		}

		table, th, td {
		    border: 1px solid black;
		}
    </style>
  </head>
  <body>
  	<div id="result">
  		AJAX content is here
  	</div>
  	<input type="button" name="clickme" id="clickme" onclick="load_ajax();" value="Click me"/>

  	<script language="javascript">
    	function load_ajax() {
    		//create a variable store XML HTTP Object
    		var xmlHttp;

    		//if browser is IE7+, Firefox, Chrome
    		if(window.XMLHttpRequest) {
    			xmlHttp = new XMLHttpRequest();
    		}
    		//IE6, IE5
    		else {
    			xmlHttp = new ActiveObject("Microsoft.XMLHTTP");
    		}

    		xmlHttp.onreadystatechange = function() {
    			if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    				document.getElementById("result").innerHTML = xmlHttp.responseText;
    			}
    		};

    		xmlHttp.open("GET", "result.php", true);
    		xmlHttp.send();
    	}
    </script>
  </body>
</html>
