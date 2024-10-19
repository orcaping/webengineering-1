//here the for(;;)-loop is used, could also use for-of
function sumAllPrices() {
	let allPrices = 0;
	for (let i = 0; i < sampleData.length; ++i) {
		allPrices += sampleData[i].price;
	}
	return Math.round(allPrices * 100) / 100;
}

function sortByQuantity() {
	const quantities =  [ ];
	for (let i = 0; i < sampleData.length; ++i) {
		quantities[quantities.length] = sampleData[i].quantity;
	}
	quantities.sort(function(a, b){ return (a - b); });
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
		if (sampleData[i].data !== undefined) {
			data[data.length] = sampleData[i].data;
		}
	}
	return data;
}