let number = prompt('Введите число','');
let isPalindrome;
let control = '';
for(i = 0; i < number.length; i++){
    control += number.charAt(number.length-i-1);
}
if(number == control){
    isPalindrome = true;
}
else{
    isPalindrome = false;
}
alert(isPalindrome);
