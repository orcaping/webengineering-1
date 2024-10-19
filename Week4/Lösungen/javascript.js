console.log("----- sum")
function sum(values) {
    return values.reduce((a, b) => a + b, 0);
}
console.log(sum([1, 2, 3, 4]));

console.log("----- pow")

function pow(values) {
    return values.map(x => Math.pow(x, 2));
}
console.log(pow([1, 2, 3, 4]));

console.log("----- filterMaxValue")

function filterMaxValue(values, max) {
    return values.filter(x => x <= max);
}
console.log(filterMaxValue(pow([1, 2, 3, 4]), 10));

console.log("----- isPrime")

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

console.log("---- countWords -----")
function countWords(text) { // eine mögliche Lösung!
    const words = text.split(/[\s,]+/)
    const countedWords = words.reduce((a,b) => {
        if(a[b] === undefined)
        {
            a[b] = 0
        }
        a[b] = a[b] + 1
        return a;
    }, {})

    const groupedWords =  Object.entries(countedWords).reduce((a,b) => {
        if(a[b[1]] === undefined)
        {
            a[b[1]] = [];
        }
        a[b[1]].push(b[0])
        return a;
    }, {})
    return Object.entries(groupedWords).sort((a,b) => a[0] - b[0]).map(value => `${value[0]}\t${value[1].join(',')}`).join("\n")
}



const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
console.log(countWords(text));
