function getSortedArray(array_to_sort,key_for_sort){
    for (let i = 0; i < array_to_sort.length - 1; i++) {
        let min = i;
        for (let g = i + 1; g < array_to_sort.length; g++){
            if (array_to_sort[g][key_for_sort] < array_to_sort[min][key_for_sort]){
                min = g;
            }
        }
        if (min !== i) {
            [array_to_sort[i], array_to_sort[min]] = [array_to_sort[min], array_to_sort[i]];
        }
    }
    return array_to_sort;
}
  
let array = [
    { name: 'Петя', age: 5 },
    { name: 'Лёля', age: 2 },
    { name: 'Сима', age: 3 },
];
  
let outsortedArray = getSortedArray(array, 'age');
console.log(outsortedArray);