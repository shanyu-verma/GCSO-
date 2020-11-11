

//creating variables
var car,wall,speed,weight;

function setup() {

  //this code will create the play area
  createCanvas(1600,400);

  //creating car sprite
  car = createSprite(30, 200, 30, 30);

  //creating wall sprite
  wall = createSprite(1400,200,30,300);
  wall.shapeColor = "black";
  
  //giving speed and weight as random
  speed = random(55,90);
  weight = random(400,1500);

  //giving the car speed
  car.velocityX = speed;

}

function draw() {

  //giving background colour
  background(30,80,50); 
 
  //creating a IF CONDITION when car and wall will collide
  if(wall.x - car.x < car.width/2 + wall.width/2){

    //giving car velocityX as 0
    car.velocityX = 0;

    //creating a variable deformation and storing the formula of deformation in it
    var deformation = 0.5 * weight * speed * speed / 22500

    //creating another IF CONDITION
    if(deformation > 180){
      //this code will give the colour of car as red when deformation is more than 180
      car.shapeColor = "red";
    }
    
    //creating another IF CONDITION
    if(deformation < 180 && deformation > 100){
      //this code will give the colour of car as yellow when deformation is less than 180 but more than 100
      car.shapeColor = "yellow";
    }

    //creating a last IF CONDITION
    if(deformation < 100){
      ////this code will give the colour of car as green when deformation is less than 100
      car.shapeColor = "green";
    }

  }



  drawSprites();
}