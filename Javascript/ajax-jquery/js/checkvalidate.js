/**
Feature: FROM_AJAX_EXCERCISE
Idea: Check all value of input.
Author: danghoangtho1132@gmail.com (Dang Hoang Tho)
*/
var USERNAME = $("#username");
var PASSWORD = $("#password");
var EMAIL = $("#email");
var BIRTHDAY = $("#picked_day");
var SUBMIT = $("#submit");
/*
*Action: check validate value username when value of input changed
*/
$(USERNAME).blur(function() {
	checkInputUsername();
});
/*
*Action: function check validate of value username
*return {boonlean} false: incorrect username, true: correct username 
*/
function checkInputUsername() {
	var messCheckname = $("#validate_user");
	if (USERNAME.val().length < 8) {
		messCheckname.html("username length min 8 letter!");
		messCheckname.css("color","red");
		return false;
	}
	if (USERNAME.val().length > 35) {
		messCheckname.html("username length max 35 letter!");
		messCheckname.css("color","red");
		return false;
	}
	if (isSpecialCharacterRex(USERNAME.val())) {
		messCheckname.html("username must not have any special character!");
		messCheckname.css("color","red");
		return false;
	}
	else { 
		messCheckname.html("OK");
		messCheckname.css("color","green");
		return true;
	}
}

function isSpecialCharacterRex(validateValue) {
	var specialChar = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
	var checkRegex = new RegExp(specialChar);
	//check if value does not have any special char, return false, else return true
	if (!checkRegex.test(validateValue)) {
		return false;
	}
	return true;
}

/*
*Action: check validate value password when value of input changed
*/
$(PASSWORD).blur(function() {
	checkInputPassword();
});
/*
*Action: function check validate of value username
*Return {boonlean} false: password is not correct, true: password is correct 
*/
function checkInputPassword() {
	var messCheckPass = $("#validate_pass");
	if (PASSWORD.val().length < 8) {
		messCheckPass.html("password length min 8 letter!");
		messCheckPass.css("color","red");
		return false;
	}
	if (PASSWORD.val().length > 35) {
		messCheckPass.html("password length max 35 letter!");
		messCheckPass.css("color","red");
		return false
	}
	else {
		messCheckPass.html("OK");
		messCheckPass.css("color","green");
		return true;
	}
}

/*
*Action: check validate email when value of input changed
*/
$(EMAIL).blur(function() {
	checkInputEmail();
});
/*
*Action: function check validate of value username
*Return {boonlean} false: password is not correct, true: password is correct 
*/
function checkInputEmail() {
	var messCheckEmail = $("#validate_email");
	var emailRexp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,6}$");
	if (!emailRexp.test(EMAIL.val())) {
		messCheckEmail.html("email is not correct, try again!");
		messCheckEmail.css("color","red");
		return false;
	}
	else {
		messCheckEmail.html("OK");
		messCheckEmail.css("color","green");
		return true;
	}
}

/*
*Action: check validate birthday when value of input changed
*/
$(BIRTHDAY).blur(function() {
	checkInputBirthday();
});
/*
*Action: function check validate of value username
*Return {boonlean} false: password is not correct, true: password is correct 
*/
function checkInputBirthday() {
	var messCheckDay = $("#validate_day");
	var dayRexp = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
	if (!dayRexp.test(BIRTHDAY.val())) {
		messCheckDay.html("birthday is not correct, try again!");
		messCheckDay.css("color","red");
		return false;
	}
	else {
		messCheckDay.html("OK");
		messCheckDay.css("color","green");
		return true;
	}
}

$("#reset").click(function () {
	reset()});
/*
*Action: function reset value on input
*/
function reset () {
    var username = USERNAME;
	var password = PASSWORD;
	var email = EMAIL;
	var picked_day = BIRTHDAY;
	var validate_user = $("#validate_user");
	var validate_pass = $("#validate_pass");
	var validate_email = $("#validate_email");
	var validate_day = $("#validate_day");
	var calendar = $(".calendar"); 

	username.val("");
	password.val("");
	email.val("");
	picked_day.val("");

	username.html("");
	password.html("");
	email.html("");
	picked_day.html("");

	validate_user.html("");
	validate_pass.html("");
	validate_email.html("");
	validate_day.html("");
	//set calendar is non-display and text for check bellow server is ""
	calendar.css("display", "none");
	$("txtHint").html("");
}

/**
*AJAX FORM
*/
$(SUBMIT).on("click", function () {
	clickSubmit();
});
function clickSubmit() {
	//var xmlhttp;
	//if all info is true, it will be sent to server
	if (checkInputUsername() && checkInputPassword() && checkInputEmail() && checkInputBirthday()) {
		var checkedUser = USERNAME.val();
		var checkedPassword = PASSWORD.val();
		var checkedEmail = EMAIL.val();
		var checkedDay = BIRTHDAY.val();
		var calendar = $(".calendar");
		calendar.eq(0).css("display", "none"); // when click "submit", calendar will disappear
		var url = "username=" + checkedUser + "&password=" + checkedPassword + 
		   "&email=" + checkedEmail + "&calen=" + checkedDay;
		if (url.length == 0) {
		  	$("txtHint").html("");
		  	return;
		}
        
        $.get("gethint.php?" + url, function(data) {
            $("#txtHint").html(data);
		});   
	}
	else return false;
}