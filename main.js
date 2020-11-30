// BEGIN Section: Nataniel - Contributed Element: Aliens


// Set Background Color (parameter sets the color):
setBKGDColor('#001565');

//Draw Aliens (parameter sets the number of aliens that will be drawn):
drawAliens(5);

// If you want to draw just one alien:
// drawAlien(12, 20, 250, 60);


// Define Functions:
function setBKGDColor(color) {
  hide();
  penDown();
  move(160, 225);
  penColor(color);
  dot(1000);
  penUp();
}

function drawAlien(size, R, G, B) {
  penUp();
  moveTo(randomNumber(30, 290), randomNumber(300, 420));
  penDown();
  penRGB(R, G, B);
  dot(size);
  penWidth(size);
  turnTo(180);
  moveForward(size * 1.5);
  turnTo(120);
  moveForward(size * 1.25);
  turnLeft(180);
  moveForward(size * 1.25);
  turnTo(240);
  moveForward(size * 1.25);
  turnLeft(180);
  moveForward(size * 1.25);
  turnTo(180);
  moveForward(size * 2);
  turnTo(150);
  moveForward(size * 1.25);
  turnLeft(180);
  moveForward(size * 1.25);
  turnTo(210);
  moveForward(size * 1.25);
  turnLeft(180);
  moveForward(size * 1.25);
  turnTo(180);
}

function drawAliens(numAliens) {
  for (var i = 0; i < numAliens; i++) {
    drawAlien(randomNumber(8,15), randomNumber(0,30), randomNumber(200,255), randomNumber(0,60));
  }
}


// END Section: Nataniel - Contributed Element: Aliens


//BEGIN Section: Anandi Contributed Element: UFOs


//Draw UFOs (parameter sets the number of UFOs that will be drawn):
drawUFOs(3);

//Define Functions
function drawUFO(size, R, G, B) {
  penUp();
  moveTo(randomNumber(30, 200), randomNumber(30, 150));
  penDown();
  penRGB(R, G, B);
  penWidth(size*2.5);
  arcLeft(180, size);
  penWidth(size*2.5);
  penUp();
  move(0-size*1.15, 0-size);
  penDown();
  arcRight(180, size*0.15);
  penUp();
  moveTo(getX(), getY()+size*3.4);
  penDown();
  penWidth(size*0.4);
  moveForward(size*1.5);
  penUp();
  moveBackward(size*1.5);
  moveTo(getX()+size*0.5, getY()-size*0.5);
  penDown();
  turnTo(120);
  moveForward(size*2);
  penUp();
  moveBackward(size*2);
  moveTo(getX()-size, getY());
  penDown();
  turnTo(240);
  moveForward(size*2);
  turnLeft(60);
}

function drawUFOs(numUFOs) {
  for (var i = 0; i < numUFOs; i++) {
    drawUFO(randomNumber(8,12), randomNumber(10,150), randomNumber(90,100), randomNumber(90,100));
  }
}


// END Section: Anandi - Contributed Element: UFOs

// START Section: Sattwik - Contributed Element: Stars

function sattwikCode() {
  //making a function for coding 1 star
  function star(size) {
    penUp();
    var x = randomNumber(0,320);
    var y = randomNumber(0,450);
    penColor(rgb(randomNumber(220,255),randomNumber(200,255),randomNumber(0,200)));
    moveTo(x,y);
    //This is so the stars aren't all in the same direction
    turnTo(randomNumber(0,360));
    //This seemed to be the magic number to fill the stars
    penWidth(size/3);
    //for loop for drawing the stars
    for (var i = 0; i < 5; i++) {
      penDown();
      moveForward(size);
      turnRight(144);
      penUp();
    }
  }
  //function for making multiple stars
  function drawStars(number) {
    for (var i = 0; i < number; i++) {
      star(randomNumber(1,5));
    }
  }
  drawStars(randomNumber(300,400));
}
// I put everything into a function so we don't have to worry ab repeated variables :))
// Also call the function right after the backgroundColor bc this is part of the background. My function can be declared later tho
sattwikCode();

// END Section: Sattwik - Contributed Element: Stars


//BEGIN Section: Suvali - Contributed Element: Meteors

//draw meteors (parameter sets how many meteors will be drawn)
drawMeteors(3);

// define functions
function drawMeteor(size) {
  penUp();
  moveTo(randomNumber(30, 290), randomNumber(300, 420));
  penDown();
  penRGB(211,211,211);
  turnTo(65);
  penWidth(size * 0.5);
  moveForward(size * 5);
  turnTo(250);
  moveForward(size * 5);
  penRGB(169, 169,169);
  turnTo(90);
  dot(size);
  penWidth(size);


}

function drawMeteors(numMeteors) {
  for (var i = 0; i < numMeteors; i++) {
    drawMeteor(randomNumber(8,15), randomNumber(0,30), randomNumber(200,255), randomNumber(0,60));
  }
}

//END Section: Suvali - Contributed Element: Meteors
