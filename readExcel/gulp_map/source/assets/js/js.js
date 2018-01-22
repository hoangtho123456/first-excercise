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

var CONTINENTS = $("#continents");
var NATION_SEARCH = $("#search");
var NATIONS = $('#nations');
var SEARCH = $('#search');
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
  $(SEARCH).autocomplete({
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

BTN_SUBMIT.on('click', function() {
  var country = '';
  if (!NATION_SELECT.attr('disabled')) {
    country = NATION_SELECT.val();

    for (var key in RESULT) {
      if (RESULT.hasOwnProperty(key)) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] === country) {
            sessionStorage.setItem("nation", RESULT[key][i][1]);
            LIST_DATA = RESULT[key][i];
            console.log(LIST_DATA);
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

function clickCheckBox() {
  if (typeof(Storage) !== 'undefined') {
    if (CHECKBOX1.prop("checked")) {
      if (LIST_DATA[2] !== undefined) {
        sessionStorage.setItem("州", LIST_DATA[2]);
      }
    } else {
      sessionStorage.removeItem("州");
    }

    if (CHECKBOX2.prop("checked")) {
      if (LIST_DATA[3] !== undefined) {
        sessionStorage.setItem("首都", LIST_DATA[3]);
        console.log(LIST_DATA[3]);
      }
    } else {
      //setCookie("首都", '', -1);
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