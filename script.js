const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const body = document.querySelector('body')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



// filters through fruit array for fruits that include the inputValue, returns array with filtered fruits
function search(str) {
	let results = [];

	for (let item of fruit) {
		if (item.toLowerCase().includes(str.toLowerCase())) {
			results.push(item)
		}
	}
	return results;
}

function searchHandler(e) { 
	// calls search on keyup events in the field using the value in the search bar 
	let inputVal = e.target.value
	let searching = search(inputVal)

	// calls this function on keyup events in the input field
	showSuggestions(searching, inputVal);
}

function showSuggestions(results, inputVal) {
	// prevents previous suggestions from staying in list 
	suggestions.innerHTML = '';
	// creates new li with suggested items and appends then to the suggested list
	if (inputVal !== '') {
		
	for (let item of results) {
		let newLi = document.createElement('li')
		let matches = item.toLowerCase().match(inputVal.toLowerCase())
		let frontEnd = (item.toLowerCase().indexOf(matches)-1)
		let frontStart = 0
		let backStart = (item.toLowerCase().indexOf(matches) + inputVal.length-1)
		newLi.innerText = item
		suggestions.appendChild(newLi)
		
		console.log(item)
		console.log(matches)
		console.log(frontEnd)
		} 
		// index of -1 until length
	}	
	
}

function useSuggestion(e) {
// Places selected fruit in the search bar
input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
body.addEventListener('click', clearSearch)



