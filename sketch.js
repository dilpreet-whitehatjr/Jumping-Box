/* Aim: To make the box change it's color as that of surface and
to make the box collide with one specific color surface(blue in this case).

*/
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(100,570,200,20);
    surface1.shapeColor="red";
    surface2= createSprite(300,570,200,20);
    surface2.shapeColor="yellow";
    surface3= createSprite(500,570,200,20);
    surface3.shapeColor="blue";
    surface4= createSprite(700,570,200,20);
    surface4.shapeColor="green";

    //create box sprite and give velocity
    box= createSprite(400,100,25,25);
    box.shapeColor="black";
    box.velocityX=-6;
    box.velocityY=7;
}

function draw() {
    background("lightblue");
    //create edgeSprite
  //  music.play();
    edges=createEdgeSprites();
    box.bounceOff(edges);
   
   if(box.isTouching(surface1)){
       box.shapeColor="red";
       box.bounceOff(surface1);
   }
   if(box.isTouching(surface2)){
    box.shapeColor="yellow";
    box.bounceOff(surface2);
    }
    if(box.isTouching(surface3)){
    box.shapeColor="blue";
    box.velocityX=0;
    box.velocityY=0;
    box.bounceOff(surface3);  
  //  music.stop();  
    }
    if(box.isTouching(surface4)){
    box.shapeColor="green";
    box.bounceOff(surface4);    
    }
  

    //add condition to check if box touching surface and make it box

    drawSprites();
}
