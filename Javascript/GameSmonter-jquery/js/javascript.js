/*
*Game Monster
*Dang Hoang Tho
*/
//Main canvas
var menuCanvas = $("#menu_canvas_game")[0].getContext("2d");
var containCanvas = $("#contain_canvas_game")[0].getContext("2d");

const FPS =60;
const TICKS = 1000 / FPS;

//cross-browser support requestAnimationFrame
var supportAnimate = window;
requestAnimationFrame = supportAnimate.requestAnimationFrame || supportAnimate.webkitRequestAnimationFrame
                      || supportAnimate.msRequestAnimationFrame || supportAnimate.mozRequestAnimationFrame;
var lastUpdateTime = Date.now();

//====Value game====
var SCORE = 10;
var HEART = 3;
var LEVEL = 0;
var BOOM = 3;
var LV_SPEED = [2,3,5,7]; //speed of moonster follow level
var RUNNING = true;
var END = false;
var LV_POSITION = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SPEED = LV_SPEED[0];
var LIMIT_TOP = 90;
var LIMIT_BOTTOM = 580; 
var LIMIT_LEFT = 10;
var LIMIT_RIGHT = 670;
var HIGHSCORE = 0;
var MONSTER_SIZE = 100;

//Init high score session storage
if (sessionStorage.getItem("hightScore") === null) {
  sessionStorage.setItem("hightScore", 0);
} else {
  HIGHSCORE = sessionStorage.getItem("hightScore");
}

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

var explosionReady = false;
var IMG_BOOM = new Image();
IMG_BOOM.src = "img/boom.jpg";
var IMG_GAMEOVER = new Image();
IMG_GAMEOVER.src = "img/gameover.jpg";

var IMG_MONSTER = new Image();
var IMG_MONSTER1 = new Image();
IMG_MONSTER1.src = "img/monster1.jpg";
var IMG_MONSTER = IMG_MONSTER1;
var IMG_MONSTER2 = new Image();
IMG_MONSTER2.src = "img/monster2.jpg";
var IMG_MONSTER3 = new Image();
IMG_MONSTER3.src = "img/monster3.jpg";
var IMG_MONSTER4 = new Image();
/*var BLO = new Image();
bloodImage.src = "images/blood.png";
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
*/
/*
===============class monter===============
*@param {int} initX: start x default;
*@param {int} inity: start y default;
*@param {int} x: current x;
*@param {int} y: current y;
*@param {int} toX: move to position x;
*@param {int} toY: move to position y;
*@param {int} initToX: move to position x default;
*@param {int} initToY: move to position y default;
*@param {boonlean} die: status of monter
*@param {int} dieX: position x when monster die;
*@param {int} dieY: position y when monster die;
*@param {boonlean} visible: monster visible?
*/
function Monster(initX, initY, x, y, toX, toY, initToX, initToY, die, dieX, dieY, visible) {
  this.initX = initX;  //position x default
  this.initY = initY;  //position y default
  this.x = x;  //position x current
  this.y = y;  //position y current
  this.toX = toX; //move to position x 
  this.toY = toY; //moveto position y
  this.initTox = initToX;  //move to position default
  this.initToY = initToY;  //move to position default
  this.die = die;  //boolean die
  this.dieX = dieX;  //position x when monster die
  this.dieY = dieY;  ////position y when monster die
  this.visible = visible;
}
/*
Method: move of monster
*/
Monster.prototype.move = function() {
  if (this.x === this.toX && this.y === this.toY) {
   this.x = this.toX;
   this.y = this.toY;
   this.toX = this.initX;
   this.toY = this.initY;
  }

  if (this.x < this.toX) {
    this.x += SPEED;
  } else if(this.x > this.toX) {
    this.x -= SPEED;
  }
  if (this.y < this.toY) {
    this.y += SPEED;
  } else if(this.y > this.toY) {
    this.y -= SPEED;
  }
  //disable monster
  if (this.x === this.initX && this.y === this.initY) {
    this.visible = false;
    this.x = this.initX;
    this.y = this.initY;
    this.toX = this.initToX;
    this.toY = this.initToY;
    SCORE = -10;
    //randomMonster();
  }
};

/*
============Monster==============================
*Monster(initX, initY, x, y, toX, toY, initToX, initToY, die, dieX, dieY, visible)
*/
var monster1 = new Monster(0, 0, 0, 0, 250, 150, 250, 150, false, 0, 0, true); //top left
var monster2 = new Monster(350, 0, 350, 0, 350, 200, 350, 200, false, 0, 0, false); //top center
var monster3 = new Monster(650, 0, 650, 0, 340, 190, 340, 190, false, 0, 0, false); //top right
var monster4 = new Monster(0, 190, 0, 190, 340, 190, 340, 190, false, 0 ,0, false ); //center left
var monster5 = new Monster(630, 190, 630, 190, 340, 190, 340, 190, false, 0, 0, false); //center right
var monster6 = new Monster(0, 400, 0, 400, 340, 190,340, 190, false, 0, 0, false); //bottom left
var monster7 = new Monster(350, 400, 350, 400, 340, 190, 340, 190, false, 0, 0, false); //bottom center
var monster8 = new Monster(630, 400, 630, 400, 340, 190, 340, 190, false, 0, 0, false); //bottom right
//Array monster obj
var MONSTER = [monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8];

/*
*Event click container
*/
var offsetContain = $("#contain_canvas_game").offset();
/*containCanvas.addEventListener("click", function(e) {
  var xPosition = e.pageX - offsetContain.left;
  var yPosition = e.pageY - offsetContain.top;
  SCORE -= 10;

  //if click at target success, call click smonter
  for (var i = 0; i < 8; i++) {
    if (MONSTER[i].visible) {
      //clickMonster(xPosition, yPosition, MONSTER[i]);
    }
  }
});
*/

/*
*Render
*Action: draw background of game 
*/
function render() {
  /*-------Contain canvas------------*/
  //background
  containCanvas.drawImage(IMG_BG, 0, 0, 700, 400);
  //BOOM
  if (explosionReady) {
    containCanvas.drawImage(IMG_BOOM, 200, 200, 300 ,300);
  }

  //monster
  for (var i = 0; i < 8; i++) {
    if (MONSTER[i].visible) {
      containCanvas.drawImage(IMG_MONSTER, MONSTER[i].x, MONSTER[i].y, MONSTER_SIZE, MONSTER_SIZE);
    }
  }
  /*------Menu canvas----------------*/
  menuCanvas.drawImage(IMG_BG_MENU, 0, 0, 700, 100);
  //Boom
  menuCanvas.drawImage(IMG_BOOM, 430, 25, 55, 55);
  //pause
  menuCanvas.drawImage(IMG_PAUSE, 350, 35, 45, 45);
  //Restart
  menuCanvas.drawImage(IMG_RESTART, 250, 35, 45, 45);

  menuCanvas.fillStyle = "white";
  menuCanvas.font = "13.5pt Arial";
  menuCanvas.fillText(BOOM, 480, 35);
  menuCanvas.fillStyle = "white";
  menuCanvas.fillText("SCORE: " + SCORE, 20, 25);
  menuCanvas.fillText("HEART: " + HEART, 20, 55);
  menuCanvas.fillText("LEVEL: " + LEVEL, 20, 85);
}
/*
*Update game
*/
function update() {
  for (var i = 0; i < 8; i++) {
    if (MONSTER[i].visible) {
      MONSTER[i].move();
    }
  };
}
/*Main function*/
function main() {
  if (HEART < 0) {
    //overGame();
  }
  var now = Date.now();
  var differentTime = now -lastUpdateTime;
  if(differentTime >= TICKS) {
    update();
    render();
    lastUpdateTime= now;
  }
  if(RUNNING) {
    requestAnimationFrame(main);  
  } else if (!RUNNING && !END) {
    containCanvas.fillStyle = "#f1f1f1";
    containCanvas.font = "30px Arial";
    containCanvas.fillText("pause", 330, 380);
  } else if (!RUNNING && END) {
    if (SCORE > HIGHSCORE) {
      HIGHSCORE = SCORE;
      sessionStorage.setItem("hightScore", HIGHSCORE);

      containCanvas.fillStyle = "#F1F1F1";
      containCanvas.font = "30px Arial bold";
      containCanvas.fillText("NEW HIGHSCORE: " + HIGHSCORE, 200, 390);
    } else {
      containCanvas.fillStyle = "#F1F1F1";
      containCanvas.font = "35px Arial bold";
      containCanvas.fillText("SCORE: " + SCORE, 150, 290);
    }
    containCanvas.fillStyle = "#ff0000";
    containCanvas.font = "50px Arial bold";
    containCanvas.fillText("GAME OVER", 120, 250);
  }
}

main();