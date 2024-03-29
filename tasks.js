// если все елементы массива это квадрат числа то вернуть true.
// если все елементы массива не являются квадратом числа, то вернуть false.
// если передан пустой массив, то вернуть undefined

function isSquare(arr) {
	let arr2 = arr.map(Math.sqrt);
	let arr3 = arr2.map((array) => array ** 2);
	let num = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== arr3[i]) {
			num += 1;
		}
	}
	if (arr.length === 0) {
		return undefined;
	} else if (num > 0) {
		return false;
	} else if (num === 0) {
		return true;
	}
}

// 7 Kata
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	let arr = str.split(' ');
	let newArr = [];
	for (i = 0; i < arr.length; i++) {
		newArr.push(arr[i].split('').reverse().join(''));
	}
	return newArr.join(' ');
}

// 7 Kata
// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
// Примечание: для этой ката Y не считается гласной.

function word(str) {
	let letter = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
	// let arr = str.split("");
	// let filtered = arr.filter((item) => !letter.includes(item));
	// let res = filtered.join("");
	// return res
	return str
		.split('')
		.filter((item) => !letter.includes(item))
		.join('');
}

// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом .

function itsPalindrom(x) {
	return x.toLowerCase('') === x.toLowerCase().split('').reverse().join('');
}

// функция проверят, являются ли числа массива палиндромом, если да, то возвращает 1 в массив, иначе 0

function numPalindrom(arr) {
	let arr2 = arr.join(' ').split('').reverse().join('').split(' ').reverse();
	let arr3 = [];
	for (i = 0; i < arr2.length; i++) {
		if (arr2[i] == arr[i]) {
			arr3.push(1);
		} else if (arr2[i] != arr[i]) {
			arr3.push(0);
		}
	}
	return arr3;
}

// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5 , меньше переданного числа. Кроме того, если число отрицательное, верните 0
// Примечание. Если число кратно и 3, и 5, считайте его только один раз .

function solition(n) {
	let arr = [];
	for (i = 1; i < n; i++) {
		if (n <= 0) {
			arr.push(0);
		} else if (i % 3 === 0 || i % 5 === 0) {
			arr.push(i);
		} else if (i % 3 === 0 && i % 5 === 0) {
			arr.push(i);
		}
	}
	let arrTotal = arr.reduce((acc, val) => acc + val, 0);
	return arrTotal;
}

//Нарциссическое число (или число Армстронга) — это положительное число, представляющее собой сумму собственных цифр, каждая из которых возведена в степень количества цифр в данном основании.
//Например, возьмем 153 (3 цифры), что является самовлюбленным:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// и 1652 (4 цифры), что не является:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
	let num = String(value);
	let sum = 0;
	for (i = 0; i < num.length; i++) {
		sum += num[i] ** num.length;
	}
	return value === sum ? true : false;
}

// построить пирамиду из символов "*" высота которой будет соответствовать числу которое принимает функция.
// например башня с 5 этажами выглядит так:
// [
// "     *     ",
// "    ***    ",
// "   *****   ",
// "  *******  ",
// " ********* ",
// "***********"
// ]

function tower(num) {
	let star = '*';
	let space = ' ';
	let tower = '';
	for (i = 0; i < num; i++) {
		tower +=
			space.repeat(num - i - 1) +
			star.repeat(i * 2 + 1) +
			space.repeat(num - 1 - i) +
			'\n';
	}
	return tower;
}

console.log(tower(50));

//процентная разница от стартового числа
function findePercent(a, b) {
	let c = a / 100;
	if (b > a) {
		return (b - a) / c;
	} else {
		return (a + b) / c;
	}
}

// Likes check
function likes(arr) {
	if (arr.length == 0) {
		return 'no one likes this';
	} else if (arr.length == 1) {
		return `${arr[0]} likes this`;
	} else if (arr.length == 2) {
		return `${arr[0]} and ${arr[1]} like this`;
	} else if (arr.length == 3) {
		return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
	} else if (arr.length > 3) {
		return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
	}
}

// количество позиций, в которых входные строки не совпадают.
function hamming(a, b) {
	arr1 = a.split('');
	arr2 = b.split('');
	let count = 0;
	for (i = 0; i < arr1.length; i++) {
		arr1[i] === arr2[i] ? (count += 0) : (count += 1);
	}
	return count;
}

//лишнее число из массива (четное среди нечетных или наоборот)
function findeNum(arr) {
	const even = arr.filter((item) => item % 2 === 0);
	const odd = arr.filter((item) => item % 2 !== 0);
	if (even.length > odd.length) {
		return odd[0];
	} else {
		return even[0];
	}
}

// Сколько раз брошенный с крыши мяч будет виден из окна (учитывая первый бросок с крыши и дальнейшие его подпрыгивания)
function bouncingBall(h, bounce, window) {
	let vision = 1;
	let afterJump = h;
	if (bounce == 1 || bounce < 0 || h == window || h < window) {
		return -1;
	} else {
		for (i = 0; afterJump > window; i++) {
			afterJump *= bounce;
			afterJump > window ? (vision += 2) : (vision += 0);
		}
	}
	return vision;
}

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

//проверка на наличие символов и пробелов в строке (при наличии возвращает false)
function alphanumeric(str) {
	let pattern = /^[a-z\d]+$/i;
	return pattern.test(str);
}

// проверка на правильный порядок и количество скобок (отк и закр).
function bracked(str) {
	let open = [];
	let close = [];
	let result = true;
	if (!str.length) return true;
	for (i = 0; i < str.length; i++) {
		str[i] == '(' ? open.push(str[i]) : close.push(str[i]);
		close.length > open.length ? (result = false) : (result = result);
		if (!result) return result;
	}
	close.length == open.length ? (result = true) : (result = false);
	return result;
}

// Даны два массива строк a1и a2возвращается отсортированный массив rв лексикографическом порядке, строки которого a1являются подстроками строк a2.
function inArray(a, b) {
	let arr = [];
	let word = '';
	if (!a.length || !b.length) return arr;
	a.forEach((el) => {
		b.forEach((item) => {
			for (i = 0; i < el.length; i++) {
				for (j = 0; j < item.length; j++) {
					item.substr(j, el.length) !== undefined ||
					item.substr(j, el.length) !== ''
						? (word = item.substr(j, el.length))
						: (word = '');
					el == word && !arr.includes(word) ? arr.push(word) : null;
				}
			}
		});
	});
	return arr.sort();
	// return a.filter((item) => b.find((el) => el.match(item))).sort();
}

//Дан массив целых чисел, найдите то, которое встречается (минимально)нечетное количество раз.

function findeOdd(arr) {
	return arr.reduce((acc, cur) => acc ^ cur);
}

/*Напишите функцию thetaFormula:
			   При задании двух значений и "?" возвращает числовое значение отсутствующего.
			   Когда заданы все три значения, возвращается логическое значение, проверяющее, является ли утверждение истинным или ложным.
			   Если в качестве аргументов задано одно значение или нет, или недействительные аргументы возвращают значение null.*/

function formula(a, b, c) {
	let q = '?';
	if (
		(a !== q && typeof a == 'string') ||
		(b !== q && typeof b == 'string') ||
		(c !== q && typeof c == 'string')
	)
		return null;
	if (!a || !b || !c) return null;
	if ((a == q && b == q) || (a == q && c == q) || (b == q && c == q))
		return null;
	if (a !== q && b !== q && c !== q) {
		return b / c == a ? true : false;
	}
	if (a == q && b !== q && c !== q) return Math.round((b / c) * 1000) / 1000;
	if (a !== q && b == q && c !== q) return Math.round(a * c * 1000) / 1000;
	if (a !== q && b !== q && c == q) return Math.round((b / a) * 1000) / 1000;
}

// количество нулей в конце факториала переданного числа
function zeros(a) {
	let result = 0;
	for (a; a > 0; ) {
		a = Math.floor(a / 5);
		result += a;
	}
	return result;
}

function inversion(arr) {
	let totalInverse = 0;
	if (arr.length < 2) return 0;
	for (i = 0; i < arr.length; i++) {
		for (j = i; j < arr.length; j++) {
			arr[i] > arr[j] ? (totalInverse += 1) : totalInverse;
		}
	}
	return totalInverse;
}

//таблица умножения
function multiplicationTable(num) {
	let table = [];
	if (num == 0) return table;
	for (i = 0; i < num; i++) {
		table[i] = [i + 1];
		for (j = 2; j <= num; j++) {
			table[i].push((i + 1) * j);
		}
	}
	return table;
}

function wave(str) {
	let result = [];
	for (i = 0; i < str.length; i++) {
		let arr = str.split('');

		if (arr[i] !== ' ') {
			arr[i] = arr[i].toUpperCase();
			result.push(arr.join(''));
		}
	}
	return result;
}

function formatWords(words) {
	let result = '';
	let arr = [];
	if (words == null) return result;

	for (i = 0; i < words.length; i++) {
		words[i] !== '' && words[i] !== ' ' ? arr.push(words[i]) : null;
	}

	if (arr.length == 1) return arr.join('');
	if (arr.length == 2) return arr.join(' and ');
	for (i = 0; i < arr.length; i++) {
		if (i + 2 < arr.length) {
			result += arr[i] + ', ';
		} else if (i + 1 < arr.length) {
			result += arr[i] + ' and ';
		} else {
			result += arr[i];
		}
	}

	return result;
}

// волна из строки (Camel Case)
function generateHashtag(str) {
	let arr = str.split(' ');
	let result = '#';
	arr.forEach((el) => {
		let a = '';
		if (el !== '') {
			a = el;
			a = a[0].toUpperCase() + a.substr(1, a.length);
		}
		result += a;
	});
	if (result.length < 2 || result.length > 140) return false;
	return result;
}

// Вырезание названия сайта из строки
function domainName(url) {
	let a = '';
	let result = '';
	for (i = 0; i < url.length; i++) {
		a += url[i];
		if (a == 'http://' || a == 'www.' || a == 'https://') {
			a = '';
		}
	}
	for (i = a.length; i > 0; i--) {
		a[i] == '.' ? (result = a.substr(0, i)) : a;
	}
	return result;
}

function movingZero(arr) {
	let result = [];
	let count = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			result.push(arr[i]);
		} else {
			count += 1;
		}
	}

	for (i = count; i > 0; i--) {
		result.push(0);
	}

	return result;
}

// сортировка эмоций (смайлов)
function sortEmotional(arr, order) {
	const emotions = {
		':D': 1,
		':)': 2,
		':|': 3,
		':(': 4,
		T_T: 5,
	};

	return arr.sort((a, b) =>
		order ? emotions[a] - emotions[b] : emotions[b] - emotions[a],
	);
}

function humanDogCatYears(n) {
	let dog = 0;
	let cat = 0;
	let result = [];
	for (i = 1; i <= n; i++) {
		if (i == 1) (dog += 15), (cat += 15);
		if (i == 2) (dog += 9), (cat += 9);
		if (i > 2) (dog += 5), (cat += 4);
	}
	result.push(n, cat, dog);
	return result;
}

function rgb(r, g, b) {
	let hexValues = ['A', 'B', 'C', 'D', 'E', 'F'];

	let arr = [r, g, b];
	let ans = '';
	let a = 0;
	let c = 0;

	for (i = 0; i < arr.length; i++) {
		a = Math.floor(arr[i] / 16);
		c = arr[i] - a * 16;
		if (arr[i] <= 0) {
			ans += '00';
		} else if (arr[i] > 255) {
			asn += 'FF';
		} else {
			ans = a > 9 ? (ans += hexValues[a - 10]) : (ans += a);
			ans = c > 9 ? (ans += hexValues[c - 10]) : (ans += c);
		}
	}
	return ans;
}

function numbers(n) {
	let num = {
		a: 2,
		b: 2,
		c: 2,
		d: 3,
		e: 3,
		f: 3,
		g: 4,
		h: 4,
		i: 4,
		j: 5,
		k: 5,
		l: 5,
		m: 6,
		n: 6,
		o: 6,
		p: 7,
		r: 7,
		s: 7,
		t: 8,
		u: 8,
		v: 8,
		w: 9,
		x: 9,
		y: 9,
	};

	let number = n[0].replace('-', '');
	let result = [];

	n.forEach((el) => {
		for (i = 0; i < el.replace('-', '').length; i++) {
			number = n[i].replace('-', '');
		}
	});
	return number;
}

function XplusY(n) {
	let count = 0;
	let arr = [];
	for (i = 0; i < n.length; i++) {
		arr.push(n[i] * 1);
	}
	if (arr.length < 2 && arr[0] == 1) return 1;
	if (arr.length < 2 && arr[0] == 0) return 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i + 1] != undefined && arr[i] == 1 && arr[i + 1] == 1) {
			arr[i] = 0;
			arr[i + 1] = 0;
			count++;
			i++;
		} else if (arr[i + 1] != undefined && arr[i] == 1 && arr[i + 1] == 0) {
			arr[i] = 0;
			arr[i + 1] = 1;
			count++;
		}
		// else if (arr[arr.length - 2] == 0 && arr[arr.length - 1] == 1) {
		//   arr[arr.length - 1] = 0;
		//   count++;
		// }
	}
	return count;
}

function breakTheWeb(s, w) {
	let ton = Math.floor(s / 1000);
	let row = w;
	let ans = 0;
	if (w > ton) return ton;
	for (i = 0; i < w; i++) {
		for (j = 0; j < row; i++) {
			if (asn + j + i <= ton) {
				ans = ans + i + j;
			} else {
				ans = ans;
			}
		}
	}
	return ans;
}

// ?!
function solution(list) {
	let s = '';
	let l = list.length;
	for (i = 0; i < l; i++) {
		if (list[i] == list[i + 2] - 2) {
			s += list[i] + '-';
			for (i; i < l; i++) {
				if (list[i] != list[i + 2] - 2) break;
			}
		} else {
			s += list[i];
			if (i != l - 1) s += ',';
		}
	}
	return s;
}

// не доконченная функция. Проверка на парные скобки
function isBalanced(str) {
	let obj = {
		even: 0,
		odd: 0,
		mustCloseA: 0,
		mustCloseB: 0,
		mustCloseC: 0,
	};

	let s = str.replace(/[a-z 0-9]/gi, '');
	console.log(s);
	for (i = 0; i < s.length; i++) {
		if (s[i] == '(') {
			obj.mustCloseA++;
		} else if (
			(obj.mustCloseA > 0 && s[i] == ']') ||
			obj.mustCloseA > 0 ||
			s[i] == '}'
		) {
			obj.odd++;
			obj.mustCloseA--;
		} else if (obj.mustCloseA > 0 && s[i] == ')') {
			obj.mustCloseA--;
			obj.even++;
		}
		if (s[i] == '{') {
			obj.mustCloseB++;
		} else if (
			(obj.mustCloseB > 0 && s[i] == ']') ||
			obj.mustCloseA > 0 ||
			s[i] == ')'
		) {
			obj.odd++;
			obj.mustCloseB--;
		} else if (obj.mustCloseB > 0 && s[i] == '}') {
			obj.mustCloseB--;
			obj.even++;
		}
		if (s[i] == '[') {
			obj.mustCloseC++;
		} else if (
			(obj.mustCloseC > 0 && s[i] == '}') ||
			obj.mustCloseA > 0 ||
			s[i] == ')'
		) {
			obj.odd++;
			obj.mustCloseC--;
		} else if (obj.mustCloseC > 0 && s[i] == ']') {
			obj.mustCloseC--;
			obj.even++;
		}
	}

	return [obj.odd == 0, obj.even, obj.odd];
}

const isOpenBrace = (b) => b === '{' || b === '(' || b === '[';
const isCloseBrace = (b) => b === '}' || b === ')' || b === ']';
const getBraceSignature = (b) => {
	if (b === '{' || b === '}') return '{}';
	if (b === '[' || b === ']') return '[]';
	if (b === '(' || b === ')') return '()';
};
const isPair = (open, close) => {
	if (open === '{' && close === '}') return true;
	if (open === '[' && close === ']') return true;
	if (open === '(' && close === ')') return true;
	return false;
};

function isBalanced2(str) {
	const count = {
		'{}': 0,
		'()': 0,
		'[]': 0,
	};
	let leftOver = 0;
	let progress = [];

	const formatted = str.replace(/[a-z 0-9]/gi, '');

	for (let i = 0; i < formatted.length; i += 1) {
		if (isOpenBrace(formatted[i])) progress.push(formatted[i]);

		if (
			isCloseBrace(formatted[i]) &&
			isPair(progress[progress.length - 1], formatted[i])
		) {
			count[getBraceSignature(formatted[i])] += 1;
			progress.pop();
		} else if (
			isCloseBrace(formatted[i]) &&
			!isPair(progress[progress.length - 1], formatted[i])
		) {
			leftOver += 1;
			if (progress.length) {
				leftOver += 1;
				progress.pop();
			}
		}
	}

	if (progress.length) leftOver += progress.length;

	// return [count, leftOver];
	return [
		leftOver ? false : true,
		Object.values(count).reduce((acc, v) => acc + v, 0),
		leftOver,
	];
}

// перевод с русского на азбуку морзе. Если второй аргумент больше 0 то переводит с морзе на русский (можно было сделать отдельную функцию для этого без такого костыля)
function mourceTranslater(str, a) {
	let list = {
		'/ ': ' ',
		'.- ': 'а',
		'-... ': 'б',
		'.-- ': 'в',
		'--. ': 'г',
		'-.. ': 'д',
		'. ': 'е',
		'...- ': 'ж',
		'--..	 ': 'з',
		'.. ': 'и',
		'.--- ': 'й',
		'-.- ': 'к',
		'.-.. ': 'л',
		'-- ': 'м',
		'-. ': 'н',
		'--- ': 'о',
		'.--. ': 'п',
		'.-. ': 'р',
		'... ': 'с',
		'- ': 'т',
		'..- ': 'у',
		'..-. ': 'ф',
		'.... ': 'х',
		'-.-. ': 'ц',
		'---. ': 'ч',
		'---- ': 'ш',
		'--.- ': 'щ',
		'--.-- ': 'ъ',
		'-.-- ': 'ы',
		'-..- ': 'ь',
		'..-.. ': 'э',
		'..-- ': 'ю',
		'.-.- ': 'я',
		'----- ': '0',
		'.---- ': '1',
		'..--- ': '2',
		'...-- ': '3',
		'....- ': '4',
		'..... ': '5',
		'-.... ': '6',
		'--... ': '7',
		'---.. ': '8',
		'----. ': '9',
		'.-.-.- ': '.',
		'--..-- ': ',',
		'-.--. ': '(',
		'-.--.- ': ')',
		'.-.-. ': '+',
		'-....- ': '-',
		'-.-.-- ': '!',
		'..--.. ': '?',
		'-.-.-. ': ';',
		'-...- ': '=',
	};
	let low = str.toLowerCase();
	let result = '';

	if (a > 0) {
		let arr = str.split(' ');
		let arr2 = arr.map((i) => i + ' ').filter((i) => i !== ' ');
		for (i = 0; i < arr2.length; i++) {
			result += list[arr2[i]];
		}
	} else {
		function getKeyByValue(obj, value) {
			return Object.keys(obj).find((key) => obj[key] === value);
		}
		for (i = 0; i < low.length; i++) {
			result += getKeyByValue(list, low[i]);
		}
	}

	return result;
}

function spinWords(str) {
	let stroke = '';
	let arr = str.split(' ').filter((i) => i !== '');

	let a = arr.map((i) => {
		if (i.length > 4) {
			stroke += i.split('').reverse().join('') + ' ';
		} else {
			stroke += i + ' ';
		}
	});
	let ans = stroke.slice(0, stroke.length - 1);
	return ans;
}

// Бегущая строка
function rotate(str) {
	if (!str.length) return [''];
	let result = [];
	let rotateStep = '';
	for (i = 1; i < str.length; i++) {
		rotateStep = str.slice(i, str.length) + str.slice(0, i);
		result.push(rotateStep);
		rotateStep = '';
	}
	result.push(str);
	return result;
}

function isSatorSquare(arr) {
	let start = 0;
	let end = arr.length - 1;
	let even = arr.length % 2 == 0;

	if (!even) {
		while (end >= start) {
			if (arr[start].join('') !== arr[end].reverse().join('')) return false;
			start++;
			end--;
		}
	} else {
		while (end > start) {
			if (arr[start].join('') !== arr[end].reverse().join('')) return false;
			start++;
			end--;
		}
	}
	return true;
}

function colorProbability(color, texture) {
	let total = function () {
		return this.red + this.yellow + this.green;
	};
	let marbles = {
		smooth: {
			total,
			red: 1,
			yellow: 1,
			green: 1,
		},
		bumpy: {
			total,
			red: 4,
			yellow: 2,
			green: 1,
		},
	};

	return String(marbles[texture][color] / marbles[texture].total()).slice(
		0,
		4,
	);
}

// function customChristmasTree(str, num) {
// 	let tree = '';

// 	let symbolIndex = 0;

// 	let space = ' ';

// 	for (i = 0; i < num; i++) {
// 		tree += space.repeat(num - i - 1);
// 		for (j = 0; j < i + 1; j++) {
// 			tree += str[symbolIndex];
// 			symbolIndex++;
// 			if (symbolIndex > str.length - 1) {
// 				symbolIndex = 0;
// 			}
// 		}
// 		tree += '\n';
// 	}

// 	tree += (space.repeat(num / 2) + '| \n').repeat(
// 		Math.floor(num / 3),
// 	);

// 	return tree;
// }
