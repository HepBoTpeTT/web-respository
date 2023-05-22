function getData(keys, dat) {
    let results = [];
    for (let i = 0; i < dat.length; i++) {
        let object = {};
        for (let g = 0; g < keys.length; g++) {
            if(dat[i][g] !== undefined) {
                object[keys[g]] = dat[i][g];
            }
        }
        results.push(object);
    }
    return results;
}

let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
let dat = [['Василий', 'красный', 'борщ'], ['Мария'], ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']];

console.log(getData(keys, dat));