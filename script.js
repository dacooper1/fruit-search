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
            item = item.toLowerCase()
            let newLi = document.createElement('li')
            let search_value = inputVal.toLowerCase()
            let beginningOfFrontRange = 0
            let endOfFrontRange = item.indexOf(search_value)
            let beginnigOfBackRange = endOfFrontRange + search_value.length
            let endOfBackRange = item.length

            let front = (item.slice(beginningOfFrontRange, endOfFrontRange))
            let back = item.slice(beginnigOfBackRange, endOfBackRange)

            newLi.innerHTML = `${front && capitalizeFirstLetter(front)}<b>${front ? search_value : capitalizeFirstLetter(search_value)}</b>${back}`
            suggestions.appendChild(newLi)
            console.log(newLi.innerHTML)
        }
    }
}

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function useSuggestion(e) {
// Places selected fruit in the search bar
input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// function showSuggestions(results, query) {
// 	suggestions.innerHTML = "";
  
// 	if (results.length > 0) {
// 	  for (i = 0; i < results.length; i++) {
// 		let item = results[i];
  
// 		// Highlight first string match (Optional).
// 		// The "i" flag modifier is used to perform case-insensitive matching in the string.
// 		const match = item.match(new RegExp(query, "i"));
// 		item = item.replace(match[0], `<b>${match[0]}</b>`);
  
// 		suggestions.innerHTML += `<li>${item}</li>`;
// 	  }
// 	  input.classList.add("hasSuggestions");
// 	  suggestions.classList.add("hasSuggestions");
// 	} else {
// 	  results = [];
// 	  suggestions.innerHTML = "";
// 	  suggestions.classList.remove("hasSuggestions");
// 	  input.classList.remove("hasSuggestions");
// 	}
//   }




