//принимает на вход text(предложение или слово) и искомое значение(буква, символ, слово либо число) и возвращает text с выделенным искомым значением

const markSearchedText = (text, SearchTerm) => {
	if (!SearchTerm) {
		return text;
	}

	const regex = new RegExp(`(${SearchTerm})`, 'gi');
	return text.split(regex).map((part, index) => {
		if (part.toLowerCase() === SearchTerm.toLowerCase()) {
			return <mark key={index}>{part}</mark>;
		}
		return part;
	});
};
