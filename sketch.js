/***********************************************************************************P
Project 1 
by Courtney Crother
***********************************************************************************/

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 24;

//Nav box variables 
var navX = 1600; 
var navY = 800;
var navH = 80;
var navW = 80;

var navYb = 900; 
var navYc = 1000; 

//Nav text variables 
var navNumx = 1650;
var navNumy = 800;
var navNumb = 639;
var navNumc = 717;

var statueAssests = [];

// preload 

function preload () {

statueAssests[0] = loadImage('assets/wingedhell.png');
statueAssests[1] = loadImage('assets/hell.png');
statueAssests[2] = loadImage('assets/MiloHell.png');
statueAssests[3] = loadImage('assets/k1archaic.png');
statueAssests[4] = loadImage('assets/k2archaic.png');
statueAssests[5] = loadImage('assets/davidClass.png');
statueAssests[6] = loadImage('assets/davidsmall.png');
statueAssests[7] = loadImage('assets/milosmall.png');
statueAssests[8] = loadImage('assets/nikesmall.png');
statueAssests[9] = loadImage('assets/lastpage1.png');
statueAssests[10] = loadImage('assets/lastpage2.png');
statueAssests[11] = loadImage('assets/lastpage3.png');
statueAssests[12] = loadImage('assets/lastpage4.png');
statueAssests[13] = loadImage('assets/lastpage5.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
  drawFunction = drawEntrance;

}

function draw() {

  background(0);
  fill(0);
  drawFunction();

}


drawEntrance = function() {

   fill(186, 85, 211);
   textSize(50);
   textFont('Georgia');
   text("Greek Sculpture Garden", width/2, height/6);

   fill(255, 255, 255);
   textSize(30);
   textFont('Helvetica');
   text("To enter click right arrow", width/2, height/4);

   image(statueAssests[6], 420, 580); //david
   image(statueAssests[7], 150, 580); //milo
   image(statueAssests[8], 710, 590); //nike

}

drawRoomOne = function() {

   fill(130, 255, 160);
   textSize(50);
   textFont('Georgia');
   text("The Archaic period", width/1.8, height/8);

   fill(255, 255, 255);
   textSize(30);
   textFont('Helvetica');
   text("In the archaic period (800-500 BC), the Greeks started to produce life-size statues inspired by Egyptian sculptures. They were made of stone and rigid in posture. The statues were famous for the Archaic smile seen here in the statues to the left.", width/2, 350, 400, 500);

   //nav boxes 
   fill(255, 255, 255);
   textSize(30);
   textFont('Georgia');
   rect(navX, navY, navH, navW, 10);

   fill(255, 255, 255);
   rect(navX, navYb, navH, navW, 10);

   fill(255, 255, 255);
   rect(navX, navYc, navH, navW, 10);

   //text for nav 
   fill (255, 255, 255);
   text("2", navNumx, navNumy);

   fill (0, 0, 0);
   text("3", navNumx, navNumb);

   fill (0, 0, 0);
   text("4", navNumx, navNumc);

   image(statueAssests[3], 150, 400); //statue
   image(statueAssests[4], 470, 580); //bust

}

drawRoomTwo = function() {

   fill(255, 20, 147);
   textSize(50);
   textFont('Georgia');
   text("The Classical period", width/1.5, height/8 - gTextOffset);

   fill(255, 255, 255);
   textSize(25);
   textFont('Helvetica');
   text("In the Classical period (500-330 BC) Athens was at the height of culture and art. The statues in this time were becoming more lifelike and more attention was given to how the body moves. The statue to the left is called the Discus Thrower, it is famous for its original bronze casting. This stone version was recreated by the Romans. The figure is positioned right in the moment of throwing the discus. Classically, the figure has an emotionless face.", width/2.2, 150, 400, 500);

   fill(255, 255, 255);
   rect(navX, navY, navH, navW, 10);

   fill(255, 255, 255);
   rect(navX, navYb, navH, navW, 10);

   //text for nav 

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("3", navNumx, navNumy);

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("4", navNumx, navNumb);

   image(statueAssests[5], 200, 400);

}

drawRoomThree = function() {

   fill(30, 144, 255);
   textSize(50);
   textFont('Georgia');
   text("The Hellenistic period", width/1.4, height/8 - gTextOffset);

   fill(255, 255, 255);
   textSize(28);
   textFont('Helvetica');
   text("The statues in the Hellenistic period showed more realistic representations of the human body, including the injuries and unidealized bodies. The Venus De Milo (pictured below) is known for its missing limbs and mysterious absence of attributes. It is thought to depict Aphrodite, the Greek goddess of love.", width/2, 150, 400, 700);

   fill(255, 255, 255);
   rect(navX, navY, navH, navW, 10);

   fill(255, 255, 255);
   rect(navX, navYb, navH, navW, 10);

   //text for nav 

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("4", navNumx, navNumy);

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("2", navNumx, navNumb);

   image(statueAssests[1], 160, 350); // not venus
   image(statueAssests[2], 370, 540); //venus

}

drawRoomFour = function() {

   fill(30, 144, 255);
   textSize(50);
   textFont('Georgia');
   text("The Hellenistic period", width/3, height/8);

   fill(255, 255, 255);
   textSize(28);
   textFont('Helvetica');
   text("This is the Winged Victory of Samothrace one of the most celebrated sculptures of the Hellenistic period. Also known as the statue of Nike it is famous for its being an original piece and not a Roman copy. The sculpture gives a sense of motion and stillness at once and it is made to look like the winges are fluttering in the wind. Although pieces of the sculpture, like the left hand, have been found, the head has never been discovered. ", width/9, 150, 400, 700);

   fill(255, 255, 255);2
   rect(navX, navY, navH, navW, 10);

   fill(255, 255, 255);
   rect(navX, navYb, navH, navW, 10);

   //text for nav 

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("5", navNumx, navNumy);

   fill (0, 0, 0);
   textSize(30);
   textFont('Georgia');
   text("1", navNumx, navNumb);

   image(statueAssests[0], 670, 430);
}

drawEnding = function() {

   fill(255, 255, 255 );
   textSize(50);
   textFont('Georgia');
   text("Thanks for visiting", width/2, height/3);

   fill(255, 255, 255);
   textSize(30);
   text("to exit press one", width/2, height/2);

   fill(255, 255, 255);
   rect(navX, navY, navH, navW, 10);

   fill (0, 0, 0);
   text("1", navNumx, navNumy);

   image(statueAssests[9], 130, 700);
   image(statueAssests[10], 300, 700);
   image(statueAssests[11], 440, 700);
   image(statueAssests[12], 580, 700);
   image(statueAssests[13], 740, 700);
}


function keyPressed() {
  print(keyCode);

  // Entrance [right arrow] 
  if( drawFunction === drawEntrance ) {
    if( keyCode === RIGHT_ARROW ) {
        drawFunction = drawRoomOne;
    }
  }

  // RoomOne [1]
  else if( drawFunction === drawRoomOne ) {
    if( key === '2' ) {
      drawFunction = drawRoomTwo;
    }
    if( key === '3' ) {
      drawFunction = drawRoomThree;
    }
    else if( key === '4' ) {
      drawFunction = drawRoomFour;
    }
  }

  // RoomTwo [2]
  else if( drawFunction === drawRoomTwo ) {
    if( key === '3' ) {
      drawFunction = drawRoomThree;
    }
    if( key === '4' ) {
      drawFunction = drawRoomFour;
    }
  }

  // RoomThree [3]
  else if( drawFunction === drawRoomThree ) {
    if( key === '4') {
      drawFunction = drawRoomFour;
    }
    if( key === '2' ) {
      drawFunction = drawRoomTwo;
    }
  }
  // RoomFour [4]
  else if( drawFunction === drawRoomFour ) {
   
    if( key === '5') {
      drawFunction = drawEnding;
    }
    if( key === '1' ) {
      drawFunction = drawRoomOne;
    }
  }
  // Exit [E]
  else if( drawFunction === drawEnding ) {
    if( key === '1') {
      drawFunction = drawEntrance;
    }
  }
}


