/*
*js load data from excel
*js layout index.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*============variable============*/
var url = "H30データベースもと.xlsx"; // link file excel

var BTN_SUBMIT = $(".btn-submit-js"); // button submit
var LIST_DATA = []; //list data of the specific nation which got from select box or search input
var arr = []; //list data of all nations use for search

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

var CONTINENTS = $("#continents"); //select box continents
var NATION_SEARCH = $("#search");  //input search nations, it is not depend from continents select-box
var NATIONS = $('#nations'); //select box nation
//Get data from excel
var RESULT = {};

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
  var arraybuffer = oReq.response;

  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, { type: "array" });
  
  //get list data nations follow sheet name.
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
    if (roa.length > 0) {
      RESULT[sheetName] = roa;
    }
  });

  //get key name of object RESULT
  var keyName = Object.keys(RESULT);
  clickSelect(keyName);

  /*
   *click pick any continents will show corresponding data nation
   */
  $(NATION_SEARCH).autocomplete({
    source: [arr]
  });
}

oReq.send();

/*
 *click pick any continents will show corresponding data nation
 */
$("#continents").on('click', function() {
  NATIONS.html("");
  var item = $(this).val();
  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      if (item === key) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] !== undefined) {
            NATIONS.append("<option value='" + RESULT[key][i][1] + "'>" + RESULT[key][i][1] + "</option>");
          }
        }
      }
    }
  }
});

/*
*click button submit, browser will get data(depend on checkbox was not disabled) 
*of the specific nation and send to info.html
*/
BTN_SUBMIT.on('click', function() {
  var country = '';
  //if select nation was not disabled, browser will get data follow select box nation
  //else, search input was not disabled, browser will get data follow input search nation
  if (!NATION_SELECT.attr('disabled')) {
    country = NATION_SELECT.val();

    for (var key in RESULT) {
      if (RESULT.hasOwnProperty(key)) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] === country) {
            sessionStorage.setItem("nation", RESULT[key][i][1]);
            LIST_DATA = RESULT[key][i];
            break;
          }
        }
      }
    }
  } else {
    country = NATION_SEARCH.val();
    for (var key in RESULT) {
      if (RESULT.hasOwnProperty(key)) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] === country) {
            sessionStorage.setItem("nation", RESULT[key][i][1]);
            LIST_DATA = RESULT[key][i];
            break;
          } 
        }
        //if value was entered that didnt found in list data, set nation name = ''
        if (sessionStorage.getItem("nation") !== country) {
           sessionStorage.setItem("nation", "");
        }
      }
    }
  }
  //get data from checkbox was click, if checkbox was not click,
  //data of that checkbox will not be sent to info.html
  clickCheckBox();  
  window.open('info.html', '_self');
});

/*==========function==========*/
/*
 * throw data nations and continents into select tags
 */
function clickSelect(keyName) {
  //show list name of continents
  for (var i = 0; i < keyName.length; i++) {
    CONTINENTS.append("<option value='" + keyName[i] + "'>" + keyName[i] + "</option>");
  }

  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      for (i = 3; i < RESULT[key].length; i++) {
        if (RESULT[key][i][1] !== undefined) {
          NATIONS.append("<option value='" + RESULT[key][i][1] + "'>" + RESULT[key][i][1] + "</option>");
          arr.push(RESULT[key][i][1]);
        }
      }
    }
  }
}

/*
 *Pick data to send to info.html 
 */
function clickCheckBox() {
  //if Storage local was undefined, browser will not execute action bellow 
  if (typeof(Storage) !== 'undefined') {
    if (CHECKBOX1.prop("checked")) {
      if (LIST_DATA[2] !== undefined) {
        sessionStorage.setItem("州", LIST_DATA[2]);
      }
    } else {
      sessionStorage.removeItem("州"); //if dont click checkbox, its data will not send
    }

    if (CHECKBOX2.prop("checked")) {
      if (LIST_DATA[3] !== undefined) {
        sessionStorage.setItem("首都", LIST_DATA[3]);
        console.log(LIST_DATA[3]);
      }
    } else {
      sessionStorage.removeItem("首都");
    }

    if (CHECKBOX3.prop("checked")) {
      if (LIST_DATA[4] !== undefined && LIST_DATA[5] !== undefined) {
        sessionStorage.setItem("面積", LIST_DATA[4] + " " + LIST_DATA[5]);
        console.log(LIST_DATA[4] + " " + LIST_DATA[5]);
      }
    } else {
      sessionStorage.removeItem("面積");
    }

    if (CHECKBOX4.prop("checked")) {
      if (LIST_DATA[6] !== undefined && LIST_DATA[7] !== undefined) {
        sessionStorage.setItem("人口", LIST_DATA[6] + " " + LIST_DATA[7]);
        console.log(LIST_DATA[6] + " " + LIST_DATA[7]);
      }
    } else {
      sessionStorage.removeItem("人口");
    }

    if (CHECKBOX5.prop("checked")) {
      if (LIST_DATA[8] !== undefined) {
        sessionStorage.setItem("平均寿命", LIST_DATA[8]);
        console.log(LIST_DATA[8]);
      }
    } else {
      sessionStorage.removeItem("平均寿命");
    }

    if (CHECKBOX6.prop("checked")) {
      if (LIST_DATA[9] !== undefined) {
        sessionStorage.setItem("主な宗教", LIST_DATA[9]);
        console.log(LIST_DATA[9]);
      }
    } else {
      sessionStorage.removeItem("主な宗教");
    }

    if (CHECKBOX7.prop("checked")) {
      if (LIST_DATA[14] !== undefined) {
        sessionStorage.setItem("国・地域の旗について", LIST_DATA[14]);
        console.log(LIST_DATA[14] === undefined ? '' : LIST_DATA[14]);
      }
    } else {
      sessionStorage.removeItem("国・地域の旗について");
    }

    if (CHECKBOX8.prop("checked")) {
      if (LIST_DATA[12] !== undefined) {
        //setCookie("通貨", LIST_DATA[12], -1);
        sessionStorage.setItem("通貨", LIST_DATA[12]);
        console.log(LIST_DATA[12]);
      }
    } else {
      sessionStorage.removeItem("通貨");
    }

    if (CHECKBOX9.prop("checked")) {
      if (LIST_DATA[13] !== undefined) {
        sessionStorage.setItem("伝統的な料理", LIST_DATA[13]);
        console.log(LIST_DATA[13]);
      }
    } else {
      sessionStorage.removeItem("伝統的な料理");
    }

    if (CHECKBOX10.prop("checked")) {
      if (LIST_DATA[15] !== undefined) {
        sessionStorage.setItem("さかんなスポーツや国技", LIST_DATA[15]);
        console.log(LIST_DATA[15]);
      }
    } else {
      sessionStorage.removeItem("さかんなスポーツや国技");
    }

    if (CHECKBOX11.prop("checked")) {
      if (LIST_DATA[16] !== undefined) {
        sessionStorage.setItem("過去のオリンピック開催都市", LIST_DATA[16]);
        console.log(LIST_DATA[16]);
      }
    } else {
      sessionStorage.removeItem("過去のオリンピック開催都市");
    }

    if (CHECKBOX12.prop("checked")) {
      if (LIST_DATA[17] !== undefined && LIST_DATA[19] !== undefined && LIST_DATA[21] !== undefined) {
        sessionStorage.setItem("2016年リオオリンピックでのメダルかくとく数", LIST_DATA[17] + 
                              " " + LIST_DATA[19] + " " + LIST_DATA[21]);
        console.log(LIST_DATA[17] + " " + LIST_DATA[19] + " " + LIST_DATA[21]);
      }
    } else {
      sessionStorage.removeItem("2016年リオオリンピックでのメダルかくとく数");
    }
  }
}
