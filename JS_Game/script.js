let config = {
	game : document.createElement('div'),
	dino : document.createElement('div'),
	cactus : document.createElement('div'),
	doubleCactus : document.createElement('div'),
	cloud1 : document.createElement('div'),
	cloud2 : document.createElement('div'),
	score_label : document.createElement('p'),
	score : document.createElement('span'),
	helpText : document.createElement('p'),

	cloudStyle : 'width: 70px; height: 20px; background-image : url(img/cloud.png); background-size: cover; background=position: center bottom; position: absolute; left: 100%;'
};

initHelpText();
function initHelpText(){
	config.helpText.style.fontSize = '28px';
	config.helpText.style.textAlign = 'center';
	config.helpText.style.marginTop = '40px';
	config.helpText.style.opacity = '1';
	config.helpText.innerText = 'Чтобы начать игру, нажмите пробел';
	
	document.body.append(config.helpText);
}

initGame();
function initGame(){
	config.game.style.width = '60%';
	config.game.style.minWidth = '400px';
	config.game.style.height = '200px';
	config.game.style.borderBottom = '2px solid #797979';
	config.game.style.margin = 'auto';
	config.game.style.position = 'relative';
	config.game.style.overflow = 'hidden';
	config.game.id = 'game';

	document.body.append(config.game);
}

initDino();
function initDino(){
	config.dino.style.width = '50px';
	config.dino.style.height = '50px';
	config.dino.style.backgroundImage = 'url(img/dino.png)';
	config.dino.style.backgroundSize = 'contain';
	config.dino.style.backgroundRepeat = 'no-repeat';
	config.dino.style.backgroundPosition = 'center bottom';
	config.dino.style.position = 'relative';
	config.dino.style.top = '150px';
	config.dino.style.left = '50px';
	config.dino.id = 'dino';

	config.game.append(config.dino);
}

initCactus();
function initCactus(){
	config.cactus.style.width = '30px';
	config.cactus.style.height = '50px';
	config.cactus.style.backgroundImage = 'url(img/cactus.png)';
	config.cactus.style.backgroundSize = 'contain';
	config.cactus.style.backgroundRepeat = 'no-repeat';
	config.cactus.style.backgroundPosition = 'center bottom';
	config.cactus.style.position = 'relative';
	config.cactus.style.top = '100px';
	config.cactus.style.left = 'calc(100% - 30px)';
	config.cactus.id = 'cactus';

	config.game.append(config.cactus);
}

initDoubleCactus();
function initDoubleCactus(){
	config.doubleCactus.style.width = '58px';
	config.doubleCactus.style.height = '50px';
	config.doubleCactus.style.backgroundImage = 'url(img/cactus.png)';
	config.doubleCactus.style.backgroundSize = 'contain';
	config.doubleCactus.style.backgroundRepeat = 'repeat-x';
	config.doubleCactus.style.backgroundPosition = 'left bottom';
	config.doubleCactus.style.position = 'relative';
	config.doubleCactus.style.top = '50px';
	config.doubleCactus.style.left = 'calc((100% - 30px)*2)';
	config.doubleCactus.id = 'cactus_double';

	config.game.append(config.doubleCactus);
}

initClouds();
function initClouds(){
	config.cloud1.setAttribute('style', config.cloudStyle);
	config.cloud1.style.top = '40px';
	config.cloud1.id = 'cloud1';
	config.game.append(config.cloud1);

	config.cloud2.setAttribute('style', config.cloudStyle);
	config.cloud2.style.top = '65px';
	config.cloud2.id = 'cloud2';
	config.game.append(config.cloud2);
}

initScore();
function initScore(){
	config.score_label.style.position = 'absolute';
	config.score_label.style.top = '0';
	config.score_label.style.right = '0';
	config.score_label.style.display = 'inline-block';
	config.score_label.innerText = 'Score : ';
	config.score.innerText = '0';
	config.score_label.append(config.score);

	config.game.append(config.score_label);
}

const game = config.game;
const dino = config.dino;
const cactus = config.cactus;
const cactusDouble = config.doubleCactus;
const score = config.score;
const helpText = config.helpText;
let score_count = 0;

document.onkeydown = function(key){
	if(game.classList != 'started'){
		game.classList.add('started');
		helpText.style.opacity = '0';
	}
	else if(key.keyCode == 32){
		jump();
	}
	
}

function jump(){
	if(dino.classList != 'jump'){
		dino.classList.add('jump');
		setTimeout(function(){
			dino.classList.remove('jump');
			score_count ++;
			score.innerText = score_count;
		}, 500);
	}
}

setInterval(function (){
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
	let cactusDoubleLeft = parseInt(window.getComputedStyle(cactusDouble).getPropertyValue('left'));
	if ((cactusLeft < 100 || cactusDoubleLeft < 100) && dinoTop >=150){
		alert('Game over!');
		game.classList.remove('started');
		helpText.style.opacity = '1';
		score_count = 0;
		score.innerText = score_count;
	}
},1);
