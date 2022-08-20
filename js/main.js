const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const ball = document.querySelector('img');

const answerArr = [
	'Tak!',
	'Nie.',
	'Może.',
	' Ciężko powiedzieć...',
	' Nie chcesz znać odpowiedzi na to pytanie.',
	'Wszystko zależy od Ciebie.',
];

const animation = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkQuestion, 1000);
};
const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

const checkQuestion = () => {
	ball.classList.remove('shake-animation');
	if (input.value === '') {
		error.textContent = 'Zadaj pytanie!';
		answer.textContent = '';
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania';
		answer.textContent = '';
	} else {
		error.textContent = '';
		generateAnswer();
	}
};

ball.addEventListener('click', animation);
