/*
*js check login
*js layout index.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*============variable============*/
const ZIPCODE = "singwrd18";

var INPUT_CODE = $(".login-list-btn input");
var BTN_LOGIN = $(".btn-login-js");

/*============Event handler============*/
$(BTN_LOGIN).on('click', function () {
  var temp = INPUT_CODE.val();

  if (ZIPCODE === temp) {
    window.open('page2.html', '_self');
  }
});