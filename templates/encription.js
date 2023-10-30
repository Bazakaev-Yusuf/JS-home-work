//шифровка текста (сначала прибавляются нечетные символы между собой, потом четные, и все это в итоге в одну строку превращается)
function encrypt(text, n) {
	if (!text || n <= 0) return text;
	while (n--) {
		let result = '';
		for (i = 1; i < text.length; i += 2) {
			result += text[i];
		}
		for (j = 0; j < text.length; j += 2) {
			result += text[j];
		}
		text = result;
	}
	return text;
}

//дешифровка текста из вышестоящей функции (но нужно гадать цифру 'n')
function decrypt(text, n) {
	if (!text || n <= 0) return text;
	let result = new Array(text.length);
	while (n--) {
		let j = 0;
		for (let i = 1; i < result.length; i += 2) {
			result[i] = text[j++];
		}
		for (let i = 0; i < result.length; i += 2) {
			result[i] = text[j++];
		}
		text = result.join('');
	}
	return text;
}

//perimeter calc

function perimeter(arr) {
	let total = 0;
	let one = '';
	let two = '';
	arr.forEach((el) => {
		one = el;
		for (i = 0; i < el.length; i++) {
			el[i] == 'X' ? (total += 4) : null;
			el[i + 1] == 'X' && el[i] == 'X' ? (total -= 2) : null;
		}
		for (j = 0; j < one.length; j++) {
			one[j] == 'X' && two[j] == 'X' ? (total -= 2) : null;
		}
		one = '';
		two = el;
	});
	return 'Total land perimeter: ' + total;
}
