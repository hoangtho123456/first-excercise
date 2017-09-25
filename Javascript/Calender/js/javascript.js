var now = new Date(); 
var cur_day = now.getDate();  //the current day in pc
var cur_mon = now.getMonth(); //the current month 
var cur_year = now.getFullYear(); //the current year
var cell_days = document.getElementsByTagName('td'); //the cells in calender
var listMonth = document.getElementById("calen_select_months"); //list month in combobox-month
var listYear = document.getElementById("calen_select_years"); //list years in combobox-year
drawCalender(cur_year, cur_mon);  //function use draw the days in Calender
showListYear();  //function use show list years in the combobox-year
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
		cell_days[i].innerHTML = "";
		cell_days[i].style.backgroundColor = "white";
	}
	//write number into the cells
	for(var i = 1; i <= lastDate ; i++) {
		cell_days[day].innerHTML = i;
		day++;
	}
	//it will set color "red" for current day (in pc) on calender  
	if(year === now.getFullYear()) {
		if(month === now.getMonth()) {
			var showCurdate = 12 + firstDay + now.getDate();
			cell_days[showCurdate].style.backgroundColor = "red";
		} 
	}
	showTimeBox(); //show cur_mon and cur_year on combobox
}

function showTimeBox() {
	listMonth.value = cur_mon;
	listYear.value = cur_year;
}


function chooseMonth(month) {
	cur_mon += month;
	if(cur_mon < 0) {
		cur_mon = 11;
		cur_year -= 1;
	}
	if (cur_mon > 11) { 
		cur_mon = 0;
		cur_year += 1;
	}
	checkTime();
	drawCalender(cur_year,cur_mon);
}
//check if year overflow out of [1954, 2100]?
function checkTime() {
	if(cur_year < 1954) {
		cur_year = 1954;
	}
	if(cur_year >= 2100) {
		cur_year = 2099;
	}
}

//When you choose a year, 
//it will be show the current month of the year you just choose  
function chooseYear(year) {
	cur_year = parseInt(cur_year) + parseInt(year);
	checkTime();
	drawCalender(cur_year,cur_mon);
}
//show list year in combobox-year
function showListYear() {
	var i;
	for (i = 1954; i < 2100; i++) {
		listYear.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	}
	drawCalender(cur_year, cur_mon);
}

//it use for combobox choose fast month
function chooseFastMonth() {
	cur_mon = parseInt(listMonth.value);
	drawCalender(cur_year, cur_mon);
}
//it use for combobox choose fast year
function chooseFastYear() {
	cur_year = parseInt(listYear.value);
	drawCalender(cur_year, cur_mon);
}

//function choose day by click at the cell of the table
function chooseAnyDay() {
	var pickedDay = document.getElementById("picked_day");
	pickedDay.value = cur_day + "/" + (cur_mon + 1) + "/"+ cur_year;
	var i;
	for (i = 13; i < 55; i++) {
		cell_days[i].addEventListener("click", function() {
			var dayCheck = this.innerHTML;
			if(dayCheck != "") {
				pickedDay.value = dayCheck + "/" + (cur_mon + 1) + "/"+ cur_year;
			}
		});
	}
}