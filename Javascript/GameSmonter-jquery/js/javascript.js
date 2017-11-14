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
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var lastUpdateTime = Date.now();

//====Value game====
var SCORE = 100;
var HEART = 3;
var LEVEL = 0;
var BOOM = 3;
var LV_SPEED = [2,3,5,6]; //speed of monster follow level
var RUNNING = true;
var END = false;
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
IMG_MONSTER4.src = "img/monster4.jpg";
/*var BLO = new Image();
bloodImage.src = "images/blood.png";
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
  this.initToX = initToX;  //move to position default
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
  if (this.x == this.toX && this.y == this.toY) {
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
  if (this.x == this.initX && this.y == this.initY) {
    this.visible = false;
    this.x = this.initX;
    this.y = this.initY;
    this.toX = this.initToX;
    this.toY = this.initToY;
    //SCORE = SCORE - 10;
    randomMonster();
  }
};

/*
============Monster==============================
*Monster(initX, initY, x, y, toX, toY, initToX, initToY, die, dieX, dieY, visible)
*/
var monster1 = new Monster(0,   0,   0,   0,   120, 120, 120, 120, false, 0, 0, true); //top left
var monster2 = new Monster(210, 0,   210, 0,   210, 120, 210, 120, false, 0, 0, false); //top center
var monster3 = new Monster(420, 0,   420, 0,   300, 120, 300, 120, false, 0, 0, false); //top right
var monster4 = new Monster(0,   210, 0,   210, 120, 210, 120, 210, false, 0, 0, false); //center left
var monster5 = new Monster(420, 210, 420, 210, 300, 210, 300, 210, false, 0, 0, false); //center right
var monster6 = new Monster(0,   420, 0,   420, 120, 300, 120, 300, false, 0, 0, false); //bottom left
var monster7 = new Monster(210, 420, 210, 420, 210, 300, 210, 300, false, 0, 0, false); //bottom center
var monster8 = new Monster(420, 420, 420, 420, 300, 300, 300, 300, false, 0, 0, false); //bottom right
//Array monster obj
var MONSTER = [monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8];

/*
*Event click container
*/
var offsetContain = $("#contain_canvas_game").offset();
contain_canvas_game.addEventListener("click", function(e) {
  var xPosition = e.pageX - offsetContain.left;
  var yPosition = e.pageY - offsetContain.top;
  SCORE -= 10;
  HEART = HEART - 1;

  //if click at target success, call click smonter
  for (var i = 0; i < 8; i++) {
    if (MONSTER[i].visible) {
      clickMonster(xPosition, yPosition, MONSTER[i]);
    }
  }
});
/*
*Event click menu
*/
var offsetMenu = $("#menu_canvas_game").offset();
menu_canvas_game.addEventListener("click", function(e) {
  //position mouse
  var xPosition = e.pageX - offsetMenu.left;
  var yPosition = e.pageY - offsetMenu.top;
  //restart
  if (xPosition > 250 && xPosition < 295 && (yPosition > 35 && yPosition < 80)) {
    resetGame();
  }
  //pause
  if (xPosition > 350 && xPosition < 395 && (yPosition > 35 && yPosition < 80)) {
    pauseGame();
  }
  //boom
  if (xPosition > 450 && xPosition < 505 && (yPosition > 25 && yPosition < 75)) {
    killAll();
  }
});

/*
*Action: determine monster was clicked
*@param {currX} int: position mouse x
*@param {currY} int: position mouse y
*@param {monster} obj array
*/
function clickMonster(currX, currY, monster) {
  var positionXClick = monster.x + MONSTER_SIZE;
  var positionYClick = monster.y + MONSTER_SIZE;
  if (currX >= monster.x && currX <= positionXClick && (currY >= monster.y && currY <= positionYClick)) {
    SCORE = SCORE + 20;
    HEART += 1;
    monster.visible = false;
    monster.die = true;
    monster.dieX = currX;
    monster.dieY = currY;
    monster.x = monster.initX;
    monster.y = monster.initY;
    monster.toX = monster.initToX;
    monster.toY = monster.initToY;

    //level
    var levelBefore = LEVEL;
    LEVEL = Math.floor(SCORE / 100);
    if (LEVEL < levelBefore) {
      LEVEL = levelBefore;
    } 
    if (LEVEL > 3) {
      LEVEL = 3;
    }
    for (var i = 0; i <= LEVEL; i++) {
      randomMonster();
    }
    changeMonster(LEVEL);
    increaseSpeed(LEVEL);
  }
}
//Action: increase speed following level
function increaseSpeed(level) {
  SPEED = LV_SPEED[LEVEL];
}
/*
*Action: change monster with param level
*param {level}
*/
function changeMonster(level) {
  switch(level) {
    case 1:
    IMG_MONSTER = IMG_MONSTER1;
    break;
    case 2:
    IMG_MONSTER = IMG_MONSTER2;
    break;
    case 3:
    IMG_MONSTER = IMG_MONSTER3;
    break;
    case 4:
    IMG_MONSTER = IMG_MONSTER4;
    break;
    default: break;
  }
}
/*
*Create random monster
*/
function randomMonster() {
  var random = Math.floor((Math.random()) * 8) + 1;
  switch(random) {
    case 1:
    if (!monster1.visible) {
      monster1.visible = true;
      monster1.die = false;
      console.log("Number:" + 1);
    }
    break;
    case 2:
    if (!monster2.visible) {
      monster2.visible = true;
      monster2.die = false;
      console.log("Number:" + 2);
    }
    break;
    case 3:
    if (!monster3.visible) {
      monster3.visible = true;
      monster3.die = false;
      console.log("Number:" + 3);
    }
    break;
    case 4:
    if (!monster4.visible) {
      monster4.visible = true;
      monster4.die = false;
      console.log("Number:" + 4);
    }
    break;
    case 5:
    if (!monster5.visible) {
      monster5.visible = true;
      monster5.die = false;
      console.log("Number:" + 5);
    }
    break;
    case 6:
    if (!monster6.visible) {
      monster6.visible = true;
      monster6.die = false;
      console.log("Number:" + 6);
    }
    break;
    case 7:
    if (!monster7.visible) {
      monster7.visible = true;
      monster7.die = false;
      console.log("Number:" + 7);
    }
    break;
    case 8:
    if (!monster8.visible) {
      monster8.visible = true;
      monster8.die = false;
      console.log("Number:" + 8);
    }
    break;
  }
}

/*
*Action: reset Game
*/
function resetGame() {
  var i;
  for(i = 0; i < 8; i++) {
    initMonster(MONSTER[i]);
  }
  LEVEL = 0;
  END = false;
  RUNNING = true;
  SCORE = 100;
  HEART = 3;
  IMG_MONSTER = IMG_MONSTER1;
  HIGHSCORE = sessionStorage.getItem("hightScore");
  BOOM = 3;
  monster1.visible = true;
  main();
}
/*
*Ation: pause game
*/
function pauseGame() {
  if (RUNNING === true) {
    RUNNING = false;
  }
  else if(RUNNING === false) {
    RUNNING = true;
    main();
  }
}

/*
*Action: boom
*/
function killAll() {
  var i;
  if (BOOM > 0 && END === false) {
    BOOM--;
    explosionReady = true;

    for (i = 0; i < 8; i++) {
      if (MONSTER[i].visible === true) {
        MONSTER[i].visible = false;
        SCORE += 10;
      }
    }
    setTimeout(function () {
      explosionReady = false;
      randomMonster();
    }, 2000);
  }
}
/*
*Action: set game over
*/
function gameOver() {
  END = true;
  RUNNING =false;
}
/*
*Init monster
*/
function initMonster(monster) {
  monster.x = monster.initX;
  monster.y = monster.initY;
  monster.toX = monster.initToX;
  monster.toY = monster.initToY;
  SPEED = LV_SPEED[0];
  monster.die =false;
  monster.dieX = 0;
  monster.visible = false;
}
/*
*Render
*Action: draw background of game 
*/
function render() {
  /*-------Contain canvas------------*/
  //background
  containCanvas.drawImage(IMG_BG, 0, 0, 500, 500);
  //BOOM
  if (explosionReady) {
    containCanvas.drawImage(IMG_BOOM, 100, 50, 300 ,300);
  }

  //monster
  for (var i = 0; i < 8; i++) {
    if (MONSTER[i].visible) {
      containCanvas.drawImage(IMG_MONSTER, MONSTER[i].x, MONSTER[i].y, MONSTER_SIZE, MONSTER_SIZE);
    }
  }
  /*------Menu canvas----------------*/
  menuCanvas.drawImage(IMG_BG_MENU, 0, 0);
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
  menuCanvas.fillText("LEVEL: " + (LEVEL + 1), 20, 85);
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
  if (HEART <= 0) {
    gameOver();
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
    containCanvas.drawImage(IMG_ICON_PAUSE, 120, 50, 300, 400);
    containCanvas.fillText("Relax men!", 190, 380);
  } else if (!RUNNING && END) {
    //menuCanvas.fillText("HEART: " + HEART, 20, 55);
    if (SCORE > HIGHSCORE) {
      HIGHSCORE = SCORE;
      sessionStorage.setItem("hightScore", HIGHSCORE);

      containCanvas.fillStyle = "#F1F1F1";
      containCanvas.font = "30px Arial bold";
      containCanvas.fillText("NEW HIGHSCORE: " + HIGHSCORE, 130, 340);
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