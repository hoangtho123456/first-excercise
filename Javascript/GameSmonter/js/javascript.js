/*
*Game Monster
*Dang Hoang Tho
*/
var canvas = document.getElementById("canvas_game");
var context = canvas.getContext("2d");
var requestAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
//====Value game====
var SCORE = 10;
var HEART = 3;
var LEVEL = 1;
var BOOM = 3;
var LV_SPEED = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4]; //speed of moonster follow level
var LV_NUMBER_MONSTER = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var LV_SCORE = [1, 50, 100, 150, 200, 250, 350, 450, 800, 1600, 3200, 6400];
var LV_POSITION = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var STATUS_GAME = 1;
var NUMBER_MONSTER = 1;
var MONSTER_SIZE = 100;
var LIMIT_TOP = 90;
var LIMIT_BOTTOM = 580; 
var LIMIT_LEFT = 10;
var LIMIT_RIGHT = 670;

//==============Image===========================
var IMG_BG = new Image();
IMG_BG.src = "img/bg1.jpg";
var IMG_BG_MENU = new Image();
IMG_BG_MENU.src = "img/bgmenu.jpg";
var IMG_PAUSE = new Image();
IMG_PAUSE.src = "img/pause.jpg";
var IMG_RESTART = new Image();
IMG_RESTART.src = "img/restart.jpg";
var IMG_ICON_PAUSE = new Image();
IMG_ICON_PAUSE.src = "img/iconpause.jpg";
var IMG_BOOM = new Image();
IMG_BOOM.src = "img/boom.jpg";
var IMG_GAMEOVER = new Image();
IMG_GAMEOVER.src = "img/gameover.jpg";

var IMG_MONSTER1 = new Image();
IMG_MONSTER1.src = "img/monster1.jpg";
var IMG_MONSTER2 = new Image();
IMG_MONSTER2.src = "img/monster2.jpg";
var IMG_MONSTER3 = new Image();
IMG_MONSTER3.src = "img/monster3.jpg";
var IMG_MONSTER4 = new Image();
IMG_MONSTER4.src = "img/monster4.jpg";
var IMG_MONSTER5 = new Image();
IMG_MONSTER5.src = "img/monster5.jpg";
var IMG_MONSTER6 = new Image();
IMG_MONSTER6.src = "img/monster6.jpg";
var IMG_MONSTER7 = new Image();
IMG_MONSTER7.src = "img/monster7.jpg";
var IMG_MONSTER8 = new Image();
IMG_MONSTER8.src = "img/monster8.jpg";
var IMG_MONSTER9 = new Image();
IMG_MONSTER9.src = "img/monster9.jpg";

/*
===============class monter===============
*@param {int} start_x: start x default;
*@param {int} start_y: start y default;
*@param {int} x: current x;
*@param {int} x: current y;
*@param {int} move_x: Destination x;
*@param {int} move_y: Destination y;
*@param {int} mon_direction: move direction
*@param {int} mon_status: monster status;
*@param {int} mon_img: monster image;
*/
function Monster(start_x, start_y, x, y, move_x, move_y, mon_direction, mon_status, mon_img) {
    this.start_x = start_x;
    this.start_y = start_y;
    this.x = x;
    this.y = y;
    this.move_x = move_x;
    this.move_y = move_y;
    this.mon_direction = mon_direction;
    this.mon_status = mon_status;
    this.mon_img = mon_img;
}

/*
============Monster==============================
*Monster(start_x, start_y, x, y, move_x, move_y, mon_direction, mon_status, mon_img)
*/
var monster1 = new Monster(30, 90, 30, 90, 240, 240, 0, 0, IMG_MONSTER1); //top left
var monster2 = new Monster(30, 270, 30, 270, 300, 300, 1, 0, IMG_MONSTER2); //left center
var monster3 = new Monster(30, 490, 30, 490, 260, 260, 2, 0, IMG_MONSTER3); //left bottom
var monster4 = new Monster(330, 90, 330, 90, 240, 240, 3, 0, IMG_MONSTER4); //top right
var monster5 = new Monster(630, 90, 630, 90, 240, 240, 4, 0, IMG_MONSTER5); //left center
var monster6 = new Monster(630, 270, 630, 270, 320, 240, 5, 0, IMG_MONSTER6); //right center
var monster7 = new Monster(630, 490, 630, 490, 240, 240, 6, 0, IMG_MONSTER7); //right bottom 
var monster8 = new Monster(330, 490, 330, 490, 240, 240, 7, 0, IMG_MONSTER8); //left bottom
var monster9 = new Monster(330, 270, 330, 270, 0, 0, 8, 1, IMG_MONSTER9);//329center
var monsters = [monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8, monster9];

//function start game, if status = 1 (Play) play game. If status = 0 is stop or status = 2 is pause
function startGame() {
    if(STATUS_GAME === 1) {
        drawTheme();
        drawMonster();
        randomMonster();
        gameMode();
    }
    requestAnimation(startGame);
    //setTimeout(startGame, 1000 / 60);
}
//Draw theme
function drawTheme() {
    context.drawImage(IMG_BG, 0, 80, 735, 500);
    context.drawImage(IMG_BG_MENU, 0, 0, 735, 80);
    context.drawImage(IMG_RESTART, 300, 20, 50, 50);
    context.drawImage(IMG_PAUSE, 360, 20, 50 , 50);
    context.drawImage(IMG_BOOM, 420, 20, 50, 50);
    context.fillStyle = "white";
    context.font = "13pt Arial";
    context.fillText(BOOM, 460, 25);
    context.fillStyle = "white";
    context.fillText("SCORE: " + SCORE, 20, 25);
    context.fillText("HEART: " + HEART, 20, 50);
    context.fillText("LEVEL: " + LEVEL, 20, 75);
}
/*
*Action: check user is win or close
*/
function gameMode() {
    if (SCORE >= LV_SCORE[LEVEL]) {
      LEVEL++;
    }
    if (HEART === 0 || SCORE <= 0) {
      gameOver();
    }
}

/*
Action: if player loss all heart, player close
*/
function gameOver(){
  STATUS_GAME = 0;
  var i;
  for(i = 0; i < monsters.length; i++) {
    resetMonster(monsters[i]);
  }
  if (SCORE > Number(sessionStorage.getItem("hight_score"))) {
    sessionStorage.setItem("hight_score", SCORE);
  }
  drawTheme();
  context.drawImage(IMG_GAMEOVER, 146, 146, 500, 260);
  context.font = "19pt Arial";
  context.fillStyle = "#fff";
  context.fillText("HIGHT SCORE: " + Number(sessionStorage.getItem("hight_score")), 250, 410);
}

/*
* Draw Monster
*/
function drawMonster() {
    var j;
    for (j = 0; j < monsters.length; j++) {
    if (monsters[j].mon_status != 0) {
    	context.drawImage(monsters[j].mon_img, monsters[j].x, monsters[j].y, MONSTER_SIZE, MONSTER_SIZE);
    	monsters[j].move();
    }
  }
}
/*
*Random monster
*/
function randomMonster() {
  var count = 0, i;
  for (i = 0; i < monsters.length; i++) { //count monster current( status = 1)
    if(monsters[i].mon_status != 0) {
      count++;
    }
  }
  if(count < LV_NUMBER_MONSTER[LEVEL]) {
    var random = Math.floor(Math.random() * 9);
    console.log("number:" + random);
    if(monsters[random].mon_status === 0) {
      monsters[random].mon_status = 1;
    } else {
     randomMonster();
    }
  }
}

/**
* Random Interger according to the value put in max, min
* @param {int} max: Limit Top Number
* @param {int} min: Limit Bottom Number
*/
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

/*Nonster move*/
Monster.prototype.move = function() {
  if (monster9.mon_direction != 8 && monster9.mon_status == 0) {
    monster9.mon_direction = 8;
  }
  if (monster9.mon_direction == 8 && monster9.mon_status != 0) {
    monster9.mon_direction = randomInt(0, 8);
  }		
  var direction_move = directionMove(this.x, this.y, this.mon_direction);
  if (this.mon_status === 1) {
    this.x += direction_move[0];
    this.y += direction_move[1];
  }
  if(this.mon_status === 2) {
    this.x -= direction_move[0];
    this.y -= direction_move[1];
  }
  var limit_move_x = parseInt(this.move_x + 3);
  var limit_move_y = parseInt(this.move_y + 3);
  if (this.x >= this.move_x && this.x <= limit_move_x || (this.y >= this.move_y && this.y <= limit_move_y)) {
      this.mon_status = 2;
  }
  if (this.x < LIMIT_LEFT || this.x > LIMIT_RIGHT || this.y < LIMIT_TOP || this.y > LIMIT_BOTTOM) {
    this.mon_status = 0;
    this.x = this.start_x;
    this.y = this.start_y;
  }
}
/*
*Event click monster
*/
function mouseDownMonster(e) {
  var mouseX = e.pageX - canvas.offsetLeft;
  var mouseY = e.pageY - canvas.offsetTop;
  var i;
  if(mouseY < 80) {
    clickMenu(mouseX, mouseY);
  } else if(STATUS_GAME === 1) {
    HEART --;
    SCORE -= 10;
    for(i = 0; i < monsters.length; i++){
    clickMonster(mouseX, mouseY, monsters[i]);
    }
  }
}
canvas.addEventListener("mousedown", mouseDownMonster);
/*
*Action: click icon control game as: stop, restart, boom
*/
function clickMenu(mouseX, mouseY) {
 //Restart
  if (mouseX >= 300 && mouseX <= (300 + 50) && mouseY >= 20 && mouseY <= 20 + 50) {
    STATUS_GAME = 1;
    HEART = 3;
    SCORE = 10;
    LEVEL = 1;
    BOOM = 3;
    var i;
    for (i = 0; i < monsters.length; i++) {
      resetMonster(monsters[i]);
    }
  }
 //Pause
  if (mouseX >= 360 && mouseX <= (360 +50) && mouseY >= 20 && mouseY <= (20 + 50)) {
   if(STATUS_GAME === 1) {
    STATUS_GAME = 2;
    context.drawImage(IMG_ICON_PAUSE, 146, 146, 500, 260);
    context.font = "19pt Arial";
    context.fillStyle = "#fff";
    context.fillText("Just relax a few minute, baby ^.^", 250, 410);
    return;
   } else { 
      STATUS_GAME = 1;
      return;
   }
 }
 //BOOM
  if (mouseX >= 420 && mouseX <= (420 +50) && mouseY >= 20 && mouseY <= (20 + 50) && BOOM > 0 && STATUS_GAME === 1) {
   var i;
   for (i = 0; i < monsters.length; i++) {
    if (monsters[i].mon_status != 0) {
	  SCORE++;
	  resetMonster(monsters[i]);
    }
  }
  BOOM--;
  STATUS_GAME = 2;
  context.drawImage(IMG_BOOM, 146, 146, 500, 260);
  setTimeout(function () {
    STATUS_GAME = 1;
  }, 2000);
 }
}

/*
*click monster
*@param {int} Monsterx: mouse x click
*@param {int} Monstery: mouse y click
*@param {monster} Monster
*/
function clickMonster(mouseX, mouseY, monster) {
  MONSTER_SIZE = parseInt(MONSTER_SIZE);
  var monsterX, monsterY;
  monsterX = parseInt(monster.x + MONSTER_SIZE);
  monsterY = parseInt(monster.y + MONSTER_SIZE);
  if (mouseX >= monster.x && mouseX <= monsterX && (mouseY >= monster.y && mouseY <= monsterY) && monster.mon_status != 0) {
    SCORE = parseInt(SCORE + 20);
    HEART += 1;
    resetMonster(monster);
  }
}
/*reset monster*/ 
function resetMonster(monster) {
  monster.mon_status = 0;
  monster.x = monster.start_x;
  monster.y = monster.start_y;
}
/**
* Direction Move of Monster
* @param {int} value_x : value x -1 , 0 , +1 speed level
* @param {int} value_y : value y -1 , 0 , +1 speed level
* @Return {array} [value_x, value_y] Direction move
*/
function directionMove(value_x, value_y, value_direction) {
  value_direction = parseInt(value_direction);
  var speed = parseInt(LV_SPEED[LEVEL]);
switch(value_direction) {
  case 0: //Monster move: Top left -> Bottom right
    value_x = speed;
    value_y = speed;
    return [value_x, value_y];
    break;

  case 1: //Monster move:  center left -> center right
    value_x = speed;
    value_y = 0;
    return [value_x, value_y];
    break;

  case 2: //Monster move: Bottom left -> Top right
    value_x = speed;
    value_y = -speed; //? -speed
    return [value_x, value_y];
    break;

  case 3: //Monster move: center top -> center bottom
    value_x = 0;
    value_y = speed;
    return [value_x, value_y];
    break;

  case 4: //Monster move: top right -> bottom left
    value_x = -speed;
    value_y = speed;
    return [value_x, value_y];
    break;

  case 5: //Monster move: right center ->left center
    value_x = -speed;
    value_y = 0;
    return [value_x, value_y];
    break;
  case 6: //Monster move: bottom right -> top left 
    value_x = -speed;
    value_y = -speed;
    return [value_x, value_y];
    break;
  case 7: //Monster move: bottom center -> top center
    value_x = 0;
    value_y = -speed;
    return [value_x, value_y];
    break;
  }
}