<!DOCTYPE html>
<html>
  <head>
  	<title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <style type="text/css">
    	table {
		    border-collapse: collapse;
		}

		table, th, td {
		    border: 1px solid black;
		}
    </style>
    <script language="javascript">
      function load_ajax() {
        $.ajax({
          url: 'result.php?number=' + $('#number').val(),
          type: "get",
          dataType: "Text",
          data: {
            //number: $('#number').val()
          },
          success: function(result) {
            $("#result").html(result);
          }
        });
      }
    </script>
  </head>
  <body>
  	<div id="result">
  		AJAX content is here
  	</div>
    <input type="text" value="" id="number" />
  	<input type="button" name="clickme" id="clickme" onclick="load_ajax();" value="Click me"/>
  </body>
</html>
