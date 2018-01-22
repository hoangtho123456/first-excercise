var COUNTRY_NAME = $('.country-name-js');
var LIST_INFO = $('.info-p-tit');
var BTN_COMPARE = $('.info-compare-js');
var ARR_JA = [];

var INFO_JA1 = $('#infoFirst_1');
var INFO_JA2 = $('#infoFirst_2');
var INFO_JA3 = $('#infoFirst_3');
var INFO_JA4 = $('#infoFirst_4');
/*=========Event handler=========*/
$(document).ready(function() {
  showListInfo();
  showInfoJa();
  console.log(ARR_JA);	
});

$(BTN_COMPARE).on('click', function () {
  if(typeof(Storage) !== "undefined") {
    if(INFO_JA1.text() === "") {
      INFO_JA1.text("/" + ARR_JA[0][2]);
    } else {
      INFO_JA1.text("");
    }

    if (INFO_JA2.text() === "") {
      INFO_JA2.text("/" + ARR_JA[0][3]);
    } else {
      INFO_JA2.text("");
    }

    if (INFO_JA3.text() === "") {
      INFO_JA3.text("/" + ARR_JA[0][4] + " " + ARR_JA[0][5]);
    } else {
      INFO_JA3.text("");
    }

    if (INFO_JA4.text() === "") {
      INFO_JA4.text("/" + ARR_JA[0][4] + " " + ARR_JA[0][5]);
    } else {
      INFO_JA4.text("");
    }    
  }
});

/*=========function=========*/
function showInfoJa() {
  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      for (i = 3; i < RESULT[key].length; i++) {
        if (RESULT[key][i][1] !== undefined && RESULT[key][i][1] == "日本国") {
          ARR_JA.push(RESULT[key][i]);
        }
      }
    }
  }
}

function showListInfo() {
  if(typeof(Storage) !== 'undefined') {
    COUNTRY_NAME.text(sessionStorage.getItem("nation"));
    //sessionStorage.removeItem("nation");
    
    for (var i = 0; i < LIST_INFO.length; i++) {
      switch(LIST_INFO.eq(i).text()) {
        case '州:':
          if(sessionStorage.getItem("州") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("州"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
          }
          //LIST_INFO.eq(i).next().text(sessionStorage.getItem("州"));
          //sessionStorage.removeItem("州");
          break;
        case '首都:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("首都"));
          //sessionStorage.removeItem("首都");
          break;
        case '面積:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("面積"));
          //sessionStorage.removeItem("面積");
          break;
        case '人口:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("人口"));
          //setCookie("人口", '', -1);
          //sessionStorage.removeItem("人口");
          break;
        case '平均寿命:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("平均寿命"));
          //sessionStorage.removeItem("平均寿命");
          break;
        case '主な言語:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("主な言語"));
          //sessionStorage.removeItem("主な言語");
          break;
        case '主な宗教:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("主な宗教"));
          //sessionStorage.removeItem("主な宗教");
          break;
        case '通貨:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("通貨"));
          //sessionStorage.removeItem("通貨");
          break;
        case '伝統的な料理:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("伝統的な料理"));
          //sessionStorage.removeItem("伝統的な料理");
          break;
        case '国・地域の旗について:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("国・地域の旗について"));
          //sessionStorage.removeItem("国・地域の旗について");
          break;
        case 'さかんなスポーツ:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("さかんなスポーツや国技"));
          //sessionStorage.removeItem("さかんなスポーツや国技");
          break;
        case '過去のオリンピック開催都市:':
          LIST_INFO.eq(i).next().text(sessionStorage.getItem("過去のオリンピック開催都市"));
          //sessionStorage.removeItem("過去のオリンピック開催都市");
          break;
        case '2016年リオオリンピックでのメダルかくとく数:':
          if(sessionStorage.getItem("2016年リオオリンピックでのメダルかくとく数") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("2016年リオオリンピックでのメダルかくとく数"));
            //sessionStorage.removeItem("2016年リオオリンピックでのメダルかくとく数");
          } else {
            LIST_INFO.eq(i).css("display", "none");
          }
          //LIST_INFO.eq(i).next().text(sessionStorage.getItem("2016年リオオリンピックでのメダルかくとく数"));
          //sessionStorage.removeItem("2016年リオオリンピックでのメダルかくとく数");
          break;
      }
    }
  }
}
