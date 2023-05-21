let time = prompt('Который час?', 0);
if(7 <= time && time <= 20){
    if ((8 <= time && time < 13) || (14 < time && time <=19)){
        let goToDiary = true;
        console.log('goToDiary = ', goToDiary);
    }
    else if ((9 <= time && time < 14) || (15 < time && time <= 17)){
        let goToStore = true;
        console.log('goToStore = ', goToStore);
    }
    else if (7 <= time && time <= 20){
        let goToMarket = true;
        console.log('goToMarket = ', goToMarket);
    }
}