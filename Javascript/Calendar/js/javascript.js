/*
@author danghoangtho1132@gmail.com (Đặng Hoàng Thọ)
*Idea: create the action for calender like:
*show dates of the month
*show days of a week
*choose fast year or fast month
*/
var NOW = new Date(); 
var CUR_DAY = NOW.getDate();  //the current day in pc
var CUR_MON = NOW.getMonth(); //the current month 
var CUR_YEAR = NOW.getFullYear(); //the current year
var CELL_DAYS = document.getElementsByTagName('td'); //the cells in calender
var LISTMONTH = document.getElementById("calen_select_months"); //list month in combobox-month
var LISTYEAR = document.getElementById("calen_select_years"); //list years in combobox-year
drawCalender(CUR_YEAR, CUR_MON);  //function use draw the days in Calender
showListYear();  //function use show list years in the combobox-year(1954 -> 2099)
chooseAnyDay(); //when you choose any day in calender, it will be show the border itself

function drawCalender(year, month) {
	parseInt(year);
	parseInt(month);
	var firstDay = new Date(year, month, 1).getDay(); //get the first day of month
	var lastDate = new Date(year, month + 1, 0).getDate(); //get the Last date of month
	var i, day;
	day = 13 + firstDay;
	//cells from 13 to 55 is the days of a months
	for (var i = 13; i < 55; i++) {
		CELL_DAYS[i].innerHTML = "";
		CELL_DAYS[i].style.backgroundColor = "white";
	}
	//write number into the cells
	for (var i = 1; i <= lastDate; i++) {
		CELL_DAYS[day].innerHTML = i;
		day++;
	}
	//it will set color "red" for current day (in pc) on calender  
	if (year === NOW.getFullYear()) {
		if (month === NOW.getMonth()) {
			var showCurdate = 12 + firstDay + NOW.getDate();
			CELL_DAYS[showCurdate].style.backgroundColor = "red";
		} 
	}
	showTimeBox(); //show CUR_MON and CUR_YEAR on combobox
}

//show list year in combobox of year
function showListYear() {
	var i;

	for (i = 1954; i < 2100; i++) {
		LISTYEAR.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	}
	drawCalender(CUR_YEAR, CUR_MON);
}
// show current date (update from pc) into the combobox-month and combobox-year
function showTimeBox() {
	LISTMONTH.value = CUR_MON;
	LISTYEAR.value = CUR_YEAR;
}

/*
*action choose Month:
*if month < 0 (value 0 is January), current month is January
*if month > 11 (value 11 is December), current month is December
*/
function chooseMonth(month) {
	CUR_MON += month;
	if (CUR_MON < 0) {
		CUR_MON = 11;
		CUR_YEAR -= 1;
	}
	if (CUR_MON > 11) { 
		CUR_MON = 0;
		CUR_YEAR += 1;
	}
	checkTime();
	drawCalender(CUR_YEAR,CUR_MON);
}
//check if year overflow out of [1954, 2100]?
function checkTime() {
	if (CUR_YEAR < 1954) {
		CUR_YEAR = 1954;
	}
	if (CUR_YEAR >= 2100) {
		CUR_YEAR = 2099;
	}
}

//When you choose a year, 
//it will be show the current month of the year you just choose  
function chooseYear(year) {
	CUR_YEAR = parseInt(CUR_YEAR) + parseInt(year);
	checkTime();
	drawCalender(CUR_YEAR,CUR_MON);
}

//it use for combobox choose fast month
function chooseFastMonth() {
	CUR_MON = parseInt(LISTMONTH.value);
	drawCalender(CUR_YEAR, CUR_MON);
}
/*
*it use for combobox choose fast year
*@param {int} CUR_YEAR: LISTYEAR.value nust change to type INT
*/
function chooseFastYear() {
	CUR_YEAR = parseInt(LISTYEAR.value);
	drawCalender(CUR_YEAR, CUR_MON);
}

//function choose day by click at the cell of the table
function chooseAnyDay() {
	var pickedDay = document.getElementById("picked_day");
	pickedDay.value = CUR_DAY + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
	var i, picked_cell;

	for (i = 13; i < 55; i++) {
		CELL_DAYS[i].addEventListener("click", function() {
			var dayCheck = this.innerHTML;

			for (var j = 13; j < 55; j++) {
				CELL_DAYS[j].style.border = "";
			}
			if (dayCheck != "") {
				pickedDay.value = dayCheck + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
				this.style.border = "1px solid blue";
			}
		});
	}
}