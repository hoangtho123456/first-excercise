<!DOCTYPE html>
<html>
  <head>
  	<title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <style type="text/css">
    </style>
  </head>
  <body>
  	<div id="result1">TEXT</div>
    <div id="result2">JSON</div>
    <div id="result3">XML</div>
    <br/>
    <input type="button" name="clickme" id="text-click" value="Get List By Text"/>
    <input type="button" name="clickme" id="json-click" value="Get List By Json"/>
    <input type="button" name="clickme" id="xml-click" value="Get List By XML"/>
    
    <script language="javascript">
      $('#text-click').click(function() {
        $.ajax({
          url: "result.php",
          type: "get",
          dataType: "text",
          success: function(result) {
            $("#result1").html(result);
          }
        });
      })

      //json click
      $('#json-click').click(function() {
        $.ajax({
          url: 'json.php',
          type: 'get',
          dataType: 'json',
          success: function(result) {
            var html = '';
            html += '<table border="1" cellspacing="0" cellpadding="10">';
            html += '<tr>';
              html +='<td>';
                html += 'Username';
              html +='</td>';  
              html += '<td>';
                html += 'Email';
              html += '</td>';
            html += '<tr>';

            //result is JSON Object->loop result
            $.each(result, function(key, item) {
              html += '<tr>';
                html += '<td>';
                  html += item['username'];
                html += '</td>';
                html +=  '<td>';
                  html +=  item['email'];
                html +=  '</td>';
              html +=  '<tr>';
            });

            html += '</table>';
            $('#result2').html(html);
          }
        });
      }); 
      //can use dataType: 'text', then use func parseJSON to
      //convert string to Object array 

      //json click
      $('#xml-click').click(function() {
                
      });
    </script>
  </body>
</html>
