/*
*Excercise: create a calendar by jquery
*Idea: create a function draw calendar, and use for other action
*show dates of the month
*show days of a week
*choose fast year or fast month
*Author: Dang Hoang Tho (danghoangtho1132@gmail.com)
*/
var NOW = new Date(); 
var CUR_DAY = NOW.getDate();  //the current day in pc
var CUR_MON = NOW.getMonth(); //the current month 
var CUR_YEAR = NOW.getFullYear(); //the current year
var CELL_DAYS = $("td");        //days of month
var LIST_MONTHS = $("#calen_select_months"); //choose month in combobox
var LIST_YEARS = $("#calen_select_years");  //choose year in combobox
var PICKED_DAY = $("#picked_day");
createCalendar(CUR_MON, CUR_YEAR);
showListYear();
//showCurdayInput();
PICKED_DAY.on("click", function() {
	$(".calendar").eq(0).css("display", "block");
});
/*
*Action: create calendar, show current day in pc
*/
function createCalendar(month, year) {
	parseInt(month);
	parseInt(year);
	var firstDay = new Date(year, month, 1).getDay(); //==> 1 (Mon)
	var lastDate = new Date(year, month + 1, 0).getDate(); //==> last date of a month(30 or 31 pr 28 or 29)
	var i, day;
	day = 13 + firstDay;
	//cells from 13 to 54 are the days of a month
	for (i = 13; i < CELL_DAYS.length; i++) {
	 	CELL_DAYS.eq(i).html("");
	 	CELL_DAYS.eq(i).css("background", "white");
	 }
	//write number into the cells
	for (i = 1; i <= lastDate; i++) {
	 	CELL_DAYS.eq(day).html(i);
	 	day++;
	}
	//it will set color "red" for current day (in pc) on calendar
	if (year === NOW.getFullYear()) {
		if( month === NOW.getMonth()) {
			var showCurDay = 12 + firstDay + NOW.getDate();
			CELL_DAYS.eq(showCurDay).css("background", "red");
		}
	}
    showTimeBox(); //show CUR_MON and CUR_YEAR on combobox 
}
function showTimeBox() {
	LIST_MONTHS.val(CUR_MON);
	LIST_YEARS.val(CUR_YEAR);
}
/*
*show list year from 1954 to 2099 in combobox
*/
function showListYear() {
	var i;

	for (i = 1954; i < 2100; i++) {
		LIST_YEARS.append("<option value='" + i + "'>" + i + "</option>");
	}
	createCalendar(CUR_MON, CUR_YEAR);
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
//choose a month, and show days in that month
LIST_MONTHS.on("change", function() {
	CUR_MON = parseInt(LIST_MONTHS.val());
	console.log(CUR_MON);
	createCalendar(CUR_MON, CUR_YEAR);
});
//choose a year
LIST_YEARS.on("change", function() {
	CUR_YEAR = parseInt(LIST_YEARS.val());
	createCalendar(CUR_MON, CUR_YEAR);
});
//click prev month
$("#prev_month").on("click", function() {
	CUR_MON = parseInt(CUR_MON) - 1;
	if(CUR_MON < 0) {
		CUR_MON = 11;
		CUR_YEAR = CUR_YEAR - 1;
	}
	checkTime();
	createCalendar(CUR_MON, CUR_YEAR);
});
//click prev year
$("#prev_year").on("click", function() {
	CUR_YEAR = parseInt(CUR_YEAR) - 1;
	checkTime();
	createCalendar(CUR_MON, CUR_YEAR);
});
//click next month
$("#next_month").on("click", function() {
	CUR_MON = parseInt(CUR_MON) + 1;
	if(CUR_MON > 11) {
		CUR_MON = 0;
		CUR_YEAR = CUR_YEAR + 1;
	}
	checkTime();
	createCalendar(CUR_MON, CUR_YEAR);
});
//click next year
$("#next_year").on("click", function() {
	CUR_YEAR = parseInt(CUR_YEAR) + 1;
	checkTime();
	createCalendar(CUR_MON, CUR_YEAR);
});

//show current day in input
(function showCurdayInput() {
	var picked_day = $("#picked_day");
	var day_init = CUR_DAY + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
	picked_day.val(day_init);
})();

//function choose day by click at the cell of the table
CELL_DAYS.bind("click",function() {
	var click = CELL_DAYS.index(this);  //get position of the choosed cell
	var picked_day = $("#picked_day");  //get id of input
	var day_click = CELL_DAYS.eq(click).html(); 
	var day_init = day_click + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
    //j = 13 -> 55, set border = none to reset border color
	for (var j = 13; j < 55; j++) {
		CELL_DAYS.eq(j).css("border", "");
	} 
	if (day_click != "" && click >= 13 && day_click < 32) {
		picked_day.val(day_init);  //show date on input
		CELL_DAYS.eq(click).css("border", "1px solid green"); //when click a cell, its border change color
		$(".calendar").eq(0).css("display", "none");
	}
});