var url = "demo.xlsx";
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

//load data to browser
oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /*convert data to binary string*/
  var data = new Uint8Array(arraybuffer);
  var arr = [];
  for (var i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
  }
  var bstr = arr.join("");

  //call xlsx
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  var first_sheet_name = workbook.SheetNames[0];
  /*get worksheet*/
  var worksheet = workbook.Sheets[first_sheet_name];
  
  //if use sheet_to_json will return a string array obj is: [{continents : nation}].
  //reference from: https://github.com/SheetJS/js-xlsx
  //console.log(XLSX.utils.sheet_to_json(worksheet));

  //list data obj from excel
  var list_obj = XLSX.utils.sheet_to_json(worksheet);
  
  //show list name of continents
  for (var i = 0; i < list_obj.length; i++) {
      var select = document.getElementsByTagName("select");
      select[0].innerHTML += "<option value='" + XLSX.utils.sheet_to_json(worksheet)[i].continents + "'>" + XLSX.utils.sheet_to_json(worksheet)[i].continents + "</option>";
  }

  var select1 = $("select").eq(0).children("option");
  //we have a array obj from json, like as:[{asia: vn},{asia: thailand}]
  //I use loop for to show names in select tag, it will show many the same name.
  //So, i use loop again to remove option tags which has the same name with other tags, result is show each continents name only!   
  for( var i = 0; i < select1.length - 1; i++) {
      for (var j = i + 1; j < select1.length; j++) {
          if( select1.eq(i).val() === select1.eq(j).val()) {
    	      select1.eq(j).remove();
          }        
      }
  }

  //show List nation
  for (var i = 0; i < list_obj.length; i++) {
      var select = document.getElementsByTagName("select");
      var selectDemo = $("select.nations");
      var con = $("select option").eq(0);
      if (con.val() === XLSX.utils.sheet_to_json(worksheet)[i].continents) {
          selectDemo.append ("<option value='" + XLSX.utils.sheet_to_json(worksheet)[i].nation 
          	+ "'>" + XLSX.utils.sheet_to_json(worksheet)[i].nation + "</option>");
      }
  }

  //click pick any continents will show corresponding data nation  
  $("select.continents option").click(function () {
    var list_obj_2 = XLSX.utils.sheet_to_json(worksheet);
    var select = document.getElementsByTagName("select");
    var selectDemo = $("select.nations");

    selectDemo.children("option").remove();
    for (var i = 0; i < list_obj_2.length; i++) {
        var con = $(this).val();
        if (con === XLSX.utils.sheet_to_json(worksheet)[i].continents) {
            selectDemo.append("<option value='" + XLSX.utils.sheet_to_json(worksheet)[i].nation 
            	+ "'>" + XLSX.utils.sheet_to_json(worksheet)[i].nation + "</option>");
        }
    }
  });         
  $("#search").click(function () {
      var list_obj_2 = XLSX.utils.sheet_to_json(worksheet);
      console.log($("select.nations option").val());
      for (var i = 0; i < list_obj_2.length; i++) {
        if ($("select.nations").val() === list_obj_2[i].nation) {
            var url = XLSX.utils.sheet_to_json(worksheet)[i].link;
            console.log(url);
            window.open(url,'_blank');
        } else console.log("sad");
      }
     }); 
}
oReq.send();

/*var index = $("select.nations").children("option").eq(0).index();
  var click = $("select.nations").children("option").eq(0).val();
  $("select.nations").blur(function () {
      click = $(this).val();
      index = $(this).index();
      console.log(click);
  });*/
      /*
      //array continents
      var arrContinent = [];
      var po = [];
      for (var i = 0; i < list_obj.length; i++) {
          arrContinent.push(XLSX.utils.sheet_to_json(worksheet)[i].continents);
      }
      console.log(arrContinent);
      console.log("start");
      var length = arrContinent.length;
      for (var i = 0; i < arrContinent.length - 1; i++) {
          var d = 0;
          for (var j = i + 1; j < arrContinent.length; j++) {
            if( arrContinent[i] === arrContinent[j]) {
              po.push(i);
            }
          }
      }
      */