const sampleData = [
    { author: 'Gambardella, Matthew', title: 'XML Developer\'s Guide', release: '02-12-01', price: 44.95, quantity: -3, data: null },
    { author: 'Ralls, Kim', title: 'Midnight Rain', release: '10-03-21', price: 10.95, quantity: 0 },
    { author: "Corets, Eva", title: 'Maeve Ascendant', release: '15-03-02', price: 15.95, quantity: -9, data: { } },
    { author: "Corets, Eva", title: 'Oberon\'s Legacy', release: '09-01-01', price: 5.95, quantity: 15, data: { } }
];

function sumAllPrices() {
    let allPrices = 0.0;
    for (let i = 0; i < sampleData.length; ++i) {
        allPrices += sampleData[i].price;
    }
    return Math.round(allPrices * 100) / 100;
}

function sortByQuantity() {
    const quantities =  [];
    for (let i = 0; i < sampleData.length; ++i) {
        quantities[quantities.length] = sampleData[i].quantity;
    }
    quantities.sort(function(a,b){return a - b});
    return quantities;
}


function getUnavailableBookTitles() {
    const titles = [ ];
    for (let i = 0; i < sampleData.length; ++i) {
        if (sampleData[i].quantity === 0) {
            titles[titles.length] = sampleData[i].title;
        }
    }
    return titles;
}

function getOnlyProvidedData() {
    const data = [ ];
    for (let i = 0; i < sampleData.length; ++i) {
        if (sampleData[i].data !== undefined ) {
            data[data.length] = sampleData[i].data;
        }
    }
    return data;
}

// test
console.log('is: ' + sumAllPrices() + '; expected: 77.8');
console.log("is: " + sortByQuantity() + '; expected: -9,-3,0,15');
console.log("is: " + getUnavailableBookTitles() + '; expected: Midnight Rain');
console.log("is: " + getOnlyProvidedData().length + '; expected: 3');
