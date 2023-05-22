let numbers = [1, 0, 10, 25, 234, 56, 51, 22];
for(i = 0; i < numbers.length; i++){
    let minimum = Math.min.apply(null, numbers.slice(i,numbers.length));
    let index = numbers.indexOf(minimum,i);
    let buf = numbers[i];
    numbers[i] = minimum;
    numbers[index] = buf;
}
let indexToShow = prompt('Какой индекс показать?',0);
if(numbers[indexToShow] == undefined){
    console.log('Элемент не найден');
}
else{
    console.log(numbers[indexToShow]);
}
