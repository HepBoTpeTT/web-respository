let lastNumber = prompt('До какого числа умножаем?', 0);
function proizv(n){
    let multiplicationResult = 1;
    if(n >= 0){
        for(i = 1; i <= n; i++){
            if (i % 2 == 0){
                multiplicationResult *= i;
            }
        }
    }
    else{
        multiplicationResult = 0;
    }
    return multiplicationResult;
}
alert(proizv(lastNumber));
