var date1 = new Date();
var day1 = date1.getDate();
var month1 = date1.getMonth();
var year1 = date1.getFullYear();
var hr1 = date1.getHours();
var min1 = date1.getMinutes();

var date2 = new Date();
var day2 = date2.getDate();
var month2 = date2.getMonth();
var year2 = date2.getFullYear();
var hr2 = date2.getHours();
var min2 = date2.getMinutes();


function loadFunc1(){
    document.getElementById('date').innerHTML=day1+'/'+month1+"/"+year1;
    document.getElementById('demo').innerHTML=hr1+":"+min1;

    window.date=document.getElementById('date').value;
    window.time=document.getElementById('demo').value;
    
}

function loadFunc2(){

    document.getElementById('entryd').innerHTML=day1+'/'+month1+"/"+year1;
    document.getElementById('entryt').innerHTML=hr1+":"+min1;

    // var entryDate = document.getElementById('date').value;
    // var entryTime = document.getElementById('demo').value;
    
    document.getElementById('exitd').innerHTML=day2+'/'+month2+"/"+year2;
    document.getElementById('exitt').innerHTML=hr2+":"+min2;
    
    // document.getElementById('entryd').innerHTML=window.date;
    // document.getElementById('entryt').innerHTML=window.time;

    var amount = "**Calculate amount here**"
    document.getElementById('amount').innerHTML=amount;
}


