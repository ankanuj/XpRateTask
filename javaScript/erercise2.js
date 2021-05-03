function currentDateAndTime(){
	document.getElementById("date").innerHTML=Date();
};

function currentDateAndTimeInFormat(){
	var date  = new Date();
	var month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
	var currentFormattedTime = [];
	currentFormattedTime.push(date.getDate());
	currentFormattedTime.push(month[date.getMonth()]);
	currentFormattedTime.push(date.getFullYear());
	currentFormattedTime.push(date.getHours());
	currentFormattedTime.push(date.getSeconds());
	displayFormattedTime(currentFormattedTime);
};

function displayFormattedTime(currentTime){
	document.getElementById("formattedDateAndTime").innerHTML=
	"DD:"+currentTime[0]+" "+
	"MM:"+currentTime[1]+" "+
	"YY:"+currentTime[2]+" "+
	"HH:"+currentTime[3]+" "+
	"SS:"+currentTime[4];
}
currentDateAndTime();
currentDateAndTimeInFormat();
