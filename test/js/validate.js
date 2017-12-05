/*
*jquery test
*exercises 7: validate js
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/
var USERNAME = $("#username");
var BIRTHDAY = $("#birth_day");
var JOB = $("#job");
var PHONE_1 = $("#phone_1");
var PHONE_2 = $("#phone_2");
var PHONE_3 = $("#phone_3");
var ADDRESS = $("#address");
var CHECK = $("#check");

//click check button, data will be checked. then show conform above the form
$(CHECK).click(function () {
	checkUsername();
	checkBirthday();
	checkJob();
	checkPhoneNum(PHONE_1);
	checkPhoneNum(PHONE_2);
	checkPhoneNum(PHONE_3);
	checkAddress();
});

//function check username
var checkUsername = function() {
	var user_check = $("#name_check");

    if(USERNAME.val().length <= 0 || USERNAME.val().length > 20) {
    	user_check.html("Username length must be in [0, 20]");
    	return false;
    } 
    var num = parseInt(USERNAME.val().substr(0,1)); //slice the first char, then convert to number
	
	//if num is number, write validate message, if not, dont write any things!
	if (!isNaN(num)) {
        user_check.html("The first letter must be char!");
        return false;
	}

	if (isSpacialLetter(USERNAME.val())) {
	    user_check.html("username must not to have any special letter!");
        return false;	
	}
	else {
		user_check.html("");
		return true;
	}    
}

/*
*function check special letter
*@param {text} validate
*@return {boolean} ,true: text has at least a special letter, 
*false: text don't have any special letter
*/
function isSpacialLetter(validate) {
    var specialChar = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
    var checkRegex = new RegExp(specialChar);

    if(!checkRegex.test(validate)) {
    	return false;
    } else return true;
}

/*
*check birthday format
*@return boonlean true: if value is true, false: if value is not true in birthday format  
*/
var checkBirthday = function () {
	var day_check = $("#day_check");
	var dayExp = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
	
	if(!dayExp.test(BIRTHDAY.val())) {
        day_check.html("birthday format must be DD/mm/yyyy");
        return false;
	} else {
		day_check.html("");
        return true;
	}
}

/*
*check job value
*@return boonlean true: if value is true, false: if value is not true in job value validation.  
*/
var checkJob = function () {
    var job_check = $("#job_check");
	
	if (JOB.val().length <= 0 || JOB.val().length > 15) {
		job_check.html("job name length must be in [0, 15]");
		return false;
	}
    var num = parseInt(JOB.val().substr(0,1));

	//check the first letter is num? if true, confirm bug to user 
	if (!isNaN(num)) {
        job_check.html("The first letter must be char!");
        return false;
	}
	
	//check value has any special letter? if true, confirm bug to user
	if (isSpacialLetter(JOB.val().substr(0,1)) || isSpacialLetter(JOB.val().substr(JOB.val().length - 1,1))) {
	    job_check.html("username must not to have any special letter!");
        return false;	
	}
	else {
		job_check.html("");
		return true;
	}
}

/*
*check phone number's value
*@return boonlean true: if value is true, false: if value is not true in phone value validation.  
*/
var checkPhoneNum = function (value) {
    var phone_check = $("#phone_check");
	
	if(isNaN(value.val())) {
		phone_check.html("phone number must be number only!");
		return false;
	} 
	else if(isSpacialLetter(value.val())) {
		phone_check.html("username must not to have any special letter!");
		return false;
	}
	else if ((PHONE_1.val().length <= 0 || PHONE_1.val().length > 3) 
		     || (PHONE_2.val().length <= 0 || PHONE_2.val().length > 4)
		     || (PHONE_3.val().length <= 0 || PHONE_3.val().length > 4)) {
        phone_check.html("Char for each input must be [3, 4, 4]");
        return false;
	}
	else {
        phone_check.html("");
        return true;
	}
}

/*
*check job value
*@return boonlean true: if value is true, false: if value is not true in job value validation.  
*/
var checkAddress = function () {
    var address_check = $("#address_check");
	
	if (ADDRESS.val().length <= 0 || ADDRESS.val().length > 50) {
		address_check.html("job name length must be in (0, 50]");
		return false;
	}
    
	//check value has any special letter? if true, confirm bug to user
	if (isSpacialLetter(ADDRESS.val().substr(0,1))) {
	    address_check.html("username must not to have any special letter!");
        return false;	
	}
	else {
		address_check.html("");
		return true;
	}
}
