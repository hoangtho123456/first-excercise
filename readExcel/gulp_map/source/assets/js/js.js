var url = "H30データベースもと.xlsx";

var BTN_SUBMIT = $(".btn-submit-js");
var LIST_DATA = [];
var arr = [];
var CHECKBOX1 = $("#data_check1");
var CHECKBOX2 = $("#data_check2");
var CHECKBOX3 = $("#data_check3");
var CHECKBOX4 = $("#data_check4");
var CHECKBOX5 = $("#data_check5");
var CHECKBOX6 = $("#data_check6");
var CHECKBOX7 = $("#data_check7");
var CHECKBOX8 = $("#data_check8");
var CHECKBOX9 = $("#data_check9");
var CHECKBOX10 = $("#data_check10");
var CHECKBOX11 = $("#data_check11");
var CHECKBOX12 = $("#data_check12");

var SELECT = document.getElementsByTagName("select");
/* set up async GET request */
var oReq;
if (window.XMLHttpRequest) {
  oReq = new XMLHttpRequest();
} else {
  oReq = new ActiveXObject("Microsoft.XMLHTTP");
}

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function() {
  //var NATION_SELECT = $("#nations");
  var CONTINENTS = $("#continents");
  var NATION_SEARCH = $("#search");
  var NATIONS = $('#nations');
  var SEARCH = $('#search');
  var arraybuffer = oReq.response;

  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, { type: "array" });

  //Get data from excel
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
    if (roa.length > 0) {
      result[sheetName] = roa;
    }
  });

  //get key name of object result
  var keyName = Object.keys(result);

  //show list name of continents
  for (var i = 0; i < keyName.length; i++) {
    CONTINENTS.append("<option value='" + keyName[i] + "'>" + keyName[i] + "</option>");
  }

  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      for (i = 3; i < result[key].length; i++) {
        if (result[key][i][1] !== undefined) {
          NATIONS.append("<option value='" + result[key][i][1] + "'>" + result[key][i][1] + "</option>");
          arr.push(result[key][i][1]);
        }
      }
    }
  }

  /*
   *click pick any continents will show corresponding data nation
   */
  $("#continents option").on('click', function() {
    NATIONS.html("");
    var item = $(this).val();
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        if (item === key) {
          for (i = 3; i < result[key].length; i++) {
            if (result[key][i][1] !== undefined) {
              NATIONS.append("<option value='" + result[key][i][1] + "'>" + result[key][i][1] + "</option>");
            }
          }
        }
      }
    }
  });

  BTN_SUBMIT.on('click', function() {
    var country = '';
    if (!NATION_SELECT.attr('disabled')) {
      country = NATION_SELECT.val();

      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          for (i = 3; i < result[key].length; i++) {
            if (result[key][i][1] === country) {
              setCookie("nation", result[key][i][1], -1);
              LIST_DATA = result[key][i];
              console.log(LIST_DATA);
              break;
            }
          }
        }
      }
    } else {
      country = NATION_SEARCH.val();
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          for (i = 3; i < result[key].length; i++) {
            if (result[key][i][1] === country) {
              setCookie("nation", result[key][i][1], -1);
              LIST_DATA = result[key][i];
              console.log(LIST_DATA);
              break;
            }
          }
        }
      }
    }
    clickCheckBox();
    window.open('info.html', '_self');
  });

  /*
   *click pick any continents will show corresponding data nation
   */
  $(SEARCH).autocomplete({
    source: [arr]
  });
  //console.log(arr);
}

oReq.send();

function clickCheckBox() {
  if (CHECKBOX1.prop("checked")) {
    if(LIST_DATA[2] !== undefined) {
      setCookie("州", LIST_DATA[2], -1);
      console.log(LIST_DATA[2]);
    }
  } else {
    setCookie("州", '', -1);
  }

  if (CHECKBOX2.prop("checked")) {
    if (LIST_DATA[3] !== undefined) {
      setCookie("首都", LIST_DATA[3], -1);
      console.log(LIST_DATA[3]);
    }
  } else {
    setCookie("首都", '', -1);
  }

  if(CHECKBOX3.prop("checked")) {
    if (LIST_DATA[4] !== undefined && LIST_DATA[5] !== undefined) {
      setCookie("面積", LIST_DATA[4] + " " + LIST_DATA[5], -1);
      console.log(LIST_DATA[4] + " " + LIST_DATA[5]);
    } 
  } else {
    setCookie("面積", '', -1);
  } 

  if(CHECKBOX4.prop("checked")) {
    if (LIST_DATA[6] !== undefined && LIST_DATA[7] !== undefined) {
      setCookie("人口", LIST_DATA[6] + " " + LIST_DATA[7], -1);
      console.log(LIST_DATA[6] + " " + LIST_DATA[7]);
    }  
  } else {
    setCookie("人口", '', -1);
  }

  if(CHECKBOX5.prop("checked")) {
    if(LIST_DATA[8] !== undefined) {
      setCookie("平均寿命", LIST_DATA[8], -1);
      console.log(LIST_DATA[8]);
    }
  } else {
    setCookie("平均寿命", '', -1);
  }

  if(CHECKBOX6.prop("checked")) {
    if(LIST_DATA[9] !== undefined) {
      setCookie("主な宗教", LIST_DATA[9], -1);
      console.log(LIST_DATA[9]);
    }
  } else {
    setCookie("主な宗教", '', -1);
  }

  if(CHECKBOX7.prop("checked")) {
    if(LIST_DATA[14] !== undefined) {
      setCookie("国・地域の旗について", LIST_DATA[14], -1);
      console.log(LIST_DATA[14] === undefined?'': LIST_DATA[14]);
    }
  } else {
    setCookie("国・地域の旗について", '', -1);
  }

  if(CHECKBOX8.prop("checked")) {
    if(LIST_DATA[12] !== undefined) {
      setCookie("通貨", LIST_DATA[12], -1);
      console.log(LIST_DATA[12]);
    }
  } else {
    setCookie("通貨", '', -1);
  } 

  if (CHECKBOX9.prop("checked")) {
    if(LIST_DATA[13] !== undefined) {
      setCookie("伝統的な料理", LIST_DATA[13], -1);
      console.log(LIST_DATA[13]);
    }
  } else {
    setCookie("伝統的な料理", '', -1);
  }
  if(CHECKBOX10.prop("checked")) {
    if(LIST_DATA[15] !== undefined) {
      setCookie("さかんなスポーツや国技", LIST_DATA[15], -1);
      console.log(LIST_DATA[15]);
    }
  } else {
    setCookie("さかんなスポーツや国技", '', -1);
  }

  if (CHECKBOX11.prop("checked")) {
    if(LIST_DATA[16] !== undefined) {
      setCookie("過去のオリンピック開催都市", LIST_DATA[16], -1);
      console.log(LIST_DATA[16]);
    } 
  } else {
    setCookie("過去のオリンピック開催都市", '', -1);
  }

  if (CHECKBOX12.prop("checked")) {
    if(LIST_DATA[17] !== undefined && LIST_DATA[19] !== undefined && LIST_DATA[21] !== undefined) {
      setCookie("2016年リオオリンピックでのメダルかくとく数", LIST_DATA[17] + " " + LIST_DATA[19] + " " + LIST_DATA[21], -1);
      console.log(LIST_DATA[17] + " " + LIST_DATA[19] + " " + LIST_DATA[21]);
    }
  } else {
    setCookie("2016年リオオリンピックでのメダルかくとく数", '', -1);
  }
  
}