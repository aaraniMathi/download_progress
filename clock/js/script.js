
var dateTime = new Date()

let ampm=document.getElementById("ampm")

function displayTime(){
	let hr=dateTime.getHours();
	let min=padZero(dateTime.getMinutes());
	let sec=padZero(dateTime.getSeconds());
	//let day=padZero(dateTime.getDay());
	//let month=padZero(dateTime.getMonth());
	
	
	
	
	
	if(hr>12){
		hr=hr-12
		ampm.innerHTML="PM"
	}
	document.getElementById("hours").innerHTML=padZero(hr)
	document.getElementById("mins").innerHTML=min
	document.getElementById("seconds").innerHTML=sec
	//document.getElementById("day").innerHTML=day
	//document.getElementById("month").innerHTML=month
	
}

function padZero(num){
	return num<10?"0"+num:num
}


 setInterval(displayTime,500)
