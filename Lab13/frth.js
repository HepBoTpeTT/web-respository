function calculate_salary(dirty_salary){
    if (dirty_salary >= 100000){
        return dirty_salary*0.55;
    }
    else{
        return dirty_salary*0.65;
    }
}
//let salary = prompt('Сумма для расчёта',0);
console.log(calculate_salary(150000));