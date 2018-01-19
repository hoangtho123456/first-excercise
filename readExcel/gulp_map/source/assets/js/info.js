var COUNTRY_NAME = $('.country-name-js');
var LIST_INFO = $('.info-p-tit');

$(document).ready(function() {
  showListInfo();	
});

function showListInfo() {
  if (navigator.cookieEnabled) {
    COUNTRY_NAME.text(getCookie("nation"));

    for (var i = 0; i < LIST_INFO.length; i++) {
      switch (LIST_INFO.eq(i).text()) {
        case '州:':
          LIST_INFO.eq(i).next().text(getCookie("州"));
          setCookie("州", '', -1);
          break;
        case '首都:':
          LIST_INFO.eq(i).next().text(getCookie("首都"));
          setCookie("首都", '', -1);
          break;
        case '面積:':
          LIST_INFO.eq(i).next().text(getCookie("面積"));
          setCookie("面積", '', -1);
          break;
        case '人口:':
          LIST_INFO.eq(i).next().text(getCookie("人口"));
          setCookie("人口", '', -1);
          break;
        case '平均寿命:':
          LIST_INFO.eq(i).next().text(getCookie("平均寿命"));
          setCookie("平均寿命", '', -1);
          break;
        case '主な言語:':
          LIST_INFO.eq(i).next().text(getCookie("主な言語"));
          setCookie("主な言語", '', -1);
          break;
        case '主な宗教:':
          LIST_INFO.eq(i).next().text(getCookie("主な宗教"));
          setCookie("主な宗教", '', -1);
          break;
        case '通貨:':
          LIST_INFO.eq(i).next().text(getCookie("通貨"));
          setCookie("通貨", '', -1);
          break;
        case '伝統的な料理:':
          LIST_INFO.eq(i).next().text(getCookie("伝統的な料理"));
          setCookie("伝統的な料理", '', -1);
          break;
        case '国・地域の旗について:':
          LIST_INFO.eq(i).next().text(getCookie("国・地域の旗について"));
          setCookie("国・地域の旗について", '', -1);
          break;
        case 'さかんなスポーツ:':
          LIST_INFO.eq(i).next().text(getCookie("さかんなスポーツや国技"));
          setCookie("さかんなスポーツや国技", '', -1);
          break;
        case '過去のオリンピック開催都市:':
          LIST_INFO.eq(i).next().text(getCookie("過去のオリンピック開催都市"));
          setCookie("過去のオリンピック開催都市", '', -1);
          break;
        case '2016年リオオリンピックでのメダルかくとく数:':
          LIST_INFO.eq(i).next().text(getCookie("2016年リオオリンピックでのメダルかくとく数"));
          setCookie("2016年リオオリンピックでのメダルかくとく数", '', -1);
          break;
      }
    }
  } else { alert("please start cookie to get data!"); }
}