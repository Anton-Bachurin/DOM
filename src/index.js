import './style.css';

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 16);

const holes = [...document.querySelectorAll('.hole')];

function start() {
  holes[randomNumber].classList.add('with-goblin');
}

window.addEventListener('load', () => {
  start();
})


function changeHole() {
  for (let elem of holes) {
    if (elem.classList.contains('with-goblin')) {
      elem.classList.remove('with-goblin');
    }
  }
  
  start();
}

setInterval(changeHole, 1000);