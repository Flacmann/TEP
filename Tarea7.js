//Dados dos arreglos ordenados, unir dichos arreglos en uno nuevo igual ordenado. Utiliza JavaScript
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}
//implementación
const arr1 = [1, 4, 9, 10];
const arr2 = [2, 5, 8, 11, 15];
const mergedArray = merge(arr1, arr2);
console.log(mergedArray); 