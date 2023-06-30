//SPEED DETECTOR
//PROMPT THE USER TO INPUT CAR SPEED
let carSpeed = prompt("Car Speed:");
//car speed limit 70km/h
let speedLimit =70;
let kmPerS =5;
let demeritPoint =(carSpent-speedLimit)/kmPerS;

if(carSpeed <= speedLimit){
    alert("OK!");
}
else if(demeritPoint> 12){
    alert("LISENCE SUSPENDED");
}
else{
    alert("Points :" +demeritPonts)
}