var url = "H30データベースもと.xlsx";

/* set up async GET request */
var oReq;
if (window.XMLHttpRequest) {
	oReq = new XMLHttpRequest();
}
else {
	oReq = new ActiveXObject("Microsoft.XMLHTTP");
}

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var CONTINENTS = $('#continents option');
  var NATIONS = $('#nations');

  var arraybuffer = oReq.response;

  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, {type:"array"});

  //Get data from excel
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
    if(roa.length > 0) 
    {
      result[sheetName] = roa;
    }
  });
 
  var json = JSON.stringify(result, 2, 2);
  
  //get key name of object result
  var keyName = Object.keys(result);
  var keyName3 = keyName[3].split("・");
  
  //show list name of continents
  for (var i = 0; i < keyName.length; i++) {
    var select = document.getElementsByTagName("select");
    select[0].innerHTML += "<option value='" + keyName[i] + "'>" + keyName[i] + "</option>";
  }
  
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      console.log(key);
      var select = document.getElementsByTagName("select");
      for (i = 3; i < result[key].length; i++) {
        if(result[key][i][1] !== undefined) {
          select[1].innerHTML += "<option value='" + result[key][i][1] + "'>" + result[key][i][1] + "</option>";
        }   
      }
    }
  }

  /*
  *click pick any continents will show corresponding data nation
  */
  $('#continents option').on('click', function() {
    var select = document.getElementsByTagName("select");
    NATIONS.html("");
    var item = $(this).val();
    
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        var select = document.getElementsByTagName("select");
        
        if (item === key) {
          for (i = 3; i < result[key].length; i++) {
            if(result[key][i][1] !== undefined) {
              select[1].innerHTML += "<option value='" + result[key][i][1] + "'>" + result[key][i][1] + "</option>";          
            }   
          }  
        }
      }
    }
  });
}

oReq.send();
