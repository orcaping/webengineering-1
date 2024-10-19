function sum(values){
    let sum = 0;
    for(let i = 0; i < values.length; i++){
        sum += values[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4]));

function pow(values){
    for(let i = 0; i < values.length; i++){
        values[i] = values[i] * values[i];
    }
    return values;
}

console.log(pow([1, 2, 3, 4]));

function filterMaxValue(array, max){
    for(let i = 0; i < array.length; i++){
        if (array[i] >= max){
            array.splice(i);
        }
    }
    return array;
}

const demoArray = [1,2,3,4]
console.log(demoArray[1] <= 2)

console.log(filterMaxValue(pow([1, 2, 3, 4]), 10));

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log([4, 8, 12].some(isPrime));
console.log([4, 5, 8, 12].some(isPrime));
console.log([2, 5, 7, 11].every(isPrime));
console.log([2, 5, 7, 11, 12].every(isPrime));

function countWords(array){
// nimmt einen Text entgegen und Gruppiert die Wörter nach der Anzahl der Vorkommnisse.
}

console.log(countWords("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt \
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores \
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem \
ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et \
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));