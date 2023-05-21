let number = prompt('Ввдеите число','');
let quantity;
let quantity2;
//Из условия не понятно, нужно искать уникальные цифры или вообще все, поэтому сделаю обав варианта

let control = '';
let control2 = '';
for(i = 0; i < number.length; i++){
    //Все:
    control += number.charAt(i);
    //Уникальне:
    if(control2.indexOf(number.charAt(i)) == -1){
        control2 += number.charAt(i);
    }
}
quantity = control.length;
quantity2 = control2.length;
console.log('Количество всех сиволов: ' + quantity, 'Количество уникальных сиволов: ' + quantity2);