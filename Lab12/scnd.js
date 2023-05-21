let isRaining = false;
let temperature = prompt('Какая температура на улице?', 0);
let minutes;
if(isRaining == true){
    minutes = 0;
}
else{
    if (10 <= temperature && temperature < 15){
        minutes = 30;
    }
    else if (15 <= temperature && temperature < 25){
        minutes = 40;
    }
    else if (25 <= temperature && temperature <= 35){
        minutes = 20;
    }
}
console.log(minutes);