/*
*js layout info.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/
var COUNTRY_NAME = $('.country-name-js'); //country name label
var LIST_INFO = $('.info-p-tit'); //list info of specific nation was picked from index.html
var BTN_COMPARE = $('.info-compare-js');
var ARR_JA = []; //array data of japan

var INFO_JA1 = $('#infoFirst_1');
var INFO_JA2 = $('#infoFirst_2');
var INFO_JA3 = $('#infoFirst_3');
var INFO_JA4 = $('#infoFirst_4');
var INFO_JA5 = $('#infoFirst_5');
var INFO_JA7 = $('#infoFirst_7');
var INFO_JA8 = $('#infoFirst_8');
var INFO_JA9 = $('#infoFirst_9');
var INFO_JA10 = $('#infoFirst_10');
var INFO_JA11 = $('#infoFirst_11');
var INFO_JA12 = $('#infoFirst_12');
var INFO_JA13 = $('#infoFirst_13');
/*=========Event handler=========*/
$(document).ready(function() {
  showListInfo();
  showInfoJa();
  console.log(ARR_JA);	
});

$(BTN_COMPARE).on('click', function () {
  if(typeof(Storage) !== "undefined") {
    if(INFO_JA1.text() === "") {
      INFO_JA1.text(" / " + ARR_JA[0][2]);
    } else {
      INFO_JA1.text("");
    }

    if (INFO_JA2.text() === "") {
      INFO_JA2.text(" / " + ARR_JA[0][3]);
    } else {
      INFO_JA2.text("");
    }

    if (INFO_JA3.text() === "") {
      INFO_JA3.text(" / " + ARR_JA[0][4] + " " + ARR_JA[0][5]);
    } else {
      INFO_JA3.text("");
    }

    if (INFO_JA4.text() === "") {
      INFO_JA4.text(" / " + ARR_JA[0][6] + " " + ARR_JA[0][7]);
    } else {
      INFO_JA4.text("");
    }

    if (INFO_JA5.text() === "") {
      INFO_JA5.text(" / " + ARR_JA[0][8]);
    } else {
      INFO_JA5.text("");
    }
    
    if (INFO_JA7.text() === "") {
      INFO_JA7.text(" / " + ARR_JA[0][9]);
    } else {
      INFO_JA7.text("");
    }

    if (INFO_JA8.text() === "") {
      INFO_JA8.text(" / " + ARR_JA[0][12]);
    } else {
      INFO_JA8.text("");
    }

    if (INFO_JA9.text() === "") {
      INFO_JA9.text(" / " + ARR_JA[0][10]);
    } else {
      INFO_JA9.text("");
    }    

    if (INFO_JA10.text() === "") {
      INFO_JA10.text(" / " + ARR_JA[0][15]);
    } else {
      INFO_JA10.text("");
    }

    if (INFO_JA11.text() === "") {
      INFO_JA11.text(" / " + ARR_JA[0][10]);
    } else {
      INFO_JA11.text("");
    }

    if (INFO_JA12.text() === "") {
      INFO_JA12.text(" / " + ARR_JA[0][16]);
    } else {
      INFO_JA12.text("");
    }

    if (INFO_JA13.text() === "") {
      INFO_JA13.text(" / " + ARR_JA[0][17] + " " + ARR_JA[0][19] + " " + ARR_JA[0][21]);
    } else {
      INFO_JA13.text("");
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
    console.log(sessionStorage.getItem("nation"));
    COUNTRY_NAME.text(sessionStorage.getItem("nation"));
    
    for (var i = 0; i < LIST_INFO.length; i++) {
      switch(LIST_INFO.eq(i).text()) {
        case '州:':
          if(sessionStorage.getItem("州") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("州"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '首都:':
          if(sessionStorage.getItem("首都") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("首都"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '面積:':
          if(sessionStorage.getItem("面積") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("面積"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '人口:':
          if(sessionStorage.getItem("人口") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("人口"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '平均寿命:':
          if(sessionStorage.getItem("平均寿命") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("平均寿命"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '主な言語:':
          if(sessionStorage.getItem("主な言語") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("主な言語"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '主な宗教:':
          if(sessionStorage.getItem("主な宗教") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("主な宗教"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;

        case '通貨:':
          if(sessionStorage.getItem("通貨") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("通貨"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
        case '伝統的な料理:':
          if(sessionStorage.getItem("伝統的な料理") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("伝統的な料理"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
        case '国・地域の旗について:':
          if(sessionStorage.getItem("国・地域の旗について") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("国・地域の旗について"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
        case 'さかんなスポーツ:':
          if(sessionStorage.getItem("さかんなスポーツや国技") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("さかんなスポーツや国技"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
        case '過去のオリンピック開催都市:':
          if(sessionStorage.getItem("過去のオリンピック開催都市") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("過去のオリンピック開催都市"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
        case '2016年リオオリンピックでのメダルかくとく数:':
          if(sessionStorage.getItem("2016年リオオリンピックでのメダルかくとく数") !== null) {
            LIST_INFO.eq(i).next().text(sessionStorage.getItem("2016年リオオリンピックでのメダルかくとく数"));
          } else {
            LIST_INFO.eq(i).css("display", "none");
            LIST_INFO.eq(i).parent().css("display", "none");
          }
          break;
      }
    }
  }
}
