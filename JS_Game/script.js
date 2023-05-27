const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const cactusDouble = document.getElementById('cactus_double');
const score = document.getElementById('score');
let score_count = 0;
document.onkeydown = function(key){
	if(document.getElementById('game').classList != 'started'){
		document.getElementById('game').classList.add('started');
		document.getElementsByClassName('help-text')[0].style.display = 'none';
	}
	else if(key.keyCode == 32){
		jump();
	}
}

function jump(){
	if(dino.classList != 'jump'){
		document.getElementById('dino').classList.add('jump');
		setTimeout(function(){
			dino.classList.remove('jump');
			score_count ++;
			score.innerText = score_count;
		}, 500);
	}
}

setInterval(function isAlive_checker(){
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
	let cactusDoubleLeft = parseInt(window.getComputedStyle(cactusDouble).getPropertyValue('left'));
	if ((cactusLeft < 100 || cactusDoubleLeft < 100) && dinoTop >=150){
		alert('Game over!');
		document.getElementById('game').classList.remove('started');
		document.getElementsByClassName('help-text')[0].style.display = 'block';
		score_count = 0;
		score.innerText = score_count;
	}
},10);
