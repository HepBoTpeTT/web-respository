let isRaining = false;
let temperature = prompt('Какая температура на улице?', 0);
let minutes;
if(isRaining == true){
    minutes = 0;
}
else{
    if (temperature < 0 || temperature > 35){
        minutes2 = 0;
    }
    else if (temperature == 20){
        minutes = 20;
    }
    else{
        minutes = 20 - Math.abs(temperature - 20);
    }
}
alert(minutes);