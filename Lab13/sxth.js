let shopItemsDict = {'Компьютер МОЩЩЩЩНЫЙ':{'Процессор':10, 'Видеокарта':10, 'Материнская плата':10, 'ОЗУ':10, 'Накопители':10},
                    'Компьютер ЧУТЬ СЛАБЕЕ':{'Процессор':8, 'Видеокарта':9, 'Материнская плата':7, 'ОЗУ':8, 'Накопители':7},
                    'Компьютер СЛАБЫЙ':{'Процессор':3, 'Видеокарта':4, 'Материнская плата':3, 'ОЗУ':3, 'Накопители':2}};

function calculate_cost(computer_name){
    let price = 0;
    let koeffs = {'Процессор':3000, 'Видеокарта':5000, 'Материнская плата':2500, 'ОЗУ':1500, 'Накопители':2000};
    let params_list = [];
    if(computer_name in shopItemsDict){
        for (const [key_computer, value_computer] of Object.entries(shopItemsDict[computer_name])){
            params_list.push(key_computer + ' : ' + String(value_computer));
            for (const [key_koeffs, value_koeffs] of Object.entries(koeffs)){
                price += value_computer*value_koeffs;
            }
        }
        return 'Цена ' + price + '\nПараметры: '+ params_list.join(', ');
    }
}
let choosen_computer = 'Компьютер МОЩЩЩЩНЫЙ';
alert(calculate_cost(choosen_computer));
