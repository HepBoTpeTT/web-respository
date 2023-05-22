function getPrice(time_local, urgency_local){
    let cost = 1500;
    if(urgency_local == true){
        time_local /= 2;
        cost *= 2.5;
    }
    if(time_local > 150){
        cost -=250;
    }
    return time_local*cost;
}
alert(getPrice(/*Параметры*/));