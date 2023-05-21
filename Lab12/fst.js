let age = prompt('Сколько тебе лет?', 0);
let ageGroup;
if (age <= 1){
    ageGroup = 'Щенки';
}
else if(1 < age && age <= 3){
    ageGroup = 'Молодые собаки';
}
else if(3 < age && age <=7){
    ageGroup = 'Собаки средних лет';
}
else{
    ageGroup = 'Почтенные таксоны';
}
alert(ageGroup);